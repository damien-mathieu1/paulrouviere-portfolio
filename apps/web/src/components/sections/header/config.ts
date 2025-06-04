import type { Link } from "@/types/link";

// This is a setting for the compact header
const linkLimit = 4;
//

const links: Link[] = [
  {
    title: "Home",
    href: "/",
    thumbnail: "home.jpg",
  },
  {
    title: "Projects",
    href: "/projects",
    thumbnail: "projects.jpg",
  },
  {
    title: "About",
    href: "/about",
    thumbnail: "about.jpg",
  },
  {
    title: "Contact",
    href: "/contact",
    thumbnail: "contact.jpg",
  },
];

export { linkLimit, links };
