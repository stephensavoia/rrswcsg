import type { Route } from "./+types/archive";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Archive" },
    { name: "description", content: "My archive page." },
  ];
}

export default function Archive() {
  return <div>ARCHIVE</div>;
}
