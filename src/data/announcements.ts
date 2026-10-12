export interface Announcement {
  id: number;
  title: string;
  date: string;
  category: "Event" | "News" | "Exhibition" | "Academic";
  description: string;
}

const announcements: Announcement[] = [
  {
    id: 1,
    title: "End of Year Exhibition 2025",
    date: "2025-05-15",
    category: "Exhibition",
    description:
      "Join us for the annual end-of-year showcase featuring works from students across all departments — Graphics, Painting, Textiles, Ceramics, and Sculpting.",
  },
  {
    id: 2,
    title: "New Postgraduate Applications Now Open",
    date: "2025-04-01",
    category: "Academic",
    description:
      "Applications for the 2025/2026 postgraduate programmes are now open. Prospective students are encouraged to apply early as spaces are limited.",
  },
  {
    id: 3,
    title: "Guest Lecture: Contemporary African Textiles",
    date: "2025-04-20",
    category: "Event",
    description:
      "Award-winning textile artist Amaka Osei will deliver a public lecture on the evolution of contemporary African textile design. All welcome.",
  },
  {
    id: 4,
    title: "Department Wins National Arts Council Grant",
    date: "2025-03-10",
    category: "News",
    description:
      "We are proud to announce that the Department of Fine & Applied Arts has been awarded a grant by the National Arts Council to support student research and studio facilities.",
  },
  {
    id: 5,
    title: "Ceramics Workshop — Open to Public",
    date: "2025-04-28",
    category: "Event",
    description:
      "A two-day hands-on ceramics workshop open to members of the public. Materials provided. Register via the department office.",
  },
  {
    id: 6,
    title: "Staff Art Exhibition at National Museum",
    date: "2025-05-02",
    category: "Exhibition",
    description:
      "Works by six members of our faculty will be featured in a group exhibition at the National Museum this May. Free entry for students with valid ID.",
  },
];

export default announcements;
