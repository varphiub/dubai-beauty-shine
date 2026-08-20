import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { salon, services } from "@/data/salon";

const title = "Hair & Beauty Services | Ivy Beauty & Bubbles Dubai";
const description =
  "Balayage, hair colour and colour correction, transformations, blowouts, bridal styling, nails and lashes at Ivy Beauty & Bubbles, Sheikh Zayed Road, Dubai.";

export const Route = createFileRoute("/services")({
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
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20">
      <p className="eyebrow">Services</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">What we do best</h1>
      <p className="mt-5 max-w-2xl text-muted-foreground">
        Every service begins with a consultation: your reference photos, your hair history and an
        honest plan. Pricing is confirmed at consultation so there are no surprises at the desk.
      </p>

      <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
        {services.map((s) => (
          <article key={s.title} className="bg-card p-8">
            <p className="eyebrow">{s.tag}</p>
            <h2 className="mt-3 text-2xl">{s.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
          </article>
        ))}
      </div>

      <div className="mt-14 flex flex-wrap items-center gap-4 border border-gold-soft bg-secondary/60 p-8">
        <div className="min-w-60 flex-1">
          <h2 className="text-2xl">Book a colour consultation</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Call the salon and tell us what you have in mind — we'll match you with the right
            stylist.
          </p>
        </div>
        <Button asChild size="lg">
          <a href={salon.phoneHref}>
            <Phone className="size-4" /> {salon.phone}
          </a>
        </Button>
      </div>
    </div>
  );
}
