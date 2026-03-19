import { motion } from "framer-motion";
import { TrendingUp, Percent, Zap, ArrowDownCircle, DollarSign } from "lucide-react";

const benefits = [
  { icon: TrendingUp, title: "Mais oportunidades", desc: "Acesse dezenas de lançamentos que passariam despercebidos." },
  { icon: Percent, title: "Mais conversão", desc: "Entre na fase quente do lançamento e aumente suas taxas de conversão." },
  { icon: Zap, title: "Mais velocidade", desc: "Encontre em segundos o que levaria horas de pesquisa manual." },
  { icon: ArrowDownCircle, title: "Menos esforço", desc: "Automatize a busca e foque no que realmente importa: vender." },
  { icon: DollarSign, title: "Mais lucro", desc: "Afiliados que chegam primeiro capturam as melhores comissões." },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0B0B0F 60%, #1a0010 100%)" }} />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            O que você <span className="text-gradient-red">ganha</span> com o Radar
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-glass rounded-xl p-6 text-center"
            >
              <div className="h-12 w-12 rounded-full bg-radar-green/10 flex items-center justify-center mx-auto mb-4">
                <b.icon className="h-6 w-6 text-radar-green" />
              </div>
              <h3 className="text-white font-semibold mb-2">{b.title}</h3>
              <p className="text-radar-gray text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
