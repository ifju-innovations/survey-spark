import { createFileRoute } from "@tanstack/react-router";
import { NorthStarLanding } from "@/components/NorthStarLanding";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Polaris — Your inner compass, decoded" },
      { name: "description", content: "Polaris is a personalized self-discovery coach. Answer six questions and get a science-backed daily blueprint built around your goals." },
      { property: "og:title", content: "Polaris — Find your true north" },
      { property: "og:description", content: "A personalized plan built around who you are. Join 1,200+ students already discovering themselves with Polaris." },
    ],
  }),
  component: Index,
});

function Index() {
  return <NorthStarLanding />;
}
