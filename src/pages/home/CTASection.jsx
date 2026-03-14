import { Calendar, Mail } from "lucide-react";
import { Button } from "../../components/Button";

export const CTASection = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-red-600 to-red-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-20 text-center">
        <h2 className="font-bold text-white text-3xl sm:text-4xl mb-4">
          Prêt à transformer votre marketing ?
        </h2>
        <p className="text-red-50 text-lg mb-8 max-w-2xl mx-auto">
          Rejoignez les marques qui engagent leurs fans avec YouCanWin
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="white" size="lg" leftIcon={<Calendar className="w-5 h-5" />}>
            Planifier une démo gratuite
          </Button>
          <Button variant="outline" size="lg" leftIcon={<Mail className="w-5 h-5" />}>
            Nous contacter
          </Button>
        </div>
      </div>
    </section>
  );
};
