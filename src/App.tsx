import React, { useState, useEffect } from 'react';
import { Product, CartItem, CurrencyCode } from './types';
import { PRODUCTS } from './data/ralphLaurenData';

// Header
import { Header } from './components/Header';

// Main Sections
import { HeroLakeSection } from './components/HeroLakeSection';
import { SectionPoloHeritage } from './components/SectionPoloHeritage';
import { SectionAboutLeathercraft } from './components/SectionAboutLeathercraft';
import { SectionHorseRiding } from './components/SectionHorseRiding';
import { SectionGarments } from './components/SectionGarments';
import { SectionHaltersAndBridles } from './components/SectionHaltersAndBridles';
import { SectionManufacturingAndExport } from './components/SectionManufacturingAndExport';
import { SectionCustomOrderAndInquiry } from './components/SectionCustomOrderAndInquiry';
import { ModernFooter } from './components/ModernFooter';
import { ProductsPage } from './components/ProductsPage';
import { ProductDetailPage, CatalogProductDetail } from './components/ProductDetailPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { PrivateLabellingPage } from './components/PrivateLabellingPage';
import { FadeInSection } from './components/FadeInSection';

// Interactive Modals & Drawers
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { StoreLocatorModal } from './components/StoreLocatorModal';
import { ConciergeModal } from './components/ConciergeModal';
import { RegionSelectorModal } from './components/RegionSelectorModal';
import { ContentGuideModal } from './components/ContentGuideModal';
import { AuthModal } from './components/AuthModal';

export default function App() {
  // Navigation View: 'home', 'products', 'product-detail', 'about', 'contact', 'private-label'
  const [currentView, setCurrentView] = useState<'home' | 'products' | 'product-detail' | 'about' | 'contact' | 'private-label'>('home');
  const [selectedDetailProduct, setSelectedDetailProduct] = useState<CatalogProductDetail | Product | null>(null);

  // Region & currency state (India INR ₹ by default)
  const [currency, setCurrency] = useState<CurrencyCode>('INR');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [, setSelectedBrandFilter] = useState<string | null>(null);

  // User cart & wishlist state
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: PRODUCTS[0],
      selectedColor: PRODUCTS[0].colors[0],
      selectedSize: 'M',
      quantity: 1,
      isGiftBox: true,
    },
  ]);
  const [wishlistIds, setWishlistIds] = useState<string[]>([PRODUCTS[1].id]);

  // Modals & Drawers state
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isStoreLocatorOpen, setIsStoreLocatorOpen] = useState(false);
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);
  const [conciergeStore, setConciergeStore] = useState<string | undefined>(undefined);
  const [isRegionOpen, setIsRegionOpen] = useState(false);
  const [isContentGuideOpen, setIsContentGuideOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
  }, []);

  // Preload top primary images into browser memory cache for maximum loading speed
  useEffect(() => {
    const assetsToPreload = [
      'http://aryezmiltex.com/sellerialogo2',
      'https://aryezmiltex.com/sellerialogo2',
      'https://izyanmiltex.com/bridles.avif',
      'https://izyanmiltex.com/halters.webp',
      'https://izyanmiltex.com/saddlery',
      'https://aryezmiltex.com/saddlepad3',
      'https://aryezmiltex.com/show%20acket%201',
    ];
    assetsToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Listen to URL hash for direct links and browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase().replace('#', '');
      if (hash === 'about') setCurrentView('about');
      else if (hash === 'contact') setCurrentView('contact');
      else if (hash === 'private-label' || hash === 'privatelabel' || hash === 'privatelabelling' || hash === 'private-labelling') {
        setCurrentView('about');
        setTimeout(() => {
          const el = document.getElementById('private-labelling-section');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 250);
      }
      else if (hash === 'products') setCurrentView('products');
      else if (hash === '' || hash === 'home') setCurrentView('home');
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Cart operations
  const handleAddToCart = (product: Product, size: string, colorIndex: number, isGift: boolean) => {
    setCart((prev) => {
      const selectedColor = product.colors[colorIndex] || product.colors[0];
      const existingIdx = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedSize === size &&
          item.selectedColor.name === selectedColor.name
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += 1;
        return updated;
      } else {
        return [
          ...prev,
          {
            product,
            selectedColor,
            selectedSize: size,
            quantity: 1,
            isGiftBox: isGift,
          },
        ];
      }
    });
  };

  const handleUpdateCartQty = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveCartItem(index);
      return;
    }
    setCart((prev) => {
      const updated = [...prev];
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const handleRemoveCartItem = (index: number) => {
    setCart((prev) => prev.filter((_, idx) => idx !== index));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Wishlist operations
  const handleToggleWishlist = (product: Product) => {
    setWishlistIds((prev) =>
      prev.includes(product.id)
        ? prev.filter((id) => id !== product.id)
        : [...prev, product.id]
    );
  };

  const handleMoveWishlistToBag = (product: Product) => {
    handleAddToCart(product, product.sizes[0] || 'M', 0, false);
    setIsCartOpen(true);
  };

  const wishlistProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  // Category navigation jump
  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
    setSelectedBrandFilter(null);
    setCurrentView('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToHome = () => {
    setCurrentView('home');
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToProducts = (cat: string | unknown = 'all') => {
    const targetCat = typeof cat === 'string' && cat ? cat : 'all';
    setSelectedCategory(targetCat);
    setCurrentView('products');
    window.location.hash = 'products';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToAbout = () => {
    setCurrentView('about');
    window.location.hash = 'about';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToContact = () => {
    setCurrentView('contact');
    window.location.hash = 'contact';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToPrivateLabel = () => {
    setCurrentView('about');
    window.location.hash = 'private-labelling';
    setTimeout(() => {
      const el = document.getElementById('private-labelling-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col selection:bg-[#1E5631] selection:text-white">
      {/* Non-Sticky Navigation Bar: Transparent over hero on home, solid on other pages */}
      <div
        className={`${
          currentView === 'home'
            ? 'absolute top-0 left-0 right-0 z-50 pointer-events-auto'
            : 'relative top-0 left-0 right-0 z-50 pointer-events-auto w-full'
        }`}
      >
        <Header
          isScrolled={currentView !== 'home'}
          onNavigateToHome={handleGoToHome}
          onNavigateToProducts={() => handleGoToProducts('all')}
          onNavigateToAbout={handleGoToAbout}
          onNavigateToContact={handleGoToContact}
          onNavigateToPrivateLabel={handleGoToPrivateLabel}
        />
      </div>

      <main className="flex-1 w-full bg-white">
        {currentView === 'product-detail' && selectedDetailProduct ? (
          /* Full Product Detail Page: Direct Inquiry on WhatsApp, No Pop-up, No Add to Cart */
          <ProductDetailPage
            product={selectedDetailProduct}
            onBack={() => {
              setCurrentView('products');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : currentView === 'products' ? (
          /* Products Page: Video banner, Leather Collection heading, filter tags, WhatsApp inquiry */
          <ProductsPage
            initialCategory={selectedCategory}
            onSelectProductDetail={(item) => {
              setSelectedDetailProduct(item);
              setCurrentView('product-detail');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToContact={handleGoToContact}
            onNavigateToPrivateLabel={handleGoToPrivateLabel}
          />
        ) : currentView === 'about' ? (
          /* Dedicated About Us Page with Why Choose Us section & Inquiry Banner */
          <AboutPage
            onNavigateToProducts={(cat) => handleGoToProducts(cat || 'all')}
            onNavigateToContact={handleGoToContact}
            onNavigateToPrivateLabel={handleGoToPrivateLabel}
          />
        ) : currentView === 'contact' ? (
          /* Dedicated Contact Us Page with details, form, and animated map */
          <ContactPage
            onNavigateToProducts={() => handleGoToProducts('all')}
          />
        ) : currentView === 'private-label' ? (
          /* Dedicated Private Labelling & OEM Page with Quality Control & Customization */
          <PrivateLabellingPage
            onNavigateToProducts={() => handleGoToProducts('all')}
            onNavigateToContact={handleGoToContact}
          />
        ) : (
          /* Home View */
          <>
            {/* 1. Hero Section: Equestrian Equipments, video, black & white */}
            <HeroLakeSection
              onExplore={() => handleGoToProducts('all')}
            />

            {/* 2. 5 Categories: Bridles, Halters, Saddlery, Saddle Pads, Riding Wear */}
            <FadeInSection>
              <SectionPoloHeritage
                onSelectCategory={handleSelectCategory}
                onShopMen={() => handleSelectCategory('accessories')}
                onShopWomen={() => handleSelectCategory('women')}
              />
            </FadeInSection>

            {/* 3. About Selleria House: Left column narrative & Why Choose Us, Right column image */}
            <FadeInSection>
              <SectionAboutLeathercraft
                onExploreFactory={() => handleGoToProducts('all')}
                onRequestSamples={handleGoToContact}
                onViewProducts={() => handleGoToProducts('all')}
              />
            </FadeInSection>

            {/* 4. Bestselling Saddles (Infinite Carousel) */}
            <FadeInSection>
              <SectionHorseRiding
                onCardClick={handleSelectCategory}
                onSelectProduct={(item) => {
                  setSelectedDetailProduct(item);
                  setCurrentView('product-detail');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </FadeInSection>

            {/* 5. Best Selling Belts (Infinite Carousel) */}
            <FadeInSection>
              <SectionGarments
                onCardClick={handleSelectCategory}
                onSelectProduct={(item) => {
                  setSelectedDetailProduct(item);
                  setCurrentView('product-detail');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </FadeInSection>

            {/* 6. Bestselling Halters and Bridles (Infinite Carousel) */}
            <FadeInSection>
              <SectionHaltersAndBridles
                onCardClick={handleSelectCategory}
                onSelectProduct={(item) => {
                  setSelectedDetailProduct(item);
                  setCurrentView('product-detail');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </FadeInSection>

            {/* 7. Export Partners Map: Interactive animation */}
            <FadeInSection>
              <SectionManufacturingAndExport />
            </FadeInSection>

            {/* 7. Private Labelling: Materials, Colors, Branding, Packaging */}
            <FadeInSection>
              <SectionCustomOrderAndInquiry onOpenConcierge={handleGoToPrivateLabel} />
            </FadeInSection>
          </>
        )}
      </main>

      {/* Modern Luxury Footer: Black, white & forest green #1E5631, Selleria House */}
      <FadeInSection>
        <ModernFooter
          onNavigateToHome={handleGoToHome}
          onNavigateToProducts={() => handleGoToProducts('all')}
          onNavigateToAbout={handleGoToAbout}
          onNavigateToContact={handleGoToContact}
          onNavigateToPrivateLabel={handleGoToPrivateLabel}
          onSelectCategory={(cat) => handleGoToProducts(cat)}
        />
      </FadeInSection>

      {/* Interactive Modals & Drawers */}
      <ProductModal
        product={modalProduct}
        currency={currency}
        isWishlisted={modalProduct ? wishlistIds.includes(modalProduct.id) : false}
        onClose={() => setModalProduct(null)}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        items={cart}
        currency={currency}
        onClose={() => setIsCartOpen(false)}
        onUpdateQty={handleUpdateCartQty}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        wishlistProducts={wishlistProducts}
        currency={currency}
        onClose={() => setIsWishlistOpen(false)}
        onRemove={handleToggleWishlist}
        onMoveToBag={handleMoveWishlistToBag}
      />

      <SearchModal
        isOpen={isSearchOpen}
        products={PRODUCTS}
        currency={currency}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setModalProduct(p)}
      />

      <StoreLocatorModal
        isOpen={isStoreLocatorOpen}
        onClose={() => setIsStoreLocatorOpen(false)}
        onBookStyling={(storeName) => {
          setConciergeStore(storeName);
          setIsConciergeOpen(true);
        }}
      />

      <ConciergeModal
        isOpen={isConciergeOpen}
        preselectedStore={conciergeStore}
        onClose={() => setIsConciergeOpen(false)}
      />

      <RegionSelectorModal
        isOpen={isRegionOpen}
        currentCurrency={currency}
        onClose={() => setIsRegionOpen(false)}
        onSelectCurrency={(c) => setCurrency(c)}
      />

      <ContentGuideModal
        isOpen={isContentGuideOpen}
        onClose={() => setIsContentGuideOpen(false)}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLoginSuccess={() => {}}
      />
    </div>
  );
}
