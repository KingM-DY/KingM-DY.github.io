import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  containerClassName?: string;
  delay?: number;
}

export default function WordsPullUpMultiStyle({
  segments,
  containerClassName = '',
  delay = 0,
}: WordsPullUpMultiStyleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  let globalIndex = 0;
  const allWords: { word: string; className: string; globalIndex: number }[] = [];

  segments.forEach((seg) => {
    const words = seg.text.split(' ');
    words.forEach((word) => {
      allWords.push({ word, className: seg.className || '', globalIndex });
      globalIndex++;
    });
  });

  return (
    <span ref={ref} className={`inline-flex flex-wrap justify-center ${containerClassName}`}>
      {allWords.map((item, i) => (
        <motion.span
          key={i}
          initial={{ y: 20 }}
          animate={isInView ? { y: 0 } : { y: 20 }}
          transition={{
            duration: 0.6,
            delay: delay + i * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            display: 'inline-block',
            marginRight: '0.35em',
          }}
          className={item.className}
        >
          {item.word}
        </motion.span>
      ))}
    </span>
  );
}
