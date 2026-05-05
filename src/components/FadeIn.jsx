import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

export default function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.75,
  className = '',
  style = {},
}) {
  const y = direction === 'up' ? 28 : direction === 'down' ? -28 : 0
  const x = direction === 'left' ? 28 : direction === 'right' ? -28 : 0

  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}
