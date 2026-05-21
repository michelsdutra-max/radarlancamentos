import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Crown, Gift } from "lucide-react";

const plans = [
  {
    name: "Mensal",
    icon: Zap,
    price: "R$ 97,00",
    priceNote: "à vista",
    description: "Ideal para testar o Radar e validar seus primeiros resultados.",
    features: [
      "Acesso completo ao Radar",
      "Busca por palavra-chave",
      "Filtro por país e idioma",
      "Suporte via e-mail",
      "Cancelamento a qualquer momento",
    ],
    cta: "Começar agora",
    highlighted: false,
  },
  {
    name: "Trimestral",
    icon: Sparkles,
    price: "R$ 247,00",
    priceNote: "ou 3x R$ 86,00",
    description: "Para quem já entendeu o valor e quer resultados consistentes.",
    features: [
      "Tudo do plano Mensal",
      "Economia de R$ 44",
      "Relatórios de tendências",
      "Suporte prioritário",
      "Acesso a atualizações",
    ],
    cta: "Escolher Trimestral",
    highlighted: false,
  },
  {
    name: "Anual",
    icon: Crown,
    price: "R$ 347,00",
    priceNote: "ou 12x R$ 43,00",
    description: "Pra quem vai fazer de lançamento sua estratégia principal",
    economy: "Economia de R$ 817 no ano",
    features: [
      "Tudo do plano Trimestral",
      "12 meses de acesso",
      "Prioridade em novas features",
      "Suporte VIP com resposta imediata",
    ],
    bonus: {
      title: "Bônus exclusivo: Produtos Ocultos",
      text: "Acesse o link de afiliação de produtos que não aparecem na busca pública da Hotmart — oportunidades que 99% dos afiliados nunca vão encontrar.",
    },
    cta: "Quero o anual",
    highlighted: true,
    badge: "MAIS VANTAJOSO",
  },
];

const PricingSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0B0B0F 0%, #12121A 50%, #0B0B0F 100%)" }} />
      {/* Subtle glow behind annual plan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] rounded-full bg-radar-red/3 blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-radar-red text-sm font-semibold tracking-wider uppercase mb-4 block">Escolha seu acesso</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Invista na sua <span className="text-gradient-red">vantagem competitiva</span>
          </h2>
          <p className="text-radar-gray text-lg max-w-2xl mx-auto">
            Quanto mais tempo você usar o Radar, mais lançamentos descobre e mais lucra.
            O plano Anual é a escolha inteligente de quem joga sério.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className={`
                relative rounded-2xl p-6 md:p-8 flex flex-col h-full text-center
                ${plan.highlighted
                  ? "bg-gradient-to-b from-radar-red/10 to-transparent border border-radar-red/30 glow-red-sm scale-[1.02] md:scale-[1.04]"
                  : "card-glass border border-white/[0.06]"
                }
              `}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-block rounded-full bg-radar-red px-4 py-1 text-[10px] font-bold tracking-wider text-white shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className={`h-12 w-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${plan.highlighted ? "bg-radar-red/15" : "bg-white/5"}`}>
                <plan.icon className={`h-6 w-6 ${plan.highlighted ? "text-radar-red" : "text-radar-gray"}`} />
              </div>

              <h3 className="text-white font-display font-bold text-xl mb-2">{plan.name}</h3>
              <p className="text-radar-gray-light text-sm mb-5 leading-relaxed min-h-[40px]">{plan.description}</p>

              <div className="mb-6">
                <div className="text-3xl md:text-4xl font-display font-bold text-white">{plan.price}</div>
                <div className={`text-sm mt-1 ${plan.highlighted ? "text-radar-green font-medium" : "text-radar-gray-light"}`}>
                  {plan.priceNote}
                </div>
              </div>

              <ul className="space-y-3 mb-8 text-left flex-1">
                {plan.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-3 text-sm">
                    <div className={`flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center mt-0.5 ${plan.highlighted ? "bg-radar-green/15" : "bg-radar-red/10"}`}>
                      <Check className={`h-3 w-3 ${plan.highlighted ? "text-radar-green" : "text-radar-red"}`} />
                    </div>
                    <span className="text-radar-gray leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`
                  inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-bold transition-all
                  ${plan.highlighted
                    ? "bg-radar-red text-white hover:bg-radar-red-hover glow-red-sm hover:glow-red hover:scale-105"
                    : "border border-radar-red/40 text-radar-red hover:bg-radar-red/10"
                  }
                `}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Trust bar below pricing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-radar-gray-light text-sm">
            Acesso imediato • Garantia de 7 dias • Cancele quando quiser
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
