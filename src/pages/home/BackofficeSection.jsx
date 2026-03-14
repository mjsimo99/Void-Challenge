import {
  QrCode,
  Users,
  Settings,
  BarChart3,
  Gift,
  Bell,
  Download,
  Layers,
} from "lucide-react";
import { Button } from "../../components/Button";
import { ArrowRight } from "../../components/icons/ArrowRight";

const FEATURE_CARDS = [
  {
    title: "Générateur QR Codes",
    description: "Créez et téléchargez vos QR codes uniques en masse",
    Icon: QrCode,
  },
  {
    title: "CRM Participants",
    description: "Collectez et gérez vos participants avec segmentation avancée",
    Icon: Users,
  },
  {
    title: "Configuration jeux",
    description: "Paramétrez entièrement vos jeux : règles, lots, durée, visuels",
    Icon: Settings,
  },
  {
    title: "Analytics temps réel",
    description: "Suivez vos KPIs : scans, conversions, engagement, ROI",
    Icon: BarChart3,
  },
  {
    title: "Gestion des lots",
    description: "Définissez vos récompenses et gérez les tirages au sort",
    Icon: Gift,
  },
  {
    title: "Notifications",
    description: "Envoyez des push, emails et SMS à vos participants",
    Icon: Bell,
  },
  {
    title: "Export données",
    description: "Téléchargez vos données en CSV, Excel ou via API",
    Icon: Download,
  },
  {
    title: "Multi-campagnes",
    description: "Gérez plusieurs campagnes simultanément",
    Icon: Layers,
  },
];

export const BackofficeSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-20">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-100 rounded-full text-green-700 text-sm font-medium mb-4">
            Backoffice tout-en-un
          </span>
          <h2 className="font-bold text-slate-900 text-3xl sm:text-4xl mb-4">
            Gérez tout depuis une interface unique
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Notre backoffice intuitif vous permet de créer, configurer et piloter
            vos campagnes en toute autonomie
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {FEATURE_CARDS.map((card) => {
            const Icon = card.Icon;
            return (
              <div
                key={card.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-50 text-green-600 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{card.title}</h3>
                <p className="text-slate-600 text-sm leading-5">{card.description}</p>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Button
            variant="primary"
            size="md"
            rightIcon={<ArrowRight color="white" />}
          >
            Demander un accès au backoffice
          </Button>
        </div>
      </div>
    </section>
  );
};
