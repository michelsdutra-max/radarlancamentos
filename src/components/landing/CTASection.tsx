import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cta" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "radial-gradient(circle at center, #1a0005 0%, #0B0B0F 70%)" }} />
      {/* Glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-radar-red/5 blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">
            Ou você continua <span className="text-radar-gray-light">chegando atrasado</span>…
            <br />ou começa a <span className="text-gradient-red">chegar primeiro</span>
          </h2>

          <p className="text-radar-gray text-lg mb-10 max-w-lg mx-auto">
            Cada dia sem o Radar é uma oportunidade que você entrega de bandeja para outro afiliado.
          </p>

          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-radar-red px-10 py-5 text-lg font-bold text-white transition-all hover:bg-radar-red-hover glow-red hover:scale-105"
          >
            Acessar o Radar agora
            <ArrowRight className="h-5 w-5" />
          </a>

          <p className="text-radar-gray-light text-xs mt-6">Acesso imediato • Suporte dedicado</p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
