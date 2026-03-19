import { motion } from "framer-motion";
import { MessageSquare, Star } from "lucide-react";

const testimonials = [
  { name: "Lucas M.", role: "Afiliado Digital", text: "Encontrei 3 lançamentos antes de todo mundo. Em um deles fui o primeiro afiliado aprovado." },
  { name: "Camila R.", role: "Produtora e Afiliada", text: "O Radar mudou minha forma de trabalhar. Antes eu gastava horas, agora encontro tudo em minutos." },
  { name: "Rafael S.", role: "Afiliado Top 10 Hotmart", text: "A vantagem competitiva é real. Chegar primeiro muda completamente seus resultados." },
];

const SocialProofSection = () => {
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
            Quem usa, <span className="text-gradient-red">recomenda</span>
          </h2>
          <p className="text-radar-gray text-lg">Resultados reais de afiliados que usam o Radar</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-glass rounded-xl p-6"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-radar-red text-radar-red" />
                ))}
              </div>
              <p className="text-radar-gray text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-radar-red/10 flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-radar-red" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-radar-gray-light text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
