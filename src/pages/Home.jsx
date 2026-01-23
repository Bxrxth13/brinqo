
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Home = () => {
    return (
        <Layout>
            <div className="hero pt-[100px] pb-[120px] bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[60%] h-full opacity-10 pointer-events-none select-none">
                    <img src="/assets/hero-shape.png" alt="" className="w-full h-full object-cover object-left" />
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
                                <Link to="/about" className="btn-outline w-full sm:w-auto justify-center">View Case Studies</Link>
                            </div>
                        </div>

                        <div className="flex-none w-full lg:w-[380px] flex flex-col gap-4 pt-0">
                            <div className="mb-2 fade-in-up" style={{ animationDelay: '0.2s' }}>
                                <h2 className="font-display text-4xl font-extrabold text-primary mb-1 tracking-[-0.5px]">What <span className="text-accent">We</span> Deliver </h2>
                                <p className="text-sm text-secondary">Comprehensive solutions for your business</p>
                            </div>
                            <div className="bg-white border border-[#D4D4D4] rounded-[14px] p-5 px-6 shadow-sm transition-all duration-300 flex items-start gap-5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] group fade-in-up" style={{ animationDelay: '0.3s' }}>
                                <div className="w-10 h-10 min-w-[40px] rounded-lg flex items-center justify-center bg-[#FFE8EC] text-accent transition-all duration-300 group-hover:scale-110">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current">
                                        <rect x="3" y="3" width="7" height="7" strokeWidth="2" />
                                        <rect x="14" y="3" width="7" height="7" strokeWidth="2" />
                                        <rect x="3" y="14" width="7" height="7" strokeWidth="2" />
                                        <rect x="14" y="14" width="7" height="7" strokeWidth="2" />
                                    </svg>
                                </div>
                                <div className="flex flex-col gap-3 flex-1">
                                    <Link to="/build" className="self-start px-4 py-1.5 border border-accent rounded-[6px] text-xs font-bold tracking-wider text-white bg-accent transition-all duration-300 shadow-sm hover:brightness-110">
                                        BUILD
                                    </Link>
                                    <p className="text-sm leading-[1.6] text-secondary font-normal">Websites, apps, AI agents, and testing solutions. <span className="text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span></p>
                                </div>
                            </div>

                            <div className="bg-white border border-[#D4D4D4] rounded-[14px] p-5 px-6 shadow-sm transition-all duration-300 flex items-start gap-5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] group fade-in-up" style={{ animationDelay: '0.4s' }}>
                                <div className="w-10 h-10 min-w-[40px] rounded-lg flex items-center justify-center bg-[#FFE8EC] text-accent transition-all duration-300 group-hover:scale-110">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current">
                                        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="flex flex-col gap-3 flex-1">
                                    <Link to="/brand" className="self-start px-4 py-1.5 border border-accent rounded-[6px] text-xs font-bold tracking-wider text-white bg-accent transition-all duration-300 shadow-sm hover:brightness-110">
                                        BRAND
                                    </Link>
                                    <p className="text-sm leading-[1.6] text-secondary font-normal">Marketing, identity, positioning, and growth. <span className="text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span></p>
                                </div>
                            </div>

                            <div className="bg-white border border-[#D4D4D4] rounded-[14px] p-5 px-6 shadow-sm transition-all duration-300 flex items-start gap-5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] group fade-in-up" style={{ animationDelay: '0.5s' }}>
                                <div className="w-10 h-10 min-w-[40px] rounded-lg flex items-center justify-center bg-[#FFE8EC] text-accent transition-all duration-300 group-hover:scale-110">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current">
                                        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="9" cy="7" r="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="flex flex-col gap-3 flex-1">
                                    <Link to="/bridge" className="self-start px-4 py-1.5 border border-accent rounded-[6px] text-xs font-bold tracking-wider text-white bg-accent transition-all duration-300 shadow-sm hover:brightness-110">
                                        BRIDGE
                                    </Link>
                                    <p className="text-sm leading-[1.6] text-secondary font-normal">Talent, training, and delivery. <span className="text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span></p>
                                </div>
                            </div>
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
            <section className="py-[100px] bg-alt">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="font-display text-[32px] md:text-[40px] font-extrabold text-primary mb-4 tracking-[-1px]">Why Brinqo?</h2>
                            <p className="text-[17px] text-secondary max-w-[500px]">We don't just deliver projects; we engineer success through a unique blend of technology, design, and talent.</p>
                        </div>
                        <Link to="/about" className="btn-outline">More About Us</Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Enterprise Precision", desc: "Rigorous standards and robust architecture for scalable solutions." },
                            { title: "Startup Speed", desc: "Agile methodologies that reduce time-to-market without cutting corners." },
                            { title: "Unified Vision", desc: "Seamless integration of product, brand, and talent strategies." }
                        ].map((feat, i) => (
                            <div key={i} className="bg-white p-8 rounded-xl border border-border">
                                <h3 className="font-display text-xl font-bold text-primary mb-3">{feat.title}</h3>
                                <p className="text-secondary leading-relaxed">{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Home;
