import {
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { LeafIcon } from "../components/icons/LeafIcon";

const QUICK_LINKS = ["Nos offres", "Nos jeux", "Album 2025", "À propos"];
const CONTACT_LINKS = [
  { label: "games@agency.africa" },
  { label: "Mentions légales" },
  { label: "Protection des données (CNDP)", hasIcon: true },
  { label: "Conditions d'utilisation" },
];
const SOCIAL_ICONS = [
  { name: "Twitter", Icon: Twitter },
  { name: "Facebook", Icon: Facebook },
  { name: "Instagram", Icon: Instagram },
  { name: "LinkedIn", Icon: Linkedin },
];

export const Footer = () => {
  return (
    <footer className="w-full bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-20">
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-green-800">
                <LeafIcon className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold">
                <span className="text-red-600">You</span>
                <span className="text-slate-800">can</span>
                <span className="text-green-700">win</span>
              </span>
            </div>
            <p className="text-slate-600 text-sm leading-5 mb-4">
              Plateforme de jeux digitaux pour engager vos communautés autour du
              football. Un service d&apos;Agency.Africa.
            </p>
            <div className="flex gap-3">
              {SOCIAL_ICONS.map(({ name, Icon }) => (
                <a
                  key={name}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-200 text-slate-600 hover:bg-slate-300 transition-colors"
                  aria-label={name}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 text-base mb-3">Liens rapides</h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((label) => (
                <li key={label}>
                  <a href="#" className="text-slate-600 text-sm hover:text-slate-900 transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 text-base mb-3">
              Contact & Légal
            </h3>
            <ul className="space-y-2">
              {CONTACT_LINKS.map(({ label, hasIcon }) => (
                <li key={label}>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-slate-600 text-sm hover:text-slate-900 transition-colors"
                  >
                    {label}
                    {hasIcon && <ExternalLink className="w-3 h-3 shrink-0" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-slate-600 text-sm">
              © 2025 Youcanwin. Tous droits réservés.
            </p>
            <div className="flex flex-wrap items-center gap-1 text-sm">
              <span className="text-slate-600">Un service de</span>
              <a href="#" className="font-semibold text-green-700 hover:underline">
                Agency.Africa
              </a>
              <span className="text-slate-600">—</span>
              <a href="#" className="font-medium text-slate-600 hover:underline">
                games.agency.africa
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-lg border border-green-200">
              <ShieldCheck className="w-5 h-5 text-green-600 shrink-0" />
              <span className="font-medium text-green-700 text-sm">
                Site conforme CNDP Maroc
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
