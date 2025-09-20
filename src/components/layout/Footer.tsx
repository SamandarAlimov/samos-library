import { Link } from "react-router-dom";
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-samos-blue text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-samos-amber">
                <BookOpen className="h-6 w-6 text-samos-blue" />
              </div>
              <div>
                <h3 className="text-xl font-bold">SAMOS</h3>
                <p className="text-sm text-white/80">Digital Library</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Your gateway to global knowledge. Access millions of books, research papers, 
              and educational resources from anywhere in the world.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-white/60 hover:text-samos-amber transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-samos-amber transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-samos-amber transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-samos-amber transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/library" className="text-white/80 hover:text-samos-amber transition-colors">Browse Library</Link></li>
              <li><Link to="/categories" className="text-white/80 hover:text-samos-amber transition-colors">Categories</Link></li>
              <li><Link to="/audiobooks" className="text-white/80 hover:text-samos-amber transition-colors">Audiobooks</Link></li>
              <li><Link to="/research" className="text-white/80 hover:text-samos-amber transition-colors">Research Papers</Link></li>
              <li><Link to="/new-releases" className="text-white/80 hover:text-samos-amber transition-colors">New Releases</Link></li>
              <li><Link to="/bestsellers" className="text-white/80 hover:text-samos-amber transition-colors">Bestsellers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/premium" className="text-white/80 hover:text-samos-amber transition-colors">Premium Access</Link></li>
              <li><Link to="/edu" className="text-white/80 hover:text-samos-amber transition-colors">Educational Platform</Link></li>
              <li><Link to="/api" className="text-white/80 hover:text-samos-amber transition-colors">Publisher API</Link></li>
              <li><Link to="/analytics" className="text-white/80 hover:text-samos-amber transition-colors">Analytics</Link></li>
              <li><Link to="/support" className="text-white/80 hover:text-samos-amber transition-colors">Support</Link></li>
              <li><Link to="/enterprise" className="text-white/80 hover:text-samos-amber transition-colors">Enterprise</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-samos-amber" />
                <span className="text-white/80 text-sm">library@samos.uz</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-samos-amber" />
                <span className="text-white/80 text-sm">+998 (71) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-samos-amber" />
                <span className="text-white/80 text-sm">Tashkent, Uzbekistan</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-medium mb-2">Newsletter</h5>
              <p className="text-white/60 text-xs mb-3">Get updates on new books and features</p>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-samos-amber focus:border-transparent"
                />
                <button className="px-4 py-2 bg-samos-amber text-samos-blue rounded-lg font-medium text-sm hover:bg-samos-amber/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {currentYear} SAMOS Global Technologies Inc. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-white/60 hover:text-samos-amber text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/60 hover:text-samos-amber text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-white/60 hover:text-samos-amber text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;