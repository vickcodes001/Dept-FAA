interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

// const BLUE = "#3aafe4";
const NAVY = "#031430";

const ConfirmModal = ({
  isOpen,
  title,
  message,
  confirmLabel = "CONFIRM",
  onConfirm,
  onCancel,
}: ConfirmModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
      onClick={onCancel}
    >
      <div
        className="w-full max-w-sm"
        style={{ backgroundColor: NAVY, borderTop: `3px solid #fc8181` }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-4">
          <p
            className="text-xs font-bold tracking-widest mb-2"
            style={{ color: "#fc8181", letterSpacing: "0.16em" }}
          >
            CONFIRM ACTION
          </p>
          <h3 className="font-bold text-white" style={{ fontSize: "1.1rem" }}>
            {title}
          </h3>
        </div>

        {/* Body */}
        <div
          className="px-6 pb-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p
            className="text-sm leading-relaxed mt-4 mb-6"
            style={{ color: "#a0aec0" }}
          >
            {message}
          </p>

          <div className="flex gap-3">
            <button
              onClick={onCancel}
              className="flex-1 py-3 text-xs font-bold tracking-widest transition-opacity hover:opacity-70"
              style={{
                border: "1px solid rgba(58,175,228,0.3)",
                color: "#a0aec0",
                letterSpacing: "0.12em",
                backgroundColor: "transparent",
              }}
            >
              CANCEL
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 py-3 text-xs font-bold tracking-widest transition-opacity hover:opacity-80"
              style={{
                backgroundColor: "rgba(229,62,62,0.15)",
                color: "#fc8181",
                border: "1px solid #fc8181",
                letterSpacing: "0.12em",
              }}
            >
              {confirmLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
