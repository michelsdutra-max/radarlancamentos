import { motion } from "framer-motion";
import { Radar, Search, Globe, Zap, TrendingUp } from "lucide-react";

const RadarShowcaseSection = () => {
  return (
    <section className="relative overflow-visible py-20 md:py-32">
      {/* Animated radar background that overflows upward over the Hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-[15%] w-[80vw] sm:w-[60vw] md:w-[50vw] aspect-square max-w-[700px] z-0"
      >
        {/* radial glow */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,0,51,0.18) 0%, rgba(255,0,51,0.06) 35%, rgba(11,11,15,0) 65%)",
          }}
        />

        {/* concentric rings */}
        <svg
          viewBox="0 0 600 600"
          className="absolute inset-0 w-full h-full"
        >
          <defs>
            <radialGradient id="sweepGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FF0033" stopOpacity="0.55" />
              <stop offset="70%" stopColor="#FF0033" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#FF0033" stopOpacity="0" />
            </radialGradient>
          </defs>

          {[80, 150, 220, 290].map((r) => (
            <circle
              key={r}
              cx="300"
              cy="300"
              r={r}
              fill="none"
              stroke="#FF0033"
              strokeOpacity="0.18"
              strokeWidth="1"
            />
          ))}
          <line x1="10" y1="300" x2="590" y2="300" stroke="#FF0033" strokeOpacity="0.1" />
          <line x1="300" y1="10" x2="300" y2="590" stroke="#FF0033" strokeOpacity="0.1" />

          {/* sweep */}
          <g className="radar-sweep" style={{ transformOrigin: "300px 300px" }}>
            <path
              d="M300,300 L300,10 A290,290 0 0,1 590,300 Z"
              fill="url(#sweepGrad)"
            />
          </g>

          {/* blips */}
          <circle cx="430" cy="220" r="3" fill="#FF2D55" className="radar-blip" />
          <circle cx="200" cy="380" r="3" fill="#FF2D55" className="radar-blip" style={{ animationDelay: "1.2s" }} />
          <circle cx="370" cy="450" r="3" fill="#FF2D55" className="radar-blip" style={{ animationDelay: "2.4s" }} />
          <circle cx="150" cy="240" r="2.5" fill="#FF2D55" className="radar-blip" style={{ animationDelay: "0.6s" }} />
        </svg>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl rounded-2xl border border-radar-red/20 p-6 md:p-8"
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-radar-red glow-red-sm">
              <Radar className="h-5 w-5 text-white" aria-hidden />
            </div>
            <h2 className="text-xl md:text-2xl font-display font-bold">
              Radar de <span className="text-gradient-red">Lançamentos</span>
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-2 mb-5 border-b border-white/5">
            <button className="px-4 py-2 text-sm font-semibold rounded-t-lg bg-radar-dark-card text-white border-b-2 border-radar-red">
              Próximos
            </button>
            <button className="px-4 py-2 text-sm text-radar-gray inline-flex items-center gap-2 hover:text-white transition">
              <span className="h-2 w-2 rounded-full bg-radar-red animate-pulse-glow" />
              Ao Vivo
            </button>
            <button className="px-4 py-2 text-sm text-radar-gray hover:text-white transition">
              Anteriores
            </button>
          </div>

          {/* Search row */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-radar-gray-light" aria-hidden />
              <input
                type="text"
                aria-label="Palavras-chave"
                placeholder="Palavras-chave (ex: aulão, lançamento...)"
                className="w-full bg-radar-dark/60 border border-white/10 rounded-lg pl-10 pr-3 py-2.5 text-sm text-white placeholder:text-radar-gray-light focus:outline-none focus:border-radar-red/50"
              />
            </div>
            <select
              aria-label="Idioma"
              className="bg-radar-dark/60 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-radar-red/50"
            >
              <option>Português</option>
              <option>English</option>
              <option>Español</option>
            </select>
            <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-radar-red px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-radar-red-hover glow-red-sm">
              <Radar className="h-4 w-4" aria-hidden />
              Buscar Lançamentos
            </button>
          </div>

          {/* Feature mini-cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              {
                icon: Zap,
                title: "Encontre antes da concorrência",
                desc: "Detecte lançamentos e estreias em tempo real antes que outros afiliados descubram.",
              },
              {
                icon: Globe,
                title: "Monitore por idioma",
                desc: "Filtre por idioma e palavras-chave para encontrar oportunidades relevantes.",
              },
              {
                icon: TrendingUp,
                title: "Identifique oportunidades",
                desc: "Descubra vídeos em estreia com alto potencial de afiliação e posicione-se primeiro.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl bg-radar-dark/60 border border-white/5 p-4 hover:border-radar-red/30 transition-colors"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-radar-red/15 mb-3">
                  <Icon className="h-4 w-4 text-radar-red" aria-hidden />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1.5">{title}</h3>
                <p className="text-xs text-radar-gray leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RadarShowcaseSection;
