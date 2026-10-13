import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { CatalogProductDetail } from './ProductDetailPage';
import { ADDITIONAL_CATALOG_PRODUCTS } from '../data/additionalCatalog';

interface ProductsPageProps {
  onSelectProductDetail: (product: CatalogProductDetail) => void;
  initialCategory?: string;
  onNavigateToContact?: () => void;
  onNavigateToPrivateLabel?: () => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onSelectProductDetail,
  initialCategory,
  onNavigateToContact,
  onNavigateToPrivateLabel,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isCrossFading, setIsCrossFading] = useState<boolean>(false);

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
      setCurrentPage(1);
    }
  }, [initialCategory]);

  const handleSelectCategory = (catId: string) => {
    if (catId === selectedCategory) return;
    setIsCrossFading(true);
    setTimeout(() => {
      setSelectedCategory(catId);
      setCurrentPage(1);
      setTimeout(() => {
        setIsCrossFading(false);
      }, 50);
    }, 200);
  };

  const handlePageChange = (newPage: number) => {
    setIsCrossFading(true);
    setTimeout(() => {
      setCurrentPage(newPage);
      setTimeout(() => {
        setIsCrossFading(false);
      }, 50);
    }, 180);
  };

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'saddles', label: 'Saddles' },
    { id: 'bridles', label: 'Bridles' },
    { id: 'halters', label: 'Halters' },
    { id: 'rugs', label: 'Rugs' },
    { id: 'fly-masks-veils', label: 'Fly Mask & Veils' },
    { id: 'girth', label: 'Girth' },
    { id: 'dog-accessories', label: 'Dog Accessories' },
    { id: 'breastplates', label: 'Breastplates' },
    { id: 'belt', label: 'Belt' },
    { id: 'reins-lead-rope', label: 'Reins / Lead Rope' },
    { id: 'leg-protectors', label: 'Leg Protectors' },
    { id: 'saddle-pads', label: 'Saddle Pads' },
    { id: 'leather-bags', label: 'Leather Bags' },
    { id: 'show-jackets', label: 'Show Jackets' },
    { id: 'whips', label: 'Whips' },
  ];

  // Extended catalog products for Selleria House
  const catalogItems: CatalogProductDetail[] = [
    {
      id: 'sh-saddle-01',
      name: 'Master French Calfskin Dressage Saddle',
      category: 'saddle',
      categoryLabel: 'Saddles',
      image: 'https://aryezmiltex.com/saddle1',
      specs: 'Deep seated anatomic composite tree, monoflap contour, customized ergonomic knee blocks, vegetable-tanned French calfskin.',
      description: 'Hand-crafted specifically for international grand prix dressage competition. Deep balance point ensures precise pelvis stabilization and seamless leg contact.',
    },
    {
      id: 'sh-saddle-02',
      name: 'Close-Contact Hunter & Jumper Saddle',
      category: 'saddle',
      categoryLabel: 'Saddles',
      image: 'https://aryezmiltex.com/saddle2',
      specs: 'Forward-cut flap, molded padded calf knee rolls, shock-absorbing memory foam panels, ultra-durable English hide skirt.',
      description: 'Engineered for superior balance over fences with a close-contact contour allowing maximum freedom through the equine shoulder.',
    },
    {
      id: 'sh-saddle-03',
      name: 'Grand Prix Monoflap Eventing Saddle',
      category: 'saddle',
      categoryLabel: 'Saddles',
      image: 'https://aryezmiltex.com/saddle3',
      specs: 'Monoflap single-billet system, external thigh support blocks, wool-flocked independent panels, full-grain oiled leather.',
      description: 'Designed for demanding cross-country and multi-phase eventing. Direct communication flap with moisture-resistant hand-rubbed finish.',
    },
    {
      id: 'sh-saddle-04',
      name: 'Anatomical All-Purpose Performance Saddle',
      category: 'saddle',
      categoryLabel: 'Saddles',
      image: 'https://aryezmiltex.com/saddle4',
      specs: 'Semi-deep seat, interchangeable gullet plate system, padded knee rolls with calfskin seat and knee inserts.',
      description: 'The quintessential versatile saddle for schooling, flatwork, and jumping. Balanced tree geometry supports correct rider alignment across disciplines.',
    },
    {
      id: 'sh-saddle-05',
      name: 'Signature Competition Jumping Saddle',
      category: 'saddle',
      categoryLabel: 'Saddles',
      image: 'https://aryezmiltex.com/saddle5',
      specs: 'Ultra-light carbon fiber composite tree, square cantle, non-slip textured calf flaps, reinforced stirrup leather keepers.',
      description: 'Championship-tier jumping saddle featuring lightweight construction and instantaneous seat grip in competitive jump-offs.',
    },
    {
      id: 'sh-saddle-06',
      name: 'Classic English Endurance & Trail Saddle',
      category: 'saddle',
      categoryLabel: 'Saddles',
      image: 'https://aryezmiltex.com/saddle6',
      specs: 'Broad weight-bearing memory foam panels, extended spine clearance channel, multiple solid brass D-rings for gear attachment.',
      description: 'Engineered for long-distance comfort, redistributing rider pressure over extended trail expeditions and endurance races.',
    },
    {
      id: 'sh-saddle-07',
      name: 'Custom Atelier Monoflap Dressage Saddle',
      category: 'saddle',
      categoryLabel: 'Saddles',
      image: 'https://aryezmiltex.com/saddle7',
      specs: 'High pommel clearance, narrow twist tree, premium pre-oiled Bavarian leather, thermo-responsive wool flocking.',
      description: 'Refined saddle geometry offering an ultra-close connection between rider and equine with bespoke knee roll positioning.',
    },
    {
      id: 'sh-saddle-08',
      name: 'Elite Show Jumping Pro Saddle',
      category: 'saddle',
      categoryLabel: 'Saddles',
      image: 'https://aryezmiltex.com/saddle8',
      specs: 'Double calfskin padded skirts, forward angled flaps, recessed stirrup bars, shock-cushioned latex panel lining.',
      description: 'Built for premier stadium jumping circuits, offering optimal hip angle stability, frictionless release, and freedom across the wither.',
    },
    {
      id: 'sh-saddle-09',
      name: 'Heritage Full-Grain Hunter Derby Saddle',
      category: 'saddle',
      categoryLabel: 'Saddles',
      image: 'https://aryezmiltex.com/saddle9',
      specs: 'Traditional hand-stitched English oak-bark tanned leather, round cantle, refined flat seat, custom embossed monogram skirt.',
      description: 'Timeless hunter ring elegance crafted from the finest heritage vegetable hides. Exceptionally soft break-in with generational longevity.',
    },
    {
      id: 'sh-halter-01',
      name: 'Siena Braided Halter & Lead Set in Terracotta',
      category: 'halters',
      categoryLabel: 'Halters',
      image: 'http://aryezmiltex.com/halter1',
      fallbackImage: '/assets/products/halter-1.png',
      specs: 'Hand-braided vegetable-tanned leather crown and noseband, matching terracotta lead rope with brass bull snap, heavy-duty solid brass hardware, adjustable chin strap.',
      description: 'Crafted with heritage leather braiding and solid brass fittings, this matching terracotta halter and lead set exemplifies artisanal elegance for championship presentations.',
    },
    {
      id: 'sh-halter-02',
      name: 'The Grand Prix Fleece-Lined Shipping Halter in Noir',
      category: 'halters',
      categoryLabel: 'Halters',
      image: 'http://aryezmiltex.com/halter2',
      fallbackImage: '/assets/products/halter-2.png',
      specs: 'Full-grain English bridle leather, ultra-soft hypoallergenic fleece lining, dual-crown buckle adjustment, quick-snap throatlatch, polished stainless steel hardware.',
      description: 'Engineered for first-class equine travel and show ring preparation. Plush fleece padding eliminates rub marks while heavyweight leather guarantees enduring strength.',
    },
    {
      id: 'sh-halter-03',
      name: 'Anatomic Ergonomic Padded Leather Halter in Havana Brown',
      category: 'halters',
      categoryLabel: 'Halters',
      image: 'http://aryezmiltex.com/halter3',
      fallbackImage: '/assets/products/halter-3.png',
      specs: 'Contoured ergonomic crownpiece, soft calfskin padded noseband and cheeks, triple-ply reinforced stitching, brushed brass hardware with throat snap.',
      description: 'Designed for everyday barn luxury and turnout comfort. Features an anatomical cutaway poll to alleviate sensitive nerve pressure behind the ears.',
    },
    {
      id: 'sh-halter-04',
      name: 'Monogrammed French Calfskin Show Halter with Brass Plate',
      category: 'halters',
      categoryLabel: 'Halters',
      image: 'http://aryezmiltex.com/halter4',
      fallbackImage: '/assets/products/halter-4.png',
      specs: 'Double-stitched vegetable-tanned calfskin, customizable solid brass nameplate, rolled throatlatch, dual-crown adjustment, hand-burnished oil edges.',
      description: 'Championship-ready presentation halter tailored for prestigious sales rings and breed shows. Supple French calfskin offers exquisite hand feel and lasting luster.',
    },
    {
      id: 'sh-halter-05',
      name: 'Artisanal Two-Tone Hand-Tooled Floral Leather Halter',
      category: 'halters',
      categoryLabel: 'Halters',
      image: 'http://aryezmiltex.com/halter5',
      fallbackImage: '/assets/products/halter-5.png',
      specs: 'Intricate hand-carved floral tooling along noseband and cheeks, heavy harness leather backing, antiqued bronze-finish hardware, adjustable curb strap.',
      description: 'A celebration of traditional western and equestrian leather artistry. Every floral motif is individually carved by master saddlers for distinctive individuality.',
    },
    {
      id: 'sh-halter-06',
      name: 'Classic Triple-Stitched English Bridle Leather Stable Halter',
      category: 'halters',
      categoryLabel: 'Halters',
      image: 'http://aryezmiltex.com/halter6',
      fallbackImage: '/assets/products/halter-6.png',
      specs: 'Extra-thick 1-inch English bridle leather, triple nylon reinforced safety stitching, solid brass double-crown buckles and throat snap, adjustable chin.',
      description: 'The gold standard for world-class stable management. Triple-stitched construction ensures uncompromising durability through seasons of daily handling.',
    },
    {
      id: 'sh-halter-07',
      name: 'Silver Filigree Championship Presentation Leather Halter',
      category: 'halters',
      categoryLabel: 'Halters',
      image: 'http://aryezmiltex.com/halter7',
      fallbackImage: '/assets/products/halter-7.png',
      specs: 'Handcrafted black latigo leather, engraved western silver-plated cheek accents, matching buckle sets, throat latch clip, adjustable crown.',
      description: 'Exquisite showmanship presentation halter adorned with intricate engraved silver-tone metalwork. Shines brightly under stadium lights for halter classes and auctions.',
    },
    {
      id: 'sh-halter-08',
      name: 'Anatomic Rolled Leather Grooming & Training Halter',
      category: 'halters',
      categoryLabel: 'Halters',
      image: 'http://aryezmiltex.com/halter8',
      fallbackImage: '/assets/products/halter-8.png',
      specs: 'Artisan rolled leather cheeks and throatlatch, flat padded crown and noseband, detachable throat snap, solid brass rings and buckles.',
      description: 'Sleek, minimalist elegance designed for elite grooming and daily handling. Supple rolled leather contours naturally around equine facial features.',
    },
    {
      id: 'sh-halter-09',
      name: 'Royal Navy & Havana Padded Ergonomic Halter Set',
      category: 'halters',
      categoryLabel: 'Halters',
      image: 'http://aryezmiltex.com/halter9',
      fallbackImage: '/assets/products/halter-9.png',
      specs: 'Full-grain bridle leather with navy blue soft-padded lining, contrast white stitching, brushed nickel-plated hardware, dual-crown buckle system.',
      description: 'Modern European styling meets traditional saddlery craft. The striking navy padding provides cushioned comfort while accentuating facial conformation.',
    },
    {
      id: 'sh-halter-10',
      name: 'Reinforced Heavy Harness Leather Draft & Warmblood Halter',
      category: 'halters',
      categoryLabel: 'Halters',
      image: 'http://aryezmiltex.com/halter10',
      fallbackImage: '/assets/products/halter-10.png',
      specs: 'Heavyweight 1.25-inch oiled harness leather, reinforced box-stitched stress points, extra-large stainless steel dees and buckle, durable throat snap.',
      description: 'Engineered specifically for warmbloods and larger breeds requiring superior tensile strength. Resists weather elements, sweat, and rigorous turnout conditions.',
    },
    {
      id: 'sh-halter-11',
      name: 'Artisan Rawhide-Braided Floral Tooled Show Halter',
      category: 'halters',
      categoryLabel: 'Halters',
      image: 'http://aryezmiltex.com/halter11',
      fallbackImage: '/assets/products/halter-11.png',
      specs: 'Hand-tooled floral cheeks and noseband, hand-braided rawhide accents, antiqued copper-tone hardware with engraved floral buckles.',
      description: 'Combines authentic ranch craftsmanship with fine show arena polish. Hand-braided rawhide elements provide distinctive texture and Western heritage charm.',
    },
    {
      id: 'sh-halter-12',
      name: 'Soft Lambswool Padded Travel & Trailering Halter',
      category: 'halters',
      categoryLabel: 'Halters',
      image: 'http://aryezmiltex.com/halter12',
      fallbackImage: '/assets/products/halter-12.png',
      specs: 'Supple Italian leather, genuine dense lambswool lining across poll and bridge, stainless steel quick-release snap, adjustable chin strap.',
      description: 'The ultimate in equine transport comfort. Dense natural wool cushioning absorbs friction during long-distance air cargo and horsebox travel.',
    },
    {
      id: 'sh-halter-13',
      name: 'Midnight Noir Ergonomic Halter with Rose Gold Hardware',
      category: 'halters',
      categoryLabel: 'Halters',
      image: 'http://aryezmiltex.com/halter13',
      fallbackImage: '/assets/products/halter-13.png',
      specs: 'Full-grain glove-tanned leather, anatomical pressure-relief crown, rose gold-plated zinc alloy buckles, soft padded lining, contrast black stitching.',
      description: 'Contemporary luxury for the fashion-forward equestrian. Lustrous rose gold hardware creates a sophisticated contrast against deep matte black leather.',
    },
    {
      id: 'sh-halter-14',
      name: 'Vintage Distressed Leather Field Halter with Solid Brass Rings',
      category: 'halters',
      categoryLabel: 'Halters',
      image: 'http://aryezmiltex.com/halter14',
      fallbackImage: '/assets/products/halter-14.png',
      specs: 'Vegetable-tanned pull-up leather that patinas with age, solid cast brass O-rings and square buckles, reinforced double-riveted stress points.',
      description: 'Rugged elegance with timeless heirloom character. High-oil leather develops a rich, supple patina with every use while maintaining structural integrity.',
    },
    {
      id: 'sh-pad-01',
      name: 'Luxury Quilted Anatomic Dressage Saddle Pad',
      category: 'saddle-pads',
      categoryLabel: 'Saddle Pads',
      image: 'https://aryezmiltex.com/saddlepad1',
      specs: 'High-wither anatomical clearance, diamond-quilted cotton exterior, moisture-wicking bamboo waffle lining, contrast twisted rope piping.',
      description: 'Engineered for dressage competitions. Contoured topline relieves wither pressure while the breathable bamboo lining wicks heat and sweat during intense schooling.',
    },
    {
      id: 'sh-pad-02',
      name: 'Shock-Absorbing Memory Foam Close-Contact Pad',
      category: 'saddle-pads',
      categoryLabel: 'Saddle Pads',
      image: 'https://aryezmiltex.com/saddlepad2',
      specs: 'Dual-density memory foam core, brushed micro-suede outer, anti-slip silicone grip spine, reinforced girth guard.',
      description: 'Designed for jumping and eventing. Absorbs high-impact concussions while keeping the saddle securely anchored without bulk under the leg.',
    },
    {
      id: 'sh-pad-03',
      name: 'Grand Prix Velvet Jumping Saddle Pad',
      category: 'saddle-pads',
      categoryLabel: 'Saddle Pads',
      image: 'https://aryezmiltex.com/saddlepad3',
      specs: 'Ultra-soft dirt-repellent performance velvet, dense polyfill cushioning, metallic satin cord trim, girth loop protection.',
      description: 'An opulent show-ring essential combining refined velvet sheen with breathable, quick-drying performance fill for premier competition circuits.',
    },
    {
      id: 'sh-pad-04',
      name: 'Anatomic Merino Wool Lined Half Pad',
      category: 'saddle-pads',
      categoryLabel: 'Saddle Pads',
      image: 'https://aryezmiltex.com/saddlepad4',
      specs: 'Authentic Australian merino sheepskin fleece underside, spinal clearance air channel, ergonomic rolled front and rear edges.',
      description: 'Supreme therapeutic back protection. Pure merino fleece regulates temperature year-round and distributes rider weight evenly across sensitive dorsal muscles.',
    },
    {
      id: 'sh-pad-05',
      name: 'Technical 3D Air-Mesh High-Wither Saddle Pad',
      category: 'saddle-pads',
      categoryLabel: 'Saddle Pads',
      image: 'https://aryezmiltex.com/saddlepad5',
      specs: 'Continuous airflow 3D mesh matrix, antibacterial quick-dry lining, swan-neck wither cut, heavy-duty ballistic nylon girth protection.',
      description: 'Built for high-heat training sessions and endurance work. The cellular 3D mesh actively channels cooling air across the horse\'s back to prevent overheating.',
    },
    {
      id: 'sh-pad-06',
      name: 'Classic Heritage Cotton Twill Saddle Pad',
      category: 'saddle-pads',
      categoryLabel: 'Saddle Pads',
      image: 'https://aryezmiltex.com/saddlepad6',
      specs: '100% natural pre-shrunk cotton twill, square wave quilting, dual-color braided binding, reinforced billet straps.',
      description: 'A barn staple crafted with enduring craftsmanship. Retains plush shape and crisp color definition across countless washing and schooling cycles.',
    },
    {
      id: 'sh-pad-07',
      name: 'Performance Anti-Slip Hexagonal Grip Saddle Pad',
      category: 'saddle-pads',
      categoryLabel: 'Saddle Pads',
      image: 'https://aryezmiltex.com/saddlepad7',
      specs: 'Low-profile silicone hexagonal grip pattern, shock-absorbing cellular foam, sweat-wicking lining, contoured ergonomic spine.',
      description: 'Precision grip technology designed for high-motion stadium jumping. Eliminates slipping and twisting while maintaining featherlight contact between saddle and back.',
    },
    {
      id: 'sh-rope-01',
      name: 'Master Braided Cotton Lead Rope with Brass Bull Snap',
      category: 'reins-lead-rope',
      categoryLabel: 'Reins / Lead Rope',
      image: 'https://aryezmiltex.com/rope1',
      specs: 'Heavy-duty 100% multi-ply twisted cotton, solid swivel brass bull snap, hand-whipped leather popper, 2.5m competition length.',
      description: 'Soft yet indestructible hand feel designed for premium barn handling, trailering, and lead line presentation. Solid brass snap resists corrosion.',
    },
    {
      id: 'sh-rope-02',
      name: 'Premium Polypropylene Training Lead Rope',
      category: 'reins-lead-rope',
      categoryLabel: 'Reins / Lead Rope',
      image: 'https://aryezmiltex.com/rope2',
      specs: 'High-tensile braided yacht rope, weighted core for subtle cue transmission, removable trigger snap, burnished leather popper.',
      description: 'Designed for natural horsemanship and daily training. Features balanced weight distribution for responsive communication and zero knot stiffness.',
    },
    {
      id: 'sh-rope-03',
      name: 'Handcrafted English Leather Laced Reins',
      category: 'reins-lead-rope',
      categoryLabel: 'Reins / Lead Rope',
      image: 'https://aryezmiltex.com/rope3',
      specs: 'Vegetable-tanned English bridle leather, raised laced grip sections, stainless steel hook stud ends, hand-burnished edges.',
      description: 'The quintessential hunter and jumping rein. Exceptional tactile sensitivity and wet-weather grip with refined contrast edge beveling.',
    },
    {
      id: 'sh-rope-04',
      name: 'Continental Web Reins with Leather Stops',
      category: 'reins-lead-rope',
      categoryLabel: 'Reins / Lead Rope',
      image: 'https://aryezmiltex.com/rope4',
      specs: 'Heavy-gauge woven cotton-nylon webbing, evenly spaced leather hand stops, martingale stops included, durable nickel-plated buckles.',
      description: 'Superior non-slip grip ideal for cross-country and wet arena work. Evenly positioned hand stops promote consistent rein contact and balanced posture.',
    },
    {
      id: 'sh-jacket-01',
      name: 'Equestrian Tailored Competition Show Jacket',
      category: 'show-jackets',
      categoryLabel: 'Show Jackets',
      image: 'https://aryezmiltex.com/show%20acket%201',
      fallbackImage: '/assets/products/show-jacket-1.png',
      specs: 'Four-way stretch technical fabric, water-repellent finish, branded metallic buttons, rear riding vents.',
      description: 'Engineered for international showjumping and dressage arenas. Lightweight breathable weave contours cleanly while providing total freedom of movement.',
    },
    {
      id: 'sh-jacket-02',
      name: 'Grand Prix Technical Velvet Show Jacket',
      category: 'show-jackets',
      categoryLabel: 'Show Jackets',
      image: 'https://aryezmiltex.com/show%20acket%202',
      fallbackImage: '/assets/products/show-jacket-2.png',
      specs: 'Velvet collar detailing, contrast trim, concealed zip closure under button placket, tailored athletic fit.',
      description: 'Refined championship competition jacket featuring soft velvet collar accents and micro-mesh ventilation for peak rider performance.',
    },
    {
      id: 'sh-whip-01',
      name: 'Hand-Braided Leather Dressage Whip',
      category: 'whips',
      categoryLabel: 'Whips',
      image: 'https://aryezmiltex.com/whip%202',
      fallbackImage: '/assets/products/whip-2.png',
      specs: 'Hand-braided vegetable-tanned leather handle, solid brass end cap, balanced fiberglass core with leather keeper.',
      description: 'Master-crafted with optimal flex and hand balance. The braided leather grip ensures a secure, non-slip feel during dressage schooling.',
    },
    {
      id: 'sh-whip-02',
      name: 'Precision Jumping Bat & Crop',
      category: 'whips',
      categoryLabel: 'Whips',
      image: 'https://aryezmiltex.com/whip%201.png',
      fallbackImage: '/assets/products/whip-1.png',
      specs: 'Ergonomic rubberized grip, reinforced leather popper flap, ultra-light composite shaft with chrome ferrule.',
      description: 'Classic showjumping and cross-country crop engineered for clear, humane communication. Features balanced center of gravity and durable construction.',
    },
    {
      id: 'sh-leg-01',
      name: 'Anatomical Carbon-Shield Tendon Boots',
      category: 'leg-protectors',
      categoryLabel: 'Leg Protectors',
      image: 'https://aryezmiltex.com/legprotector1',
      fallbackImage: '/assets/products/leg-protector-1.png',
      specs: 'High-impact anatomical TPU shell with carbon-fiber strike guard, perforated breathable neoprene lining, dual elastic quick-release peg straps.',
      description: 'Championship jumping tendon boots offering maximum protection against striking and overreaching. Engineered with an ergonomic flex zone behind the knee and ventilating micro-perforations to dissipate tendon heat.',
    },
    {
      id: 'sh-leg-02',
      name: 'Pro-Jump Ergonomic Fetlock Hind Boots',
      category: 'leg-protectors',
      categoryLabel: 'Leg Protectors',
      image: 'https://aryezmiltex.com/legprotector2',
      fallbackImage: '/assets/products/leg-protector-2.png',
      specs: 'Conformed anatomical hind fetlock cup, reinforced strike-dispersal zone, premium elastic fasteners with quick-release pegs.',
      description: 'Engineered for modern stadium jumping and eventing. Conforms closely to the equine hind leg without impeding joint flexion, ensuring supreme impact dispersion during fence clearance.',
    },
    {
      id: 'sh-leg-03',
      name: 'Luxury Faux-Shearling Lined Open-Front Tendon Boots',
      category: 'leg-protectors',
      categoryLabel: 'Leg Protectors',
      image: 'https://aryezmiltex.com/legprotector3',
      fallbackImage: '/assets/products/leg-protector-3.png',
      specs: 'Plush synthetic merino wool lining, strike-resistant outer casing, dual elastic peg closures, hand-finished tonal binding.',
      description: 'Designed for sensitive-skinned horses requiring superior comfort and elite shock protection. Ultra-plush fleece distributes pressure evenly, prevents friction rubs, and regulates leg temperature.',
    },
    {
      id: 'sh-leg-04',
      name: 'Grand Prix Matching Shearling Fetlock Boots',
      category: 'leg-protectors',
      categoryLabel: 'Leg Protectors',
      image: 'https://aryezmiltex.com/legprotector4',
      fallbackImage: '/assets/products/leg-protector-4.png',
      specs: 'Anatomic hind protection cup, dense hypoallergenic fleece cushion, reinforced strike zone, secure elastic peg closures.',
      description: 'The perfect companion hind boot for premier competition and schooling. Prevents chafing on thin-skinned horses while offering exceptional protection against brushing and interfere strikes.',
    },
    {
      id: 'sh-leg-05',
      name: 'Elite Performance All-Around Brushing & Splint Boots',
      category: 'leg-protectors',
      categoryLabel: 'Leg Protectors',
      image: 'https://aryezmiltex.com/legprotector5',
      fallbackImage: '/assets/products/leg-protector-5.png',
      specs: 'Contoured full-coverage splint strike guard, breathable perforated neoprene, triple heavy-duty military-grade hook-and-loop straps.',
      description: 'Heavy-duty training and flatwork protection for front and hind legs. The reinforced strike pad shields vulnerable splint bones and suspensory ligaments from accidental strikes and cross-overs.',
    },
    {
      id: 'sh-bag-01',
      name: 'Sonora Artisan Hand-Tooled Leather & Cowhide Saddle Bag',
      category: 'leather-bags',
      categoryLabel: 'Leather Bags',
      image: 'https://aryezmiltex.com/bag1',
      fallbackImage: '/assets/products/bag-1.png',
      specs: 'Hand-tooled vegetable-tanned leather flap with floral embossing, central denim accent, natural spotted hair-on cowhide body, adjustable tan leather strap with antique brass buckle.',
      description: 'Handcrafted with unwavering dedication to artisanal equestrian excellence. Features a richly carved vegetable-tanned leather flap adorned with intricate floral tooling, complemented by genuine cowhide and durable accents for timeless western elegance.',
    },
    {
      id: 'sh-bag-02',
      name: 'Sedona Sunflower Tooled Leather Crossbody Bag',
      category: 'leather-bags',
      categoryLabel: 'Leather Bags',
      image: 'https://aryezmiltex.com/bag2',
      fallbackImage: '/assets/products/bag-2.png',
      specs: 'Premium hand-tooled vegetable-tanned leather with sunflower motif, vivid turquoise geometric border inlays, full-grain dark brown leather trim, adjustable crossbody strap, antique brass hardware.',
      description: 'A masterpiece of saddle-maker tooling, featuring vibrant hand-carved sunflower artwork and turquoise geometric inlays. Compact yet statement-making, designed for equestrian lovers who value heritage artistry.',
    },
    {
      id: 'sh-bag-03',
      name: 'Turquoise Feather Tooled Cowhide Artisan Tote',
      category: 'leather-bags',
      categoryLabel: 'Leather Bags',
      image: 'https://aryezmiltex.com/bag3',
      fallbackImage: '/assets/products/bag-3.png',
      specs: 'Genuine spotted hair-on cowhide body, chestnut-brown floral tooled front panel with hand-painted turquoise feather inlay, corner leather reinforcements, detachable braided leather shoulder strap.',
      description: 'Harmonious blend of natural speckled hair-on hide and hand-tooled full-grain saddlery leather. The focal point is an intricate hand-painted turquoise feather framed by deep floral scrollwork.',
    },
    {
      id: 'sh-bag-04',
      name: 'Frontier Bloom Tooled Fringe Leather Messenger',
      category: 'leather-bags',
      categoryLabel: 'Leather Bags',
      image: 'https://aryezmiltex.com/bag4',
      fallbackImage: '/assets/products/bag-4.png',
      specs: 'Premium full-grain leather, hand-tooled floral scrollwork framing a carved scale-texture panel, cascading full-length leather fringe, contrast saddle stitching, adjustable detachable strap.',
      description: 'Celebrates rugged equestrian luxury with sweeping floral scrollwork and cascading leather fringe that sways with movement. Accented with contrast hand-stitching and antique brass hardware.',
    },
    {
      id: 'sh-bag-05',
      name: 'Siena Artisan Two-Tone Hand-Tooled Leather Tote',
      category: 'leather-bags',
      categoryLabel: 'Leather Bags',
      image: 'https://aryezmiltex.com/bag5',
      fallbackImage: '/assets/products/bag-5.png',
      specs: 'Two-tone rich chocolate and saddle tan full-grain leather, hand-tooled floral scroll side panels, dual reinforced top carrying handles, detachable shoulder strap, secure top-zip closure.',
      description: 'Structured elegance meets artisanal saddle craft in this two-tone luxury tote. Features floral hand-carved leather side panels and supple full-grain handles, transitioning effortlessly from stables to city.',
    },
    {
      id: 'sh-bag-06',
      name: 'Bravado Rider Bucking Horse Crossbody Bag',
      category: 'leather-bags',
      categoryLabel: 'Leather Bags',
      image: 'https://aryezmiltex.com/bag6',
      fallbackImage: '/assets/products/bag-6.png',
      specs: 'Hand-tooled and hand-painted bucking horse and equestrian rider centerpiece, chocolate brown leather body, delicate hanging fringe trim, floral-tooled adjustable shoulder strap, brass hardware.',
      description: 'A dynamic tribute to rodeo and riding heritage. The front flap displays a dramatic hand-carved and hand-painted bucking horse and rider scene, framed by western floral motifs and soft leather fringe.',
    },
    {
      id: 'sh-bag-07',
      name: 'Western Tooled Leather & Hair-on Cowhide Clutch Wallet',
      category: 'leather-bags',
      categoryLabel: 'Leather Bags',
      image: 'https://aryezmiltex.com/bag7',
      fallbackImage: '/assets/products/bag-7.png',
      specs: 'Scalloped hand-tooled floral leather flap, natural brown-and-white spotted hair-on cowhide body, dark antique metal top zip closure, interior organizer compartments.',
      description: 'Combines natural speckled cowhide texture with a scalloped hand-tooled floral flap. Sized perfectly as an elegant evening clutch or luxurious everyday travel wallet.',
    },
    {
      id: 'sh-bag-08',
      name: 'Vaquero Tooled Turquoise Crossbody with Side Fringe',
      category: 'leather-bags',
      categoryLabel: 'Leather Bags',
      image: 'https://aryezmiltex.com/bag8',
      fallbackImage: '/assets/products/bag-8.png',
      specs: 'Genuine dark brown speckled cowhide, hand-tooled leather floral panels with turquoise blossom inlays, cascading dark leather side fringes, detachable crossbody strap, top zipper.',
      description: 'Artisanal western luxury featuring turquoise-painted floral tooling set against natural speckled hair-on hide. Dramatic cascading fringes and antiqued hardware provide refined movement and flair.',
    },
    {
      id: 'sh-bag-09',
      name: 'Prairie Sunflower Fringe Cowhide Hobo Shoulder Bag',
      category: 'leather-bags',
      categoryLabel: 'Leather Bags',
      image: 'https://aryezmiltex.com/bag9',
      fallbackImage: '/assets/products/bag-9.png',
      specs: 'Spacious cowhide hobo silhouette, central hand-carved four-sunflower panel, multi-tone leather side fringe tassels, reinforced shoulder strap, antique brass rings.',
      description: 'Generously sized hobo bag featuring four vibrant hand-carved sunflowers on vegetable-tanned leather, paired with rich cowhide and dynamic tiered leather fringe tassels for distinctive bohemian elegance.',
    },
    {
      id: 'sh-bag-10',
      name: 'The Dakota Hand-Tooled Leather & Cowhide Shoulder Tote',
      category: 'leather-bags',
      categoryLabel: 'Leather Bags',
      image: 'http://aryezmiltex.com/bag10',
      fallbackImage: '/assets/products/bag-10.png',
      specs: 'Natural black-and-white spotted hair-on cowhide body, hand-tooled floral leather medallion, white contrast whipstitching, exterior zipper pocket, dual flat leather shoulder straps.',
      description: 'Handcrafted from rich vegetable-tanned leather and natural hair-on cowhide, featuring an embossed central medallion and artisanal whipstitch borders. Blends Western ranch heritage with timeless Selleria House luxury.',
    },
    ...ADDITIONAL_CATALOG_PRODUCTS,
  ];

  const filteredItems = selectedCategory === 'all'
    ? catalogItems
    : catalogItems.filter((item) => {
        if (item.category === selectedCategory) return true;
        if ((selectedCategory === 'saddles' || selectedCategory === 'saddle') && (item.category === 'saddles' || item.category === 'saddle')) return true;
        if ((selectedCategory === 'halters' || selectedCategory === 'halter' || selectedCategory === 'hajlters') && (item.category === 'halters' || item.category === 'halter')) return true;
        if ((selectedCategory === 'rugs' || selectedCategory === 'rug') && (item.category === 'rugs' || item.category === 'rug')) return true;
        if ((selectedCategory === 'fly-masks-veils' || selectedCategory === 'fly mask & veils' || selectedCategory === 'fly masks' || selectedCategory === 'fly mask' || selectedCategory === 'mask') && (item.category === 'fly-masks-veils' || item.category === 'fly mask & veils' || item.category === 'fly-mask')) return true;
        if ((selectedCategory === 'girth' || selectedCategory === 'girths') && (item.category === 'girth' || item.category === 'girths')) return true;
        if ((selectedCategory === 'dog-accessories' || selectedCategory === 'dog accessories' || selectedCategory === 'dog') && (item.category === 'dog-accessories' || item.category === 'dog accessories' || item.category === 'dog')) return true;
        if ((selectedCategory === 'breastplates' || selectedCategory === 'breastplate' || selectedCategory === 'cjategory-breastplates') && (item.category === 'breastplates' || item.category === 'breastplate')) return true;
        if ((selectedCategory === 'bridles' || selectedCategory === 'bridle' || selectedCategory === 'birdles' || selectedCategory === 'birdle') && (item.category === 'bridles' || item.category === 'bridle' || item.category === 'birdles')) return true;
        if ((selectedCategory === 'belt' || selectedCategory === 'belts') && (item.category === 'belt' || item.category === 'belts')) return true;
        if ((selectedCategory === 'reins-lead-rope' || selectedCategory === 'reins-lead-ropes' || selectedCategory === 'reins' || selectedCategory === 'lead rope' || selectedCategory === 'reins/lead rope' || selectedCategory === 'rope') && (item.category === 'reins-lead-rope' || item.category === 'reins-lead-ropes' || item.category === 'reins' || item.category === 'lead rope' || item.category === 'reins/lead rope')) return true;
        if ((selectedCategory === 'leg-protectors' || selectedCategory === 'leg-protector' || selectedCategory === 'leg protectors' || selectedCategory === 'leg protector') && (item.category === 'leg-protectors' || item.category === 'leg-protector' || item.category === 'leg protectors' || item.category === 'leg protector')) return true;
        if ((selectedCategory === 'saddle-pads' || selectedCategory === 'saddle-pad' || selectedCategory === 'saddle pad' || selectedCategory === 'saddlepad') && (item.category === 'saddle-pads' || item.category === 'saddle-pad' || item.category === 'saddle pad' || item.category === 'saddlepad')) return true;
        if ((selectedCategory === 'leather-bags' || selectedCategory === 'leather-bag' || selectedCategory === 'leather bags' || selectedCategory === 'leather bag' || selectedCategory === 'bags' || selectedCategory === 'bag') && (item.category === 'leather-bags' || item.category === 'leather-bag' || item.category === 'leather bags' || item.category === 'leather bag' || item.category === 'bags' || item.category === 'bag')) return true;
        if ((selectedCategory === 'show-jackets' || selectedCategory === 'show-jacket' || selectedCategory === 'show acket') && (item.category === 'show-jackets' || item.category === 'show-jacket' || item.category === 'show acket')) return true;
        if ((selectedCategory === 'whips' || selectedCategory === 'whip') && (item.category === 'whips' || item.category === 'whip')) return true;
        return false;
      });

  const ITEMS_PER_PAGE = 9;
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="w-full bg-white text-black min-h-screen pb-20">
      {/* Heading Row (Desktop: Product Catalogue & Equestrian Collection in one row; Filters below it) */}
      <section id="catalog-heading-top" className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-10 sm:pt-14">
        
        {/* Desktop Row 1: Product Catalogue & Equestrian Collection in one row */}
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 sm:gap-4 pb-4 border-b border-neutral-200">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
            <h2
              className="text-3xl sm:text-4xl lg:text-[40px] font-normal text-black capitalize tracking-tight"
              style={{
                fontFamily: 'LeJeuneDeck-Regular, "Times New Roman", Times, serif',
              }}
            >
              Equestrian Collection
            </h2>
            <span
              className="uppercase text-[#1E5631] text-xs font-semibold tracking-[0.25em]"
              style={{
                fontFamily: 'RL_DroidKufi, "Founders Grotesk text Regular", Arial, sans-serif',
              }}
            >
              Product Catalogue
            </span>
          </div>
        </div>

        {/* Row 2 (Below it): Filters (Desktop: wrapped row below; Mobile: 1 single slidable row) */}
        <div className="pt-5 pb-8 mb-2">
          <div className="flex overflow-x-auto no-scrollbar scroll-smooth whitespace-nowrap gap-2 sm:gap-2.5 sm:flex-wrap items-center py-1 -mx-6 px-6 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleSelectCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-[#1E5631] text-white shadow-sm ring-2 ring-[#1E5631]/30'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-[#F0F6F2] hover:text-[#1E5631] border border-transparent hover:border-[#1E5631]/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid: 9 products per page, lazy loaded, sku number, no description with subtle cross-fade */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 transition-all duration-300 ease-in-out ${
            isCrossFading ? 'opacity-0 translate-y-1' : 'opacity-100 translate-y-0'
          }`}
        >
          {paginatedItems.map((item, idx) => {
            const isLegProtector = item.category === 'leg-protectors' || item.category === 'leg-protector';
            const isHalter = item.category === 'halters' || item.category === 'halter';
            const isLeatherBag =
              item.category === 'leather-bags' ||
              item.category === 'leather-bag' ||
              item.category === 'leather bags' ||
              item.category === 'bags' ||
              item.category === 'bag';
            const sku = item.id.toUpperCase();
            return (
              <div
                key={item.id}
                onClick={() => onSelectProductDetail(item)}
                className="bg-neutral-50/70 border border-neutral-200 rounded-2xl overflow-hidden hover:border-[#1E5631] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div
                  className={`relative ${
                    isLeatherBag
                      ? 'aspect-[4/5]'
                      : isLegProtector || isHalter
                      ? 'aspect-square'
                      : 'aspect-[4/3]'
                  } w-full overflow-hidden bg-neutral-900`}
                >
                  <img
                    loading={idx < 6 ? 'eager' : 'lazy'}
                    decoding="async"
                    referrerPolicy="no-referrer"
                    src={item.image}
                    onError={(e) => {
                      if (item.fallbackImage) {
                        (e.currentTarget as HTMLImageElement).src = item.fallbackImage;
                      }
                    }}
                    alt={item.name}
                    className={`w-full h-full object-cover filter brightness-[0.94] group-hover:scale-105 transition-transform duration-700 ease-out ${
                      isLegProtector
                        ? 'object-bottom sm:object-[center_90%] origin-bottom'
                        : 'object-center'
                    }`}
                    style={isLegProtector ? { objectPosition: 'center 88%' } : undefined}
                  />
                  <div className="absolute top-3 left-3 bg-[#1E5631] text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs">
                    {item.categoryLabel}
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div className="mb-4">
                    <span className="text-[11px] uppercase font-mono tracking-wider text-neutral-600 block mb-1">
                      SKU #{sku}
                    </span>
                    <h3
                      className="text-lg font-normal text-black group-hover:text-[#1E5631] transition-colors leading-snug"
                      style={{
                        fontFamily: 'LeJeuneDeck-Regular, "Times New Roman", Times, serif',
                      }}
                    >
                      {item.name}
                    </h3>
                  </div>

                  {/* Card Action Row: View Details */}
                  <div className="pt-4 border-t border-neutral-200">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProductDetail(item);
                      }}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#1E5631] hover:bg-[#164225] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-xs cursor-pointer group/btn"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 text-white group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-neutral-200">
            <span className="text-xs text-neutral-500 font-light">
              Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} to{' '}
              {Math.min(currentPage * ITEMS_PER_PAGE, filteredItems.length)} of {filteredItems.length} products
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  handlePageChange(Math.max(currentPage - 1, 1));
                  window.scrollTo({ top: 400, behavior: 'smooth' });
                }}
                disabled={currentPage === 1}
                className="inline-flex items-center gap-1 px-3.5 py-2 rounded-lg border border-neutral-300 text-xs font-medium text-neutral-700 hover:border-[#1E5631] hover:text-[#1E5631] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev</span>
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => {
                      handlePageChange(pageNum);
                      window.scrollTo({ top: 400, behavior: 'smooth' });
                    }}
                    className={`w-9 h-9 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      currentPage === pageNum
                        ? 'bg-[#1E5631] text-white shadow-xs'
                        : 'border border-neutral-200 text-neutral-700 hover:border-[#1E5631] hover:text-[#1E5631]'
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}
              </div>

              <button
                onClick={() => {
                  handlePageChange(Math.min(currentPage + 1, totalPages));
                  window.scrollTo({ top: 400, behavior: 'smooth' });
                }}
                disabled={currentPage === totalPages}
                className="inline-flex items-center gap-1 px-3.5 py-2 rounded-lg border border-neutral-300 text-xs font-medium text-neutral-700 hover:border-[#1E5631] hover:text-[#1E5631] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Next page"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </section>
    </div>
  );
};
