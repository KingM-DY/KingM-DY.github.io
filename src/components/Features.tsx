import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, ArrowRight, Code2, Lightbulb, Palette, type LucideIcon } from 'lucide-react';
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle';

interface FeatureCardProps {
  index: number;
  title: string;
  items: string[];
  Icon?: LucideIcon;
  isVideo?: boolean;
  videoSrc?: string;
  link?: string;
}

function FeatureCard({ index, title, items, Icon, isVideo, videoSrc, link = '#' }: FeatureCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-[#212121] rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden"
      style={{ minHeight: '320px' }}
    >
      {/* Video background card */}
      {isVideo && videoSrc && (
        <>
          <video
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80 rounded-2xl" />
        </>
      )}

      <div className={`relative z-10 ${isVideo ? 'mt-auto' : ''}`}>
        {/* Icon (skip for video card) */}
        {!isVideo && Icon && (
          <div
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-6"
            style={{ background: 'rgba(222, 219, 200, 0.08)', color: '#DEDBC8' }}
          >
            <Icon size={20} strokeWidth={1.5} />
          </div>
        )}

        {/* Title (skip for video card) */}
        {!isVideo && (
          <h3
            className="font-medium text-lg sm:text-xl mb-1"
            style={{ color: '#DEDBC8' }}
          >
            {title}
          </h3>
        )}

        {/* Checklist */}
        {!isVideo && (
          <ul className="space-y-3 mt-5">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <Check size={15} className="mt-0.5 shrink-0" style={{ color: '#DEDBC8' }} />
                <span className="text-gray-400 text-xs sm:text-sm">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Learn more (only for non-video cards) */}
      {!isVideo && (
        <a
          href={link}
          target={link.startsWith('http') ? '_blank' : undefined}
          rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="relative z-10 inline-flex items-center gap-1.5 text-xs sm:text-sm mt-6 group hover:underline underline-offset-4 w-fit"
          style={{ color: '#DEDBC8' }}
        >
          了解更多
          <ArrowRight size={13} style={{ transform: 'rotate(-45deg)' }} />
        </a>
      )}
    </motion.div>
  );
}

export default function Features() {
  const features = [
    {
      title: '',
      isVideo: true,
      videoSrc: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4',
    },
    {
      title: '技术开发',
      items: [
        'Vue 前端开发',
        'Spring 框架后端开发',
        '数据库与 API 设计',
        'Git 基础',
        'Python 自动化流程开发',
      ],
      Icon: Code2,
      link: 'https://github.com/KingM-DY/AI-Writer',
    },
    {
      title: '产品设计',
      items: [
        '用户调研与需求分析',
        '原型设计与流程梳理',
        '数据驱动决策',
        '跨团队协作',
      ],
      Icon: Lightbulb,
    },
    {
      title: '创意视觉',
      items: [
        '视觉设计',
        '品牌识别与排版',
        '动效与交互动画',
        'AI 辅助创作',
      ],
      Icon: Palette,
    },
  ];

  return (
    <section id="features" className="min-h-screen bg-black py-20 md:py-32 px-4 md:px-6 relative">
      {/* Noise background */}
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal"
            style={{ color: '#DEDBC8' }}
          >
            <WordsPullUpMultiStyle
              segments={[
                { text: '三个方向，一条主线。', className: '' },
              ]}
            />
          </h2>
          <p
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mt-2"
            style={{ color: '#6b6b6b' }}
          >
            在交界处创造价值。
          </p>
        </div>

        {/* Card grid - 1 col on mobile, 2 on md, 4 on lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]">
          {features.map((feature, i) => (
            <FeatureCard
              key={i}
              index={i}
              title={feature.title}
              items={feature.items || []}
              Icon={feature.Icon}
              isVideo={feature.isVideo}
              videoSrc={feature.videoSrc}
              link={feature.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}