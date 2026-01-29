import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Bridge = () => {
    return (
        <Layout>
            {/* Hero Section: Split Layout with Network Visual */}
            <section className="pt-12 pb-20 lg:pt-20 lg:pb-32 bg-slate-50 relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="flex flex-col lg:flex-row items-start gap-16">
                        <div className="flex-1 text-center lg:text-left">
                            <div className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
                                <div className="h-[1px] w-8 bg-accent"></div>
                                <span className="text-accent font-mono text-sm tracking-widest uppercase">Global Talent Network</span>
                            </div>
                            <h1 className="font-display text-[52px] md:text-[72px] font-black leading-[1.05] text-primary mb-8 tracking-[-2px]">
                                Bridging <span className="text-accent">Talent</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-slate-500">& Tech.</span>
                            </h1>
                            <p className="text-[19px] leading-[1.6] text-secondary mb-10 max-w-[600px] mx-auto lg:mx-0">
                                Scale your engineering capacity instantly. We connect you with a pre-vetted network of top 1% developers, ensuring you build faster and smarter.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link to="/contact" className="btn-primary">Find Talent</Link>
                                <Link to="/contact" className="px-8 py-3.5 rounded-lg border border-border bg-white font-bold text-primary hover:border-primary transition-colors text-center">Join Network</Link>
                            </div>
                        </div>
                        <div className="flex-1 w-full max-w-[600px]">
                            {/* Abstract Network Graphic Placeholder */}
                            <div className="aspect-square rounded-full bg-white border border-border p-8 relative shadow-2xl animate-pulse-slow">
                                <div className="absolute inset-0 rounded-full border border-accent/10 animate-[spin_10s_linear_infinite]" />
                                <div className="absolute inset-[10%] rounded-full border border-primary/5 animate-[spin_15s_linear_infinite_reverse]" />
                                <img src="/assets/abc.jpeg" alt="Network" className="w-full h-full object-cover rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services: Bento Grid Layout (Unique from List/Row) */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="mb-16 text-center">
                        <span className="text-accent font-bold tracking-widest text-sm uppercase mb-2 block">Our Services</span>
                        <h2 className="font-display text-[40px] font-black text-primary mb-4">Talent Solutions</h2>
                        <p className="text-secondary text-lg max-w-2xl mx-auto">Detailed approaches to scaling your workforce with precision and speed.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Service 1: Dedicated Teams */}
                        <div id="talent-hiring" className="bg-slate-50 rounded-3xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col sm:flex-row h-full">
                            <div className="w-full sm:w-2/5 relative h-48 sm:h-auto">
                                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Dedicated Teams" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="w-full sm:w-3/5 p-8 flex flex-col justify-center">
                                <h3 className="font-display text-2xl font-bold text-primary mb-3">Dedicated Teams</h3>
                                <p className="text-secondary text-sm leading-relaxed mb-4">
                                    Build a fully managed remote engineering team that integrates key roles seamlessly with your culture and workflows.
                                </p>
                            </div>
                        </div>

                        {/* Service 2: Staff Augmentation */}
                        <div id="team-augmentation" className="bg-slate-50 rounded-3xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col sm:flex-row h-full">
                            <div className="w-full sm:w-2/5 relative h-48 sm:h-auto">
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Staff Augmentation" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="w-full sm:w-3/5 p-8 flex flex-col justify-center">
                                <h3 className="font-display text-2xl font-bold text-primary mb-3">Staff Augmentation</h3>
                                <p className="text-secondary text-sm leading-relaxed mb-4">
                                    Fill critical skill gaps instantly with our network of senior freelance experts. Scale up or down on demand.
                                </p>
                            </div>
                        </div>

                        {/* Service 3: Training & Upskilling */}
                        <div id="training" className="bg-slate-50 rounded-3xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col sm:flex-row h-full">
                            <div className="w-full sm:w-2/5 relative h-48 sm:h-auto">
                                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Training" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="w-full sm:w-3/5 p-8 flex flex-col justify-center">
                                <h3 className="font-display text-2xl font-bold text-primary mb-3">Training & Upskilling</h3>
                                <p className="text-secondary text-sm leading-relaxed mb-4">
                                    Corporate training programs designed to modernise your team's skills in AI, Cloud, and modern frameworks.
                                </p>
                            </div>
                        </div>

                        {/* Service 4: Project Delivery */}
                        <div className="bg-slate-50 rounded-3xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col sm:flex-row h-full">
                            <div className="w-full sm:w-2/5 relative h-48 sm:h-auto">
                                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Project Delivery" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="w-full sm:w-3/5 p-8 flex flex-col justify-center">
                                <h3 className="font-display text-2xl font-bold text-primary mb-3">Project Delivery</h3>
                                <p className="text-secondary text-sm leading-relaxed mb-4">
                                    We take full ownership of critical tech projects, delivering end-to-end execution from discovery to deployment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dashboard Stats & Stack */}
            <section className="py-24 bg-slate-50 border-y border-border">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-[40px] font-black text-primary mb-4">The Network Effect</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Metric Cards (Black & Red Design) */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-primary p-8 rounded-2xl text-white flex flex-col justify-between aspect-[4/3] shadow-xl">
                                <div className="text-5xl font-black tracking-tighter">500+</div>
                                <div className="text-white/70 font-medium">Vetted Engineers</div>
                            </div>
                            <div className="bg-white p-8 rounded-2xl border border-border flex flex-col justify-between aspect-[4/3]">
                                <div className="text-5xl font-black text-primary tracking-tighter">48h</div>
                                <div className="text-secondary font-medium">Avg. Deployment</div>
                            </div>
                            <div className="bg-accent p-8 rounded-2xl text-white flex flex-col justify-between aspect-[4/3] shadow-xl">
                                <div className="text-5xl font-black tracking-tighter">20+</div>
                                <div className="text-white/90 font-medium">Global Locations</div>
                            </div>
                            <div className="bg-white p-8 rounded-2xl border border-border flex flex-col justify-between aspect-[4/3]">
                                <div className="text-5xl font-black text-primary tracking-tighter">98%</div>
                                <div className="text-secondary font-medium">Retention Rate</div>
                            </div>
                        </div>

                        {/* Right: Logos/Ecosystem */}
                        <div className="bg-white rounded-3xl p-10 border border-border h-full">
                            <h3 className="font-bold text-xl text-primary mb-8 px-2">Integrated with your workflow</h3>
                            <div className="grid grid-cols-3 gap-8">
                                {[
                                    { name: 'github', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
                                    { name: 'slack', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg' },
                                    { name: 'jira', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg' },
                                    { name: 'zoom', icon: 'https://svgl.app/library/zoom.svg' },
                                    { name: 'trello', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-plain.svg' },
                                    { name: 'figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' }
                                ].map(tool => (
                                    <div key={tool.name} className="aspect-square flex items-center justify-center bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                                        <img src={tool.icon} className="w-10 h-10 opacity-80 hover:opacity-100 transition-opacity" alt={tool.name} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process: Horizontal Flow */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <h2 className="font-display text-[32px] md:text-[40px] font-black text-primary mb-16 text-center">How <span className="text-accent">We</span> Match</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {[
                            { step: "01", title: "Profile", desc: "We analyze your tech stack and culture needs." },
                            { step: "02", title: "Vet", desc: "Our AI + Human process filters the top 1%." },
                            { step: "03", title: "Match", desc: "You interview pre-selected, qualified candidates." },
                            { step: "04", title: "Deploy", desc: "Instant onboarding with our HR & legal framework." }
                        ].map((item, i) => (
                            <div key={i} className="relative p-6 rounded-2xl border border-dashed border-border hover:border-accent hover:bg-accent/5 transition-all group text-center">
                                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4 group-hover:bg-accent transition-colors shadow-lg shadow-primary/20">{item.step}</div>
                                <h3 className="font-bold text-lg text-primary mb-2">{item.title}</h3>
                                <p className="text-sm text-secondary">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-[100px] text-center bg-slate-50">
                <div className="container-custom">
                    <h2 className="font-display text-[48px] font-black text-primary mb-4">Ready to <span className="text-accent">Bridge</span> the Gap?</h2>
                    <p className="text-[18px] text-secondary mb-8">Access the top 1% of global engineering talent.</p>
                    <Link to="/contact" className="btn-dark justify-center">
                        View Available Talent
                    </Link>
                </div>
            </section>
        </Layout>
    );
};

export default Bridge;
