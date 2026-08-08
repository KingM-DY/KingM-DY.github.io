import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  delay?: number;
}

export default function WordsPullUp({ text, className = '', showAsterisk = false, delay = 0 }: WordsPullUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const words = text.split(' ');

  return (
    <span ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <span key={i} style={{ display: 'inline-flex', marginRight: '0.35em', position: 'relative' }}>
            <motion.span
              initial={{ y: 20 }}
              animate={isInView ? { y: 0 } : { y: 20 }}
              transition={{
                duration: 0.6,
                delay: delay + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ display: 'inline-block' }}
            >
              {word}
            </motion.span>
            {isLast && showAsterisk && (
              <motion.sup
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{
                  duration: 0.4,
                  delay: delay + words.length * 0.08 + 0.2,
                }}
                style={{
                  position: 'absolute',
                  top: '0.65em',
                  right: '-0.3em',
                  fontSize: '0.31em',
                  lineHeight: 1,
                }}
              >
                *
              </motion.sup>
            )}
          </span>
        );
      })}
    </span>
  );
}
