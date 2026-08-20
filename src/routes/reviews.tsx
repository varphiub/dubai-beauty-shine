import { createFileRoute } from "@tanstack/react-router";
import { Stars } from "@/components/site/Stars";
import { Button } from "@/components/ui/button";
import { salon, reviews } from "@/data/salon";

const title = "Guest Reviews | Ivy Beauty & Bubbles Sheraton Grand Dubai";
const description =
  "Rated 4.7 from 4,462 Google reviews. Read what guests say about hair colour, balayage and styling at Ivy Beauty & Bubbles on Sheikh Zayed Road, Dubai.";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReviewsPage,
});

const topics = [
  "balayage (140)",
  "hair color (618)",
  "hair transformation (98)",
  "hair styling (981)",
];

function ReviewsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20">
      <p className="eyebrow">Reviews</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">What our guests say</h1>

      <div className="mt-8 flex flex-wrap items-center gap-6 border border-border bg-card p-8">
        <div>
          <p className="display text-5xl text-primary">{salon.rating}</p>
          <Stars value={5} className="mt-2" />
          <p className="mt-2 text-sm text-muted-foreground">
            {salon.reviewCount.toLocaleString()} Google reviews
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {topics.map((t) => (
            <span key={t} className="border border-gold-soft px-3 py-1 text-xs text-secondary-foreground">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {reviews.map((r) => (
          <blockquote key={r.name} className="border border-border bg-card p-7">
            <Stars value={r.stars} />
            <p className="mt-4 text-sm text-foreground/85">"{r.text}"</p>
            <footer className="mt-5 text-xs text-muted-foreground">
              <span className="font-medium text-primary">{r.name}</span> · {r.meta} · {r.when}
            </footer>
          </blockquote>
        ))}
      </div>

      <p className="mt-8 text-sm text-muted-foreground">
        Reviews shown are excerpts from our Google Maps profile, including feedback we're working on.
      </p>
      <Button asChild className="mt-6" variant="secondary">
        <a href={salon.mapsUrl} target="_blank" rel="noreferrer">
          Read all reviews on Google
        </a>
      </Button>
    </div>
  );
}
