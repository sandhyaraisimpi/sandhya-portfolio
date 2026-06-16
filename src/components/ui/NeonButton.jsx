import React from 'react'
import { motion } from 'framer-motion'

const NeonButton = ({ onClick, label, secondary = false }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.04, y: -1 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 210, damping: 18 }}
      className={`inline-flex items-center gap-3 rounded-full px-5 py-2.5 text-sm font-semibold transition-all border ${secondary ? 'bg-white/5 border-[#22c55e]/30 text-white hover:bg-[#22c55e]/10' : 'bg-[#111413] border-[#22c55e] text-[#22c55e] hover:bg-[#22c55e]/10 hover:text-white'}`}
    >
      <span className={`inline-flex h-2.5 w-2.5 rounded-full ${secondary ? 'bg-[#22c55e]/60' : 'bg-[#22c55e]'}`} />
      <span>{label}</span>
    </motion.button>
  )
}

export default NeonButton
