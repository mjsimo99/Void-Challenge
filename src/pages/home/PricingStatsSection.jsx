import { Users, Building2, Star, Clock } from "lucide-react";

const STATS = [
  { Icon: Users, value: "500K+", label: "Interactions mensuelles" },
  { Icon: Building2, value: "50+", label: "Marques partenaires" },
  { Icon: Star, value: "98%", label: "Taux de satisfaction" },
  { Icon: Clock, value: "24/7", label: "Support technique" },
];

export const PricingStatsSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat) => {
            const Icon = stat.Icon;
            return (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <Icon className="w-8 h-8 text-green-600" />
                </div>
                <span className="font-bold text-slate-900 text-3xl mb-2">
                  {stat.value}
                </span>
                <p className="text-slate-600 text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
