import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Build = () => {
    return (
        <Layout>
            {/* Page Hero */}
            <section className="py-20 pb-16 bg-gradient-to-b from-accent/5 to-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none select-none">
                    <img src="/assets/build_engineering.png" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="container-custom relative z-10">
                    <h1 className="font-display text-[48px] md:text-[64px] font-black leading-[1.1] text-primary mb-6 tracking-[-2px]">
                        Build Digital Products<br />That <span className="text-accent">Scale</span>
                    </h1>
                    <p className="text-[18px] leading-[1.7] text-secondary max-w-[600px]">
                        We engineer scalable, secure, and future-proof digital solutions. By combining
                        enterprise-grade architecture with startup speed, we turn ambitious ideas into
                        market-leading products.
                    </p>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-slate-50">
                <div className="container-custom">
                    <h2 className="font-display text-[32px] md:text-[40px] font-extrabold text-primary mb-4 tracking-[-1px]">What <span className="text-accent">We </span>Build</h2>
                    <p className="text-[17px] text-secondary max-w-[600px] mb-12">End-to-end digital product development for ambitious teams.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Websites & Web Apps",
                                desc: "Scalable SaaS platforms, marketing sites, and complex web applications built with modern frameworks like React and Next.js.",
                                image: "/assets/build_service_web.png",
                                color: "bg-blue-50"
                            },
                            {
                                title: "Mobile Apps",
                                desc: "Native and cross-platform mobile applications for iOS and Android that deliver exceptional, fluid user experiences.",
                                image: "/assets/build_service_mobile.png",
                                color: "bg-purple-50"
                            },
                            {
                                title: "AI Agents & Automation",
                                desc: "Intelligent automation with custom AI models, chatbots, and LLM integrations to streamline your business operations.",
                                image: "/assets/build_service_ai.png",
                                color: "bg-emerald-50"
                            },
                            {
                                title: "Testing & QA",
                                desc: "Comprehensive testing strategies, automation frameworks, and robust quality assurance for bug-free, confident releases.",
                                image: "/assets/build_service_qa.png",
                                color: "bg-orange-50"
                            },
                        ].map((item, index) => (
                            <div key={index} className="bg-white border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-xl group flex flex-col md:flex-row h-full">
                                <div className={`w-full md:w-2/5 h-48 md:h-auto ${item.color} relative overflow-hidden`}>
                                    {/* Fallback pattern if image missing */}
                                    <div className="absolute inset-0 opacity-10 bg-[url('/assets/hero-shape.png')] bg-cover"></div>
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <div className="p-8 flex flex-col justify-center flex-1">
                                    <h3 className="font-display text-xl font-bold text-primary mb-3">{item.title}</h3>
                                    <p className="text-sm text-secondary leading-relaxed mb-4">
                                        {item.desc}
                                    </p>
                                    <span className="text-accent text-sm font-semibold group-hover:underline decoration-accent underline-offset-4">Learn more →</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white border-y border-border">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-display text-[32px] md:text-[40px] font-extrabold text-primary mb-6 tracking-[-1px]"><span className="text-accent">Built</span> for Scale</h2>
                            <p className="text-[17px] text-secondary mb-8">
                                Whether you're a startup looking to launch your MVP or an enterprise needing to modernize legacy systems, we adapt to your needs.
                            </p>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">For Startups</h3>
                                    <p className="text-secondary text-sm">Rapid prototyping, MVP development, and scalable architecture that grows with you using agile methodologies (Discover → Design → Build → Launch).</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">For Enterprises</h3>
                                    <p className="text-secondary text-sm">Security-first development, system integration, and robust documentation for mission-critical applications.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-alt rounded-2xl border border-border min-h-[300px] flex items-center justify-center relative overflow-hidden group">
                            <img src="/assets/build_engineering.png" alt="Engineering Excellence" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
                                <p className="text-white font-display font-bold text-xl tracking-wide">Engineering Excellence</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="py-20 bg-slate-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-[32px] md:text-[40px] font-extrabold text-primary mb-4 tracking-[-1px]">   <span className="text-accent">Our</span> Tech Stack</h2>
                        <p className="text-[17px] text-secondary max-w-[600px] mx-auto">We use modern, battle-tested technologies to build robust applications.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {[
                            { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
                            { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
                            { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
                            { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
                            { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
                            { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
                            { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
                            { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
                            { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
                            { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg' },
                            { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
                            { name: 'OpenAI', custom: true }
                        ].map((tech, i) => (
                            <div key={i} className="bg-white border border-border p-6 rounded-xl flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:border-accent hover:shadow-lg hover:-translate-y-1 group">
                                <div className="w-12 h-12 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                                    {tech.custom ? (
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-primary">
                                            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729ZM4.9723 9.7701l-1.1329.006a3.9815 3.9815 0 0 1 2.1331-3.3648A3.9925 3.9925 0 0 1 8.5807 4.8l.3535 1.7677a2.0035 2.0035 0 0 0-3.962 3.2024Zm6.524 9.4235-.3536 1.7678a3.9925 3.9925 0 0 1-2.6062-1.6117 3.9815 3.9815 0 0 1 2.1331-3.3648l1.1329.006a2.0035 2.0035 0 0 0-.3062 3.2027Zm5.5019-7.3986-1.133-.006a3.9815 3.9815 0 0 1-2.133 3.3648 3.9925 3.9925 0 0 1-2.6062 1.6117l.3536-1.7678a2.0035 2.0035 0 0 0 3.9619-3.2024L17 11.795Zm0-7.3986.3536-1.7678a3.9925 3.9925 0 0 1 2.6061 1.6117 3.9815 3.9815 0 0 1-2.1331 3.3648l-1.1328-.006a2.0035 2.0035 0 0 0-3.6558-3.2027h3.962Zm-5.5019 7.3986 1.133.006a3.9815 3.9815 0 0 1 2.133-3.3648 3.9925 3.9925 0 0 1 2.6062-1.6117l-.3536 1.7678a2.0035 2.0035 0 0 0-3.962 3.2024l-1.5566-1.9997Z" />
                                        </svg>
                                    ) : (
                                        <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
                                    )}
                                </div>
                                <span className="font-semibold text-primary text-sm">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20">
                <div className="container-custom">
                    <h2 className="font-display text-[32px] md:text-[40px] font-extrabold text-primary mb-4 tracking-[-1px]"><span className="text-accent">Our</span> Process</h2>
                    <p className="text-[17px] text-secondary max-w-[600px] mb-12">A streamlined methodology from concept to reality.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { step: "01", title: "Discover", desc: "We dive deep into your goals, understanding your users and business requirements." },
                            { step: "02", title: "Design", desc: "Crafting intuitive user experiences and sleek interfaces that engage and convert." },
                            { step: "03", title: "Build", desc: "Writing clean, scalable code with modern frameworks to bring the design to life." },
                            { step: "04", title: "Launch", desc: "Rigorous testing and seamless deployment to get your product into the market." }
                        ].map((item, index) => (
                            <div key={index} className="bg-white border border-border p-8 rounded-2xl relative overflow-hidden group hover:border-accent transition-all duration-300">
                                <div className="font-display font-black text-6xl text-slate-100 absolute -top-4 -right-4 transition-colors group-hover:text-accent/5 select-none">{item.step}</div>
                                <div className="relative z-10">
                                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent font-bold mb-4 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                        {item.step}
                                    </div>
                                    <h3 className="font-bold text-lg text-primary mb-3">{item.title}</h3>
                                    <p className="text-sm text-secondary leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-[80px] pb-[100px] text-center">
                <div className="container-custom">
                    <h2 className="font-display text-[36px] font-extrabold text-primary mb-4">Ready to <span className="text-accent">Build</span> Something Great?</h2>
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
