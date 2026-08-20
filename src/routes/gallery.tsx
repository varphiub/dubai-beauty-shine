import { createFileRoute } from "@tanstack/react-router";
import heroSalon from "@/assets/hero-salon.jpg";
import workBalayage from "@/assets/work-balayage.jpg";
import workColor from "@/assets/work-color.jpg";
import workStyling from "@/assets/work-styling.jpg";

const title = "Hair Transformation Gallery | Ivy Beauty & Bubbles Dubai";
const description =
  "See balayage, hair colour, blowouts and bridal styling created at Ivy Beauty & Bubbles in Sheraton Grand Dubai, plus a look inside the salon.";

export const Route = createFileRoute("/gallery")({
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
  component: GalleryPage,
});

const items = [
  {
    src: workBalayage,
    alt: "Blonde balayage with soft waves created at Ivy Beauty & Bubbles Dubai",
    caption: "Balayage & babylights",
  },
  {
    src: workColor,
    alt: "Glossy brunette colour with caramel highlights",
    caption: "Dimensional brunette colour",
  },
  {
    src: workStyling,
    alt: "Bridal updo with soft curls",
    caption: "Bridal & occasion styling",
  },
];

function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20">
      <p className="eyebrow">Gallery</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">Our work</h1>
      <p className="mt-5 max-w-2xl text-muted-foreground">
        A selection of colour and styling work from our stylist team. For the full, constantly
        updated album, visit our Google Maps profile.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <figure key={item.caption}>
            <img
              src={item.src}
              alt={item.alt}
              width={1000}
              height={1200}
              loading="lazy"
              className="aspect-[5/6] w-full object-cover"
            />
            <figcaption className="mt-3 text-sm text-muted-foreground">{item.caption}</figcaption>
          </figure>
        ))}
      </div>

      <figure className="mt-12">
        <img
          src={heroSalon}
          alt="Inside Ivy Beauty & Bubbles salon at Sheraton Grand Dubai"
          width={1600}
          height={1008}
          loading="lazy"
          className="w-full object-cover"
        />
        <figcaption className="mt-3 text-sm text-muted-foreground">
          Inside the salon — Sheraton Grand Dubai, Sheikh Zayed Road
        </figcaption>
      </figure>
    </div>
  );
}
