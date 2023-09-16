export type Project = {
  title: string;
  description: string;
  skills: string[];
  platform?: "desktop" | "mobile" | undefined;
  status?: "inprogress" | "planned" | undefined;
  image?: string | undefined;
  live?: string | undefined;
  source?: string | undefined;
};

export const projectData: Project[] = [
  {
    title: "Blackjack",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa nemo expedita sapiente eius accusantium.Doloribus labore soluta assumenda accusamus quisquam. Recusandae, porro? Nam earum voluptates, quam officia nemo quisquam rem!",
    skills: ["Typescript", "React", "Framer Motion"],
    image: "/projectImages/blackjack.gif",
    live: "https://ploticio.github.io/blackjack/",
    source: "https://github.com/ploticio/blackjack",
  },
  {
    title: "Blobboi",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quam ducimus. Quis eos reprehenderit similique id soluta earum temporibus iusto numquam assumenda. Accusantium quas quos quidem molestiae. Illo, soluta dolorum!",
    skills: ["C#", "Unity Engine"],
    platform: "desktop",
    image: "/projectImages/blobboi.gif",
    live: "https://ploticio.itch.io/blobboi",
  },
  {
    title: "Unamed Discord Bot",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sunt accusamus quae magni, autem laboriosam quidem placeat laborum totam esse exercitationem fugiat inventore nulla eaque perferendis voluptas, dolore a sequi!",
    skills: ["TypeScript", "discord.js"],
    status: "inprogress",
    live: "/",
    source: "/",
  },
  {
    title: "Unamed mobile app",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, assumenda dolorum? Ut laudantium doloribus nihil, veniam animi porro possimus at impedit placeat hic similique architecto excepturi voluptate facere molestiae explicabo!",
    skills: ["C#", "Unity Engine", "Firebase"],
    platform: "mobile",
    status: "planned",
    live: "/",
  },
  {
    title: "Unamed AI Project",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam officia ducimus expedita autem ut dolores tempore voluptatum tempora debitis eveniet ipsum incidunt doloribus repellendus, possimus, maiores excepturi rerum. Perferendis, veritatis.",
    skills: ["Python", "TensorFlow"],
    status: "planned",
    live: "/",
    source: "/",
  },
];
