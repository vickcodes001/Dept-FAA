const BLUE = "#3aafe4";

interface AdminHeaderProps {
  onLogout: () => void;
}

const AdminHeader = ({ onLogout }: AdminHeaderProps) => (
  <div
    className="px-4 py-5 sm:px-8 sm:py-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
    style={{ borderBottom: `3px solid ${BLUE}` }}
  >
    <div className="text-center sm:text-left">
      <p
        className="text-xs font-bold tracking-widest mb-1"
        style={{ color: BLUE, letterSpacing: "0.18em" }}
      >
        ADMIN
      </p>
      <h1 className="font-bold text-white text-xl sm:text-[1.4rem]">
        Artwork Review Dashboard
      </h1>
    </div>
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
      <a
        href="/gallery"
        className="text-xs font-bold tracking-widest"
        style={{ color: BLUE }}
      >
        VIEW PUBLIC GALLERY →
      </a>
      <button
        onClick={onLogout}
        className="text-xs font-bold tracking-widest transition-opacity hover:opacity-70"
        style={{ color: "#fc8181", letterSpacing: "0.12em" }}
      >
        SIGN OUT
      </button>
    </div>
  </div>
);

export default AdminHeader;
