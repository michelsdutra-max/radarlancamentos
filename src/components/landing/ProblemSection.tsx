import { motion } from "framer-motion";
import { Clock, Users, Search, TrendingDown, AlertTriangle } from "lucide-react";

const problems = [
  { icon: Search, text: "Perde horas procurando lançamentos manualmente" },
  { icon: Clock, text: "Descobre as oportunidades quando já é tarde demais" },
  { icon: Users, text: "Compete com centenas de afiliados pelo mesmo produto" },
  { icon: TrendingDown, text: "Conversões baixas por chegar depois da concorrência" },
  { icon: AlertTriangle, text: "Não tem um sistema para garimpar oportunidades" },
];

const ProblemSection = () => {
  return (
    <section className="py-20 md:py-28 bg-radar-dark">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            O problema <span className="text-gradient-red">não é esforço</span>
          </h2>
          <p className="text-radar-gray text-lg max-w-2xl mx-auto">
            A maioria dos afiliados trabalha duro. O problema é que estão sempre um passo atrás.
            Enquanto você pesquisa, outros já se afiliaram.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-glass rounded-xl p-6 flex items-start gap-4"
            >
              <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-radar-red/10 flex items-center justify-center">
                <item.icon className="h-5 w-5 text-radar-red" />
              </div>
              <p className="text-radar-gray text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
