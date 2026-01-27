import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Brand = () => {
    return (
        <Layout>
            {/* Page Hero */}
            <section className="py-20 pb-16 bg-gradient-to-b from-accent/5 to-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none select-none">
                    <img src="/assets/brand_impact.png" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="container-custom relative z-10">
                    <h1 className="font-display text-[48px] md:text-[64px] font-black leading-[1.1] text-primary mb-6 tracking-[-2px]">
                        Build Brands That<br />People <span className="text-accent">Trust</span>
                    </h1>
                    <p className="text-[18px] leading-[1.7] text-secondary max-w-[600px]">
                        We blend strategy, design, and storytelling to create brands that stand out.
                        From positioning to performance marketing, we help you connect with your
                        audience and drive real business growth.
                    </p>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-slate-50">
                <div className="container-custom">
                    <h2 className="font-display text-[32px] md:text-[40px] font-extrabold text-primary mb-4 tracking-[-1px]">What <span className="text-accent">We </span>Do</h2>
                    <p className="text-[17px] text-secondary max-w-[600px] mb-12">Strategic branding and marketing that drives results.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Brand Identity",
                                desc: "Crafting distinct visual systems, logos, and guidelines that make your brand instantly recognizable and memorable.",
                                image: "/assets/brand_service_identity.png",
                                color: "bg-purple-50"
                            },
                            {
                                title: "Marketing Strategy",
                                desc: "Comprehensive go-to-market plans, audience research, and multi-channel strategies to maximize your reach.",
                                image: "/assets/brand_service_strategy.png",
                                color: "bg-pink-50"
                            },
                            {
                                title: "Performance Marketing",
                                desc: "Data-driven paid media, SEO, and content campaigns focused on ROI, lead generation, and customer acquisition.",
                                image: "/assets/brand_service_performance.png",
                                color: "bg-blue-50"
                            },
                            {
                                title: "Positioning & Growth",
                                desc: "Defining your unique value proposition and executing growth hacks to help you scale rapidly in your market.",
                                image: "/assets/brand_service_growth.png",
                                color: "bg-yellow-50"
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

            {/* Narrative & Impact Section */}
            <section className="py-20 bg-white border-y border-border">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                        <div className="flex-1 order-2 lg:order-1">
                            <h2 className="font-display text-[32px] md:text-[40px] font-extrabold text-primary mb-6 tracking-[-1px]">The Power of <span className="text-accent">Narrative</span></h2>
                            <p className="text-[17px] text-secondary leading-relaxed mb-6">
                                We believe that the strongest brands are built on stories, not just visuals. When we worked with FinTech Innovator "X", we didn't just redesign their logo; we redefined their position in the market.
                            </p>
                            <p className="text-[17px] text-secondary leading-relaxed mb-6">
                                By shifting their narrative from "feature-focused" to "outcome-oriented", we helped them connect with enterprise clients on a deeper level, resulting in a 40% increase in qualified leads within three months.
                            </p>
                            <p className="text-[17px] text-secondary leading-relaxed font-semibold">
                                Your brand is your promise. We help you keep it.
                            </p>
                        </div>
                        <div className="flex-1 order-1 lg:order-2">
                            <div className="bg-alt rounded-2xl border border-border h-[400px] flex items-center justify-center relative overflow-hidden group">
                                <img src="/assets/brand_impact.png" alt="Visual Impact" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
                                    <p className="text-white font-display font-bold text-xl tracking-wide">Visual Impact</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-border border-t border-border pt-12">
                        {[
                            { value: "300%", label: "Average Growth" },
                            { value: "50+", label: "Brands Launched" },
                            { value: "$10M+", label: "Revenue Generated" }
                        ].map((stat, i) => (
                            <div key={i} className="pt-8 md:pt-0 px-8">
                                <div className="font-display text-[48px] md:text-[56px] font-black text-accent mb-2">{stat.value}</div>
                                <div className="text-secondary font-medium tracking-wide uppercase text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Creative Stack Section */}
            <section className="py-20 bg-slate-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-[32px] md:text-[40px] font-extrabold text-primary mb-4 tracking-[-1px]"><span className="text-accent">Our</span> Creative Stack</h2>
                        <p className="text-[17px] text-secondary max-w-[600px] mx-auto">We use industry-leading tools to design, analyze, and optimize.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {[
                            { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
                            { name: 'Adobe CC', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg' },
                            { name: 'Webflow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webflow/webflow-original.svg' },
                            { name: 'HubSpot', icon: 'https://cdn.worldvectorlogo.com/logos/hubspot-1.svg' },
                            { name: 'Google Ads', icon: 'https://cdn.worldvectorlogo.com/logos/google-ads-2.svg' },
                            { name: 'Midjourney', icon: 'https://cdn.worldvectorlogo.com/logos/midjourney.svg' },
                        ].map((tech, i) => (
                            <div key={i} className="bg-white border border-border p-6 rounded-xl flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:border-accent hover:shadow-lg hover:-translate-y-1 group">
                                <div className="w-12 h-12 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300 p-1">
                                    <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
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
                    <p className="text-[17px] text-secondary max-w-[600px] mb-12">How we bring your brand to life.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { step: "01", title: "Discover", desc: "We immerse ourselves in your business, researching your market and audience." },
                            { step: "02", title: "Define", desc: "Establishing your brand strategy, positioning, and core messaging pillars." },
                            { step: "03", title: "Design", desc: "Creating the visual identity and creative assets that represent your brand." },
                            { step: "04", title: "Deliver", desc: "Launching your brand with a comprehensive guideline and go-to-market plan." }
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

            <section className="py-[80px] pb-[100px] text-center">
                <div className="container-custom">
                    <h2 className="font-display text-[36px] font-extrabold text-primary mb-4">Ready to Build Your Brand?</h2>
                    <p className="text-[17px] text-secondary mb-8">Let's create something people will remember.</p>
                    <Link to="/contact" className="btn-dark justify-center">
                        Build Your Brand
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
            </section>
        </Layout>
    );
};

export default Brand;
