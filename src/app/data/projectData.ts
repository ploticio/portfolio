export type Project = {
  title: string;
  description: string;
  skills: string[];
  platform?: "desktop" | "mobile" | undefined;
  status?: "ongoing" | "planned" | undefined;
  image?: string | undefined;
  width?: number | undefined;
  live?: string | undefined;
  source?: string | undefined;
};

export const projectData: Project[] = [
  {
    title: "Blackjack",
    description:
      "My first project with React. Fully fledged Blackjack with options to configure H17 / S17, sum counters, and the number of decks in the shoe. Supports splitting and doubling.",
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
    title: "Eastern Proverbs API",
    description:
      "REST API written in Python with FastAPI. Contains a collection of various proverbs from East Asia⛩️. Uses PostgreSQL and follows OpenAPI specifications. Hosted with AWS Lambda",
    skills: ["Python", "FastAPI", "PostgreSQL"],
    image: "/devicons/python.svg",
    width: 150,
    status: "ongoing",
  },

  {
    title: "Unnamed mobile app",
    description:
      "Upcoming mobile app to be made with Unity. Enjoy some Lorem ipsum while I work on it: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam officia ducimus expedita autem ut dolores tempore voluptatum tempora debitis eveniet ipsum incidunt doloribus repellendus, possimus, maiores excepturi rerum. Perferendis, veritatis.",
    skills: ["Unity Engine", "Firebase"],
    platform: "mobile",
    image: "/devicons/unity.svg",
    width: 150,
    status: "planned",
  },
  {
    title: "BetterVoting",
    description:
      "Discord bot written in Python using the discord.py library. Facilitates voting and elections in Discord servers, with the ability to choose between various voting styles. Includes STAR voting, a new and innovative voting method that maximizes voter satisfaction and accuracy. (More at www.equal.vote)",
    skills: ["Python", "discord.py"],
    image: "/projectImages/discordpy.png",
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
    description: "2D roleplaying game built entirely from scratch using Java and its GUI toolkit, Java Swing",
    skills: ["Java"],
    image: "/projectImages/rpgmaster.gif",
    width: 250,
    platform: "desktop",
    source: "https://github.com/ploticio/RPG",
  },
];
