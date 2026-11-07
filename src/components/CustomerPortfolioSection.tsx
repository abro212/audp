import React, { useEffect, useRef, useState } from 'react';
import { Language } from '../types';
import { clientsList } from '../data/companyData';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface CustomerPortfolioProps {
  language: Language;
  onNavigatePage: (page: string) => void;
}

export const CustomerPortfolioSection: React.FC<CustomerPortfolioProps> = ({
  language,
  onNavigatePage
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================
            SECTION HEADER
           ========================================= */}
        <div 
          className={`flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10 transition-all duration-[600ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-[25px]'
          }`}
        >
          <div className="max-w-2xl">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-blue-50 border border-blue-200/80 text-[11px] font-bold text-blue-800 tracking-wider uppercase mb-2 sm:mb-3">
              {language === 'id' ? 'KLIEN KAMI' : 'OUR CLIENTS'}
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-950 tracking-tight leading-tight">
              {language === 'id' ? 'Dipercaya oleh Pemimpin Industri' : 'Trusted by Industry Leaders'}
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
              {language === 'id'
                ? 'Membangun kemitraan bisnis jangka panjang dengan perusahaan terkemuka di Indonesia.'
                : 'Building long-term partnerships with leading companies in Indonesia.'}
            </p>
          </div>

          {/* CTA: View All Clients on the right side */}
          <button
            onClick={() => onNavigatePage('klien')}
            className="group inline-flex items-center gap-2 self-start sm:self-end px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-gold-500 text-xs sm:text-sm font-bold text-navy-900 hover:text-gold-600 transition-colors duration-200 shadow-xs whitespace-nowrap"
          >
            <span>{language === 'id' ? 'Lihat Semua Klien' : 'View All Clients'}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* =========================================
            CLIENT CARDS (3 cols desktop, 2 cols tablet, 1 col mobile)
           ========================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4.5 lg:gap-5">
          {clientsList.map((client, index) => (
            <div
              key={client.id}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
              }}
              className={`group relative flex flex-col items-center justify-between p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-gold-500 hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-[5px] transition-all duration-300 ease-out cursor-default motion-reduce:transform-none motion-reduce:opacity-100 ${
                isVisible
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-[30px] scale-[0.97]'
              }`}
            >
              {/* Logo Container (70-80px height, centered, object-fit contain, original colors preserved) */}
              <div className="w-full h-20 flex items-center justify-center p-2 mb-3 bg-slate-50/50 rounded-xl group-hover:bg-slate-50/20 transition-colors">
                <img
                  src={client.logoUrl}
                  alt={client.name}
                  className="max-h-12 sm:max-h-14 max-w-[180px] sm:max-w-[200px] object-contain transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>

              {/* Industry Sector Badge */}
              <div className="mb-2">
                <span className="inline-block text-[10px] font-semibold text-blue-700 bg-blue-50/90 px-2.5 py-0.5 rounded-full border border-blue-200/60">
                  {client.sector[language]}
                </span>
              </div>

              {/* Company Name (12-13px typography, font-weight 500-600) */}
              <h3 className="text-[12px] sm:text-[13px] font-semibold text-slate-800 text-center leading-snug tracking-tight">
                {client.name}
              </h3>
            </div>
          ))}
        </div>

        {/* =========================================
            CORPORATE TRUST STATEMENT
           ========================================= */}
        <div 
          style={{
            transitionDelay: isVisible ? '650ms' : '0ms'
          }}
          className={`mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 bg-gradient-to-r from-slate-50 via-white to-slate-50 p-4 sm:px-6 sm:py-4 rounded-2xl border border-slate-200/80 shadow-xs transition-all duration-[600ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-[20px]'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center flex-shrink-0 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-navy-950">
                {language === 'id' ? 'Kemitraan Bisnis Terpercaya' : 'Trusted Business Partnerships'}
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                {language === 'id'
                  ? 'Melayani sektor manufaktur presisi, industri otomotif, hingga institusi perbankan nasional.'
                  : 'Serving precision manufacturing, automotive leaders, and major national institutions.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Verified Corporate Partnerships</span>
          </div>
        </div>

      </div>
    </section>
  );
};
