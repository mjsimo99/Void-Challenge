import {
  Layers,
  CreditCard,
  Gift,
  BarChart3,
  Check,
} from "lucide-react";
import { Button } from "../../components/Button";
import { ArrowRight } from "../../components/icons/ArrowRight";
import fansImage from "../../assets/Fans de football avec smartphones.png";

const FEATURES = [
  {
    icon: <Layers className="w-5 h-5" />,
    title: "Activation instantanée",
    description: "QR codes uniques sur chaque produit",
  },
  {
    icon: <CreditCard className="w-5 h-5" />,
    title: "Collection digitale",
    description: "Cartes de joueurs, raretés, échanges",
  },
  {
    icon: <Gift className="w-5 h-5 text-green-600" />,
    title: "Récompenses exclusives",
    description: "Tirages au sort, lots partenaires, expériences VIP",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Analytics avancés",
    description: "Dashboard temps réel, insights consommateurs",
  },
];

export const SecondaryHeroSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-16">
          <img
            src={fansImage}
            alt="Fans de football avec smartphones"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain block rounded-2xl"
          />

          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 rounded-full text-green-700 text-sm font-medium">
              <Check className="w-4 h-4" />
              Solution complète
            </span>

            <h2 className="font-bold text-slate-900 text-2xl sm:text-3xl md:text-4xl lg:text-4xl leading-tight lg:whitespace-nowrap">
              Le terrain de jeu digital de votre marque
            </h2>

            <p className="text-slate-600 text-lg leading-7">
              YouCanWin transforme vos produits en expériences interactives.
              Chaque achat devient une opportunité d&apos;engagement avec vos
              consommateurs.
            </p>

            <ul className="space-y-4">
              {FEATURES.map((feature) => (
                <li key={feature.title} className="flex gap-4">
                  <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{feature.title}</h3>
                    <p className="text-slate-600 text-sm">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Button variant="red" size="md" rightIcon={<ArrowRight color="white" />}>
              Planifier une démo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
