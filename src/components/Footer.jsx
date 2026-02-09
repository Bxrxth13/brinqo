import React from 'react';
import { Link } from 'react-router-dom';
import { Send, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-0 pb-6 overflow-hidden relative">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
            <div className="absolute -top-[200px] -right-[200px] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container-custom relative z-10">

                {/* Top Section: CTA & Vision */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 mb-8 border-b border-white/10 pb-8">
                    <div className="flex flex-col justify-end items-start text-center lg:text-left">

                        <Link to="/" className="font-display text-3xl font-bold tracking-tighter text-white mb-8 lg:mb-14 inline-block w-full lg:w-auto">
                            Brinqo<span className="text-accent">.</span>
                        </Link>
                        <div className="flex gap-4 w-full lg:w-auto justify-center lg:justify-start">
                            <Link to="/contact" className="bg-accent text-white px-8 py-3.5 rounded-full font-semibold transition-transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(232,48,79,0.3)] w-full sm:w-auto text-center">
                                Talk to an Expert
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm mt-0 lg:mt-20 self-start w-full">
                        <h3 className="font-display text-base font-bold mb-1 text-accent text-center lg:text-left">Subscribe to our newsletter</h3>
                        <p className="text-white/60 mb-4 text-xs text-center lg:text-left">Get latest insights on tech and talent.</p>
                        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder:text-white/40 flex-1 focus:outline-none focus:border-accent transition-colors min-w-0"
                            />
                            <button type="submit" className="bg-white text-primary p-2.5 rounded-lg hover:bg-accent hover:text-white transition-colors flex-shrink-0">
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Middle Section: Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-8 mb-8">
                    <div>
                        <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider mb-4">Build</h4>
                        <ul className="space-y-2">
                            <li><Link to="/build#services" className="text-white/60 hover:text-accent transition-colors text-sm">Web Platforms</Link></li>
                            <li><Link to="/build#services" className="text-white/60 hover:text-accent transition-colors text-sm">Mobile Apps</Link></li>
                            <li><Link to="/build#services" className="text-white/60 hover:text-accent transition-colors text-sm">AI Solutions</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider mb-4">Brand</h4>
                        <ul className="space-y-2">
                            <li><Link to="/brand#strategy" className="text-white/60 hover:text-accent transition-colors text-sm">Strategy</Link></li>
                            <li><Link to="/brand#identity" className="text-white/60 hover:text-accent transition-colors text-sm">Identity</Link></li>
                            <li><Link to="/brand#marketing" className="text-white/60 hover:text-accent transition-colors text-sm">Marketing</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider mb-4">Bridge</h4>
                        <ul className="space-y-2">
                            <li><Link to="/bridge#talent-hiring" className="text-white/60 hover:text-accent transition-colors text-sm">Talent Hiring</Link></li>
                            <li><Link to="/bridge#team-augmentation" className="text-white/60 hover:text-accent transition-colors text-sm">Team Augmentation</Link></li>
                            <li><Link to="/bridge#training" className="text-white/60 hover:text-accent transition-colors text-sm">Training</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="text-white/60 hover:text-accent transition-colors text-sm">About Us</Link></li>
                            <li><Link to="/contact" className="text-white/60 hover:text-accent transition-colors text-sm">Careers</Link></li>
                            <li><Link to="/contact" className="text-white/60 hover:text-accent transition-colors text-sm">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section: Footer Info */}
                <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-4 border-t border-white/10 gap-6 md:gap-4">
                    <p className="text-white/40 text-sm text-center md:text-left">© 2024 Brinqo. All rights reserved.</p>

                    <div className="flex items-center gap-6">
                        <a href="#" className="text-white/40 hover:text-accent transition-colors">
                            {/* X Logo (formerly Twitter) */}
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                        <a href="#" className="text-white/40 hover:text-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
                        <a href="#" className="text-white/40 hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></a>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
                        <Link to="/privacy-policy" className="text-white/40 text-sm hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="text-white/40 text-sm hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
