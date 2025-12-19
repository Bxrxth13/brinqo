import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const About = () => {
    return (
        <Layout>
            <section className="py-[100px] pb-[80px] bg-white">
                <div className="container-custom">
                    <h1 className="font-display text-[48px] md:text-[64px] font-black leading-[1.1] text-primary mb-6 tracking-[-2px]">
                        We're <span className="text-accent">Brinqo</span>
                    </h1>
                    <p className="text-[18px] leading-[1.7] text-secondary max-w-[600px]">
                        A technology and services company helping businesses build digital products,
                        strengthen their brands, and bridge talent gaps—all with enterprise-grade precision.
                    </p>
                </div>
            </section>

            <section className="py-[100px] bg-alt">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white border border-border rounded-xl p-10">
                            <h2 className="font-display text-2xl font-extrabold text-primary mb-4">Our Vision</h2>
                            <p className="text-base leading-[1.7] text-secondary">
                                To be the trusted partner for businesses transforming their ideas into
                                market-ready realities. We envision a world where every ambitious team
                                has access to world-class technology and talent.
                            </p>
                        </div>
                        <div className="bg-white border border-border rounded-xl p-10">
                            <h2 className="font-display text-2xl font-extrabold text-primary mb-4">Our Mission</h2>
                            <p className="text-base leading-[1.7] text-secondary">
                                To deliver exceptional value through our Build · Brand · Bridge framework,
                                helping companies scale faster with less friction. We combine technical
                                excellence with strategic thinking to drive measurable outcomes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-[100px]">
                <div className="container-custom">
                    <h2 className="font-display text-[32px] md:text-[40px] font-extrabold text-primary mb-4 tracking-[-1px]">Why Brinqo Exists</h2>
                    <p className="text-[17px] text-secondary max-w-[600px] mb-12">We started Brinqo because we believed there was a better way.</p>

                    <div className="max-w-[800px]">
                        <p className="text-[18px] leading-[1.8] text-[#444] mb-6">
                            Too many businesses struggle to find the right mix of technology, branding, and talent.
                            They work with fragmented vendors, face communication gaps, and end up with solutions
                            that don't quite fit.
                        </p>
                        <p className="text-[18px] leading-[1.8] text-[#444]">
                            We built Brinqo to be different—a single partner that understands the full picture.
                            Whether you need to build a product, establish your brand, or scale your team,
                            we bring a unified approach that delivers real results.
                        </p>
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
