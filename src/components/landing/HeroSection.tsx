import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-radar.png')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-radar-dark/70" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 50%, rgba(26,0,5,0.8) 0%, rgba(11,11,15,0.95) 70%)",
        }}
      />

      <div className="container relative z-10 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-radar-red/20 bg-radar-red/5 px-4 py-1.5 mb-8">
            <span className="h-2 w-2 rounded-full bg-radar-red animate-pulse-glow" />
            <span className="text-sm text-radar-gray">Radar ativo — oportunidades em tempo real</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
            Descubra lançamentos{" "}
            <span className="text-gradient-red">antes da maioria</span>{" "}
            e lucre como afiliado
          </h1>

          <p className="text-lg md:text-xl text-radar-gray leading-relaxed mb-10 max-w-xl">
            A ferramenta que encontra vídeos programados no YouTube, filtrando por país,
            idioma e palavras-chave — para você se afiliar antes da concorrência.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-radar-red px-8 py-4 text-base font-semibold text-white transition-all hover:bg-radar-red-hover glow-red-sm hover:glow-red"
            >
              Quero acessar o Radar
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-radar-red/40 px-8 py-4 text-base font-semibold text-radar-red transition-all hover:bg-radar-red/10"
            >
              Como funciona
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
