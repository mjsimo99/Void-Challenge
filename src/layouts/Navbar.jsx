import { useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";
import { Button } from "../components/Button";
import { LeafIcon } from "../components/icons/LeafIcon";

const NAV_ITEMS = ["Nos offres", "Nos jeux", "Album 2025", "À propos"];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-20">
        <div className="flex h-18 items-center justify-between py-4">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl overflow-hidden shadow-sm bg-gradient-to-br from-green-600 to-green-800">
              <LeafIcon className="w-5 h-5" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">
                <span className="text-red-600">You</span>
                <span className="text-slate-800">can</span>
                <span className="text-green-700">win</span>
              </span>
              <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-700">
                GAMES
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-3 py-2 rounded-md font-medium text-slate-700 text-sm hover:bg-slate-100 transition-colors"
              >
                {item}
              </a>
            ))}
            <div className="ml-4 flex items-center gap-3">
              <Button
                variant="primary"
                size="sm"
                rightIcon={<ChevronRight className="w-4 h-4 text-white" strokeWidth={2.5} />}
              >
                Demander une démo
              </Button>
            </div>
          </nav>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" strokeWidth={2} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={2} />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-slate-200 flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-slate-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button
              variant="primary"
              size="sm"
              className="mt-2"
              rightIcon={<ChevronRight className="w-4 h-4 text-white" strokeWidth={2.5} />}
            >
              Demander une démo
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};
