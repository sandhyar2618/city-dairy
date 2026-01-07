
import React, { useState, useEffect, useRef } from 'react';
import { HashRouter, Routes, Route, Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { CITIES, ARTICLES, USER_STORIES } from './constants';
import { City, Article, UserStory } from './types';

// --- Global Constants ---
const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1600&auto=format&fit=crop';

// --- Shared Components ---

const SafeImage: React.FC<{ 
  src: string; 
  alt: string; 
  className?: string; 
  aspectRatio?: string 
}> = ({ src, alt, className = "", aspectRatio = "aspect-square" }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-navy/5 dark:bg-cream/5 ${aspectRatio} ${className} rounded-inherit`}>
      {!loaded && !error && (
        <div className="absolute inset-0 animate-pulse bg-navy/10 dark:bg-cream/10 flex items-center justify-center">
           <span className="text-[10px] uppercase tracking-widest text-navy/20 dark:text-cream/20 font-bold">Refining...</span>
        </div>
      )}
      <img
        src={error ? FALLBACK_IMAGE : (src || FALLBACK_IMAGE)}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1) ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        loading="lazy"
      />
    </div>
  );
};

// --- Profile Menu Component ---

const ProfileMenu: React.FC<{ profile: { name: string; phone: string }; onEdit: () => void }> = ({ profile, onEdit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full bg-navy/5 dark:bg-cream/10 border border-navy/10 dark:border-cream/10 flex items-center justify-center text-navy dark:text-cream hover:bg-navy/10 dark:hover:bg-cream/20 transition-all shadow-sm"
        aria-label="Profile"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-64 bg-white dark:bg-navy border border-navy/5 dark:border-cream/10 rounded-[1.5rem] shadow-2xl z-[100] p-6 fade-in origin-top-right">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-terracotta/10 dark:bg-gold/10 flex items-center justify-center mb-4 text-2xl font-serif font-bold text-terracotta dark:text-gold uppercase">
               {profile.name.charAt(0)}
            </div>
            <h3 className="text-lg font-serif text-navy dark:text-cream font-bold truncate w-full">{profile.name}</h3>
            <p className="text-xs text-navy/40 dark:text-cream/40 mb-6">{profile.phone}</p>
            
            <button 
              onClick={() => { onEdit(); setIsOpen(false); }}
              className="w-full py-3 bg-navy/5 dark:bg-white/5 text-navy dark:text-cream rounded-xl text-[10px] uppercase tracking-widest font-bold hover:bg-terracotta hover:text-white dark:hover:bg-gold transition-all duration-300"
            >
              Edit Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// --- Theme Toggle Component ---

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button 
      onClick={() => setIsDark(!isDark)}
      className="p-2.5 rounded-full bg-navy/5 dark:bg-cream/10 border border-navy/10 dark:border-cream/10 text-navy dark:text-cream hover:bg-navy/10 dark:hover:bg-cream/20 transition-all duration-500"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M3 12h2.25m.386-6.364l-1.591 1.591M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
      )}
    </button>
  );
};

// --- Entrance Page Component ---

const Entrance: React.FC<{ initialProfile?: { name: string; phone: string } | null, onComplete: (profile: { name: string; phone: string }) => void }> = ({ initialProfile, onComplete }) => {
  const [name, setName] = useState(initialProfile?.name || '');
  const [phone, setPhone] = useState(initialProfile?.phone || '');
  
  const rawPhone = phone.replace(/\D/g, '');
  const isPhoneValid = rawPhone.length === 10;
  const isFormValid = name.trim().length > 0 && isPhoneValid;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      const profile = { name, phone: rawPhone };
      localStorage.setItem('city_diary_profile', JSON.stringify(profile));
      onComplete(profile);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream dark:bg-navy px-6 transition-colors duration-500">
      <div className="fixed top-6 right-6">
        <ThemeToggle />
      </div>
      <div className="max-w-md w-full fade-in">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-serif text-navy dark:text-cream mb-2 tracking-tighter">City <span className="text-terracotta">Diary.</span></h1>
          <p className="text-navy/40 dark:text-cream/40 italic font-light">Your personal Indian travel journal</p>
        </div>

        <div className="bg-white dark:bg-cream/5 p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-navy/5 dark:shadow-black/40 border border-navy/5 dark:border-cream/5">
          <h2 className="text-xl font-serif text-navy dark:text-cream mb-8 text-center">{initialProfile ? 'Update' : 'Create'} Profile</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-navy/40 dark:text-cream/40 mb-2 ml-1">Full Name</label>
              <input 
                required 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-cream/30 dark:bg-navy/20 text-navy dark:text-cream border border-navy/5 dark:border-cream/10 px-6 py-4 rounded-2xl focus:outline-none focus:border-terracotta dark:focus:border-gold transition-all"
                placeholder="Aarav Sharma"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-navy/40 dark:text-cream/40 mb-2 ml-1">Phone Number</label>
              <input 
                required 
                type="tel" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-cream/30 dark:bg-navy/20 text-navy dark:text-cream border border-navy/5 dark:border-cream/10 px-6 py-4 rounded-2xl focus:outline-none focus:border-terracotta dark:focus:border-gold transition-all"
                placeholder="9876543210"
              />
              {!isPhoneValid && phone.length > 0 && (
                <p className="text-[10px] text-terracotta mt-2 ml-1 italic">Enter a valid 10-digit mobile number to continue</p>
              )}
            </div>

            <button 
              type="submit" 
              disabled={!isFormValid}
              className="w-full bg-navy dark:bg-cream text-cream dark:text-navy py-5 rounded-2xl uppercase text-xs tracking-widest font-bold hover:bg-terracotta dark:hover:bg-gold hover:text-white transition-all shadow-xl disabled:opacity-20 disabled:cursor-not-allowed"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// --- Navbar Component ---

const Navbar: React.FC<{ profile: { name: string; phone: string }, onEdit: () => void }> = ({ profile, onEdit }) => (
  <nav className="sticky top-0 z-50 bg-cream/90 dark:bg-navy/90 backdrop-blur-md border-b border-navy/5 dark:border-cream/5 px-6 py-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <Link to="/" className="text-2xl font-serif font-bold text-navy dark:text-cream tracking-tighter">
        City <span className="text-terracotta">Diary.</span>
      </Link>
      
      <div className="hidden md:flex items-center space-x-10 text-[10px] uppercase tracking-[0.2em] font-bold text-navy/60 dark:text-cream/60">
        <Link to="/cities" className="hover:text-terracotta dark:hover:text-gold transition-colors flex items-center space-x-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
          <span>Cities</span>
        </Link>
        <Link to="/guides" className="hover:text-terracotta dark:hover:text-gold transition-colors flex items-center space-x-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
          <span>Guides</span>
        </Link>
        <Link to="/stories" className="hover:text-terracotta dark:hover:text-gold transition-colors flex items-center space-x-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
          <span>Stories</span>
        </Link>
        <Link to="/share" className="text-terracotta dark:text-gold flex items-center space-x-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" /></svg>
          <span>Share</span>
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <ProfileMenu profile={profile} onEdit={onEdit} />
      </div>
    </div>
  </nav>
);

// --- Layout Components ---

const Footer: React.FC = () => (
  <footer className="bg-navy dark:bg-black text-cream py-16 px-6">
    <div className="max-w-7xl mx-auto flex flex-col items-center">
      <h2 className="text-3xl font-serif mb-4">City Diary.</h2>
      <p className="text-cream/40 text-xs uppercase tracking-widest mb-10">An Indian Editorial Exploration</p>
      <div className="flex space-x-8 text-[10px] uppercase tracking-widest text-cream/60 mb-12">
        <Link to="/cities" className="hover:text-gold transition-colors">Explorer</Link>
        <Link to="/guides" className="hover:text-gold transition-colors">Guides</Link>
        <Link to="/stories" className="hover:text-gold transition-colors">Archive</Link>
      </div>
      <div className="text-[10px] text-cream/20 tracking-widest">© 2024 CITY DIARY • CRAFTED WITH SOUL</div>
    </div>
  </footer>
);

const CityCard: React.FC<{ city: City }> = ({ city }) => (
  <Link to={`/city/${city.id}`} className="group block text-center">
    <div className="relative overflow-hidden rounded-[2rem] shadow-xl mb-6 aspect-[4/5]">
      <SafeImage 
        src={city.image} 
        alt={`${city.name} - ${city.state}`} 
        className="group-hover:scale-110 transition-transform duration-[2s]" 
        aspectRatio="h-full"
      />
      <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/10 transition-colors" />
      <div className="absolute top-6 right-6">
        <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[8px] uppercase tracking-widest text-white font-bold border border-white/20">{city.state}</div>
      </div>
    </div>
    <h3 className="text-3xl font-serif text-navy dark:text-cream leading-tight mb-1">{city.name}</h3>
    <p className="text-[9px] uppercase tracking-[0.3em] text-navy/40 dark:text-cream/40 font-bold">{city.country}</p>
  </Link>
);

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => (
  <div className="group text-center">
    <SafeImage 
      src={article.image} 
      alt={article.title} 
      className="mb-8 rounded-[1.5rem] shadow-xl" 
      aspectRatio="aspect-video"
    />
    <p className="text-terracotta dark:text-gold text-[9px] uppercase tracking-[0.3em] mb-4 font-bold">{article.category}</p>
    <h3 className="text-3xl font-serif mb-4 text-navy dark:text-cream leading-tight">{article.title}</h3>
    <p className="text-navy/60 dark:text-cream/50 text-sm italic font-light max-w-sm mx-auto line-clamp-2">{article.excerpt}</p>
  </div>
);

// --- Detail Pages ---

const CityDetail: React.FC = () => {
  const { id } = useParams();
  const city = CITIES.find(c => c.id === id);
  const navigate = useNavigate();

  if (!city) return <div className="py-20 text-center dark:text-cream">City not found</div>;

  return (
    <div className="fade-in pb-32">
      <div className="max-w-7xl mx-auto px-6 pt-12">
        <button onClick={() => navigate(-1)} className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-navy/40 dark:text-cream/40 hover:text-terracotta dark:hover:text-gold transition-colors mb-12 font-bold">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          <span>Back to Cities</span>
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-terracotta dark:text-gold uppercase text-xs tracking-[0.4em] font-bold mb-6">{city.state} • {city.country}</p>
        <h1 className="text-7xl md:text-[8rem] font-serif mb-12 text-navy dark:text-cream tracking-tighter leading-none">{city.name}</h1>
        
        <div className="w-full aspect-video rounded-[3rem] overflow-hidden shadow-2xl mb-24">
          <SafeImage src={city.image} alt={city.name} className="w-full h-full" aspectRatio="h-full" />
        </div>

        <div className="space-y-40 text-center">
          <section>
            <h2 className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold mb-10">🏛 History & Heritage</h2>
            <p className="text-2xl leading-relaxed text-navy/80 dark:text-cream/80 font-light italic max-w-3xl mx-auto">{city.history}</p>
          </section>

          <section>
            <h2 className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold mb-10">🎭 Soul & Culture</h2>
            <p className="text-2xl leading-relaxed text-navy/80 dark:text-cream/80 font-light italic max-w-3xl mx-auto">{city.culture}</p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-cream/5 p-12 rounded-[2.5rem] shadow-xl text-left border border-navy/5 dark:border-cream/5">
              <h3 className="text-terracotta dark:text-gold text-[10px] uppercase tracking-widest font-bold mb-6">🍛 Flavours</h3>
              <p className="text-lg leading-relaxed text-navy/70 dark:text-cream/60 font-light">{city.food}</p>
            </div>
            <div className="bg-white dark:bg-cream/5 p-12 rounded-[2.5rem] shadow-xl text-left border border-navy/5 dark:border-cream/5">
              <h3 className="text-terracotta dark:text-gold text-[10px] uppercase tracking-widest font-bold mb-6">🎉 Celebrations</h3>
              <p className="text-lg leading-relaxed text-navy/70 dark:text-cream/60 font-light">{city.festivals}</p>
            </div>
          </div>

          <section>
            <h2 className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold mb-10">🏞 Landmarks</h2>
            <p className="text-2xl leading-relaxed text-navy/80 dark:text-cream/80 font-light italic max-w-3xl mx-auto mb-16">{city.landmarks}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="rounded-2xl overflow-hidden shadow-lg"><SafeImage src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600" alt="Scenic 1" /></div>
              <div className="rounded-2xl overflow-hidden shadow-lg"><SafeImage src="https://images.unsplash.com/photo-1524492459584-96c6f46dd17a?q=80&w=600" alt="Scenic 2" /></div>
              <div className="rounded-2xl overflow-hidden shadow-lg hidden md:block"><SafeImage src="https://images.unsplash.com/photo-1564507592333-c60657eaa0ae?q=80&w=600" alt="Scenic 3" /></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

// --- Page Components ---

const Home: React.FC = () => (
  <div className="fade-in">
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none">
         <div className="absolute top-20 left-10 w-64 h-64 bg-terracotta rounded-full blur-[120px]"></div>
         <div className="absolute bottom-20 right-10 w-80 h-80 bg-gold rounded-full blur-[150px]"></div>
      </div>
      
      <span className="text-gold uppercase text-[11px] tracking-[0.5em] font-bold mb-8 animate-pulse">Established 2024</span>
      <h1 className="text-7xl md:text-[11rem] font-serif text-navy dark:text-cream leading-[0.85] mb-12 tracking-tighter">
        Indian <br /> <span className="italic font-light">Heritage.</span>
      </h1>
      <p className="text-xl md:text-2xl text-navy/60 dark:text-cream/50 max-w-2xl font-light italic leading-relaxed mb-16">
        An editorial journey across the Indian subcontinent. Exploring the soul of 30 iconic cities.
      </p>
      <Link to="/cities" className="bg-navy dark:bg-cream text-cream dark:text-navy px-16 py-6 rounded-full uppercase text-[10px] tracking-[0.3em] font-bold hover:bg-terracotta dark:hover:bg-gold hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl">
        Explore Journals
      </Link>
    </section>

    <section className="py-40 px-6 max-w-7xl mx-auto border-t border-navy/5 dark:border-cream/5">
      <div className="text-center mb-24">
        <h2 className="text-5xl font-serif text-navy dark:text-cream mb-4">Featured Explorer</h2>
        <div className="w-20 h-0.5 bg-terracotta mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {CITIES.slice(0, 3).map(city => <CityCard key={city.id} city={city} />)}
      </div>
    </section>
  </div>
);

const CitiesExplorer: React.FC = () => {
  const [search, setSearch] = useState('');
  const filtered = CITIES.filter(c => 
    c.name.toLowerCase().includes(search.toLowerCase()) || 
    c.state.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 fade-in">
      <div className="text-center mb-24">
        <h1 className="text-6xl font-serif text-navy dark:text-cream mb-6">The Explorer</h1>
        <p className="text-navy/50 dark:text-cream/40 italic text-xl mb-12 font-light">30 Journeys. Infinite Memories.</p>
        <div className="max-w-xl mx-auto relative group">
          <input 
            type="text" 
            placeholder="Search your city..." 
            className="w-full bg-navy/5 dark:bg-cream/5 border border-navy/5 dark:border-cream/10 py-6 px-10 rounded-full focus:outline-none focus:border-terracotta dark:focus:border-gold transition-all text-center text-2xl font-light placeholder:text-navy/20 dark:placeholder:text-cream/20 shadow-inner"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="absolute right-8 top-1/2 -translate-y-1/2 text-navy/20 dark:text-cream/20 group-focus-within:text-terracotta dark:group-focus-within:text-gold transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20">
          {filtered.map(city => <CityCard key={city.id} city={city} />)}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-2xl font-serif text-navy/40 dark:text-cream/40 mb-6 italic">City not listed? Share your story with us!</p>
          <Link to="/share" className="text-terracotta dark:text-gold uppercase text-[10px] tracking-widest font-bold hover:underline">Share Story &rarr;</Link>
        </div>
      )}
    </div>
  );
};

// --- Stories & Guides ---

const Guides: React.FC = () => (
  <div className="max-w-7xl mx-auto px-6 py-24 fade-in">
    <div className="text-center mb-24">
      <h1 className="text-6xl font-serif text-navy dark:text-cream mb-6">Travel Guides</h1>
      <p className="text-navy/50 dark:text-cream/40 italic text-xl font-light">Practical wisdom for the Indian road.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
      {ARTICLES.map(a => <ArticleCard key={a.id} article={a} />)}
    </div>
  </div>
);

const Stories: React.FC = () => (
  <div className="max-w-5xl mx-auto px-6 py-24 fade-in">
    <div className="text-center mb-24">
      <h1 className="text-6xl font-serif text-navy dark:text-cream mb-6">Traveler Tales</h1>
      <p className="text-navy/50 dark:text-cream/40 italic text-xl font-light">Unfiltered voices from across India.</p>
    </div>
    <div className="space-y-32">
      {USER_STORIES.map(story => (
        <div key={story.id} className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <SafeImage src={story.image} alt={story.city} className="rounded-[2.5rem] shadow-2xl" aspectRatio="aspect-[16/10]" />
          </div>
          <p className="text-gold uppercase text-[10px] tracking-[0.4em] font-bold mb-6">{story.city}, {story.country}</p>
          <p className="text-3xl font-serif italic text-navy/90 dark:text-cream/90 leading-relaxed mb-8">"{story.story}"</p>
          <div className="flex items-center justify-center space-x-4">
             <div className="w-8 h-0.5 bg-navy/10 dark:bg-cream/10"></div>
             <span className="text-[10px] uppercase tracking-widest font-bold text-navy/40 dark:text-cream/40">— {story.userName}</span>
             <div className="w-8 h-0.5 bg-navy/10 dark:bg-cream/10"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ShareStory: React.FC<{ profile: { name: string } }> = ({ profile }) => {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="max-w-2xl mx-auto px-6 py-32 fade-in">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-navy dark:text-cream mb-4">Your Story</h1>
        <p className="text-navy/50 dark:text-cream/40 italic font-light">Inspired by India? Tell us everything.</p>
      </div>

      {submitted ? (
        <div className="bg-white dark:bg-cream/5 p-12 rounded-[2.5rem] text-center shadow-xl border border-navy/5 dark:border-cream/5 animate-pulse">
           <h3 className="text-2xl font-serif text-terracotta dark:text-gold mb-4 italic">Thank you for sharing!</h3>
           <p className="text-navy/60 dark:text-cream/60">Your story has been archived and will be published shortly.</p>
           <Link to="/stories" className="inline-block mt-8 text-[10px] uppercase tracking-widest font-bold text-navy dark:text-cream">View Stories &rarr;</Link>
        </div>
      ) : (
        <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-navy/40 dark:text-cream/40 mb-3">Author</label>
              <input readOnly value={profile.name} className="w-full bg-navy/5 dark:bg-cream/5 border-b border-navy/10 dark:border-cream/10 py-4 px-2 focus:outline-none opacity-50 cursor-not-allowed dark:text-cream" />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-navy/40 dark:text-cream/40 mb-3">City</label>
              <input required placeholder="Enter city name" className="w-full bg-transparent border-b border-navy/10 dark:border-cream/10 py-4 px-2 focus:outline-none focus:border-terracotta dark:focus:border-gold dark:text-cream" />
            </div>
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest font-bold text-navy/40 dark:text-cream/40 mb-3">The Story</label>
            <textarea required rows={6} placeholder="Describe your experience..." className="w-full bg-transparent border-b border-navy/10 dark:border-cream/10 py-4 px-2 focus:outline-none focus:border-terracotta dark:focus:border-gold dark:text-cream italic" />
          </div>
          <button type="submit" className="w-full bg-navy dark:bg-cream text-cream dark:text-navy py-5 rounded-2xl uppercase text-[10px] tracking-[0.3em] font-bold hover:bg-terracotta dark:hover:bg-gold hover:text-white transition-all shadow-xl">
            Publish Story
          </button>
        </form>
      )}
    </div>
  );
};

// --- Main App Implementation ---

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App: React.FC = () => {
  const [profile, setProfile] = useState<{ name: string; phone: string } | null>(() => {
    const saved = localStorage.getItem('city_diary_profile');
    return saved ? JSON.parse(saved) : null;
  });
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  if (!profile || isEditingProfile) {
    return (
      <Entrance 
        initialProfile={profile} 
        onComplete={(newProfile) => {
          setProfile(newProfile);
          setIsEditingProfile(false);
        }} 
      />
    );
  }

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-gold selection:text-navy dark:bg-navy transition-colors duration-500">
        <Navbar 
          profile={profile} 
          onEdit={() => setIsEditingProfile(true)} 
        />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cities" element={<CitiesExplorer />} />
            <Route path="/city/:id" element={<CityDetail />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/share" element={<ShareStory profile={profile} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
