import { motion } from "framer-motion";
// Suppression de shadcn/ui car non installé

export default function Accueil() {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center"
      >
        Bienvenue sur mon Portfolio
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg max-w-2xl text-center text-gray-700"
      >
        Je suis un étudiant de 20 ans en 2ᵉ année de BTS SIO, passionné par le développement
        informatique, particulièrement la partie back‑end. Au cours de mes stages et missions
        d'intérim, j'ai pu réaliser plusieurs projets concrets, que vous pouvez retrouver sur
        la page dédiée.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl"
      >
        <div className="rounded-2xl shadow-md p-4"><div className="flex flex-col items-center text-center">$1</div></div>

        <div className="rounded-2xl shadow-md p-4"><div className="flex flex-col items-center text-center">$1</div></div>

        <div className="rounded-2xl shadow-md p-4"><div className="flex flex-col items-center text-center">$1</div></div>
      </motion.div>
    </div>
  );
}
