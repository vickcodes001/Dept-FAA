const BLUE = "#3aafe4";

type Tab = "pending" | "approved" | "rejected";

interface AdminTabsProps {
  activeTab: Tab;
  onChange: (tab: Tab) => void;
}

const tabs: Tab[] = ["pending", "approved", "rejected"];

const AdminTabs = ({ activeTab, onChange }: AdminTabsProps) => (
  <div className="flex w-full gap-0 px-4 pt-6 sm:px-8 sm:pt-8">
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => onChange(tab)}
        className="min-w-0 flex-1 whitespace-nowrap px-2 py-3 text-xs font-bold tracking-widest transition-all sm:px-6"
        style={{
          letterSpacing: "0.14em",
          backgroundColor: activeTab === tab ? BLUE : "transparent",
          color: activeTab === tab ? "#fff" : "#a0aec0",
          border: `1px solid ${activeTab === tab ? BLUE : "rgba(58,175,228,0.2)"}`,
        }}
      >
        {tab.toUpperCase()}
      </button>
    ))}
  </div>
);

export default AdminTabs;
