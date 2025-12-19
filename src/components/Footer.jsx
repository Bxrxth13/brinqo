import React from 'react';
import { Link } from 'react-router-dom';
import { Send, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-0 pb-6 overflow-hidden relative">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
            <div className="absolute -top-[200px] -right-[200px] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container-custom relative z-10">

                {/* Top Section: CTA & Vision */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 mb-8 border-b border-white/10 pb-8">
                    <div>
                        <h2 className="font-display text-2xl md:text-3xl font-medium leading-[1.2] mb-6 max-w-[500px]">
                            Ready to transform your vision into reality?
                        </h2>
                        <Link to="/" className="font-display text-3xl font-bold tracking-tighter text-white mb-4 inline-block">
                            Brinqo<span className="text-accent">.</span>
                        </Link>
                        <div className="flex gap-4">
                            <Link to="/contact" className="bg-accent text-white px-8 py-3.5 rounded-full font-semibold transition-transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(232,48,79,0.3)]">
                                Talk to an Expert
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm lg:mt-20 self-start">
                        <h3 className="font-display text-base font-bold mb-1 text-accent">Subscribe to our newsletter</h3>
                        <p className="text-white/60 mb-4 text-xs">Get latest insights on tech and talent.</p>
                        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder:text-white/40 flex-1 focus:outline-none focus:border-accent transition-colors"
                            />
                            <button type="submit" className="bg-white text-primary p-2.5 rounded-lg hover:bg-accent hover:text-white transition-colors">
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Middle Section: Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider mb-4">Build</h4>
                        <ul className="space-y-2">
                            <li><Link to="/build" className="text-white/60 hover:text-accent transition-colors text-sm">Digital Products</Link></li>
                            <li><Link to="/build" className="text-white/60 hover:text-accent transition-colors text-sm">Mobile Apps</Link></li>
                            <li><Link to="/build" className="text-white/60 hover:text-accent transition-colors text-sm">AI Solutions</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider mb-4">Brand</h4>
                        <ul className="space-y-2">
                            <li><Link to="/brand" className="text-white/60 hover:text-accent transition-colors text-sm">Strategy</Link></li>
                            <li><Link to="/brand" className="text-white/60 hover:text-accent transition-colors text-sm">Identity</Link></li>
                            <li><Link to="/brand" className="text-white/60 hover:text-accent transition-colors text-sm">Marketing</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider mb-4">Bridge</h4>
                        <ul className="space-y-2">
                            <li><Link to="/bridge" className="text-white/60 hover:text-accent transition-colors text-sm">Talent Hiring</Link></li>
                            <li><Link to="/bridge" className="text-white/60 hover:text-accent transition-colors text-sm">Team Augmentation</Link></li>
                            <li><Link to="/bridge" className="text-white/60 hover:text-accent transition-colors text-sm">Training</Link></li>
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
                <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t border-white/10 gap-4">
                    <p className="text-white/40 text-sm">© 2024 Brinqo. All rights reserved.</p>

                    <div className="flex items-center gap-6">
                        <a href="#" className="text-white/40 hover:text-accent transition-colors"><Twitter className="w-5 h-5" /></a>
                        <a href="#" className="text-white/40 hover:text-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
                        <a href="#" className="text-white/40 hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></a>
                        <a href="#" className="text-white/40 hover:text-accent transition-colors"><Github className="w-5 h-5" /></a>
                    </div>

                    <div className="flex gap-6">
                        <Link to="#" className="text-white/40 text-sm hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="#" className="text-white/40 text-sm hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
