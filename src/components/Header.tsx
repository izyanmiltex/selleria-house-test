import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isScrolled?: boolean;
  onNavigateToHome?: () => void;
  onNavigateToProducts?: () => void;
  onNavigateToAbout?: () => void;
  onNavigateToContact?: () => void;
  onNavigateToPrivateLabel?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isScrolled: propIsScrolled,
  onNavigateToHome,
  onNavigateToProducts,
  onNavigateToAbout,
  onNavigateToContact,
  onNavigateToPrivateLabel,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [internalScrolled, setInternalScrolled] = useState(false);

  useEffect(() => {
    if (propIsScrolled !== undefined) return;
    const handleScroll = () => {
      setInternalScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [propIsScrolled]);

  const isScrolled = propIsScrolled !== undefined ? propIsScrolled : internalScrolled;
  const isSolid = isScrolled;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleProductsClick = () => {
    if (onNavigateToProducts) onNavigateToProducts();
    else scrollTo('equestrian-products-section');
  };

  const handleAboutClick = () => {
    if (onNavigateToAbout) onNavigateToAbout();
    else scrollTo('about-section');
  };

  const handleContactClick = () => {
    if (onNavigateToContact) onNavigateToContact();
    else scrollTo('custom-order-inquiry');
  };

  const handlePrivateLabelClick = () => {
    if (onNavigateToPrivateLabel) onNavigateToPrivateLabel();
    else scrollTo('custom-order-inquiry');
  };

  return (
    <header
      className={`w-full transition-all duration-300 select-none border-none ${
        isSolid
          ? 'bg-white/95 backdrop-blur-md text-black'
          : 'bg-gradient-to-b from-black/80 via-black/30 to-transparent text-white'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex items-center justify-between min-h-[96px] sm:min-h-[108px] md:min-h-[118px] py-1.5 sm:py-2">
          
          {/* Left: Selleria House Logo */}
          <div className="flex items-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigateToHome) {
                  onNavigateToHome();
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center group py-1"
            >
              <img
                src="https://aryezmiltex.com/sellerialogo"
                alt="Selleria House"
                loading="eager"
                decoding="async"
                onError={(e) => {
                  const img = e.currentTarget;
                  if (img.src === 'https://aryezmiltex.com/sellerialogo') {
                    img.src = 'http://aryezmiltex.com/sellerialogo';
                  }
                }}
                className={`h-[83px] sm:h-[92px] md:h-[103px] w-auto object-contain transition-opacity duration-200 group-hover:opacity-90 ${
                  isSolid ? '' : 'filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]'
                }`}
              />
            </a>
          </div>

          {/* Right Corner Menu: products, about, contact us, and highlighted private labelling */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
            <button
              onClick={handleProductsClick}
              className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors py-2 cursor-pointer ${
                isSolid
                  ? 'text-[#1E5631] hover:text-black font-semibold'
                  : 'text-white/80 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]'
              }`}
              style={{
                fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, sans-serif',
              }}
            >
              Products
            </button>

            <button
              onClick={handleAboutClick}
              className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors py-2 cursor-pointer ${
                isSolid
                  ? 'text-[#1E5631] hover:text-black font-semibold'
                  : 'text-white/80 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]'
              }`}
              style={{
                fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, sans-serif',
              }}
            >
              About
            </button>

            <button
              onClick={handleContactClick}
              className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors py-2 cursor-pointer ${
                isSolid
                  ? 'text-[#1E5631] hover:text-black font-semibold'
                  : 'text-white/80 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]'
              }`}
              style={{
                fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, sans-serif',
              }}
            >
              Contact
            </button>

            {/* Right Menu Button: Scrolled green with white text, unscrolled white with black text */}
            <button
              onClick={handlePrivateLabelClick}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-[0.18em] uppercase transition-all duration-300 cursor-pointer shadow-sm ${
                isSolid
                  ? 'bg-[#1E5631] text-white hover:bg-[#164225] border border-[#1E5631]'
                  : 'bg-white text-black hover:bg-neutral-100 border border-white'
              }`}
              style={{
                fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, sans-serif',
              }}
            >
              Private Labelling
            </button>
          </nav>

          {/* Mobile hamburger menu toggle */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 focus:outline-none transition-colors ${
                isSolid ? 'text-black' : 'text-white'
              }`}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden border-none px-6 py-6 shadow-lg animate-fade-in ${
            isSolid
              ? 'bg-white text-black'
              : 'bg-black text-white'
          }`}
        >
          <div className="flex flex-col space-y-4 text-center">
            <button
              onClick={handleProductsClick}
              className={`py-2.5 text-xs uppercase tracking-[0.2em] font-medium ${
                isSolid
                  ? 'text-[#1E5631] hover:text-black'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Products
            </button>
            <button
              onClick={handleAboutClick}
              className={`py-2.5 text-xs uppercase tracking-[0.2em] font-medium ${
                isSolid
                  ? 'text-[#1E5631] hover:text-black'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              About
            </button>
            <button
              onClick={handleContactClick}
              className={`py-2.5 text-xs uppercase tracking-[0.2em] font-medium ${
                isSolid
                  ? 'text-[#1E5631] hover:text-black'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Contact
            </button>
            <div className="pt-2">
              <button
                onClick={handlePrivateLabelClick}
                className="w-full py-3 rounded-full text-xs font-bold tracking-[0.18em] uppercase bg-[#1E5631] text-white hover:bg-[#164225] transition-colors shadow-sm"
              >
                Private Labelling
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
