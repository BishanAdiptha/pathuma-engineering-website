import React, { useState, useEffect } from 'react';
import {
  MessageSquare,
  ArrowUpRight,
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// Custom SVG Icons for Big Black & White Facebook and WhatsApp
const WhatsAppIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

const FacebookIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const PhoneIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

// Hero slideshow 5 photos data
const HERO_SLIDES = [
  {
    id: '1',
    title: 'Architectural Grill Gates',
    subtitle: 'Custom Laser-Cut Perimeter & Security Gates',
    image: '/pathuma-engineering-website/assets/1st.jpg',
    desc: 'Engineered with high-density steel and precision laser craftsmanship for modern luxury villas and residences.'
  },
  {
    id: '2',
    title: 'Structural Iron Roofing',
    subtitle: 'Heavy Duty Steel Trusses & Canopies',
    image: '/pathuma-engineering-website/assets/2nd.jpg',
    desc: 'Weatherproof industrial and residential iron roofing systems constructed to withstand extreme weather conditions.'
  },
  {
    id: '3',
    title: 'Collapsible Safety Gates',
    subtitle: 'Precision Folding Security Barriers',
    image: '/pathuma-engineering-website/assets/3rd.jpg',
    desc: 'Heavy-duty steel collapsible gates with smooth roller track mechanisms for commercial shops & home entrances.'
  },
  {
    id: '4',
    title: 'Aluminum Fabrication',
    subtitle: 'Modern Glass & Architectural Facades',
    image: '/pathuma-engineering-website/assets/4th.jpg',
    desc: 'Sleek black anodized aluminum windows, doors, partitioning, and architectural curtain walls.'
  },
  {
    id: '5',
    title: 'Custom Metal Crafts',
    subtitle: 'Luxury Railings & Ironwork Sculptures',
    image: '/pathuma-engineering-website/assets/5th.jpg',
    desc: 'Custom wrought iron staircases, decorative grilles, and hotel ironwork tailored to client blueprints.'
  }
];

// Collection Grid Items matching Photo 1 De Castelli layout
const COLLECTION_ITEMS = [
  {
    id: '01',
    code: 'GATES',
    category: 'grill gates',
    displayCategory: 'sliding, swing, driveway',
    badgeLeft: '01.',
    image: '/pathuma-engineering-website/assets/GATE.jpg',
    specs: {
      Material: 'Wrought Iron & Steel',
      Finish: 'Matte Powder Coating',
      Warranty: '10 Years Structural',
      Service: 'Islandwide Installation'
    },
    description: 'Precision laser-cut architectural grill gate designed for maximum privacy, strength, and modern curb appeal.'
  },
  {
    isQuote: true,
    quote: 'NEW IN 2026',
    subquote: 'EXPLORE OUR LATEST ARCHITECTURAL IRONWORKS & STAINLESS FABRICATIONS'
  },
  {
    id: '02',
    code: 'WINDOW & DOOR GRILLS',
    category: 'iron roofing',
    displayCategory: 'security & decorative',
    badgeLeft: '02.',
    image: '/pathuma-engineering-website/assets/WINDOW.jpg',
    specs: {
      Material: 'Galvanized Structural Steel',
      Thickness: 'Gauge 14 - 16 Steel',
      Coating: 'Anti-Rust Polyurethane',
      Service: 'Ragama Workshop & On-site'
    },
    description: 'Heavy cantilevered iron roofing truss system engineered for hotels, parking bays, and luxury home patios.'
  },
  {
    id: '03',
    code: 'HAND RAILLING & BALCONIES',
    category: 'grill gates',
    displayCategory: 'staircases, balconies, verandas',
    badgeLeft: '03.',
    image: '/pathuma-engineering-website/assets/HAND RAILLING.jpg',
    specs: {
      Material: 'Solid Square Bar Iron',
      'Hinge System': 'Heavy Duty Bearing Pivot',
      Locking: 'Multi-Point Security Strike',
      Customization: 'Full Dimensions'
    },
    description: 'Minimalist vertical geometric iron gate structure engineered for modern high-end architectural homes.'
  },
  {
    id: '04',
    code: 'ROOFING',
    category: 'collapsible gates',
    displayCategory: 'amano sheets / steel roofing sheets',
    badgeLeft: '04.',
    image: '/pathuma-engineering-website/assets/ROOFING.jpg',
    specs: {
      Material: 'Stainless & High Carbon Steel',
      Track: 'Embedded Floor & Overhead Rail',
      Finish: 'Jet Black Matte',
      Operation: 'Smooth Silent Folding'
    },
    description: 'Heavy duty commercial collapsible gate engineered for maximum protection without compromising aesthetic style.'
  },
  {
    id: '05',
    code: 'CANOPLES & CAR PORCHES',
    category: 'aluminum fabrication',
    displayCategory: 'steel + polycarbonate',
    badgeLeft: '05.',
    image: '/pathuma-engineering-website/assets/CAR PORCHES.jpg',
    specs: {
      Material: 'Anodized Aluminum Profile',
      Glass: '8mm Tempered Safety Glass',
      Sealing: 'Double EPDM Weather Strip',
      System: 'Sliding & Casement'
    },
    description: 'Premium black aluminum framework for modern shop fronts, office partitions, and luxury residential windows.'
  },
  {
    isQuote: true,
    quote: 'NOW PROMO',
    subquote: 'SPECIAL PROMOTIONAL PRICING FOR HOTEL & COMMERCIAL COMPLEX PROJECTS'
  },
  {
    id: 'free-1',
    code: 'FREE SITE VISITS ',
    badgeLeft: 'NOW!',
    badgeRight: 'FREE',
    image: '/pathuma-engineering-website/assets/SITE VISIT.jpg',
  },
  {
    id: 'free-2',
    code: 'FREE QUOTATIONS ',
    badgeLeft: 'NOW!',
    badgeRight: 'FREE',
    image: '/pathuma-engineering-website/assets/QUOTATIONS.jpg',
  },
  {
    id: '06',
    code: 'LOGO & SIGNAGE CUTTING',
    category: 'iron roofing',
    displayCategory: 'metal signs, name boards, logo designs, 3D letter',
    badgeLeft: '06.',
    image: '/pathuma-engineering-website/assets/LOGO & SIGNAGE.jpg',
    specs: {
      Material: 'Structural I-Beam & Box Bar',
      Span: 'Up to 30 Feet Unsupported',
      Color: 'Charcoal Black / Custom',
      Testing: 'Load Bearing Certified'
    },
    description: 'Industrial grade iron roofing truss designed for factories, warehouses, and large vehicle garages.'
  },
  {
    id: '07',
    code: 'OTHER DESIGNS & FABRICATIONS',
    category: 'collapsible gates',
    displayCategory: 'furniture, trolleys, racks, Antique Ironwork',
    badgeLeft: '07.',
    image: '/pathuma-engineering-website/assets/OTHER DESIGNS.jpg',
    specs: {
      Material: 'Solid Steel Lattice',
      Locking: 'Internal Deadbolt System',
      Size: 'Tailored to Opening',
      Finish: 'Anti-Corrosion Primer & Enamel'
    },
    description: 'Dual-folding collapsible iron gate featuring internal locking mechanisms and seamless track glides.'
  }
];

function GalleryModal({ item, images, onClose }) {
  const all = images.length ? images : [item.image];
  const [active, setActive] = useState(0);
  const total = all.length;

  const prev = () => setActive(i => (i - 1 + total) % total);
  const next = () => setActive(i => (i + 1) % total);

  useEffect(() => {
    const k = e => { if (e.key === 'ArrowLeft') prev(); if (e.key === 'ArrowRight') next(); if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, []);

  const fanStyle = idx => {
    const offset = idx - active;
    const abs = Math.abs(offset);
    if (abs > 2) return { display: 'none' };
    const rot = offset < 0 ? -[0, 12, 24][abs] : [0, 12, 24][abs];
    const trans = offset < 0 ? -[0, 160, 290][abs] : [0, 160, 290][abs];
    const scale = [1, 0.78, 0.6][abs];
    const z = [10, 7, 4][abs];
    const op = [1, 0.75, 0.45][abs];
    return { transform: `translateX(${trans}px) rotate(${rot}deg) scale(${scale})`, zIndex: z, opacity: op, cursor: abs === 0 ? 'default' : 'pointer' };
  };

  return (
    <div className="gallery-backdrop" onClick={onClose}>
      <div className="gallery-modal" onClick={e => e.stopPropagation()}>
        <button className="gallery-close-btn" onClick={onClose} aria-label="Close"><X size={24} /></button>
        <div className="gallery-header">
          <span className="gallery-label font-mono">{item.code}</span>
          <span className="gallery-counter font-mono">{String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
        </div>
        <div className="gallery-fan-stage">
          {all.map((src, i) => (
            <div key={i} className={`gallery-polaroid ${i === active ? 'gallery-polaroid--active' : ''}`} style={fanStyle(i)} onClick={() => i !== active && setActive(i)}>
              <div className="gallery-polaroid-img-wrap"><img src={src} alt={`${item.code} ${i + 1}`} draggable={false} /></div>
            </div>
          ))}
        </div>
        <div className="gallery-nav">
          <button className="gallery-nav-btn" onClick={prev} aria-label="Prev"><ChevronLeft size={28} /></button>
          <div className="gallery-dots">
            {all.map((_, i) => (
              <button key={i} className={`gallery-dot ${i === active ? 'gallery-dot--active' : ''}`} onClick={() => setActive(i)} aria-label={`Go to ${i + 1}`} />
            ))}
          </div>
          <button className="gallery-nav-btn" onClick={next} aria-label="Next"><ChevronRight size={28} /></button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  // Current active hero slide index (0 to 4)
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  // State for selected product modal
  const [selectedProduct, setSelectedProduct] = useState(null);
  // Gallery images for the selected product
  const [galleryImages, setGalleryImages] = useState([]);
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  // Handler for clicking collection items
  const handleItemClick = (item) => {
    // Free items (ids free-1 and free-2) are non-clickable
    if (item.id === 'free-1' || item.id === 'free-2') {
      return;
    }
    setSelectedProduct(item);
  };

  // Load all gallery images eagerly. This MUST use a static string literal.
  const allGalleryImages = import.meta.glob('/public/assets/gallery-*/*.{jpg,jpeg,png}', { eager: true });

  // Load gallery images when a product is selected
  useEffect(() => {
    if (!selectedProduct) {
      setGalleryImages([]);
      setCurrentImgIdx(0);
      return;
    }

    // Filter the pre-loaded glob object for the currently selected product
    const prefix = `/public/assets/gallery-${selectedProduct.id}/`;
    const images = Object.keys(allGalleryImages)
      .filter(key => key.startsWith(prefix))
      // Since it's in public, we strip /public and prepend base url for the image src
      .map(key => '/pathuma-engineering-website' + key.replace('/public', ''));

    setGalleryImages(images);
    setCurrentImgIdx(0);
  }, [selectedProduct]);

  // Navigation handlers for carousel
  const prevImage = () => {
    setCurrentImgIdx((idx) => (idx - 1 + galleryImages.length) % galleryImages.length);
  };
  const nextImage = () => {
    setCurrentImgIdx((idx) => (idx + 1) % galleryImages.length);
  };
  // Auto slide effect (changes photo automatically one by one)
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  // WhatsApp quick inquiry generator
  const getWhatsAppLink = (productName) => {
    const message = productName
      ? `Hello Pathuma Engineering Work! I am interested in getting a quote for ${productName}. Please contact me.`
      : `Hello Pathuma Engineering Work! I would like to inquire about your iron works, gates, iron roofing, collapsible gates, and aluminum fabrication services across Sri Lanka.`;
    return `https://wa.me/94770000000?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="site-wrapper">
      {/* HEADER NAV (SERVICES, COLLECTION | LOGO | ABOUT US, CONTACT) */}
      <header className="header-nav" id="top">
        <div className="header-left">
          <a href="#services" className="header-link">
            SERVICES
          </a>
          <a href="#collection" className="header-link">
            COLLECTION
          </a>
        </div>

        <div className="header-logo">
          <a href="#top" title="Pathuma Engineering Work Logo">
            <img src="/pathuma-engineering-website/assets/logo-pew.png" alt="Pathuma Engineering Work PEW Logo" />
          </a>
        </div>

        <div className="header-right">
          <a href="#about" className="header-link">
            ABOUT US
          </a>
          <a href="#social" className="header-link">
            CONTACT
          </a>
        </div>
      </header>

      {/* HERO / SERVICES SECTION (De Castelli CAST COLLECTION reference layout) */}
      <section className="hero-section" id="services">
        <div className="de-castelli-hero">
          {/* Top Row: PATHUMA title + dash line + subtitle + Center Main Image + 02/05 Counter & Thumbnail */}
          <div className="hero-top-row">
            <div className="hero-cast-title">
              <div className="cast-main-row">
                <h1 className="cast-main-text font-display"><b>PATHUMA</b></h1>
                <div className="cast-after-line"></div>
              </div>
              <p className="cast-subtitle-text font-mono">
                ALL KINDS OF IRON WORK ISLANDWIDE INSTALLATION
              </p>
            </div>

            <div
              className="hero-center-image-frame"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {HERO_SLIDES.map((slide, idx) => (
                <img
                  key={slide.id}
                  src={slide.image}
                  alt={slide.title}
                  className={`hero-center-img ${idx === currentSlide ? 'active' : ''}`}
                />
              ))}
            </div>

            <div className="hero-right-preview-box">
              <span className="hero-step-counter font-mono">
                {HERO_SLIDES[currentSlide].id}/5
              </span>
              <div className="hero-thumb-box">
                <img
                  src={HERO_SLIDES[(currentSlide + 1) % HERO_SLIDES.length].image}
                  alt="Next Service Preview"
                />
              </div>
            </div>
          </div>

          {/* Middle Row: Horizontal Line + ENGINEERING WORK */}
          <div className="hero-middle-row">
            <div className="hero-title-line"></div>
            <h2 className="cast-sub-text font-display"><b>ENGINEERING WORK</b></h2>
          </div>

          {/* Bottom Row: 2 Clean Paragraph Columns (No highlight boxes, company name used once) */}
          <div className="hero-bottom-text-row">
            <div className="hero-text-col">
              <p>
                With 20+ years of ironwork experience, Pathuma Engineering Work crafts custom iron gates, security grills, hand railings, and antique-style decorative designs for homes, hotels, and companies. Based in Ragama and serving clients islandwide, every piece is built to the customer's exact measurements — not adjusted after the fact.
              </p>
            </div>
            <div className="hero-text-col">
              <p>
                Engineered with heavy-duty steel, Calsibal roofing sheets, and precision-fabricated aluminum, our work is finished with anti-rust coating and built to hold up against Sri Lanka's climate. From a single custom logo cutout to a full structural steel job, we handle design, fabrication, and installation from our Ragama workshop to any district in the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTION GRID (Exact De Castelli layout from Photo 1) */}
      <section className="collection-section" id="collection">
        <div className="collection-grid">
          {COLLECTION_ITEMS.map((item, idx) => {
            if (item.isQuote) {
              return (
                <div key={`quote-${idx}`} className="collection-card quote-card">
                  <h3 className="quote-title font-display">"{item.quote}"</h3>
                  {item.subquote && <p className="quote-subtitle font-mono">{item.subquote}</p>}
                </div>
              );
            }

            return (
              <div key={item.id} className="collection-card" onClick={() => handleItemClick(item)} style={{ cursor: (item.id === 'free-1' || item.id === 'free-2') ? 'default' : 'pointer' }}>
                <div className="card-top-row">
                  <span className="card-badge-left font-mono">{item.badgeLeft}</span>
                  {item.badgeRight && <span className="card-badge-right font-mono">{item.badgeRight}</span>}
                </div>

                <div className="card-image-container">
                  <img src={item.image} alt={item.code} />
                  <div className="card-overlay-gradient"></div>
                </div>

                <div className="card-bottom-info">
                  <span className="card-see-now font-mono">
                    {/* Hide "See Now" for free items */}
                    {(item.id !== 'free-1' && item.id !== 'free-2') && (
                      <>See Now <ArrowUpRight size={10} /></>
                    )}
                  </span>
                  <h3 className="card-item-title font-display">{item.code}</h3>
                  <span className="card-item-category">{item.displayCategory}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* OUR SOCIAL SECTION */}
      <section className="social-section" id="social">
        <div className="social-title-container">
          <span className="social-title-word font-display">OUR</span>
          <div className="social-title-line"></div>
          <span className="social-title-word font-display">SOCIAL</span>
        </div>

        {/* Responsive, capsule-shaped Social & Call buttons */}
        <div className="social-buttons-container">
          {/* WhatsApp Direct Chat Button */}
          <a
            href="https://wa.me/+94777370615"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card-item"
          >
            <div className="social-card-icon-circle">
              <WhatsAppIcon size={24} />
            </div>
            <span className="social-card-label font-display">WHATSAPP CHAT</span>
          </a>

          {/* Facebook Official Page Button */}
          <a
            href="https://www.facebook.com/people/Pathuma-Engineering-Work/61593702056875/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card-item"
          >
            <div className="social-card-icon-circle">
              <FacebookIcon size={24} />
            </div>
            <span className="social-card-label font-display">FACEBOOK PAGE</span>
          </a>

          {/* Phone Call Button */}
          <a
            href="tel:+94777370615"
            className="social-card-item"
          >
            <div className="social-card-icon-circle">
              <PhoneIcon size={24} />
            </div>
            <span className="social-card-label font-display">CALL ME NOW</span>
          </a>
        </div>
      </section>

      {/* ABOUT US — FOUNDER SECTION */}
      <section className="about-section" id="about">
        <div className="founder-row">

          {/* Left: Company Details & Experience */}
          <div className="about-content">
            <div className="about-label">
              <span>ABOUT OUR COMPANY</span>
              <div className="line"></div>
            </div>

            <h2 className="about-heading font-display">
              IRONWORK & ARCHITECTURAL METAL CRAFT
            </h2>

            <p className="about-paragraph">
              Founded and led by Chamara Iresh Ranamuka, Pathuma Engineering Work is a premier construction and metal fabrication enterprise headquartered in Ragama, Sri Lanka, providing islandwide execution for residential homes, luxury boutique hotels, commercial complexes, and industrial sites.
            </p>

            <p className="about-paragraph">
              Under his direction, the company specializes in custom wrought iron gates, hand railings, antique and decorative designs, laser-cut custom logo signage, heavy industrial iron roofing, boundary walls, structural steelwork, and modern aluminum fabrication. Every project undergoes rigorous quality control, heavy-gauge steel sourcing, anti-rust priming, and flawless installation.
            </p>

            <div className="about-stats-grid">
              <div className="stat-item">
                <h3>20+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h3>1,200+</h3>
                <p>Islandwide Projects</p>
              </div>
              <div className="stat-item">
                <h3>100%</h3>
                <p>Custom Steelwork</p>
              </div>
            </div>
          </div>

          {/* Right: Founder Photo & Info */}
          <div className="founder-photo-block">
            <div className="founder-photo-wrap">
              <img src="/pathuma-engineering-website/assets/founder-photo.png" alt="Chamara Iresh Ranamuka — Founder of Pathuma Engineering Work" className="founder-photo-img" />
              <div className="founder-photo-overlay"></div>
            </div>

            <div className="founder-info">
              <h2 className="founder-name-text font-display">CHAMARA IRESH RANAMUKA</h2>
              <p className="founder-role-text font-mono">FOUNDER &amp; OWNER</p>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="footer-section" id="contact">
        <div className="footer-main-row">

          {/* Left: Location & Map */}
          <div className="footer-location-col">
            <h4 className="footer-col-label font-mono">LOCATION OF WORKSHOP</h4>
            <p className="footer-address font-mono">
              705/B, Kandaliyadda Paluwa,<br />
              Thewatta Road, Ragama,<br />
              Sri Lanka<br />
              <span className="footer-address-note">(Islandwide Service)</span>
            </p>
            <a
              href="https://maps.app.goo.gl/4zWbj7rw8pgvyJTn7"
              target="_blank"
              rel="noopener noreferrer"
              className="map-pin-btn"
            >
              <ExternalLink size={15} /> OPEN IN GOOGLE MAPS
            </a>
          </div>

          {/* Middle: Copyright */}
          <div className="footer-copyright-col">
            <p className="footer-copyright font-mono">
              ©2026 PATHUMA ENGINEERING WORK.<br />ALL RIGHTS RESERVED.
            </p>
          </div>

          {/* Right: Logo */}
          <div className="footer-brand-col">
            <img src="/pathuma-engineering-website/assets/logo-pew.png" alt="Pathuma Engineering Work Logo" className="footer-logo-img" />
          </div>

        </div>
      </footer>

      {/* DETAIL MODAL POPUP FOR COLLECTION PRODUCTS */}
      {selectedProduct && <GalleryModal item={selectedProduct} images={galleryImages} onClose={() => setSelectedProduct(null)} />}
    </div>
  );
}
