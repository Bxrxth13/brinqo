
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import SplashCursor from '../components/SplashCursor';

const Home = () => {
    return (
        <Layout>
            <div className="hero pt-20 pb-24 bg-white relative overflow-hidden">
                <SplashCursor
                    SIM_RESOLUTION={128}
                    DYE_RESOLUTION={1440}
                    DENSITY_DISSIPATION={3.5}
                    VELOCITY_DISSIPATION={2}
                    PRESSURE={0.1}
                    CURL={3}
                    SPLAT_RADIUS={0.2}
                    SPLAT_FORCE={6000}
                    COLOR_UPDATE_SPEED={10}
                />
                <div className="absolute top-0 right-0 w-[60%] h-full opacity-10 pointer-events-none select-none">
                    {/* Image Style: Minimal, abstract tech visuals, modern gradients, human + technology blend */}
                    {/* Keywords: abstract technology flow, digital transformation, startup team collaboration, AI abstract visuals */}
                    <img src="/assets/hero.png" alt="" className="w-full h-full object-cover object-left" />
                </div>
                <div className="container-custom relative z-10">
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-20">
                        {/* Left Content */}
                        <div className="flex-1 max-w-[600px] fade-in-up" style={{ animationDelay: '0s' }}>
                            <h1 className="font-display text-[64px] lg:text-[88px] font-black leading-[1.05] text-primary mb-8 tracking-[-3px]">
                                Bring Your<br />
                                Ideas To <span className="text-accent">Life</span>
                            </h1>
                            <p className="text-[17px] leading-[1.7] text-secondary mb-10 font-normal fade-in-up" style={{ animationDelay: '0.1s' }}>
                                Build, brand, and bridge your vision with<br />
                                enterprise-grade precision. We turn concepts<br />
                                into market-ready realities.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 items-center fade-in-up" style={{ animationDelay: '0.2s' }}>
                                <Link to="/contact" className="btn-dark w-full sm:w-auto justify-center">
                                    Get Started
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                                <Link to="/about" className="btn-outline w-full sm:w-auto justify-center inline-flex items-center">View Case Studies</Link>
                            </div>
                        </div>

                        <div className="flex-none w-full lg:w-[380px] flex flex-col gap-4 pt-0">
                            <div className="mb-2 fade-in-up" style={{ animationDelay: '0.2s' }}>
                                <h2 className="font-display text-4xl font-extrabold text-primary mb-1 tracking-[-0.5px]">Brinqo's <span className="text-accent">3B</span> Services</h2>
                                <p className="text-sm text-secondary">Comprehensive solutions for your business</p>
                            </div>
                            <Link to="/build" className="bg-white border border-[#D4D4D4] rounded-[14px] p-5 px-6 shadow-sm transition-all duration-300 flex items-start gap-5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] group fade-in-up" style={{ animationDelay: '0.3s' }}>
                                <div className="w-10 h-10 min-w-[40px] rounded-lg flex items-center justify-center bg-[#FFE8EC] text-accent transition-all duration-300 group-hover:scale-110">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current">
                                        <rect x="3" y="3" width="7" height="7" strokeWidth="2" />
                                        <rect x="14" y="3" width="7" height="7" strokeWidth="2" />
                                        <rect x="3" y="14" width="7" height="7" strokeWidth="2" />
                                        <rect x="14" y="14" width="7" height="7" strokeWidth="2" />
                                    </svg>
                                </div>
                                <div className="flex flex-col gap-3 flex-1">
                                    <span className="self-start px-4 py-1.5 border border-accent rounded-[6px] text-xs font-bold tracking-wider text-white bg-accent transition-all duration-300 shadow-sm hover:brightness-110">
                                        BUILD
                                    </span>
                                    <p className="text-sm leading-[1.6] text-secondary font-normal">Websites, apps, AI agents, and testing solutions. <span className="text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span></p>
                                </div>
                            </Link>

                            <Link to="/brand" className="bg-white border border-[#D4D4D4] rounded-[14px] p-5 px-6 shadow-sm transition-all duration-300 flex items-start gap-5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] group fade-in-up" style={{ animationDelay: '0.4s' }}>
                                <div className="w-10 h-10 min-w-[40px] rounded-lg flex items-center justify-center bg-[#FFE8EC] text-accent transition-all duration-300 group-hover:scale-110">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current">
                                        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="flex flex-col gap-3 flex-1">
                                    <span className="self-start px-4 py-1.5 border border-accent rounded-[6px] text-xs font-bold tracking-wider text-white bg-accent transition-all duration-300 shadow-sm hover:brightness-110">
                                        BRAND
                                    </span>
                                    <p className="text-sm leading-[1.6] text-secondary font-normal">Marketing, identity, positioning, and growth. <span className="text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span></p>
                                </div>
                            </Link>

                            <Link to="/bridge" className="bg-white border border-[#D4D4D4] rounded-[14px] p-5 px-6 shadow-sm transition-all duration-300 flex items-start gap-5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] group fade-in-up" style={{ animationDelay: '0.5s' }}>
                                <div className="w-10 h-10 min-w-[40px] rounded-lg flex items-center justify-center bg-[#FFE8EC] text-accent transition-all duration-300 group-hover:scale-110">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current">
                                        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="9" cy="7" r="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="flex flex-col gap-3 flex-1">
                                    <span className="self-start px-4 py-1.5 border border-accent rounded-[6px] text-xs font-bold tracking-wider text-white bg-accent transition-all duration-300 shadow-sm hover:brightness-110">
                                        BRIDGE
                                    </span>
                                    <p className="text-sm leading-[1.6] text-secondary font-normal">Talent, training, and delivery. <span className="text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span></p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Trusted By Section */}
            <section className="border-b border-border py-8 bg-white">
                <div className="container-custom">
                    <p className="text-center text-sm font-semibold text-secondary/60 mb-6 uppercase tracking-wider">Trusted by innovative companies</p>
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 grayscale opacity-50">
                        {['Acme Corp', 'GlobalTech', 'Nebula', 'Velocity', 'Trio'].map((brand, i) => (
                            <span key={i} className="text-xl font-display font-bold text-primary">{brand}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-white border-t border-border">
                <div className="container-custom">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-accent font-bold tracking-widest text-sm uppercase mb-3 block">The Brinqo Standard</span>
                        <h2 className="font-display text-[40px] md:text-[52px] font-black text-primary mb-6 tracking-tight leading-[1.1]">
                            Why <span className="text-accent underline decoration-accent/20 underline-offset-8">Brinqo?</span>
                        </h2>
                        <p className="text-[18px] text-secondary leading-relaxed">
                            From building powerful solutions to branding them right and bridging execution gaps.
                            Brinqo delivers end-to-end growth, not just services.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1: Innovation */}
                        <div className="bg-white p-8 rounded-2xl border border-border hover:border-accent/40 transition-all duration-300 hover:shadow-lg group">
                            <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>
                            </div>
                            <h3 className="font-display text-2xl font-bold text-primary mb-3">Driven by Innovation</h3>
                            <p className="text-secondary leading-relaxed text-[15px]">
                                We don't just follow trends; we set them. Our engineering and design teams use cutting-edge tech to keep you ahead of the curve.
                            </p>
                        </div>

                        {/* Feature 2: Impact */}
                        <div className="bg-white p-8 rounded-2xl border border-border hover:border-accent/40 transition-all duration-300 hover:shadow-lg group">
                            <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            </div>
                            <h3 className="font-display text-2xl font-bold text-primary mb-3">Built for Impact</h3>
                            <p className="text-secondary leading-relaxed text-[15px]">
                                Every pixel and line of code is crafted with a purpose: to drive real business growth and create lasting user connections.
                            </p>
                        </div>

                        {/* Feature 3: Scale */}
                        <div className="bg-white p-8 rounded-2xl border border-border hover:border-accent/40 transition-all duration-300 hover:shadow-lg group">
                            <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                            </div>
                            <h3 className="font-display text-2xl font-bold text-primary mb-3">Ready to Scale</h3>
                            <p className="text-secondary leading-relaxed text-[15px]">
                                From MVP to enterprise, our solutions grow with you. We build robust, scalable foundations that handle success effortlessly.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <Link to="/about" className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors border-b-2 border-transparent hover:border-accent pb-1">
                            Explore Our Methodology <span className="text-lg">→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Home;
