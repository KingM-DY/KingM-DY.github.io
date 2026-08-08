import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import WordsPullUp from './WordsPullUp';

const fadeUpEase = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="h-screen relative p-4 md:p-6 bg-black">
      {/* Outer container with rounded corners */}
      <div className="relative h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Noise overlay */}
        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="grid grid-cols-12 gap-4 px-4 sm:px-8 md:px-12 pb-8 sm:pb-12 md:pb-16">
            {/* Giant heading - 8 cols */}
            <div className="col-span-12 md:col-span-8">
              <h1
                className="font-medium leading-[0.85] tracking-[-0.07em] relative inline-block"
                style={{
                  fontSize: 'clamp(1.5rem, 10vw, 7.5rem)',
                  color: '#E1E0CC',
                  whiteSpace: 'nowrap',
                }}
              >
                <WordsPullUp text="KING M" showAsterisk={true} delay={0.2} />
              </h1>
            </div>

            {/* Description + CTA - 4 cols */}
            <div className="col-span-12 md:col-span-4 flex flex-col justify-end gap-6 md:pl-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: fadeUpEase }}
                className="text-xs sm:text-sm md:text-base"
                style={{ lineHeight: 1.2, color: 'rgba(225, 224, 204, 0.7)' }}
              >
                King M，计算机专业。在技术开发、产品设计与创意视觉的交界处游走。不给自己设限，用多重视角构建有温度的作品。
              </motion.p>

              <motion.a
                href="#about"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7, ease: fadeUpEase }}
                className="group inline-flex items-center gap-2 bg-primary rounded-full px-5 py-2.5 md:px-6 md:py-3 text-black font-medium text-sm sm:text-base transition-all duration-300 hover:gap-3 cursor-pointer w-fit"
              >
                了解更多
                <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight size={16} className="text-primary" />
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}