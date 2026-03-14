import {
  ShoppingCart,
  QrCode,
  CreditCard,
  Library,
  Gift,
} from "lucide-react";

const STEPS = [
  {
    id: 1,
    title: "Achat produit",
    description: "Le client achète votre produit en magasin",
    color: "green",
    Icon: ShoppingCart,
  },
  {
    id: 2,
    title: "Scan QR Code",
    description: "Il scanne le code sur l'emballage",
    color: "green",
    Icon: QrCode,
  },
  {
    id: 3,
    title: "Déblocage carte",
    description: "Une carte digitale est débloquée",
    color: "green",
    Icon: CreditCard,
  },
  {
    id: 4,
    title: "Collection",
    description: "Il complète sa collection",
    color: "red",
    Icon: Library,
  },
  {
    id: 5,
    title: "Récompenses",
    description: "Participe aux tirages",
    color: "red",
    Icon: Gift,
  },
];

export const CustomerJourneySection = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-bold text-slate-900 text-3xl sm:text-4xl mb-4">
            Un parcours client simple et engageant
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            De l&apos;achat du produit à la récompense, en 5 étapes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {STEPS.map((step) => {
            const Icon = step.Icon;
            return (
              <div
                key={step.id}
                className="relative flex flex-col items-center p-6 pt-16 rounded-xl bg-white transition-colors"
              >
                <span
                  className={`absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full font-bold text-white text-xs ${
                    step.color === "green" ? "bg-green-600" : "bg-red-600"
                  }`}
                >
                  {step.id}
                </span>
                <div
                  className={`absolute top-0 left-1/2 -translate-x-1/2 flex h-16 w-16 items-center justify-center rounded-2xl bg-white border-2 shadow-md ${
                    step.color === "green"
                      ? "border-green-200 text-green-600"
                      : "border-red-200 text-red-600"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-slate-900 text-base text-center mt-4">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm text-center mt-2 leading-5">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
