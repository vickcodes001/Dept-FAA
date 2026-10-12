export interface StaffMember {
  id: number;
  name: string;
  title: string;
  department: string;
  bio: string;
  image: string;
  email: string;
}

const staff: StaffMember[] = [
  {
    id: 1,
    name: "Prof. Adaeze Okafor",
    title: "Head of Department",
    department: "Fine & Applied Arts",
    bio: "Professor Okafor is an internationally recognised painter and visual culture scholar with over 25 years of teaching and practice. She holds a PhD from the University of Lagos and has exhibited across Africa, Europe, and North America.",
    image: "/images/staff/adaeze.jpg",
    email: "a.okafor@university.edu.ng",
  },
  {
    id: 2,
    name: "Dr. Emeka Bassey",
    title: "Associate Professor, Ceramics",
    department: "Ceramics & Sculpture",
    bio: "Dr. Bassey is a studio ceramicist and educator whose work explores the intersection of traditional Yoruba pottery techniques and contemporary conceptual art. He has been with the department for 14 years.",
    image: "/images/staff/emeka.jpg",
    email: "e.bassey@university.edu.ng",
  },
  {
    id: 3,
    name: "Mrs. Ngozi Ihejirika",
    title: "Senior Lecturer, Textiles",
    department: "Textiles",
    bio: "Mrs. Ihejirika specialises in Aso-oke weaving, resist dyeing, and contemporary surface design. She has collaborated with Nigerian fashion designers and exhibited at the Lagos Fashion Week.",
    image: "/images/staff/ngozi.jpg",
    email: "n.ihejirika@university.edu.ng",
  },
  {
    id: 4,
    name: "Mr. Kunle Adeleke",
    title: "Lecturer I, Graphic Design",
    department: "Graphics",
    bio: "Mr. Adeleke brings 10 years of industry experience in branding and digital design to his teaching practice. He leads the Typography and Visual Identity modules.",
    image: "/images/staff/kunle.jpg",
    email: "k.adeleke@university.edu.ng",
  },
  {
    id: 5,
    name: "Dr. Fatima Olu",
    title: "Lecturer I, Art History",
    department: "Painting",
    bio: "Dr. Olu's research focuses on post-colonial African art histories and feminist art criticism. She is the author of 'Seeing Otherwise: Women and Visual Culture in West Africa'.",
    image: "/images/staff/fatima.jpg",
    email: "f.olu@university.edu.ng",
  },
  {
    id: 6,
    name: "Mr. Chidi Nwosu",
    title: "Lecturer II, Sculpture",
    department: "Sculpting",
    bio: "Mr. Nwosu works in welded metal, found objects, and public sculpture. His installation work has been commissioned by the Lagos State Government and several private collectors.",
    image: "/images/staff/chidi.jpg",
    email: "c.nwosu@university.edu.ng",
  },
  {
    id: 7,
    name: "Mrs. Tolu Adesanya",
    title: "Lecturer II, Painting",
    department: "Painting",
    bio: "Mrs. Adesanya is a multidisciplinary painter working across oil, acrylic, and mixed media. She coordinates the department's annual student critique programme.",
    image: "/images/staff/tolu.jpg",
    email: "t.adesanya@university.edu.ng",
  },
  {
    id: 8,
    name: "Dr. Bello Mahmud",
    title: "Senior Lecturer, Graphics",
    department: "Graphics",
    bio: "Dr. Mahmud holds a doctorate in Communication Design from the Royal College of Art. His research explores wayfinding, information design, and visual accessibility in Nigerian public spaces.",
    image: "/images/staff/bello.jpg",
    email: "b.mahmud@university.edu.ng",
  },
  {
    id: 9,
    name: "Miss. Sade Coker",
    title: "Assistant Lecturer, Textiles",
    department: "Textiles",
    bio: "Miss. Coker is an emerging scholar and practitioner specialising in sustainable textile production and natural dyeing. She is currently completing her doctoral research.",
    image: "/images/staff/sade.jpg",
    email: "s.coker@university.edu.ng",
  },
];

export default staff;
