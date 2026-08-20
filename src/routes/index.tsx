import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, Sparkles, Clock, ArrowRight } from "lucide-react";
import heroSalon from "@/assets/hero-salon.jpg";
import workBalayage from "@/assets/work-balayage.jpg";
import workColor from "@/assets/work-color.jpg";
import workStyling from "@/assets/work-styling.jpg";
import { Button } from "@/components/ui/button";
import { Stars } from "@/components/site/Stars";
import { salon, services, reviews } from "@/data/salon";

const title = "Ivy Beauty & Bubbles Sheraton Grand Dubai | Hair Colour & Balayage Salon";
const description =
  "Award-loved ladies salon on Sheikh Zayed Road, Dubai. Balayage, hair colour, transformations and styling — 4.7★ from 4,462 Google reviews. Call +971 52 743 4416.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative">
        <img
          src={heroSalon}
          alt="Interior of Ivy Beauty & Bubbles salon in Sheraton Grand Dubai with green velvet chairs and gold accents"
          width={1600}
          height={1008}
          className="h-[78vh] min-h-[520px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/55" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-5">
            <p className="eyebrow">Sheikh Zayed Road · Dubai</p>
            <h1 className="mt-4 max-w-2xl text-4xl leading-[1.05] text-primary-foreground sm:text-6xl">
              Hair colour artistry, poured with a glass of bubbles
            </h1>
            <p className="mt-5 max-w-xl text-primary-foreground/85">
              Ivy Beauty & Bubbles inside Sheraton Grand Hotel — balayage, colour correction and
              red-carpet styling by a team Dubai keeps coming back to.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <a href={salon.phoneHref}>
                  <Phone className="size-4" /> Book an appointment
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href={salon.mapsUrl} target="_blank" rel="noreferrer">
                  <MapPin className="size-4" /> Get directions
                </a>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-primary-foreground/85">
              <Stars value={5} />
              <span>
                {salon.rating} · {salon.reviewCount.toLocaleString()} Google reviews
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary/60">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 sm:grid-cols-3">
          {[
            { icon: Clock, label: salon.hours },
            { icon: MapPin, label: "Sheraton Grand Hotel, Trade Centre First" },
            { icon: Sparkles, label: "Balayage · Colour · Bridal styling" },
          ].map(({ icon: Icon, label }) => (
            <p key={label} className="flex items-center gap-3 text-sm text-secondary-foreground">
              <Icon className="size-4 text-gold" /> {label}
            </p>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">The salon</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">
            A colour studio built for Dubai's most demanding hair
          </h2>
          <p className="mt-5 text-muted-foreground">
            Our stylists specialise in the difficult work: lifting years of dark box colour into
            luminous balayage, matching a shade to your skin tone, and keeping the hair healthy
            through every session. Consultations are unhurried, honest and always start with your
            reference photos.
          </p>
          <Link
            to="/services"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-gold"
          >
            Explore all services <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((s) => (
            <article key={s.title} className="border border-border bg-card p-7">
              <p className="eyebrow">{s.tag}</p>
              <h3 className="mt-3 text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Our work</p>
              <h2 className="mt-3 text-3xl sm:text-4xl">Transformations from the chair</h2>
            </div>
            <Link to="/gallery" className="text-sm font-medium text-primary hover:text-gold">
              View the gallery →
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              { src: workBalayage, alt: "Blonde balayage transformation with soft waves" },
              { src: workColor, alt: "Brunette hair colour with caramel highlights" },
              { src: workStyling, alt: "Bridal updo styling with soft curls" },
            ].map((img) => (
              <img
                key={img.alt}
                src={img.src}
                alt={img.alt}
                width={1000}
                height={1200}
                loading="lazy"
                className="aspect-[5/6] w-full object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="eyebrow">Guest reviews</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">
          {salon.rating} out of 5 across {salon.reviewCount.toLocaleString()} reviews
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.slice(0, 3).map((r) => (
            <blockquote key={r.name} className="border border-border bg-card p-7 shadow-luxe">
              <Stars value={r.stars} />
              <p className="mt-4 text-sm text-foreground/85">"{r.text}"</p>
              <footer className="mt-5 text-xs text-muted-foreground">
                <span className="font-medium text-primary">{r.name}</span> · {r.when}
              </footer>
            </blockquote>
          ))}
        </div>
        <Link to="/reviews" className="mt-8 inline-block text-sm font-medium text-primary hover:text-gold">
          Read more reviews →
        </Link>
      </section>

      <section className="bg-ivy py-16">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-5">
          <div>
            <h2 className="text-3xl text-primary-foreground">Ready for your appointment?</h2>
            <p className="mt-2 text-primary-foreground/75">
              Walk in or call ahead — we're open until midnight, seven days a week.
            </p>
          </div>
          <Button asChild size="lg" variant="secondary">
            <a href={salon.phoneHref}>
              <Phone className="size-4" /> {salon.phone}
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
