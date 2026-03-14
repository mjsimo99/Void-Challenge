import { Users, QrCode, Globe, Library, Server } from "lucide-react";

const METRICS = [
  { Icon: Users, title: "Utilisateurs", subtitle: "De 1K à illimité" },
  { Icon: QrCode, title: "QR Codes", subtitle: "Volume adapté" },
  { Icon: Globe, title: "Couverture", subtitle: "Local à mondial" },
  { Icon: Library, title: "Albums", subtitle: "Standard ou custom" },
  { Icon: Server, title: "Infrastructure", subtitle: "Cloud ou On-Premise" },
];

export const KeyMetricsSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {METRICS.map((metric) => {
            const Icon = metric.Icon;
            return (
              <div key={metric.title} className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-50 text-green-600 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">{metric.title}</h3>
                <p className="text-slate-600 text-xs">{metric.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
