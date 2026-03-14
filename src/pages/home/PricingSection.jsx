import { Check, Zap, TrendingUp, Globe } from "lucide-react";
import { Button } from "../../components/Button";

const PLANS = [
  {
    name: "Starter",
    Icon: Zap,
    tagline: "Campagne locale",
    description: "Idéal pour tester sur un marché",
    features: [
      "Jusqu'à 1 000 utilisateurs",
      "Jusqu'à 10K QR codes",
      "1 pays / région",
      "Album standard (équipe nationale)",
      "Hébergement Cloud sécurisé",
      "Backoffice simplifié",
      "Support par email",
      "1 marque",
    ],
    cta: "Demander un devis",
    variant: "secondary",
    popular: false,
  },
  {
    name: "Scale",
    Icon: TrendingUp,
    iconClass: "bg-white text-red-600 border border-red-200",
    tagline: "Expansion nationale",
    description: "Pour des campagnes d'envergure",
    features: [
      "Jusqu'à 50 000 utilisateurs",
      "QR codes illimités",
      "Multi-pays (jusqu'à 5)",
      "Album complet (toutes les équipes)",
      "Cloud ou On-Premise",
      "Backoffice avancé avec analytics",
      "Support prioritaire 24/7",
      "Jusqu'à 3 marques",
      "API REST disponible",
    ],
    cta: "Planifier une démo",
    variant: "red",
    popular: true,
  },
  {
    name: "Enterprise",
    Icon: Globe,
    tagline: "Solution globale",
    description: "Pour les groupes internationaux",
    features: [
      "Utilisateurs illimités",
      "QR codes illimités",
      "Déploiement mondial",
      "Albums personnalisés par région",
      "Infrastructure dédiée (On-Premise)",
      "Multi-marques illimité",
      "Développements sur-mesure",
      "Account manager dédié",
      "SLA garanti 99.9%",
      "Formation et onboarding complet",
    ],
    cta: "Contactez-nous",
    variant: "secondary",
    popular: false,
  },
];

export const PricingSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="font-bold text-slate-900 text-3xl sm:text-4xl mb-4 tracking-tight">
            Des formules adaptées à votre échelle
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Choisissez la solution qui correspond à vos besoins et votre ambition
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {PLANS.map((plan) => {
            const Icon = plan.Icon;
            return (
            <div
              key={plan.name}
              className={`relative flex flex-col p-8 rounded-2xl bg-white border ${
                plan.popular
                  ? "border-red-200 shadow-lg"
                  : "border-slate-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-red-600 to-red-800 text-white text-sm font-semibold shadow-md">
                  POPULAIRE
                </div>
              )}
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl mb-4 ${plan.iconClass || "bg-green-50 text-green-600"}`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-slate-900 text-xl mb-1">{plan.name}</h3>
              <p className="text-green-600 font-medium text-sm mb-2">{plan.tagline}</p>
              <p className="text-slate-600 mb-6">{plan.description}</p>
              <div className="py-4 border-y border-slate-100 mb-6">
                <p className="text-slate-500 text-sm">
                  Tarification sur mesure selon vos volumes
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <Check
                      className={`w-5 h-5 shrink-0 ${plan.popular ? "text-red-600" : "text-green-600"}`}
                    />
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant={plan.variant} className="w-full">
                {plan.cta}
              </Button>
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
};
