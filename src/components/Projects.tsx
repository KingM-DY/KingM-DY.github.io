import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    name: 'AI Writer',
    desc: '头条文章自动化生成与发布系统。基于 DeepSeek API的今日头条文章自动生成、配图、预览审核、一键发布工具。',
    tags: ['Python', 'AI', 'Web'],
    href: 'https://github.com/KingM-DY/AI-Writer',
    links: [
      {
        label: '头条账号',
        href: 'https://www.toutiao.com/c/user/token/Ciic8jYCnJWTA_5XexH-5XeeV7LdmCoRhPgfDkKumEGMLXj3SljzDNk2GkkKPAAAAAAAAAAAAABQvwIKsca_y2MTbEFSyb2MSm2NXeuEOakIuWuxfl73RyiF5qvyAzxalkEbTLMM3ANx0RDk55gOGMPFg-oEIgEDv18F-w==/',
      },
    ],
  },
  {
    name: 'AI-video',
    desc: '舒尔特训练视频自动化生成系统。Python 驱动，定时产出短视频，从脚本到成片全流程自动化。',
    tags: ['Python', '自动化', '视频'],
    href: 'https://github.com/KingM-DY/AI-video',
    links: [
      {
        label: '抖音视频账号',
        href: 'https://www.douyin.com/user/MS4wLjABAAAAudn3m40In0ONuCoyRi9P-kAf4-mJ7Qpxu9d11TIo82M-ZhHrAiDtCgV7GDgwVVRi?from_tab_name=main',
      },
    ],
  },
  {
    name: '水果商城',
    desc: '全栈电商毕设。Spring Boot 3 + Vue 3 前后端分离，含购物车、订单、支付宝沙箱支付与 AI 客服。',
    tags: ['Spring Boot', 'Vue 3', 'MySQL', 'Redis', '支付'],
    href: 'https://github.com/KingM-DY/fruitshop',
  },
  {
    name: '个人主页',
    desc: '你现在看到的这个网站。React + Vite + TypeScript，灵感来自 cinematic 设计语言。',
    tags: ['React', 'Vite', 'TypeScript', 'Tailwind CSS'],
    href: '#',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" ref={ref} className="bg-black py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-primary text-[10px] sm:text-xs tracking-widest uppercase mb-4">
            作品 · PROJECTS
          </p>
          <h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal"
            style={{ color: '#DEDBC8' }}
          >
            几个我做过的东西。
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((proj, i) => (
            <motion.a
              key={proj.name}
              href={proj.href}
              target={proj.href.startsWith('http') ? '_blank' : undefined}
              rel={proj.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.3 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group block bg-[#141418] rounded-2xl p-6 sm:p-8 border border-white/5 hover:border-white/10 transition-all duration-400 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-5">
                <h3
                  className="font-medium text-lg sm:text-xl"
                  style={{ color: '#DEDBC8' }}
                >
                  {proj.name}
                </h3>
                <span className="shrink-0 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowRight size={18} style={{ color: '#DEDBC8' }} />
                </span>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                {proj.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] sm:text-xs px-3 py-1 rounded-full border"
                    style={{
                      borderColor: 'rgba(222, 219, 200, 0.15)',
                      color: 'rgba(222, 219, 200, 0.7)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {proj.href !== '#' && (
                <div className="mt-5 flex flex-col gap-1.5 text-xs">
                  {proj.href.startsWith('https://github.com/') && (
                    <a
                      href={proj.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:underline"
                      style={{ color: 'rgba(222, 219, 200, 0.4)' }}
                    >
                      <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
                      <span>{proj.href.replace('https://github.com/', '')}</span>
                    </a>
                  )}
                  {proj.links?.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:underline"
                      style={{ color: 'rgba(222, 219, 200, 0.4)' }}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      <span>{l.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}