
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const ScrollInView = ({ children, delay = 0 }) => {
    const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
    return (
        <div>
            <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.4,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
        </div>
    );
};

export default ScrollInView;