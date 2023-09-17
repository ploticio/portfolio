export type Project = {
  title: string;
  description: string;
  skills: string[];
  platform?: "desktop" | "mobile" | undefined;
  status?: "ongoing" | "planned" | undefined;
  image?: string | undefined;
  width?: number | undefined;
  placeholder?: boolean | undefined;
  live?: string | undefined;
  source?: string | undefined;
};

export const projectData: Project[] = [
  {
    title: "Blackjack",
    description:
      "My first project with React. Fully fledged Blackjack with options for H17 / S17, sum counters, and number of decks in the shoe. Supports splitting and doubling.",
    skills: ["TypeScript", "React", "Framer Motion"],
    image: "/projectImages/blackjack.gif",
    live: "https://ploticio.github.io/blackjack/",
    source: "https://github.com/ploticio/blackjack",
  },
  {
    title: "Blobboi",
    description:
      "2D platformer written in C# with the Unity Engine. Follow the adventures of Blobboi, the gravity-defying blobfish, as he saves his poor clownfish friends 🐠. The demo has 5 levels that you can play through. (Desktop only!)",
    skills: ["C#", "Unity Engine"],
    platform: "desktop",
    image: "/projectImages/blobboi.gif",
    live: "https://ploticio.itch.io/blobboi",
  },
  {
    title: "BetterVoting",
    description:
      "Discord bot written in TypeScript with the discord.js library. Facilitates voting and elections in Discord servers, with the ability to choose between various voting styles. Includes STAR voting, a new and innovative voting method that maximizes voter satisfaction and accuracy. (More at www.equal.vote)",
    skills: ["TypeScript", "discord.js"],
    status: "ongoing",
    image: "/projectImages/discordjs.svg",
  },
  {
    title: "Unnamed mobile app",
    description:
      "Upcoming mobile app to be made with React Native. Enjoy some Lorem ipsum while I work on it: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam officia ducimus expedita autem ut dolores tempore voluptatum tempora debitis eveniet ipsum incidunt doloribus repellendus, possimus, maiores excepturi rerum. Perferendis, veritatis.",
    skills: ["React Native", "Firebase"],
    platform: "mobile",
    image: "/devicons/react.svg",
    width: 150,
    status: "planned",
  },
  {
    title: "Unnamed AI Project",
    description:
      "Planned project utilizing TensorFlow with Python. Enjoy some Lorem ipsum while I work on it: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam officia ducimus expedita autem ut dolores tempore voluptatum tempora debitis eveniet ipsum incidunt doloribus repellendus, possimus, maiores excepturi rerum. Perferendis, veritatis.",
    skills: ["Python", "TensorFlow"],
    status: "planned",
    image: "/projectImages/tensorflow.svg",
    width: 300,
  },
  {
    title: "RPG Master",
    description: "2D roleplaying game built entirely from scratch using Java and its GUI toolkit",
    skills: ["Java"],
    image: "/projectImages/rpgmaster.png",
    width: 200,
    platform: "desktop",
    source: "https://github.com/ploticio/RPG",
  },
];
