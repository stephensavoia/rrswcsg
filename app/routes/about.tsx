import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About" },
    { name: "description", content: "My About page." },
  ];
}

export default function About() {
  return <div>ABOUT</div>;
}
