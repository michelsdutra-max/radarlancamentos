import { motion } from "framer-motion";
import { Zap, Clock, Filter, Trophy, TrendingUp } from "lucide-react";

const diffs = [
  { icon: Zap, title: "Chegue antes da maioria", desc: "Detecte lançamentos dias ou semanas antes da abertura do carrinho." },
  { icon: Clock, title: "Economize horas", desc: "Automatize a pesquisa que levaria horas em segundos com filtros inteligentes." },
  { icon: Filter, title: "Filtro inteligente", desc: "País, idioma, palavra-chave — encontre exatamente o que precisa." },
  { icon: Trophy, title: "Vantagem competitiva", desc: "Enquanto outros ainda procuram, você já está posicionado." },
  { icon: TrendingUp, title: "Escalável", desc: "Monitore múltiplos nichos e mercados simultaneamente sem esforço extra." },
];

const DifferentialsSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0B0B0F 0%, #12121A 50%, #0B0B0F 100%)" }} />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Por que o Radar é <span className="text-gradient-red">diferente</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {diffs.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-glass rounded-xl p-6 text-center"
            >
              <div className="h-12 w-12 rounded-xl bg-radar-purple/10 border border-radar-purple/20 flex items-center justify-center mx-auto mb-4">
                <d.icon className="h-6 w-6 text-radar-purple" />
              </div>
              <h3 className="text-white font-semibold mb-2">{d.title}</h3>
              <p className="text-radar-gray text-sm leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
