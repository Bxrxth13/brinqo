import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const About = () => {
    return (
        <Layout>
            <section className="py-20 pb-16 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[60%] h-full opacity-10 pointer-events-none select-none">
                    <img src="/assets/hero-shape.png" alt="" className="w-full h-full object-cover object-left" />
                    <div className="absolute inset-0 bg-gradient-to-l from-white via-white/50 to-transparent"></div>
                </div>
                <div className="container-custom relative z-10">
                    <h1 className="font-display text-[48px] md:text-[64px] font-black leading-[1.1] text-primary mb-6 tracking-[-2px]">
                        We're <span className="text-accent">Brinqo</span>.
                    </h1>
                    <p className="text-[18px] leading-[1.7] text-secondary max-w-[600px]">
                        A technology and services company helping businesses build digital products,
                        strengthen their brands, and bridge talent gaps—all with enterprise-grade precision.
                    </p>
                </div>
            </section>

            {/* Vision & Mission Section - Redesigned */}
            <section className="py-24 bg-gradient-to-b from-white to-slate-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <span className="text-accent font-bold tracking-widest text-sm uppercase mb-2 block">What Drives Us</span>
                        <h2 className="font-display text-[40px] font-black text-primary">Vision & Mission</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Vision Card */}
                        <div className="group relative bg-white border border-border rounded-3xl p-10 hover:shadow-2xl hover:border-accent/30 transition-all duration-300 overflow-hidden">
                            {/* Decorative gradient blob */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors duration-500"></div>

                            <div className="relative z-10">
                                {/* Icon */}
                                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                </div>

                                <h3 className="font-display text-3xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">Our Vision</h3>
                                <p className="text-[16px] leading-[1.8] text-secondary">
                                    To be the <span className="font-semibold text-primary">trusted partner</span> for businesses transforming their ideas into
                                    market-ready realities. We envision a world where every ambitious team
                                    has access to world-class technology and talent.
                                </p>

                                {/* Subtle accent line */}
                                <div className="mt-6 h-1 w-16 bg-gradient-to-r from-accent to-accent/20 rounded-full group-hover:w-24 transition-all duration-300"></div>
                            </div>
                        </div>

                        {/* Mission Card */}
                        <div className="group relative bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-3xl p-10 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                            {/* Decorative gradient blob */}
                            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl group-hover:bg-accent/30 transition-colors duration-500"></div>

                            <div className="relative z-10">
                                {/* Icon */}
                                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white mb-6 border border-white/20 group-hover:scale-110 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        <path d="M2 17l10 5 10-5" />
                                        <path d="M2 12l10 5 10-5" />
                                    </svg>
                                </div>

                                <h3 className="font-display text-3xl font-bold text-white mb-4 group-hover:text-accent transition-colors">Our Mission</h3>
                                <p className="text-[16px] leading-[1.8] text-slate-300 group-hover:text-white transition-colors">
                                    To deliver exceptional value through our <span className="font-semibold text-white">Build · Brand · Bridge</span> framework,
                                    helping companies scale faster with less friction. We combine technical
                                    excellence with strategic thinking to drive measurable outcomes.
                                </p>

                                {/* Subtle accent line */}
                                <div className="mt-6 h-1 w-16 bg-gradient-to-r from-accent to-white/20 rounded-full group-hover:w-24 transition-all duration-300"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="flex-1">
                            <div className="bg-[#f5f5f5] rounded-2xl h-[400px] w-full flex items-center justify-center border border-border relative overflow-hidden group">
                                <img src="/assets/about_story.png" alt="Collaborative Team" className="absolute inset-0 w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="font-display text-[32px] md:text-[40px] font-extrabold text-primary mb-6 tracking-[-1px]"><span className="text-accent">Our</span> Story</h2>
                            <p className="text-[18px] leading-[1.8] text-secondary mb-6">
                                The digital landscape is fragmented. Startups struggle to scale, and enterprises struggle to innovate. We saw a gap between great ideas and their execution—often widened by disconnected vendors and siloed strategies.
                            </p>
                            <p className="text-[18px] leading-[1.8] text-secondary mb-6">
                                We built Brinqo to close that gap. By unifying <strong>Technology (Build)</strong>, <strong>Brand (Brand)</strong>, and <strong>Talent (Bridge)</strong> under one roof, we provide a holistic ecosystem for growth.
                            </p>
                            <p className="text-[18px] leading-[1.8] text-secondary font-medium">
                                We are the partners we wish we had when we started.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-[100px] bg-white border-t border-border">
                <div className="container-custom">
                    <h2 className="font-display text-[32px] md:text-[40px] font-extrabold text-primary mb-12 tracking-[-1px] text-center">Our Core Values</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Integrity", desc: "We build trust through transparency and honest communication." },
                            { title: "Excellence", desc: "We ship world-class quality in everything we do." },
                            { title: "Adaptability", desc: "We evolve quickly to meet new challenges and technologies." },
                            { title: "Impact", desc: "We focus on outcomes that move the needle for your business." }
                        ].map((val, i) => (
                            <div key={i} className="text-center group">
                                <div className="w-16 h-16 mx-auto bg-alt rounded-full flex items-center justify-center text-primary mb-6 transition-colors group-hover:bg-accent group-hover:text-white">
                                    <span className="font-display font-bold text-xl">{i + 1}</span>
                                </div>
                                <h3 className="font-display text-xl font-bold text-primary mb-3">{val.title}</h3>
                                <p className="text-secondary text-sm leading-relaxed max-w-[240px] mx-auto">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-[80px] pb-[100px] bg-alt text-center">
                <div className="container-custom">
                    <h2 className="font-display text-[36px] font-extrabold text-primary mb-4">Ready to Work With Brinqo?</h2>
                    <p className="text-[17px] text-secondary mb-8">Let's discuss how we can help you build, brand, and bridge.</p>
                    <Link to="/contact" className="btn-dark justify-center">
                        Work With Brinqo
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
            </section>
        </Layout>
    );
};

export default About;
