import { useState } from "react";
import ConfirmModal from "./ConfirmModal";

const BLUE = "#3aafe4";

export interface Artwork {
  id: string;
  title: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  status: string;
  created_at: string;
  artists: {
    name: string;
    email: string;
    whatsapp: string;
  };
}

interface ArtworkCardProps {
  artwork: Artwork;
  activeTab: "pending" | "approved" | "rejected";
  processing: string | null;
  onUpdateStatus: (id: string, status: "approved" | "rejected") => void;
}

const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(price);

const ArtworkCard = ({
  artwork,
  activeTab,
  processing,
  onUpdateStatus,
}: ArtworkCardProps) => {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState<{
    id: string;
    status: "approved" | "rejected";
    label: string;
  } | null>(null);

  const requestAction = (
    id: string,
    status: "approved" | "rejected",
    label: string,
  ) => {
    setPendingAction({ id, status, label });
    setConfirmOpen(true);
  };

  const handleConfirm = () => {
    if (!pendingAction) return;
    onUpdateStatus(pendingAction.id, pendingAction.status);
    setConfirmOpen(false);
    setPendingAction(null);
  };

  const handleCancel = () => {
    setConfirmOpen(false);
    setPendingAction(null);
  };

  const isProcessing = processing === artwork.id;

  return (
    <>
      <div
        className="flex flex-col overflow-hidden"
        style={{
          backgroundColor: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(58,175,228,0.15)",
        }}
      >
        {/* Image */}
        <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
          <img
            src={artwork.image_url}
            alt={artwork.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="p-4 flex flex-col gap-3 flex-1">
          <div>
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="font-bold text-white text-sm">{artwork.title}</h3>
              <span
                className="text-sm font-bold flex-shrink-0"
                style={{ color: BLUE }}
              >
                {formatPrice(artwork.price)}
              </span>
            </div>
            <p className="text-xs mb-1" style={{ color: BLUE }}>
              {artwork.category}
            </p>
            <p className="text-xs" style={{ color: "#718096" }}>
              by {artwork.artists?.name}
            </p>
            <p className="text-xs mt-1" style={{ color: "#718096" }}>
              {artwork.artists?.email}
            </p>
          </div>

          {artwork.description && (
            <p
              className="text-xs leading-relaxed line-clamp-3"
              style={{ color: "#a0aec0" }}
            >
              {artwork.description}
            </p>
          )}

          <p className="text-xs" style={{ color: "#4a5568" }}>
            Submitted{" "}
            {new Date(artwork.created_at).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>

          {/* Actions */}
          {activeTab === "pending" && (
            <div className="flex gap-2 mt-auto">
              <button
                onClick={() => requestAction(artwork.id, "approved", "APPROVE")}
                disabled={isProcessing}
                className="flex-1 py-2 text-xs font-bold tracking-widest"
                style={{
                  backgroundColor: "#38a169",
                  color: "#fff",
                  opacity: isProcessing ? 0.6 : 1,
                  cursor: isProcessing ? "not-allowed" : "pointer",
                }}
              >
                {isProcessing ? "..." : "APPROVE"}
              </button>
              <button
                onClick={() => requestAction(artwork.id, "rejected", "REJECT")}
                disabled={isProcessing}
                className="flex-1 py-2 text-xs font-bold tracking-widest"
                style={{
                  backgroundColor: "rgba(229,62,62,0.15)",
                  color: "#fc8181",
                  border: "1px solid #fc8181",
                  opacity: isProcessing ? 0.6 : 1,
                  cursor: isProcessing ? "not-allowed" : "pointer",
                }}
              >
                {isProcessing ? "..." : "REJECT"}
              </button>
            </div>
          )}

          {activeTab === "approved" && (
            <button
              onClick={() =>
                requestAction(artwork.id, "rejected", "REVOKE APPROVAL")
              }
              disabled={isProcessing}
              className="py-2 text-xs font-bold tracking-widest mt-auto"
              style={{
                backgroundColor: "rgba(229,62,62,0.1)",
                color: "#fc8181",
                border: "1px solid rgba(229,62,62,0.3)",
                cursor: isProcessing ? "not-allowed" : "pointer",
              }}
            >
              {isProcessing ? "..." : "REVOKE APPROVAL"}
            </button>
          )}

          {activeTab === "rejected" && (
            <button
              onClick={() =>
                requestAction(artwork.id, "approved", "RE-APPROVE")
              }
              disabled={isProcessing}
              className="py-2 text-xs font-bold tracking-widest mt-auto"
              style={{
                backgroundColor: "rgba(56,161,105,0.1)",
                color: "#68d391",
                border: "1px solid rgba(56,161,105,0.3)",
                cursor: isProcessing ? "not-allowed" : "pointer",
              }}
            >
              {isProcessing ? "..." : "RE-APPROVE"}
            </button>
          )}
        </div>
      </div>

      {/* Confirm modal */}
      <ConfirmModal
        isOpen={confirmOpen}
        title={
          pendingAction?.status === "rejected" && activeTab === "approved"
            ? "Revoke Approval?"
            : pendingAction?.status === "approved"
              ? activeTab === "rejected"
                ? "Re-approve Artwork?"
                : "Approve Artwork?"
              : "Reject Artwork?"
        }
        message={
          pendingAction?.status === "rejected" && activeTab === "approved"
            ? `Are you sure you want to revoke approval for "${artwork.title}"? It will be removed from the public gallery immediately.`
            : pendingAction?.status === "approved"
              ? `Are you sure you want to approve "${artwork.title}"? It will appear in the public gallery.`
              : `Are you sure you want to reject "${artwork.title}"? The artist will need to resubmit.`
        }
        confirmLabel={pendingAction?.label}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </>
  );
};

export default ArtworkCard;
