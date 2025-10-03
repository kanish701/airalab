import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu, X, Bot, ChevronDown, MonitorSmartphone, Layers, PenTool, Film, Code2, Workflow, Server, Bug, Boxes, FileText, Wrench,
  AirVent
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- DATA (no changes here) ---
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
  {
    heading: 'About Us',
    icon: FileText,
    href: '/company/about-us'

  },
  {
    heading: 'Careers',
    icon: PenTool,
    href: '/company/careers'
  },
  {
    heading: 'Contact Us',
    icon: Film,
    href: '/company/contact-us'
  },
  {
    heading: 'Why AIra Labs',
    icon: AirVent,
    href: '/company/why-aira-labs'
  }
]

const navigation = [
  { name: 'Capabilities' },
  { name: 'Resources', href: '/Resources' },
  { name: 'Company' },
];

// --- COMPONENT ---
const Header = () => {

  // --------> Mobile 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCapMobileOpen, setIsCapMobileOpen] = useState(false); // Capabilities Mobile menu
  const [isCompanyMobileMenuOpen, setIsCompanyMobileMenuOpen] = useState(false); // Company Mobile Menu. 

  //--------> Desktop 
  const [openCapabilitiesDropdown, setOpenCapabilitiesDropdown] = useState(false); // Capabilities Dropdown  
  const [OpenCompanyDropdown, setOpenCompanyDropdown] = useState(false); // Company Dropdown.
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

  const openWithDelay = () => {
    if (hoverTimer.current) window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => {
      setOpenCapabilitiesDropdown(true);
      setOpenCompanyDropdown(false); //  close Company when Capabilities opens
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
      setOpenCapabilitiesDropdown(false); //  close Capabilities when Company opens
    }, 80);
  };
  const closeWithDelayCompany = () => {
    if (hoverTimer.current) window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => setOpenCompanyDropdown(false), 120);
  };



  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#161515] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 w-full">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center min-w-[180px]">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-[#FFD700] rounded-xl flex items-center justify-center shadow group-hover:scale-105 transition-transform">
                <Bot className="w-5 h-5 text-[#18181c] drop-shadow" />
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight group-hover:text-yellow-400 transition-colors">AIra</span>
            </Link>
          </div>

          {/* Desktop Navigation - centered */}
          <div className="hidden md:flex flex-1 justify-center">
            <nav className="flex items-center gap-10 ">
              {navigation.map((item) => {
                if (item.name === 'Capabilities') {
                  return (
                    <div key={item.name} className="relative"
                      onMouseEnter={openWithDelay}
                      onMouseLeave={closeWithDelay}
                    >
                      <button
                        ref={triggerRef}
                        className={`flex items-center gap-1 text-sm font-semibold px-2 py-1 rounded transition-colors ${openCapabilitiesDropdown ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}`}
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openCapabilitiesDropdown ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {openCapabilitiesDropdown && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            ref={megaRef}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-screen max-w-4xl z-50"
                          >
                            <div className="bg-[#1e1e1e] rounded-lg shadow-lg p-6 grid grid-cols-3 gap-x-8 gap-y-6 mx-auto">
                              {capabilitiesData.map((col) => (
                                <div key={col.heading}>
                                  <h3 className="text-sm font-semibold text-yellow-400 mb-3">{col.heading}</h3>
                                  <div className="flex flex-col space-y-3">
                                    {col.items.map(({ icon: Icon, label, href }) => (
                                      <Link
                                        key={label}
                                        to={href}
                                        className="flex items-center gap-3 text-white hover:text-yellow-300 transition-colors group"
                                      >
                                        <Icon className="w-5 h-5 text-gray-400 group-hover:text-yellow-300" />
                                        <span>{label}</span>
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
                if (item.name === 'Company') {
                  return (
                    <div key={item.name} className="relative"
                      onMouseEnter={openWithDelayCompany}
                      onMouseLeave={closeWithDelayCompany}
                    >
                      <button
                        ref={companyTriggerRef}
                        className={`flex items-center gap-1 text-sm font-semibold px-2 py-1 rounded transition-colors ${OpenCompanyDropdown ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}`}
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${OpenCompanyDropdown ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {OpenCompanyDropdown && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            ref={companyRef}
                            className="absolute top-full left-0 mt-3 bg-[#1e1e1e] rounded-lg shadow-lg p-4 w-48"
                          >
                            <div className="flex flex-col space-y-2">
                              {companyData.map(({ heading, href, icon: Icon }) => (
                                <Link
                                  key={heading}
                                  to={href}
                                  className="flex items-center gap-2 text-white hover:text-yellow-300 px-2 py-1"
                                >
                                  {/* Render the icon */}
                                  <Icon className="w-4 h-4 text-gray-400 group-hover:text-yellow-300" />
                                  <span>{heading}</span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.name}
                    to={item.href!}
                    className={`text-sm font-semibold px-2 py-1 rounded transition-colors relative ${location.pathname === item.href ? 'text-yellow-400' : 'text-white hover:text-yellow-400'} after:absolute after:left-0 after:-bottom-0.5 after:w-full after:h-0.5 after:bg-yellow-400 after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-200`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* CTA Button - right aligned */}
          <div className="hidden md:flex flex-shrink-0 min-w-[180px] justify-end">
            <Link
              to="/contact"
              className="bg-[#FFD700] text-[#18181c] px-6 py-2 text-base font-semibold rounded shadow hover:bg-yellow-400 transition-all flex items-center gap-2"
            >
              Book intro call
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-yellow-400 transition-colors"
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
            className="md:hidden border-t border-gray-800"
          >
            <nav className="flex flex-col px-4 py-4 space-y-2">
              <button
                onClick={() => setIsCapMobileOpen((p) => !p)}
                className="flex items-center justify-between w-full text-left text-lg font-medium text-gray-200 hover:text-white py-2"
              >
                <span>Capabilities</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${isCapMobileOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isCapMobileOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4 pt-2 pb-3 space-y-4">
                      {capabilitiesData.map((col) => (
                        <div key={col.heading}>
                          <div className="text-sm text-gray-400 mb-2 font-semibold">{col.heading}</div>
                          <div className="flex flex-col gap-3">
                            {col.items.map(({ icon: Icon, label, href }) => (
                              <Link
                                key={label}
                                to={href}
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center gap-3 text-md text-gray-300 hover:text-white"
                              >
                                <Icon className="w-5 h-5" />
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

              <Link to="/Resources" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-gray-200 hover:text-white py-2">Resources</Link>
              {/* <Link to="/company" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-gray-200 hover:text-white py-2">Company</Link> */}

              <button
                onClick={() => setIsCompanyMobileMenuOpen((p) => !p)}
                className="flex items-center justify-between w-full text-left text-lg font-medium text-gray-200 hover:text-white py-2"
              >
                <span>Company</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${isCompanyMobileMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isCompanyMobileMenuOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4 pt-2 pb-3 space-y-4">
                      {companyData.map(({ heading, href }) => (
                        <Link
                          key={heading}
                          to={href}
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center gap-3 text-md text-gray-300 hover:text-white"
                        >
                          {heading}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 bg-yellow-500 text-center text-[#18181c] px-4 py-3 rounded-lg text-lg font-bold hover:bg-yellow-400 w-full"
              >
                Book intro call
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
