import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Funciona para qualquer nicho?", a: "Sim. O Radar busca por palavras-chave, então você pode monitorar qualquer nicho: saúde, finanças, desenvolvimento pessoal, marketing, emagrecimento e muito mais." },
  { q: "Preciso investir muito para começar?", a: "Não. O Radar é uma ferramenta acessível e o retorno pode vir já no primeiro lançamento que você descobrir antes da concorrência." },
  { q: "Funciona para quem está começando?", a: "Absolutamente. Na verdade, iniciantes são os que mais se beneficiam — ter uma vantagem competitiva desde o início acelera muito os resultados." },
  { q: "Preciso saber inglês?", a: "Não. O Radar possui filtro por idioma, então você pode buscar lançamentos em português ou em qualquer outro idioma." },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0B0B0F 0%, #12121A 100%)" }} />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Perguntas <span className="text-gradient-red">frequentes</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-glass rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-white font-semibold text-sm pr-4">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 text-radar-gray-light flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5 pt-0">
                  <p className="text-radar-gray text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
