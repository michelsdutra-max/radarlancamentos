import { motion } from "framer-motion";
import { Radar, Globe, Languages, SearchCode } from "lucide-react";

const features = [
  { icon: SearchCode, title: "Busca automática", desc: "Encontra vídeos programados automaticamente sem você precisar pesquisar manualmente." },
  { icon: Globe, title: "Filtro por país", desc: "Segmente lançamentos por região geográfica para oportunidades locais e internacionais." },
  { icon: Languages, title: "Filtro por idioma", desc: "Filtre por idioma para encontrar lançamentos no seu mercado de atuação." },
  { icon: Radar, title: "Palavras-chave", desc: "Busque por termos estratégicos e descubra lançamentos do seu nicho antes de todos." },
];

const SolutionSection = () => {
  return (
    <section className="py-20 md:py-28 bg-radar-dark">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-radar-red text-sm font-semibold tracking-wider uppercase mb-4 block">A solução</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Conheça o <span className="text-gradient-red">Radar de Lançamentos</span>
          </h2>
          <p className="text-radar-gray text-lg max-w-2xl mx-auto">
            Um sistema inteligente que vasculha o YouTube e entrega para você os lançamentos
            antes que eles aconteçam.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-glass rounded-xl p-6 hover:border-glow transition-all group"
            >
              <div className="h-12 w-12 rounded-xl bg-radar-red/10 flex items-center justify-center mb-4 group-hover:glow-red-sm transition-all">
                <f.icon className="h-6 w-6 text-radar-red" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-radar-gray text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
