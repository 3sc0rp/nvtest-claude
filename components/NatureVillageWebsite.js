import React, { useState } from 'react';
import { Menu, X, MapPin, Phone, Clock, Star, Filter, Globe, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

const NatureVillageWebsite = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const [activeFilter, setActiveFilter] = useState('all');

  // Language options
  const languages = {
    en: { name: 'English', code: 'en', dir: 'ltr' },
    ku: { name: 'کوردی', code: 'ku', dir: 'rtl' },
    ar: { name: 'العربية', code: 'ar', dir: 'rtl' }
  };

  // Sample menu data
  const menuItems = [
    {
      id: 1,
      name: {
        en: 'Kebab-e Kubideh',
        ku: 'کەباب کوبیده',
        ar: 'كباب كوبيده'
      },
      description: {
        en: 'Traditional ground lamb kebab with aromatic spices, served with basmati rice and grilled tomatoes',
        ku: 'کەبابی نەریتی لە گۆشتی بەرخی هاڕاو لەگەڵ بۆنوبێرینی جۆراوجۆر، لەگەڵ برنجی باسماتی و تەماتەی برژاو',
        ar: 'كباب لحم الخروف المفروم التقليدي مع التوابل العطرة، يُقدم مع أرز البسمتي والطماطم المشوية'
      },
      price: '$18.99',
      category: 'traditional',
      popular: true,
      image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=300&h=200&fit=crop',
      tags: ['spicy', 'grilled']
    },
    {
      id: 2,
      name: {
        en: 'Dolma',
        ku: 'دۆڵمە',
        ar: 'دولمة'
      },
      description: {
        en: 'Grape leaves stuffed with rice, herbs, and spices - a Kurdish family recipe',
        ku: 'گەڵای مێو پڕکراو لە برنج و ڕووەک و بۆنوبێرین - ڕیسەتی خێزانی کوردی',
        ar: 'أوراق العنب محشوة بالأرز والأعشاب والتوابل - وصفة عائلية كردية'
      },
      price: '$14.99',
      category: 'vegan',
      popular: false,
      image: 'https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?w=300&h=200&fit=crop',
      tags: ['vegetarian', 'traditional']
    },
    {
      id: 3,
      name: {
        en: 'Yaprakh',
        ku: 'یاپراخ',
        ar: 'يبرق'
      },
      description: {
        en: 'Cabbage rolls filled with rice, meat, and Kurdish spices in tomato sauce',
        ku: 'لەتی کەلەرم پڕکراو لە برنج و گۆشت و بۆنوبێرینی کوردی لە سۆسی تەماتە',
        ar: 'لفائف الملفوف محشوة بالأرز واللحم والتوابل الكردية في صلصة الطماطم'
      },
      price: '$16.99',
      category: 'traditional',
      popular: true,
      image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300&h=200&fit=crop',
      tags: ['comfort food']
    }
  ];

  const translations = {
    en: {
      nav: {
        home: 'Home',
        menu: 'Menu',
        about: 'About Us',
        gallery: 'Gallery',
        visit: 'Visit Us'
      },
      hero: {
        title: 'Nature Village',
        subtitle: 'A Taste of Kurdistan in Every Bite',
        description: 'Experience authentic Kurdish flavors in a warm, traditional setting where every dish tells a story of our rich cultural heritage.',
        cta1: 'View Menu',
        cta2: 'Make Reservation'
      },
      menu: {
        title: 'Our Menu',
        subtitle: 'Powered by MenuIQ - AI-Enhanced Dining Experience',
        filters: {
          all: 'All Items',
          traditional: 'Traditional',
          vegan: 'Vegan & Vegetarian',
          popular: 'Most Popular'
        }
      },
      about: {
        title: 'Our Story',
        content: 'Nature Village was born from a dream to share the authentic flavors and warm hospitality of Kurdistan with the world. Our family recipes have been passed down through generations.',
        experience: 'Years Experience',
        recipes: 'Traditional Recipes'
      },
      visit: {
        title: 'Visit Us',
        subtitle: 'Find us in the heart of the city',
        hours: 'Hours',
        contact: 'Contact',
        address: 'Address',
        phone: 'Phone',
        whatsapp: 'WhatsApp',
        makeReservation: 'Make Reservation',
        whatsappUs: 'WhatsApp Us'
      },
      footer: {
        description: 'Bringing the authentic flavors and warm hospitality of Kurdistan to your table.',
        quickLinks: 'Quick Links',
        contactInfo: 'Contact Info',
        openDaily: 'Open Daily 11:00 AM',
        poweredBy: 'Powered by',
        copyright: '© 2024 Nature Village Kurdish Restaurant. All rights reserved.'
      },
      featured: {
        title: 'Featured Dishes',
        subtitle: 'Discover our most beloved Kurdish specialties'
      }
    },
    ku: {
      nav: {
        home: 'ماڵەوە',
        menu: 'خۆراک',
        about: 'دەربارەمان',
        gallery: 'وێنەکان',
        visit: 'سەردانمان بکەن'
      },
      hero: {
        title: 'گوندی سروشت',
        subtitle: 'تامی کوردستان لە هەر پارووەکدا',
        description: 'تامی ڕەسەنی کوردی بچێژن لە ژینگەیەکی گەرم و نەریتیدا.',
        cta1: 'بینینی خۆراک',
        cta2: 'جێگە حیجازکردن'
      },
      menu: {
        title: 'خۆراکەکانمان',
        subtitle: 'بە MenuIQ هێزدراو',
        filters: {
          all: 'هەموو ئایتەمەکان',
          traditional: 'نەریتی',
          vegan: 'ڕووەکی',
          popular: 'بەناوبانگترین'
        }
      },
      about: {
        title: 'چیرۆکەکەمان',
        content: 'گوندی سروشت لە خەونێکەوە لەدایک بووە بۆ هاوبەشکردنی تامە ڕەسەنەکان.',
        experience: 'ساڵ ئەزموون',
        recipes: 'ڕیسەتی نەریتی'
      },
      visit: {
        title: 'سەردانمان بکەن',
        subtitle: 'لە دڵی شارەکە بمانبینەوە',
        hours: 'کاتەکان',
        contact: 'پەیوەندی',
        address: 'ناونیشان',
        phone: 'تەلەفۆن',
        whatsapp: 'واتساپ',
        makeReservation: 'جێگە حیجازکردن',
        whatsappUs: 'واتساپمان بکە'
      },
      footer: {
        description: 'هێنانی تامە ڕەسەنەکان بۆ مێزەکەتان.',
        quickLinks: 'لینکە خێراکان',
        contactInfo: 'زانیاری پەیوەندی',
        openDaily: 'ڕۆژانە کراوەیە',
        poweredBy: 'هێزی لەلایەن',
        copyright: '© ٢٠٢٤ گوندی سروشت.'
      },
      featured: {
        title: 'خۆراکی نمایشکراو',
        subtitle: 'خۆراکە خۆشەویستەکانی کوردی بناسە'
      }
    },
    ar: {
      nav: {
        home: 'الرئيسية',
        menu: 'القائمة',
        about: 'من نحن',
        gallery: 'المعرض',
        visit: 'زورونا'
      },
      hero: {
        title: 'قرية الطبيعة',
        subtitle: 'طعم كردستان في كل قضمة',
        description: 'اختبر النكهات الكردية الأصيلة في جو دافئ وتقليدي.',
        cta1: 'عرض القائمة',
        cta2: 'حجز طاولة'
      },
      menu: {
        title: 'قائمتنا',
        subtitle: 'مدعوم بـ MenuIQ',
        filters: {
          all: 'جميع الأطباق',
          traditional: 'تقليدي',
          vegan: 'نباتي',
          popular: 'الأكثر شهرة'
        }
      },
      about: {
        title: 'قصتنا',
        content: 'وُلدت قرية الطبيعة من حلم مشاركة النكهات الأصيلة.',
        experience: 'سنوات خبرة',
        recipes: 'وصفات تقليدية'
      },
      visit: {
        title: 'زورونا',
        subtitle: 'اعثر علينا في قلب المدينة',
        hours: 'ساعات العمل',
        contact: 'اتصل بنا',
        address: 'العنوان',
        phone: 'الهاتف',
        whatsapp: 'واتساب',
        makeReservation: 'احجز طاولة',
        whatsappUs: 'راسلنا'
      },
      footer: {
        description: 'نجلب النكهات الأصيلة إلى طاولتك.',
        quickLinks: 'روابط سريعة',
        contactInfo: 'معلومات الاتصال',
        openDaily: 'مفتوح يومياً',
        poweredBy: 'مدعوم من',
        copyright: '© ٢٠٢٤ قرية الطبيعة.'
      },
      featured: {
        title: 'الأطباق المميزة',
        subtitle: 'اكتشف أحب الأطباق الكردية'
      }
    }
  };

  const t = translations[language];
  const isRTL = languages[language].dir === 'rtl';

  const scrollToSection = (sectionId) => {
    setCurrentSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredMenuItems = activeFilter === 'all' 
    ? menuItems 
    : activeFilter === 'popular' 
    ? menuItems.filter(item => item.popular)
    : menuItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b-2 border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="https://naturevillagerestaurant.com/wp-content/uploads/2024/09/cropped-NatureVillage-Logo_circle-1222-2048x2048-1.webp" 
                alt="Nature Village Restaurant Logo" 
                className="w-12 h-12 mr-3 object-contain"
              />
              <div className="text-2xl font-serif font-bold text-amber-800">
                Nature Village
                <div className="text-xs text-amber-600 font-sans">Kurdish Restaurant</div>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {Object.entries(t.nav).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => scrollToSection(key)}
                    className="px-3 py-2 rounded-md text-sm font-medium text-amber-800 hover:bg-amber-100"
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-transparent text-amber-800 font-medium text-sm border-none outline-none"
              >
                {Object.entries(languages).map(([code, lang]) => (
                  <option key={code} value={code}>
                    {lang.name}
                  </option>
                ))}
              </select>

              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-amber-800"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-amber-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {Object.entries(t.nav).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => scrollToSection(key)}
                    className="block px-3 py-2 text-base font-medium text-amber-800 hover:bg-amber-100 w-full text-left"
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'linear-gradient(rgba(139, 69, 19, 0.4), rgba(139, 69, 19, 0.6)), url("https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&h=1080&fit=crop")'
          }}
        />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            {t.hero.title}
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-8 text-amber-100">
            {t.hero.subtitle}
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-amber-50">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('menu')}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-xl"
            >
              {t.hero.cta1}
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
              {t.hero.cta2}
            </button>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-amber-800 mb-4">{t.featured.title}</h2>
            <p className="text-xl text-amber-600">{t.featured.subtitle}</p>
            <div className="w-24 h-1 bg-amber-600 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuItems.filter(item => item.popular).map((item) => (
              <div key={item.id} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105">
                <img 
                  src={item.image} 
                  alt={item.name[language]}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-amber-800 mb-2">{item.name[language]}</h3>
                  <p className="text-gray-700 mb-4">{item.description[language]}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-amber-600">{item.price}</span>
                    <div className="flex items-center space-x-1 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-amber-800 mb-4">{t.menu.title}</h2>
            <p className="text-lg text-amber-600 mb-2">{t.menu.subtitle}</p>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(t.menu.filters).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  activeFilter === key
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-white text-amber-800 hover:bg-amber-100'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMenuItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
                <img 
                  src={item.image} 
                  alt={item.name[language]}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-amber-800 mb-1">{item.name[language]}</h3>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">{item.description[language]}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-amber-600">{item.price}</span>
                    <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-amber-800 mb-6">{t.about.title}</h2>
              <div className="w-24 h-1 bg-amber-600 mb-8"></div>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {t.about.content}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-amber-50 rounded-lg">
                  <div className="text-3xl font-bold text-amber-600 mb-2">15+</div>
                  <div className="text-amber-800 font-medium">{t.about.experience}</div>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-lg">
                  <div className="text-3xl font-bold text-amber-600 mb-2">50+</div>
                  <div className="text-amber-800 font-medium">{t.about.recipes}</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop"
                alt="Traditional Kurdish cooking"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section id="visit" className="py-20 bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-amber-800 mb-4">{t.visit.title}</h2>
            <p className="text-lg text-amber-600">{t.visit.subtitle}</p>
            <div className="w-24 h-1 bg-amber-600 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <p className="text-gray-600">Interactive Map Integration</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-serif font-bold text-amber-800 mb-6">{t.visit.contact}</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-amber-600" />
                    <div>
                      <p className="font-semibold text-amber-800">{t.visit.address}</p>
                      <p className="text-gray-700">123 Kurdistan Street, City Center</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-amber-600" />
                    <div>
                      <p className="font-semibold text-amber-800">{t.visit.phone}</p>
                      <p className="text-gray-700">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-serif font-bold text-amber-800 mb-6">{t.visit.hours}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-amber-800 font-medium">Monday - Thursday</span>
                    <span className="text-gray-700">11:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-800 font-medium">Friday - Saturday</span>
                    <span className="text-gray-700">11:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-800 font-medium">Sunday</span>
                    <span className="text-gray-700">12:00 PM - 9:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>{t.visit.whatsappUs}</span>
                </button>
                <button className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-4 px-6 rounded-lg font-semibold transition-colors">
                  {t.visit.makeReservation}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <img 
                  src="https://naturevillagerestaurant.com/wp-content/uploads/2024/09/cropped-NatureVillage-Logo_circle-1222-2048x2048-1.webp" 
                  alt="Nature Village Logo" 
                  className="w-12 h-12 mr-3 object-contain"
                />
                <h3 className="text-2xl font-serif font-bold">Nature Village</h3>
              </div>
              <p className="text-amber-200 mb-6 leading-relaxed">
                {t.footer.description}
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h4>
              <div className="space-y-2">
                {Object.entries(t.nav).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => scrollToSection(key)}
                    className="block text-amber-200 hover:text-white transition-colors"
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">{t.footer.contactInfo}</h4>
              <div className="space-y-2 text-amber-200">
                <p className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>123 Kurdistan Street</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{t.footer.openDaily}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-amber-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-amber-200 text-sm">
              {t.footer.copyright}
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-transparent text-amber-200 text-sm border-none outline-none"
              >
                {Object.entries(languages).map(([code, lang]) => (
                  <option key={code} value={code} className="bg-amber-900">
                    {lang.name}
                  </option>
                ))}
              </select>
              <div className="text-amber-200 text-sm">
                {t.footer.poweredBy} <span className="font-semibold text-white">Blunari</span> & MenuIQ
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110">
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default NatureVillageWebsite;
