import type { Artwork } from "./ArtworkCard";
import ArtworkCard from "./ArtworkCard";

interface ArtworkGridProps {
  artworks: Artwork[];
  loading: boolean;
  activeTab: "pending" | "approved" | "rejected";
  processing: string | null;
  onUpdateStatus: (id: string, status: "approved" | "rejected") => void;
}

const ArtworkGrid = ({
  artworks,
  loading,
  activeTab,
  processing,
  onUpdateStatus,
}: ArtworkGridProps) => {
  if (loading) {
    return (
      <div className="grid grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="animate-pulse"
            style={{ backgroundColor: "rgba(255,255,255,0.05)", height: 300 }}
          />
        ))}
      </div>
    );
  }

  if (artworks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <p className="text-4xl mb-4">✓</p>
        <p className="font-bold text-white mb-2">No {activeTab} artworks</p>
        <p className="text-sm" style={{ color: "#718096" }}>
          Nothing to review here.
        </p>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {artworks.map((artwork) => (
        <ArtworkCard
          key={artwork.id}
          artwork={artwork}
          activeTab={activeTab}
          processing={processing}
          onUpdateStatus={onUpdateStatus}
        />
      ))}
    </div>
  );
};

export default ArtworkGrid;
