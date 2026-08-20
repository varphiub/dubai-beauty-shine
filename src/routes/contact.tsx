import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Globe, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { salon, branches } from "@/data/salon";

const title = "Visit Us on Sheikh Zayed Road | Ivy Beauty & Bubbles Dubai";
const description =
  "Ivy Beauty & Bubbles, 3 Sheikh Zayed Rd, Trade Centre First, Dubai (Sheraton Grand Hotel). Open daily until midnight. Call +971 52 743 4416 or get directions.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20">
      <p className="eyebrow">Visit us</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">Sheraton Grand Dubai</h1>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div className="space-y-5 text-sm">
          <p className="flex gap-3">
            <MapPin className="mt-0.5 size-5 shrink-0 text-gold" />
            <span>
              {salon.address}
              <br />
              <span className="text-muted-foreground">Plus code {salon.plusCode}</span>
            </span>
          </p>
          <p className="flex gap-3">
            <Clock className="size-5 shrink-0 text-gold" /> {salon.hours}
          </p>
          <p className="flex gap-3">
            <Phone className="size-5 shrink-0 text-gold" />
            <a href={salon.phoneHref} className="font-medium text-primary hover:text-gold">
              {salon.phone}
            </a>
          </p>
          <p className="flex gap-3">
            <Globe className="size-5 shrink-0 text-gold" />
            <a href={salon.website} className="hover:text-gold" target="_blank" rel="noreferrer">
              ivydubai.com
            </a>
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild>
              <a href={salon.phoneHref}>
                <Phone className="size-4" /> Call to book
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href={salon.mapsUrl} target="_blank" rel="noreferrer">
                <Navigation className="size-4" /> Directions
              </a>
            </Button>
          </div>
        </div>

        <div className="overflow-hidden border border-border">
          <iframe
            title="Map showing Ivy Beauty & Bubbles on Sheikh Zayed Road, Dubai"
            src="https://www.google.com/maps?q=3+Sheikh+Zayed+Road+Trade+Centre+First+Dubai&output=embed"
            loading="lazy"
            className="h-80 w-full border-0"
          />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl">Our other Dubai salons</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {branches.map((b) => (
            <div key={b.name} className="border border-border bg-card p-6">
              <h3 className="text-xl">{b.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.area}</p>
              <p className="mt-2 text-sm text-gold">
                {b.rating} ★ · {b.count.toLocaleString()} reviews
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
