import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Brand = () => {
    return (
        <Layout>
            <section className="py-[100px] pb-[80px] bg-white">
                <div className="container-custom">
                    <h1 className="font-display text-[48px] md:text-[64px] font-black leading-[1.1] text-primary mb-6 tracking-[-2px]">
                        Build Brands That<br />People <span className="text-accent">Trust</span>
                    </h1>
                    <p className="text-[18px] leading-[1.7] text-secondary max-w-[600px]">
                        From strategy to execution, we craft brand experiences that
                        resonate with your audience and drive meaningful growth.
                    </p>
                </div>
            </section>

            <section className="py-[100px] bg-alt">
                <div className="container-custom">
                    <h2 className="font-display text-[32px] md:text-[40px] font-extrabold text-primary mb-4 tracking-[-1px]">What We Do</h2>
                    <p className="text-[17px] text-secondary max-w-[600px] mb-12">Strategic branding and marketing that drives real business results.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Brand Strategy", desc: "Define your brand's purpose, positioning, and promise.", icon: <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /> },
                            { title: "Visual Identity", desc: "Logo design, color systems, typography, and comprehensive guidelines.", icon: <circle cx="12" cy="12" r="10" /> },
                            { title: "Marketing Campaigns", desc: "Multi-channel campaigns that reach your audience where they are.", icon: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /> },
                            { title: "Product Positioning", desc: "Craft compelling narratives that differentiate your product.", icon: <path d="M12 20V10" /> },
                            { title: "Growth & Performance", desc: "Data-driven strategies that accelerate customer acquisition.", icon: <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /> },
                            { title: "Content Strategy", desc: "Engaging content that tells your story and builds lasting connections.", icon: <rect x="3" y="3" width="18" height="18" rx="2" /> },
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

            {/* Impact Section */}
            <section className="py-[100px]">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-border">
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
