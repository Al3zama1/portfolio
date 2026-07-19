import React from 'react'
import { motion } from 'framer-motion'

function Reveal( { children, direction = 'top', delay = 0, duration = 0.7, distance = 48 }) {

    const {x, y} = direction === 'top'
        ? {x: 0, y: distance}
        : direction === 'bottom'
        ? {x: 0, y: -distance}
        : direction === 'left'
        ? {x: -distance, y: 0}
        : {x: distance, y: 0}

  return (
    <motion.div
        initial={{ opacity: 0, x, y }}
        whileInView={{ opacity: 1, y: 0}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
            delay,
            duration: 0.7,
            ease: 'easeOut'
        }}
    >
        {children}
    </motion.div>
  )
}

export default Reveal