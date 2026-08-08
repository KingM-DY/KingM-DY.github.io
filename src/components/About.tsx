import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle';

function AnimatedParagraph({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = text.split('');
  const totalChars = chars.length;

  return (
    <p
      ref={ref}
      className="text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl mx-auto"
      style={{ color: '#DEDBC8' }}
    >
      {chars.map((char, i) => {
        const charProgress = i / totalChars;
        const opacity = useTransform(
          scrollYProgress,
          [charProgress - 0.1, charProgress + 0.05],
          [0.2, 1]
        );
        return (
          <motion.span key={i} style={{ opacity }}>
            {char}
          </motion.span>
        );
      })}
    </p>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-black py-20 md:py-32 px-4 md:px-6">
      <div className="bg-[#101010] rounded-2xl md:rounded-[2rem] max-w-6xl mx-auto px-6 sm:px-12 md:px-20 py-16 md:py-24 text-center">
        {/* Label */}
        <p className="text-primary text-[10px] sm:text-xs tracking-widest uppercase mb-8">
          自我介绍 · ABOUT
        </p>

        {/* Main heading with multi-style */}
        <h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-4xl mx-auto"
          style={{ lineHeight: '1.35', color: '#DEDBC8' }}
        >
          <WordsPullUpMultiStyle
            segments={[
              { text: '我是 King M，', className: 'font-normal' },
              { text: '一个不给自己设限的创作者。', className: 'font-normal' },
              { text: '写代码，做设计，想产品，三件事我都玩。', className: 'font-normal' },
            ]}
            delay={0.2}
          />
        </h2>

        {/* Body with scroll reveal */}
        <div className="mt-12">
          <AnimatedParagraph text="过去几年里，我在技术、设计与产品之间不断切换——写代码、做产品、画界面、想策略。每一段经历都让我更确信：真正好的作品，往往诞生在不同领域的交界处。" />
        </div>
      </div>
    </section>
  );
}