import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Build = () => {
    return (
        <Layout>
            {/* Page Hero */}
            <section className="py-[100px] pb-[80px] bg-white">
                <div className="container-custom">
                    <h1 className="font-display text-[48px] md:text-[64px] font-black leading-[1.1] text-primary mb-6 tracking-[-2px]">
                        Build Digital Products<br />That <span className="text-accent">Scale</span>
                    </h1>
                    <p className="text-[18px] leading-[1.7] text-secondary max-w-[600px]">
                        From websites to AI agents, we engineer solutions that power growth.
                        Enterprise-grade technology with startup speed.
                    </p>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-[100px] bg-alt">
                <div className="container-custom">
                    <h2 className="font-display text-[32px] md:text-[40px] font-extrabold text-primary mb-4 tracking-[-1px]">What We Build</h2>
                    <p className="text-[17px] text-secondary max-w-[600px] mb-12">End-to-end digital product development for ambitious teams.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Websites", desc: "Fast, responsive, and SEO-optimized websites that convert visitors into customers.", icon: <rect x="3" y="3" width="18" height="18" rx="2" /> },
                            { title: "Web Applications", desc: "Scalable SaaS platforms and web apps built with modern frameworks and best practices.", icon: <rect x="2" y="3" width="20" height="14" rx="2" /> },
                            { title: "Mobile Apps", desc: "Native and cross-platform mobile applications for iOS and Android.", icon: <rect x="5" y="2" width="14" height="20" rx="2" /> },
                            { title: "AI Agents", desc: "Intelligent automation with custom AI models, chatbots, and LLM integrations.", icon: <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" /> },
                            { title: "Automation", desc: "Workflow automation, API integrations, and process optimization systems.", icon: <path d="M12 2v4" /> },
                            { title: "Testing & QA", desc: "Comprehensive testing strategies, automation frameworks, and quality assurance.", icon: <path d="M9 11l3 3L22 4" /> },
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

            {/* Tech Stack Section */}
            <section className="py-[100px] bg-alt">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-[32px] md:text-[40px] font-extrabold text-primary mb-4 tracking-[-1px]">Our Tech Stack</h2>
                        <p className="text-[17px] text-secondary max-w-[600px] mx-auto">We use modern, battle-tested technologies to build robust applications.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {['React', 'Next.js', 'Node.js', 'Python', 'TypeScript', 'Tailwind', 'AWS', 'Docker', 'PostgreSQL', 'GraphQL', 'Figma', 'OpenAI'].map((tech, i) => (
                            <div key={i} className="bg-white border border-border p-6 rounded-xl flex flex-col items-center justify-center gap-3 transition-colors hover:border-accent group">
                                <div className="w-2 h-2 rounded-full bg-secondary/30 group-hover:bg-accent transition-colors"></div>
                                <span className="font-semibold text-primary">{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-[100px]">
                <div className="container-custom">
                    <h2 className="font-display text-[32px] md:text-[40px] font-extrabold text-primary mb-4 tracking-[-1px]">Our Process</h2>
                    <p className="text-[17px] text-secondary max-w-[600px] mb-12">A proven methodology that delivers results.</p>

                    <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 md:gap-8 my-12">
                        {['Discover', 'Design', 'Build', 'Test', 'Launch', 'Scale'].map((step, index, arr) => (
                            <div key={index} className="flex items-center gap-4 md:gap-8">
                                <div className="bg-white border border-border rounded-lg px-6 py-4 font-display font-semibold text-sm text-primary transition-all duration-300 hover:border-accent hover:text-accent">
                                    {step}
                                </div>
                                {index < arr.length - 1 && (
                                    <span className="text-accent text-xl hidden md:block">→</span>
                                )}
                                {index < arr.length - 1 && (
                                    <span className="text-accent text-xl md:hidden">↓</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-[80px] pb-[100px] text-center">
                <div className="container-custom">
                    <h2 className="font-display text-[36px] font-extrabold text-primary mb-4">Ready to Build Something Great?</h2>
                    <p className="text-[17px] text-secondary mb-8">Let's turn your vision into reality.</p>
                    <Link to="/contact" className="btn-dark justify-center">
                        Start Your Project
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
            </section>
        </Layout>
    );
};

export default Build;
