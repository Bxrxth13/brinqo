import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Bridge = () => {
    return (
        <Layout>
            <section className="py-20 pb-16 bg-gradient-to-b from-accent/5 to-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none select-none">
                    <img src="/assets/bridge_connection.png" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="container-custom relative z-10">
                    <h1 className="font-display text-[48px] md:text-[64px] font-black leading-[1.1] text-primary mb-6 tracking-[-2px]">
                        Bridging Talent, Training<br />& <span className="text-accent">Technology</span>
                    </h1>
                    <p className="text-[18px] leading-[1.7] text-secondary max-w-[600px]">
                        Connect with skilled professionals, upskill your team, and
                        accelerate delivery with our comprehensive talent solutions.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-slate-50">
                <div className="container-custom">
                    <h2 className="font-display text-[32px] md:text-[40px] font-extrabold text-primary mb-4 tracking-[-1px]">Our Services</h2>
                    <p className="text-[17px] text-secondary max-w-[600px] mb-12">End-to-end talent and delivery solutions.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {[
                            { title: "Talent Sourcing", desc: "We find top-tier developers, designers, and product managers who fit your specific tech stack and culture.", icon: <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /> },
                            { title: "Team Augmentation", desc: "Scale your existing team quickly with skilled professionals who integrate seamlessly into your workflow.", icon: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /> },
                            { title: "Training & Upskilling", desc: "Customized training programs to bridge skill gaps and keep your team ahead of the curve.", icon: <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /> },
                            { title: "Project Delivery Support", desc: "End-to-end project management and delivery assurance for critical initiatives.", icon: <path d="M9 11l3 3L22 4" /> },
                        ].map((item, index) => (
                            <div key={index} className="bg-white border border-border rounded-xl p-8 transition-all duration-300 hover:border-accent hover:-translate-y-1 hover:shadow-lg group">
                                <div className="w-12 h-12 bg-[#FFE8EC] rounded-[10px] flex items-center justify-center text-accent mb-5">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        {item.icon}
                                    </svg>
                                </div>
                                <h3 className="font-display text-lg font-bold text-primary mb-2">{item.title}</h3>
                                <p className="text-sm text-secondary leading-[1.6]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who This Is For Section */}
            <section className="py-20 border-t border-border">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h2 className="font-display text-[32px] md:text-[40px] font-extrabold text-primary mb-6 tracking-[-1px]">Who We Help</h2>
                            <p className="text-[17px] text-secondary leading-relaxed mb-8">
                                Our talent network is designed to be flexible, supporting organizations at every stage of growth.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-alt flex items-center justify-center shrink-0">🚀</div>
                                    <div>
                                        <h3 className="font-bold text-lg text-primary">Startups</h3>
                                        <p className="text-sm text-secondary">Access senior talent without the overhead. Scale up for launch, scale down for maintenance.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-alt flex items-center justify-center shrink-0">🏢</div>
                                    <div>
                                        <h3 className="font-bold text-lg text-primary">Enterprises</h3>
                                        <p className="text-sm text-secondary">Augment your core teams with specialized skills for specific projects or digital transformation initiatives.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-alt flex items-center justify-center shrink-0">🤝</div>
                                    <div>
                                        <h3 className="font-bold text-lg text-primary">Agencies</h3>
                                        <p className="text-sm text-secondary">White-label delivery support to help you say "yes" to more client work.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-alt rounded-2xl border border-border h-[400px] flex items-center justify-center relative overflow-hidden group">
                            <img src="/assets/bridge_connection.png" alt="Human Connection" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
                                <p className="text-white font-display font-bold text-xl tracking-wide">Human Connection</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Talent Metrics */}
            <section className="py-20 border-t border-b border-border">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1">
                            <h2 className="font-display text-[32px] md:text-[40px] font-extrabold text-primary mb-6 tracking-[-1px]">Global Talent Network</h2>
                            <p className="text-[17px] text-secondary leading-relaxed mb-8">
                                Access a pre-vetted pool of top-tier developers, designers, and product managers ready to join your team.
                            </p>
                            <ul className="space-y-4">
                                {['Top 1% vetted talent', 'Timezone aligned support', 'Seamless onboarding process'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                                        </div>
                                        <span className="text-primary font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 w-full">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-primary p-8 rounded-2xl text-white">
                                    <div className="text-4xl font-bold mb-2">500+</div>
                                    <div className="text-sm opacity-60">Engineers</div>
                                </div>
                                <div className="bg-[#f0f0f0] p-8 rounded-2xl">
                                    <div className="text-4xl font-bold text-primary mb-2">48h</div>
                                    <div className="text-sm text-secondary">Hiring Time</div>
                                </div>
                                <div className="bg-[#f0f0f0] p-8 rounded-2xl">
                                    <div className="text-4xl font-bold text-primary mb-2">98%</div>
                                    <div className="text-sm text-secondary">Retention Rate</div>
                                </div>
                                <div className="bg-accent p-8 rounded-2xl text-white">
                                    <div className="text-4xl font-bold mb-2">20+</div>
                                    <div className="text-sm opacity-80">Countries</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-[80px] pb-[100px] text-center">
                <div className="container-custom">
                    <h2 className="font-display text-[36px] font-extrabold text-primary mb-4">Ready to Bridge the Gap?</h2>
                    <p className="text-[17px] text-secondary mb-8">Let's build your dream team together.</p>
                    <Link to="/contact" className="btn-dark justify-center">
                        Bridge With Us
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
            </section>
        </Layout>
    );
};

export default Bridge;
