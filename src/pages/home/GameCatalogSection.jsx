import { ChevronRight } from "lucide-react";

const GAMES = [
  {
    id: 1,
    title: "Album Digital 2025",
    description: "Collection de cartes avec échanges et défis.",
    badge: { label: "STAR", className: "bg-gradient-to-r from-green-600 to-green-800" },
    showDiscover: true,
    gradientBg: true,
  },
  {
    id: 2,
    title: "Quiz Football",
    description: "Questions sur l'actualité et l'histoire du foot.",
    badge: { label: "BIENTÔT", className: "bg-slate-600" },
    showDiscover: false,
    gradientBg: false,
  },
  {
    id: 3,
    title: "Tombola digitale",
    description: "Tirages au sort avec lots sponsorisés.",
    badge: null,
    showDiscover: false,
    gradientBg: false,
  },
  {
    id: 4,
    title: "Pronostics",
    description: "Prédictions de matchs et classements.",
    badge: null,
    showDiscover: false,
    gradientBg: false,
  },
];

export const GameCatalogSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="font-bold text-slate-900 text-3xl sm:text-4xl mb-4 tracking-tight">
            Catalogue de jeux
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Des mécaniques éprouvées pour engager vos audiences
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GAMES.map((game) => (
            <article
              key={game.id}
              className="relative flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className={`h-52 bg-gradient-to-br ${
                  game.gradientBg ? "from-green-50 to-red-50" : "from-slate-100 to-slate-200"
                }`}
                aria-hidden="true"
              />
              <div className="flex flex-col gap-2 p-6">
                <h3 className="font-semibold text-slate-900">{game.title}</h3>
                <p className="text-slate-600 text-sm leading-5">{game.description}</p>
                {game.showDiscover && (
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-green-600 font-medium text-sm hover:underline mt-2"
                  >
                    Découvrir
                    <ChevronRight className="w-4 h-4" />
                  </a>
                )}
              </div>
              {game.badge && (
                <div
                  className={`absolute top-0 right-0 px-3 py-1 rounded-bl-xl ${game.badge.className}`}
                >
                  <span className="font-semibold text-white text-xs">
                    {game.badge.label}
                  </span>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
