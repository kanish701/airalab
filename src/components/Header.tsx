import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu, X, ChevronDown, MonitorSmartphone, Layers, PenTool, Film, Code2, Workflow, Server, Bug, Boxes, FileText, Wrench,
  AirVent
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AIyutham from '../assets/AI yutham Logo.png'; // Ensure this path is correct

// --- DATA (Unchanged) ---
const capabilitiesData = [
  {
    heading: 'Training',
    items: [
      { icon: MonitorSmartphone, label: 'AI Fundamentals', href: '/capabilities/ai-fundamentals' },
      { icon: Layers, label: 'AI Freshers Course', href: '/capabilities/ai-freshers-course' },
      { icon: Film, label: 'Prompt Engineering', href: '/capabilities/prompt-engineering' },
      { icon: PenTool, label: 'AI Bootcamps', href: '/capabilities/ai-bootcamps' },
    ],
  },
  {
    heading: 'Development',
    items: [
      { icon: Code2, label: 'Frontend Development', href: '/capabilities/ai-based-saas-solutions' },
      { icon: Workflow, label: 'Backend Development', href: '/capabilities/ai-based-saas-solutions' },
      { icon: Server, label: 'AI based SaaS Solutions', href: '/capabilities/ai-based-saas-solutions' },
      { icon: Bug, label: 'ETL Solutions', href: '/capabilities/ai-based-saas-solutions' },
      { icon: Boxes, label: 'Predictive Analysis', href: '/capabilities/ai-based-saas-solutions' },
    ],
  },
  {
    heading: 'Dashboards',
    items: [
      { icon: FileText, label: 'Static', href: '/capabilities/dynamic' },
      { icon: FileText, label: 'Dynamic', href: '/capabilities/dynamic' },
      { icon: Wrench, label: 'Interactive', href: '/capabilities/dynamic' },
    ],
  },
];

const companyData = [
  { heading: 'About Us', icon: FileText, href: '/company/about-us' },
  { heading: 'Careers', icon: PenTool, href: '/company/careers' },
  { heading: 'Contact Us', icon: Film, href: '/company/contact-us' },
  { heading: 'Why AIyutham', icon: AirVent, href: '/company/why-aiyutham' }
];

const navigation = [
  { name: 'Capabilities' },
  { name: 'Resources', href: '/Resources' },
  { name: 'Company' },
];

// --- COMPONENT ---
const Header: React.FC = () => {
  // --------> Mobile State
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCapMobileOpen, setIsCapMobileOpen] = useState(false);
  const [isCompanyMobileMenuOpen, setIsCompanyMobileMenuOpen] = useState(false);

  //--------> Desktop State
  const [openCapabilitiesDropdown, setOpenCapabilitiesDropdown] = useState(false);
  const [OpenCompanyDropdown, setOpenCompanyDropdown] = useState(false);
  const location = useLocation();

  const hoverTimer = useRef<number | null>(null);
  const megaRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const companyRef = useRef<HTMLDivElement | null>(null);
  const companyTriggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setOpenCapabilitiesDropdown(false);
    setIsMenuOpen(false);
    setIsCapMobileOpen(false);
    setOpenCompanyDropdown(false);
  }, [location.pathname]);

  // Click Outside Logic
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (
        openCapabilitiesDropdown &&
        megaRef.current &&
        triggerRef.current &&
        !megaRef.current.contains(e.target as Node) &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setOpenCapabilitiesDropdown(false);
      }
      if (
        OpenCompanyDropdown &&
        companyRef.current &&
        companyTriggerRef.current &&
        !companyRef.current.contains(e.target as Node) &&
        !companyTriggerRef.current.contains(e.target as Node)
      ) {
        setOpenCompanyDropdown(false);
      }
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [openCapabilitiesDropdown, OpenCompanyDropdown]);

  // Hover Delays
  const openWithDelay = () => {
    if (hoverTimer.current) window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => {
      setOpenCapabilitiesDropdown(true);
      setOpenCompanyDropdown(false);
    }, 80);
  };
  const closeWithDelay = () => {
    if (hoverTimer.current) window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => setOpenCapabilitiesDropdown(false), 120);
  };

  const openWithDelayCompany = () => {
    if (hoverTimer.current) window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => {
      setOpenCompanyDropdown(true);
      setOpenCapabilitiesDropdown(false);
    }, 80);
  };
  const closeWithDelayCompany = () => {
    if (hoverTimer.current) window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => setOpenCompanyDropdown(false), 120);
  };

  return (
    // SOLID DARK HEADER BACKGROUND
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 w-full">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center min-w-[180px]">
            <Link to="/" className="flex items-center space-x-2 group">
              <img 
                src={AIyutham} 
                alt="AIyutham" 
                className="h-10 md:h-12 w-auto group-hover:scale-105 transition-transform duration-300" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <nav className="flex items-center gap-8">
              {navigation.map((item) => {
                // --- CAPABILITIES DROPDOWN ---
                if (item.name === 'Capabilities') {
                  return (
                    <div 
                      key={item.name} 
                      className="relative"
                      onMouseEnter={openWithDelay}
                      onMouseLeave={closeWithDelay}
                    >
                      <button
                        ref={triggerRef}
                        className={`flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-full transition-all duration-300 ${openCapabilitiesDropdown ? 'text-yellow-400 bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openCapabilitiesDropdown ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {openCapabilitiesDropdown && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            ref={megaRef}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-screen max-w-4xl z-50 px-4"
                          >
                            {/* Mega Menu Container */}
                            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl shadow-black/50 p-8 grid grid-cols-3 gap-x-8 gap-y-6 relative overflow-hidden">
                                {/* Subtle Background Texture inside Menu */}
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
                                
                                {capabilitiesData.map((col) => (
                                <div key={col.heading} className="relative z-10">
                                  <h3 className="text-xs font-bold text-yellow-500 uppercase tracking-wider mb-4 border-b border-white/5 pb-2">{col.heading}</h3>
                                  <div className="flex flex-col space-y-1">
                                    {col.items.map(({ icon: Icon, label, href }) => (
                                      <Link
                                        key={label}
                                        to={href}
                                        className="flex items-center gap-3 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200 group"
                                      >
                                        <div className="p-1.5 rounded-md bg-white/5 group-hover:bg-yellow-500/10 transition-colors">
                                            <Icon className="w-4 h-4 group-hover:text-yellow-400 transition-colors" />
                                        </div>
                                        <span className="text-sm font-medium">{label}</span>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                // --- COMPANY DROPDOWN ---
                if (item.name === 'Company') {
                  return (
                    <div 
                      key={item.name} 
                      className="relative"
                      onMouseEnter={openWithDelayCompany}
                      onMouseLeave={closeWithDelayCompany}
                    >
                      <button
                        ref={companyTriggerRef}
                        className={`flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-full transition-all duration-300 ${OpenCompanyDropdown ? 'text-yellow-400 bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${OpenCompanyDropdown ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {OpenCompanyDropdown && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            ref={companyRef}
                            className="absolute top-full left-0 mt-2 min-w-[200px]"
                          >
                             <div className="bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl p-2 flex flex-col space-y-1">
                              {companyData.map(({ heading, href, icon: Icon }) => (
                                <Link
                                  key={heading}
                                  to={href}
                                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200 group"
                                >
                                  <Icon className="w-4 h-4 group-hover:text-yellow-400 transition-colors" />
                                  <span className="text-sm font-medium">{heading}</span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                // --- REGULAR LINK ---
                return (
                  <Link
                    key={item.name}
                    to={item.href!}
                    className={`text-sm font-medium px-3 py-2 rounded-full transition-all duration-300 relative ${location.pathname === item.href ? 'text-white bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex flex-shrink-0 min-w-[180px] justify-end">
            <Link
              to="/contact-us"
              className="group relative px-6 py-2.5 bg-[#FFD700] hover:bg-[#FCD34D] text-[#0a0a0a] text-sm font-bold rounded-lg shadow-[0_0_20px_-5px_rgba(255,215,0,0.3)] hover:shadow-[0_0_25px_-5px_rgba(255,215,0,0.5)] transition-all duration-300 flex items-center gap-2"
            >
              Book intro call
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 bg-[#0a0a0a] backdrop-blur-xl"
          >
            <nav className="flex flex-col px-6 py-6 space-y-4">
              
              {/* Capabilities Accordion */}
              <div>
                <button
                  onClick={() => setIsCapMobileOpen((p) => !p)}
                  className="flex items-center justify-between w-full text-left text-base font-semibold text-white py-2 border-b border-white/5"
                >
                  <span>Capabilities</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isCapMobileOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isCapMobileOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-2 pt-4 pb-2 space-y-6">
                        {capabilitiesData.map((col) => (
                          <div key={col.heading}>
                            <div className="text-xs font-bold text-yellow-500 uppercase tracking-wider mb-3">{col.heading}</div>
                            <div className="flex flex-col gap-3 pl-2 border-l border-white/10">
                              {col.items.map(({ icon: Icon, label, href }) => (
                                <Link
                                  key={label}
                                  to={href}
                                  onClick={() => setIsMenuOpen(false)}
                                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                  <Icon className="w-4 h-4" />
                                  {label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Resources Link */}
              <Link to="/Resources" onClick={() => setIsMenuOpen(false)} className="text-base font-semibold text-white py-2 border-b border-white/5 block">
                Resources
              </Link>

              {/* Company Accordion */}
              <div>
                <button
                  onClick={() => setIsCompanyMobileMenuOpen((p) => !p)}
                  className="flex items-center justify-between w-full text-left text-base font-semibold text-white py-2 border-b border-white/5"
                >
                  <span>Company</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isCompanyMobileMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isCompanyMobileMenuOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pt-4 pb-2 space-y-3">
                        {companyData.map(({ heading, href, icon: Icon }) => (
                          <Link
                            key={heading}
                            to={href}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                          >
                            <Icon className="w-4 h-4" />
                            {heading}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile CTA */}
              <div className="pt-4">
                  <Link
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center w-full bg-[#FFD700] text-black px-4 py-3 rounded-xl text-base font-bold hover:bg-[#FCD34D] shadow-lg shadow-yellow-500/20 transition-all"
                  >
                    Book intro call
                  </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;