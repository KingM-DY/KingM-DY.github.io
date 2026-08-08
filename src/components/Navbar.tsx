import { useEffect, useState } from 'react';

const navItems = [
  { label: '首页', href: '#home' },
  { label: '关于', href: '#about' },
  { label: '技能', href: '#features' },
  { label: '作品', href: '#projects' },
  { label: '联系', href: '#footer' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
      }}
      className="pt-3"
    >
      <div
        className="rounded-2xl px-4 py-2 md:px-8 transition-all duration-400"
        style={{
          background: scrolled
            ? 'rgba(0, 0, 0, 0.75)'
            : 'rgba(0, 0, 0, 0.35)',
          backdropFilter: scrolled ? 'blur(16px)' : 'blur(6px)',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'blur(6px)',
          border: scrolled
            ? '1px solid rgba(255, 255, 255, 0.08)'
            : '1px solid transparent',
        }}
      >
        <ul className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-[10px] sm:text-xs md:text-sm transition-colors duration-300"
                style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#E1E0CC')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)')}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}