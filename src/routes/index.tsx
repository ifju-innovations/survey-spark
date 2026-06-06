import { createFileRoute } from "@tanstack/react-router";
import { NorthStarLanding } from "@/components/NorthStarLanding";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "North Star — In a world of distraction, we give direction" },
      { name: "description", content: "Science-backed daily guidance for Indian youth. Beat distraction, build habits, find your direction." },
      { property: "og:title", content: "North Star — Find your direction" },
      { property: "og:description", content: "Replace doomscrolling with direction. Join the waitlist." },
    ],
  }),
  component: Index,
});

function Index() {
  return <NorthStarLanding />;
}
