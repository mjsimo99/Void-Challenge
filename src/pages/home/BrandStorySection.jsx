import { Zap, Heart, Users } from "lucide-react";

const JOURNEY_CARDS = [
  {
    id: 1,
    title: "Engagement immédiat",
    description: "Chaque produit devient une opportunité de jeu",
    Icon: Zap,
  },
  {
    id: 2,
    title: "Fidélisation naturelle",
    description: "Les clients reviennent pour compléter leur collection",
    Icon: Heart,
  },
  {
    id: 3,
    title: "Viralité organique",
    description: "Les fans partagent et échangent entre eux",
    Icon: Users,
  },
];

export const BrandStorySection = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-green-600 to-green-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="font-bold text-white text-3xl sm:text-4xl mb-6">
            Transformez vos ventes en expérience mémorable
          </h2>
          <p className="text-green-50 text-lg max-w-2xl mx-auto">
            YouCanWin offre à vos clients plus qu&apos;un produit : une
            expérience interactive complète autour du football
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {JOURNEY_CARDS.map((card) => {
            const Icon = card.Icon;
            return (
              <div
                key={card.id}
                className="relative rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-8 min-h-[232px] flex flex-col items-center text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/20 text-white mb-6">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-white text-xl mb-3">{card.title}</h3>
                <p className="text-green-50">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
