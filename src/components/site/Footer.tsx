import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Globe } from "lucide-react";
import { salon, branches } from "@/data/salon";

export function Footer() {
  return (
    <footer className="bg-ivy text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="display text-2xl">
            Ivy Beauty <span className="text-gold">&</span> Bubbles
          </p>
          <p className="mt-3 max-w-xs text-sm text-primary-foreground/70">
            Hair colour, balayage and styling specialists inside Sheraton Grand Hotel on Sheikh
            Zayed Road, Dubai.
          </p>
        </div>

        <div className="space-y-3 text-sm text-primary-foreground/80">
          <p className="flex gap-3">
            <MapPin className="mt-0.5 size-4 shrink-0 text-gold" /> {salon.address}
          </p>
          <p className="flex gap-3">
            <Phone className="size-4 shrink-0 text-gold" />
            <a href={salon.phoneHref} className="hover:text-gold">
              {salon.phone}
            </a>
          </p>
          <p className="flex gap-3">
            <Clock className="size-4 shrink-0 text-gold" /> {salon.hours}
          </p>
          <p className="flex gap-3">
            <Globe className="size-4 shrink-0 text-gold" />
            <a href={salon.mapsUrl} className="hover:text-gold" target="_blank" rel="noreferrer">
              View on Google Maps
            </a>
          </p>
        </div>

        <div>
          <p className="eyebrow">Our salons</p>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
            {branches.map((b) => (
              <li key={b.name}>
                {b.name} · {b.rating} ★ ({b.count.toLocaleString()})
              </li>
            ))}
          </ul>
          <div className="mt-5 flex gap-4 text-sm">
            <Link to="/services" className="hover:text-gold">
              Services
            </Link>
            <Link to="/reviews" className="hover:text-gold">
              Reviews
            </Link>
            <Link to="/contact" className="hover:text-gold">
              Visit
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Ivy Beauty & Bubbles Sheraton Grand Dubai
      </div>
    </footer>
  );
}
