import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Build = () => {
    return (
        <Layout>
            {/* Hero Section: Technical & Industrial */}
            <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />

                <div className="container-custom relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="h-[1px] w-8 bg-accent"></div>
                                <span className="text-accent font-mono text-sm tracking-widest uppercase">Engineering First</span>
                            </div>
                            <h1 className="font-display text-[56px] md:text-[80px] font-black leading-[1] mb-8 tracking-[-2px]">
                                <span className="text-accent">Build</span> The <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-slate-500">Future.</span>
                            </h1>
                            <p className="text-[20px] leading-[1.6] text-secondary max-w-[600px] mb-10 font-light">
                                We turn complex requirements into elegant, scalable software.
                                From MVP to Enterprise, we deploy systems that are secure by design and built for speed.
                            </p>
                            <div className="flex gap-4">
                                <Link to="/contact" className="bg-accent hover:bg-red-600 text-white px-8 py-4 rounded-lg font-bold transition-all flex items-center gap-2 shadow-md hover:shadow-lg">
                                    Start Building
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </Link>
                                <Link to="/contact" className="px-8 py-4 rounded-lg border border-border text-primary hover:bg-slate-100 transition-all font-medium">
                                    View Architecture
                                </Link>
                            </div>
                        </div>

                        {/* Hero Graphic: Code Block / Terminal Aesthetic */}
                        <div className="flex-1 w-full max-w-[600px]">
                            <div className="bg-slate-950 rounded-xl border border-slate-800 shadow-2xl p-4 font-mono text-sm relative overflow-hidden group text-white">
                                <div className="flex gap-2 mb-4 border-b border-slate-800 pb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="space-y-2 text-slate-300">
                                    <div className="flex"><span className="text-purple-400 mr-2">const</span> <span className="text-yellow-300">Brinqo</span> = <span className="text-blue-400">new</span> <span className="text-yellow-300">Builder</span>({`{`}</div>
                                    <div className="pl-6"><span className="text-blue-300">speed</span>: <span className="text-green-400">"Accelerated"</span>,</div>
                                    <div className="pl-6"><span className="text-blue-300">quality</span>: <span className="text-green-400">"Enterprise-Grade"</span>,</div>
                                    <div className="pl-6"><span className="text-blue-300">stack</span>: [<span className="text-green-400">"React"</span>, <span className="text-green-400">"Node"</span>, <span className="text-green-400">"AI"</span>],</div>
                                    <div className="pl-6"><span className="text-blue-300">deploy</span>: <span className="text-purple-400">async</span> () ={`>`} <span className="text-yellow-300">await</span> <span className="text-blue-400">Launch</span>()</div>
                                    <div>{`}`});</div>
                                </div>
                                <div className="absolute top-0 right-0 p-4 text-xs text-slate-600">v2.0.4</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services: Industrial Grid */}
            <section id="services" className="py-24 bg-slate-50">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <h2 className="font-display text-[40px] font-black text-primary leading-tight">Capabilities &<br /><span className="text-accent underline decoration-accent/20 underline-offset-8">Core Services</span></h2>
                        </div>
                        <p className="text-secondary max-w-sm text-right md:text-left">
                            Precision engineering for every layer of your digital real estate.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden rounded-3xl border border-slate-200">
                        {[
                            {
                                title: "Web Platforms",
                                desc: "High-performance SaaS and web apps built for millions of users.",
                                stats: ["React / Next.js", "99.9% Uptime"],
                                icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            },
                            {
                                title: "Mobile Engineering",
                                desc: "Native-quality experiences for iOS and Android using modern cross-platform tech.",
                                stats: ["React Native", "Flutter"],
                                icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                            },
                            {
                                title: "AI Integration",
                                desc: "Embed LLMs and machine learning directly into your business logic.",
                                stats: ["OpenAI API", "Vector Ops"],
                                icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                            },
                            {
                                title: "DevOps & Cloud",
                                desc: "Scalable infrastructure that grows automatically with your demand.",
                                stats: ["AWS / Azure", "CI/CD Pipelines"],
                                icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-10 border border-slate-100 hover:z-10 hover:shadow-2xl hover:border-slate-200 transition-all group relative">
                                <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-100 transition-opacity text-accent">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d={item.icon} /></svg>
                                </div>
                                <h3 className="font-display text-2xl font-bold text-primary mb-3">{item.title}</h3>
                                <p className="text-secondary mb-8 max-w-xs leading-relaxed">
                                    {item.desc}
                                </p>
                                <div className="flex gap-3">
                                    {item.stats.map(stat => (
                                        <span key={stat} className="text-xs font-mono font-bold px-2 py-1 bg-slate-100 text-slate-600 rounded uppercase tracking-wider group-hover:bg-primary group-hover:text-white transition-colors">
                                            {stat}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Tech Stack Section */}
            <section className="py-24 bg-white border-y border-border">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-[40px] font-black text-primary mb-4">
                            <span className="text-accent">Our</span> Tech Stack
                        </h2>
                        <p className="text-[17px] text-secondary max-w-[600px] mx-auto">
                            We use modern, battle-tested technologies to build robust applications.
                        </p>
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
                            <div
                                key={i}
                                className="bg-white border border-border p-6 rounded-xl flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:border-accent hover:shadow-lg hover:-translate-y-1 group cursor-pointer"
                            >
                                <div className="w-12 h-12 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                                    {tech.custom ? (
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-primary">
                                            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729ZM4.9723 9.7701l-1.1329.006a3.9815 3.9815 0 0 1 2.1331-3.3648A3.9925 3.9925 0 0 1 8.5807 4.8l.3535 1.7677a2.0035 2.0035 0 0 0-3.962 3.2024Zm6.524 9.4235-.3536 1.7678a3.9925 3.9925 0 0 1-2.6062-1.6117 3.9815 3.9815 0 0 1 2.1331-3.3648l1.1329.006a2.0035 2.0035 0 0 0-.3062 3.2027Zm5.5019-7.3986-1.133-.006a3.9815 3.9815 0 0 1-2.133 3.3648 3.9925 3.9925 0 0 1-2.6062 1.6117l.3536-1.7678a2.0035 2.0035 0 0 0 3.9619-3.2024L17 11.795Zm0-7.3986.3536-1.7678a3.9925 3.9925 0 0 1 2.6061 1.6117 3.9815 3.9815 0 0 1-2.1331 3.3648l-1.1328-.006a2.0035 2.0035 0 0 0-3.6558-3.2027h3.962Zm-5.5019 7.3986 1.133.006a3.9815 3.9815 0 0 1 2.133-3.3648 3.9925 3.9925 0 0 1 2.6062-1.6117l-.3536 1.7678a2.0035 2.0035 0 0 0-3.962 3.2024l-1.5566-1.9997Z" />
                                        </svg>
                                    ) : (
                                        <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
                                    )}
                                </div>
                                <span className="font-semibold text-primary text-sm group-hover:text-accent transition-colors">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process: The Pipeline - Enhanced Timeline Design */}
            <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
                <div className="absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

                <div className="container-custom relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-4">
                        <div>
                            <h2 className="font-display text-[40px] font-black mb-2 text-primary"><span className="text-accent">Our</span> Delivery Pipeline</h2>
                            <p className="text-secondary text-lg">From commit to deployment in 4 stages.</p>
                        </div>
                        <div className="hidden md:block">
                            <div className="flex gap-2 text-xs font-mono text-slate-500 bg-white px-4 py-2 rounded-lg border border-border shadow-sm">
                                <span className="text-accent">git</span> checkout -b feature/scale
                            </div>
                        </div>
                    </div>

                    <p className="text-secondary text-center mb-16 max-w-2xl mx-auto">Our proven development pipeline ensures quality, speed, and scalability at every step</p>

                    {/* Desktop Timeline */}
                    <div className="hidden md:block relative">
                        {/* Connecting Line */}
                        <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/20 via-accent/50 to-accent/20"
                            style={{ left: 'calc(12.5% + 40px)', right: 'calc(12.5% + 40px)' }} />

                        <div className="grid grid-cols-4 gap-8">
                            {[
                                { step: "01", name: "Architect", desc: "System Design & Schema", icon: "🏗️", color: "from-blue-500 to-blue-600" },
                                { step: "02", name: "Develop", desc: "Agile Sprints & Code", icon: "💻", color: "from-purple-500 to-purple-600" },
                                { step: "03", name: "Verify", desc: "Automated QA & UAT", icon: "✅", color: "from-green-500 to-green-600" },
                                { step: "04", name: "Deploy", desc: "CI/CD & Monitoring", icon: "🚀", color: "from-accent to-red-600" }
                            ].map((phase, i) => (
                                <div key={i} className="relative group">
                                    {/* Arrow between steps */}
                                    {i < 3 && (
                                        <div className="hidden md:block absolute top-20 -right-8 z-20 transform translate-x-1/2">
                                            <svg width="32" height="32" viewBox="0 0 24 24" className="text-accent/60 group-hover:text-accent transition-colors">
                                                <path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                                            </svg>
                                        </div>
                                    )}

                                    {/* Step Card */}
                                    <div className="relative bg-white rounded-2xl border-2 border-border hover:border-accent transition-all duration-300 p-8 group-hover:shadow-2xl group-hover:-translate-y-2">
                                        {/* Step Number Badge */}
                                        <div className={`absolute -top-4 left-6 w-16 h-16 bg-gradient-to-br ${phase.color} text-white rounded-2xl flex items-center justify-center font-display font-black text-xl shadow-lg transition-all duration-300 group-hover:scale-110`}>
                                            {phase.step}
                                        </div>

                                        {/* Large Number Background */}
                                        <div className="absolute top-4 right-4 text-7xl font-black text-slate-100 group-hover:text-accent/10 transition-colors select-none pointer-events-none">
                                            {phase.step}
                                        </div>

                                        {/* Icon/Emoji */}
                                        <div className="text-5xl mb-6 mt-8 group-hover:scale-110 transition-transform">
                                            {phase.icon}
                                        </div>

                                        {/* Content */}
                                        <h3 className="font-display font-bold text-xl text-primary mb-3 group-hover:text-accent transition-colors relative z-10">
                                            {phase.name}
                                        </h3>
                                        <p className="text-sm text-secondary leading-relaxed relative z-10">
                                            {phase.desc}
                                        </p>

                                        {/* Progress indicator */}
                                        <div className="mt-6 h-1 w-0 bg-gradient-to-r from-accent to-accent/50 group-hover:w-full transition-all duration-500 rounded-full" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Timeline (Vertical) */}
                    <div className="md:hidden space-y-8 relative">
                        {/* Vertical connecting line */}
                        <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-accent/20 via-accent/50 to-accent/20" />

                        {[
                            { step: "01", name: "Architect", desc: "System Design & Schema", icon: "🏗️", color: "from-blue-500 to-blue-600" },
                            { step: "02", name: "Develop", desc: "Agile Sprints & Code", icon: "💻", color: "from-purple-500 to-purple-600" },
                            { step: "03", name: "Verify", desc: "Automated QA & UAT", icon: "✅", color: "from-green-500 to-green-600" },
                            { step: "04", name: "Deploy", desc: "CI/CD & Monitoring", icon: "🚀", color: "from-accent to-red-600" }
                        ].map((phase, i) => (
                            <div key={i} className="relative pl-20">
                                {/* Step Number Badge */}
                                <div className={`absolute left-0 w-16 h-16 bg-gradient-to-br ${phase.color} text-white rounded-2xl flex items-center justify-center font-display font-black text-xl shadow-lg z-10`}>
                                    {phase.step}
                                </div>

                                {/* Card */}
                                <div className="bg-white rounded-2xl border-2 border-border p-6 hover:border-accent hover:shadow-xl transition-all">
                                    <div className="text-4xl mb-4">{phase.icon}</div>
                                    <h3 className="font-display font-bold text-lg text-primary mb-2">
                                        {phase.name}
                                    </h3>
                                    <p className="text-sm text-secondary leading-relaxed">
                                        {phase.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-[100px] text-center bg-white border-t border-border">
                <div className="container-custom">
                    <h2 className="font-display text-[48px] font-black text-primary mb-6">Ready to <span className="text-accent">Build</span> Something Great?</h2>
                    <p className="text-[18px] text-secondary mb-10 max-w-2xl mx-auto">
                        Stop worrying about technical debt and scalability. We build software that handles your growth today and tomorrow.
                    </p>
                    <Link to="/contact" className="btn-dark justify-center">
                        Initialize Project
                    </Link>
                </div>
            </section>
        </Layout>
    );
};

export default Build;
