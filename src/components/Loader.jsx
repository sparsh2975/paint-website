import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="relative w-20 h-20">
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-white/10"
            />
            <motion.span
              className="absolute inset-0 rounded-full border-t-2 border-opus-orange"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-3 rounded-full bg-opus-gradient"
              animate={{ scale: [0.85, 1, 0.85] }}
              transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
            />
          </div>
          <motion.p
            className="mt-6 font-display text-sm tracking-[0.3em] uppercase text-muted"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            HR Enterprises
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
