import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X } from 'lucide-react';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const [showPhone, setShowPhone] = useState(false);
  const [showWechat, setShowWechat] = useState(false);

  const PHONE = '18807246995';
  const GITHUB = 'https://github.com/KingM-DY';
  const WECHAT_QR = '/wechat-qr.png';

  const credits = [
    { label: '网页技术栈', value: 'React · Vite · TypeScript · Tailwind CSS · framer-motion · lucide-react' },
    { label: '邮箱', value: 'wzdbsdy@gmail.com  or  2071215837@qq.com' },
    { label: '代码仓库', value: 'github.com/KingM-DY', href: GITHUB, external: true },
  ];

  return (
    <footer id="footer" ref={ref} className="bg-black py-20 md:py-32 px-4 md:px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto"
      >
        {/* End of reel */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase font-mono"
            style={{ color: '#DEDBC8' }}
          >
            <span>联系方式</span>
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-block w-3 h-3 bg-current"
            />
          </div>
        </div>

        {/* Credits roll */}
        <div
          className="space-y-3 font-mono text-xs sm:text-sm"
          style={{ color: 'rgba(225, 224, 204, 0.6)' }}
        >
          {credits.map((credit, i) => {
            const inner = (
              <span
                className="text-right"
                style={{ color: '#E1E0CC', fontStyle: 'italic', fontFamily: '"Instrument Serif", serif' }}
              >
                {credit.value}
                {credit.href && (
                  <span className="ml-2 not-italic opacity-50">↗</span>
                )}
              </span>
            );
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className="flex items-center justify-between border-b border-white/5 pb-3"
              >
                <span className="tracking-widest uppercase text-[10px] sm:text-xs">
                  {credit.label}
                </span>
                {credit.href ? (
                  <a
                    href={credit.href}
                    target={credit.external ? '_blank' : undefined}
                    rel={credit.external ? 'noopener noreferrer' : undefined}
                    className="hover:opacity-70 transition-opacity"
                  >
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </motion.div>
            );
          })}

          {/* WeChat row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.3 + credits.length * 0.15 }}
            className="flex items-center justify-between border-b border-white/5 pb-3"
          >
            <span className="tracking-widest uppercase text-[10px] sm:text-xs">微信</span>
            <button
              onClick={() => { setShowWechat(true); setShowPhone(false); }}
              className="text-right hover:opacity-70 transition-opacity"
              style={{ color: '#E1E0CC', fontStyle: 'italic', fontFamily: '"Instrument Serif", serif' }}
            >
              点击显示二维码
            </button>
          </motion.div>

          {/* Phone row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.3 + (credits.length + 1) * 0.15 }}
            className="flex items-center justify-between border-b border-white/5 pb-3"
          >
            <span className="tracking-widest uppercase text-[10px] sm:text-xs">电话</span>
            <button
              onClick={() => { setShowPhone(true); setShowWechat(false); }}
              className="text-right hover:opacity-70 transition-opacity"
              style={{ color: '#E1E0CC', fontStyle: 'italic', fontFamily: '"Instrument Serif", serif' }}
            >
              {showPhone ? PHONE : '点击显示'}
            </button>
          </motion.div>
        </div>

        {/* WeChat QR Modal */}
        {showWechat && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="mt-12 flex flex-col items-center gap-4"
          >
            <div className="bg-white p-3 rounded-2xl relative">
              <button
                onClick={() => setShowWechat(false)}
                className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform"
              >
                <X size={16} />
              </button>
              <img
                src={WECHAT_QR}
                alt="WeChat QR"
                className="w-48 h-48 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).parentElement!.innerHTML +=
                    '<div class="w-48 h-48 flex items-center justify-center text-gray-400 text-xs text-center p-4">请把微信二维码放到<br/>public/wechat-qr.png</div>';
                }}
              />
            </div>
            <p className="text-xs text-gray-500 tracking-wider uppercase font-mono">
              扫码添加微信
            </p>
          </motion.div>
        )}

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} King M. 保留所有权利。
          </p>
        </div>
      </motion.div>
    </footer>
  );
}