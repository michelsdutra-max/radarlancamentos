import { motion } from "framer-motion";
import { Search, SlidersHorizontal, Radar, Rocket } from "lucide-react";

const steps = [
  { icon: Search, num: "01", title: "Escolha a palavra-chave", desc: "Digite termos do nicho que quer monitorar: 'lançamento', 'aula gratuita', 'masterclass'…" },
  { icon: SlidersHorizontal, num: "02", title: "Filtre por país e idioma", desc: "Selecione o mercado alvo para encontrar lançamentos relevantes para sua audiência." },
  { icon: Radar, num: "03", title: "Encontre lançamentos", desc: "O Radar varre o YouTube e entrega vídeos programados — sinais de lançamentos em andamento." },
  { icon: Rocket, num: "04", title: "Entre antes da concorrência", desc: "Com os dados em mãos, se afilie antes que o mercado descubra. Vantagem real." },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-radar-dark">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-radar-red text-sm font-semibold tracking-wider uppercase mb-4 block">Simples e direto</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Como funciona
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="card-glass rounded-xl p-6 flex items-start gap-5"
            >
              <div className="flex-shrink-0 h-14 w-14 rounded-xl bg-radar-red/10 border border-radar-red/20 flex items-center justify-center">
                <s.icon className="h-7 w-7 text-radar-red" />
              </div>
              <div>
                <div className="text-radar-gray-light text-xs font-semibold tracking-wider uppercase mb-1">Passo {s.num}</div>
                <h3 className="text-white font-semibold text-lg mb-1">{s.title}</h3>
                <p className="text-radar-gray text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
