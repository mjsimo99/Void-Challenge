import { HelpCircle, QrCode, Gift } from "lucide-react";
import { Button } from "../../components/Button";
import { ArrowRight } from "../../components/icons/ArrowRight";

const STATS = [
  { value: "500K+", label: "Interactions/mois", color: "text-green-700" },
  { value: "50+", label: "Marques actives", color: "text-red-600" },
  { value: "x3.5", label: "ROI moyen", color: "text-green-700" },
];
const TRUSTED_BRANDS = ["Maroc Telecom", "Inwi", "Orange", "Carrefour"];

export const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] sm:min-h-[700px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-red-50"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(226,232,240,0.3) 2px, transparent 2px),
            linear-gradient(90deg, rgba(226,232,240,0.3) 2px, transparent 2px)
          `,
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-24 lg:py-32 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 space-y-8">
            <div className="space-y-2">
              <h1 className="font-bold text-slate-900 text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.2]">
                Transformez
                <br />
                chaque{" "}
                <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                  produit
                </span>
              </h1>
              <h1 className="font-bold text-slate-900 text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.2]">
                en expérience de
                <br />
                jeu
              </h1>
            </div>

            <p className="text-slate-600 text-xl sm:text-2xl leading-8 max-w-xl">
              YouCanWin connecte vos marques aux fans de football à travers des
              mécaniques de gamification innovantes.{" "}
              <span className="font-semibold text-slate-900">
                Codes QR, cartes digitales, défis et récompenses.
              </span>
            </p>

            <div className="flex flex-wrap gap-8 sm:gap-12">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className={`font-bold text-3xl sm:text-4xl ${stat.color}`}>
                    {stat.value}
                  </span>
                  <span className="font-medium text-slate-600 text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-nowrap gap-4">
              <Button
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight color="white" />}
              >
                Voir la démo
              </Button>
              <Button variant="secondary" size="lg" leftIcon={<HelpCircle className="w-5 h-5" />}>
                Comment ça marche
              </Button>
            </div>

            <div className="pt-8 border-t border-slate-200">
              <p className="text-xs font-medium text-slate-500 tracking-wider uppercase mb-4">
                Ils nous font confiance
              </p>
              <div className="flex flex-wrap gap-8 text-slate-400 font-medium text-sm">
                {TRUSTED_BRANDS.map((brand) => (
                  <span key={brand}>{brand}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end relative">
            <div className="relative">
              <div className="w-[280px] sm:w-[320px] lg:w-[432px] rounded-[40px] overflow-hidden border-8 border-slate-900 shadow-2xl bg-white">
                <div className="bg-gradient-to-b from-green-600 to-green-800 px-6 py-8 text-white">
                  <p className="text-xs font-medium tracking-wider opacity-90">
                    ALBUM DIGITAL 2025
                  </p>
                  <h3 className="font-bold text-2xl mt-2">Ma Collection</h3>
                  <div className="flex gap-6 mt-4">
                    <div>
                      <span className="font-bold text-2xl">127</span>
                      <p className="text-xs opacity-75">Cartes</p>
                    </div>
                    <div>
                      <span className="font-bold text-2xl">76%</span>
                      <p className="text-xs opacity-75">Complet</p>
                    </div>
                    <div>
                      <span className="font-bold text-2xl">#12</span>
                      <p className="text-xs opacity-75">Rang</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 p-4 bg-white min-h-[200px]">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="aspect-[3/4] rounded-lg bg-gradient-to-br from-slate-100 to-slate-200"
                    />
                  ))}
                </div>
                <div className="px-6 py-4 border-t border-slate-100 flex justify-around">
                  {["Collection", "Scanner", "Échanges", "Profil"].map((item) => (
                    <div key={item} className="flex flex-col items-center gap-1">
                      <div className="w-5 h-5 rounded bg-slate-300" />
                      <span className="text-[10px] text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-4 -right-4 sm:right-0 bg-white rounded-2xl p-4 shadow-lg border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                    <QrCode className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">Scan QR Code</p>
                    <p className="text-slate-500 text-xs">Débloquer une carte</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 sm:left-0 bg-white rounded-2xl p-4 shadow-lg border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                    <Gift className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">Récompense</p>
                    <p className="text-slate-500 text-xs">Tirage hebdomadaire</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
