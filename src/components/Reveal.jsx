import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ 

        type: "spring",
        damping: 20,    
        stiffness: 80,  
        delay: delay,
      }}
  
      style={{ 
        width: "100%",
        willChange: "transform, opacity",
        backfaceVisibility: "hidden" 
      }}
    >
      {children}
    </motion.div>
  );
};