import { motion } from "framer-motion";
import { Target } from "lucide-react";

const InsightSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0B0B0F 60%, #1a0010 100%)" }} />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-radar-purple/10 border border-radar-purple/20 mb-8">
            <Target className="h-8 w-8 text-radar-purple" />
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Os melhores afiliados{" "}
            <span className="text-gradient-purple">não procuram</span>…
            <br />eles <span className="text-gradient-red">garimpam</span>
          </h2>

          <p className="text-radar-gray text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Todo grande lançamento segue um padrão: semanas antes de abrir o carrinho,
            aulas são programadas no YouTube. Quem detecta esse sinal primeiro,
            se afiliar primeiro — e lucra mais.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { step: "1", label: "Aula programada", sub: "Sinal detectado" },
              { step: "2", label: "Pré-lançamento", sub: "Afiliação aberta" },
              { step: "3", label: "Lançamento", sub: "Concorrência lotada" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="card-glass rounded-xl p-6 text-center"
              >
                <div className="text-2xl font-display font-bold text-radar-red mb-2">{item.step}</div>
                <div className="text-white font-semibold text-sm mb-1">{item.label}</div>
                <div className="text-radar-gray-light text-xs">{item.sub}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InsightSection;
