import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Brand = () => {
    return (
        <Layout>
            {/* Page Hero - Left aligned with image on the right (consistent with other pages) */}
            <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-[420px] bg-gradient-to-b from-slate-50 to-transparent pointer-events-none -z-10" />
                <div className="container-custom relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Left: Copy */}
                        <div className="flex-1 text-left">

                            <div className="flex items-center gap-3 mb-8">
                                <div className="h-[1px] w-8 bg-accent"></div>
                                <span className="text-accent font-mono text-sm tracking-widest uppercase">Brand & Strategy</span>
                            </div>
                            <h1 className="font-display text-[48px] md:text-[72px] lg:text-[80px] font-black leading-[1.05] text-primary mb-8 tracking-[-3px]">
                                Build <   span className="text-accent">Brands</span>  That People <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-slate-500">Trust</span>.
                            </h1>
                            <p className="text-[18px] md:text-[20px] leading-[1.7] text-secondary max-w-[580px] mb-10">
                                We don't just design logos; we build belief systems. Connect with your audience on a visceral level through strategic storytelling and world-class design.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact" className="btn-primary rounded-full px-8 py-4 text-lg w-full sm:w-auto justify-center">
                                    Start Your Project
                                </Link>
                            </div>
                        </div>

                        {/* Right: Hero Visual */}
                        <div className="flex-1 w-full max-w-[520px] lg:max-w-[560px]">
                            <div className="bg-black/5 rounded-3xl h-[320px] md:h-[420px] lg:h-[460px] overflow-hidden relative shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
                                <img
                                    src="/assets/dim.jpeg"
                                    loading="eager"
                                    className="w-full h-full object-cover opacity-80"
                                />
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services: Alternating Feature Rows (Unique from Grid) */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-24">
                        <h2 className="font-display text-[40px] font-black text-primary mb-4">The <span className="text-accent">Brinqo</span> Way</h2>
                    </div>

                    <div className="space-y-32">
                        {/* Service Block 1: Strategy */}
                        <div id="strategy" className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="flex-1 order-2 lg:order-1">
                                <span className="text-accent font-bold text-lg mb-2 block">01</span>
                                <h3 className="font-display text-[32px] font-bold text-primary mb-6">Strategic Foundation</h3>
                                <p className="text-lg text-secondary leading-relaxed mb-6">
                                    Before we draw a single line, we define the 'Why'. We dive deep into market research, competitor analysis, and audience psychology to build a rock-solid foundation for your brand.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {['Market Positioning', 'Audience Personas', 'Brand Archetypes'].map(item => (
                                        <li key={item} className="flex items-center gap-3 text-primary font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent" /> {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/contact" className="text-accent font-bold underline underline-offset-4 hover:opacity-80">Explore Strategy</Link>
                            </div>
                            <div className="flex-1 order-1 lg:order-2 relative">
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-pink-50 border border-pink-100 relative group">
                                    <img src="/assets/stfn.png" alt="Strategy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                </div>
                            </div>
                        </div>

                        {/* Service Block 2: Identity */}
                        <div id="identity" className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="flex-1 order-1 relative">
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-purple-50 border border-purple-100 relative group">
                                    <img src="/assets/visual.png" alt="Identity" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                </div>
                            </div>
                            <div className="flex-1 order-2">
                                <span className="text-accent font-bold text-lg mb-2 block">02</span>
                                <h3 className="font-display text-[32px] font-bold text-primary mb-6">Visual Identity</h3>
                                <p className="text-lg text-secondary leading-relaxed mb-6">
                                    We translate strategy into sight. Using color theory, typography, and composition, we create distinct visual systems that make your brand unmistakable.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {['Logo Design', 'Design Systems', 'Brand Guidelines'].map(item => (
                                        <li key={item} className="flex items-center gap-3 text-primary font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent" /> {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/contact" className="text-accent font-bold underline underline-offset-4 hover:opacity-80">See Our Work</Link>
                            </div>
                        </div>

                        {/* Service Block 3: Growth */}
                        <div id="marketing" className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="flex-1 order-2 lg:order-1">
                                <span className="text-accent font-bold text-lg mb-2 block">03</span>
                                <h3 className="font-display text-[32px] font-bold text-primary mb-6">Growth & Performance</h3>
                                <p className="text-lg text-secondary leading-relaxed mb-6">
                                    A beautiful brand must also perform. We implement data-driven marketing campaigns that leverage your new identity to drive leads, sales, and loyalty.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {['Paid Media', 'SEO & Content', 'Conversion Optimization'].map(item => (
                                        <li key={item} className="flex items-center gap-3 text-primary font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent" /> {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/contact" className="text-accent font-bold underline underline-offset-4 hover:opacity-80">Drive Growth</Link>
                            </div>
                            <div className="flex-1 order-1 lg:order-2 relative">
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-blue-50 border border-blue-100 relative group">
                                    <img src="/assets/growth.png" alt="Growth" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tools: Horizontal Scroller or Simple Strip */}
            {/* Creative Stack Section */}
            <section className="py-16 bg-[#1e293b] border-y border-blue-900">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="text-accent font-bold tracking-widest text-sm uppercase mb-2 block">Our Arsenal</span>
                        <h2 className="font-display text-3xl md:text-4xl font-black text-white">Powered By World-Class Tools</h2>
                    </div>

                    <div className="flex justify-center">
                        <div className="grid grid-cols-3 md:grid-cols-6 gap-12 md:gap-16 items-center justify-items-center opacity-70 max-w-4xl">
                            {/* Design & Creative */}
                            <div className="group flex flex-col items-center gap-3 hover:opacity-100 transition-opacity">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" className="h-10 w-auto grayscale group-hover:grayscale-0 transition-all duration-300" alt="Figma" />
                                <span className="text-xs font-semibold text-slate-500 group-hover:text-white transition-colors">Figma</span>
                            </div>
                            <div className="group flex flex-col items-center gap-3 hover:opacity-100 transition-opacity">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg" className="h-10 w-auto grayscale group-hover:grayscale-0 transition-all duration-300" alt="Illustrator" />
                                <span className="text-xs font-semibold text-slate-500 group-hover:text-white transition-colors">Illustrator</span>
                            </div>
                            <div className="group flex flex-col items-center gap-3 hover:opacity-100 transition-opacity">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" className="h-10 w-auto grayscale group-hover:grayscale-0 transition-all duration-300" alt="Photoshop" />
                                <span className="text-xs font-semibold text-slate-500 group-hover:text-white transition-colors">Photoshop</span>
                            </div>
                            <div className="group flex flex-col items-center gap-3 hover:opacity-100 transition-opacity">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" className="h-10 w-auto grayscale group-hover:grayscale-0 transition-all duration-300" alt="Canva" />
                                <span className="text-xs font-semibold text-slate-500 group-hover:text-white transition-colors">Canva</span>
                            </div>

                            {/* Strategy & Marketing */}
                            <div className="group flex flex-col items-center gap-3 hover:opacity-100 transition-opacity">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" className="h-9 w-auto grayscale group-hover:grayscale-0 transition-all duration-300" alt="Google Ads" />
                                <span className="text-xs font-semibold text-slate-500 group-hover:text-white transition-colors">Ads</span>
                            </div>
                            {/* <div className="group flex flex-col items-center gap-3 hover:opacity-100 transition-opacity">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Semrush_logo.svg" className="h-8 w-auto grayscale group-hover:grayscale-0 brightness-200 contrast-200 transition-all duration-300" alt="Semrush" />
                            <span className="text-xs font-semibold text-slate-500 group-hover:text-white transition-colors">Semrush</span>
                        </div> */}
                            <div className="group flex flex-col items-center gap-3 hover:opacity-100 transition-opacity">
                                <img src="https://cdn.worldvectorlogo.com/logos/hubspot-1.svg" className="h-8 w-auto grayscale group-hover:grayscale-0 brightness-200 transition-all duration-300" alt="Hubspot" />
                                <span className="text-xs font-semibold text-slate-500 group-hover:text-white transition-colors">Hubspot</span>
                            </div>
                            {/* <div className="group flex flex-col items-center gap-3 hover:opacity-100 transition-opacity">
                            <img src="https://cdn.worldvectorlogo.com/logos/webflow-1.svg" className="h-8 w-auto grayscale group-hover:grayscale-0 brightness-200 transition-all duration-300" alt="Webflow" />
                            <span className="text-xs font-semibold text-slate-500 group-hover:text-white transition-colors">Webflow</span>
                        </div> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Process: Vertical Timeline */}
            <section className="py-24 bg-slate-50">
                <div className="container-custom">
                    <div className="text-center mb-20">
                        <h2 className="font-display text-[40px] font-black text-primary mb-4"><span className="text-accent">Our</span> Creative Arc</h2>
                        <p className="text-secondary text-lg">Our proven path to extraordinary results.</p>
                    </div>

                    <div className="max-w-4xl mx-auto relative">
                        {/* Center Line */}
                        <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

                        <div className="space-y-12 relative">
                            {/* Step 1 */}
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="flex-1 md:text-right">
                                    <h3 className="font-bold text-2xl text-primary mb-2">Immersion</h3>
                                    <p className="text-secondary leading-relaxed">We become an extension of your team, absorbing your culture and vision.</p>
                                </div>
                                <div className="w-[30px] h-[30px] rounded-full bg-accent border-4 border-white shadow-lg relative z-10 shrink-0" />
                                <div className="flex-1 opacity-50 font-display font-black text-6xl text-slate-200 select-none hidden md:block">01</div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="flex-1 md:text-right hidden md:block">
                                    <div className="opacity-50 font-display font-black text-6xl text-slate-200 select-none">02</div>
                                </div>
                                <div className="w-[30px] h-[30px] rounded-full bg-primary border-4 border-white shadow-lg relative z-10 shrink-0" />
                                <div className="flex-1">
                                    <h3 className="font-bold text-2xl text-primary mb-2"><span className="text-accent">Ideation</span></h3>
                                    <p className="text-secondary leading-relaxed">Divergent thinking to explore every possibility before narrowing down.</p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="flex-1 md:text-right">
                                    <h3 className="font-bold text-2xl text-primary mb-2">Creation</h3>
                                    <p className="text-secondary leading-relaxed">The heavy lifting. Designing, writing, and refining until it's perfect.</p>
                                </div>
                                <div className="w-[30px] h-[30px] rounded-full bg-accent border-4 border-white shadow-lg relative z-10 shrink-0" />
                                <div className="flex-1 opacity-50 font-display font-black text-6xl text-slate-200 select-none hidden md:block">03</div>
                            </div>

                            {/* Step 4 */}
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="flex-1 md:text-right hidden md:block">
                                    <div className="opacity-50 font-display font-black text-6xl text-slate-200 select-none">04</div>
                                </div>
                                <div className="w-[30px] h-[30px] rounded-full bg-primary border-4 border-white shadow-lg relative z-10 shrink-0" />
                                <div className="flex-1">
                                    <h3 className="font-bold text-2xl text-primary mb-2"><span className="text-accent">Launch</span></h3>
                                    <p className="text-secondary leading-relaxed">Releasing your new brand into the world with impact and precision.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-[100px] text-center bg-white">
                <div className="container-custom">
                    <h2 className="font-display text-[48px] font-black text-primary mb-6">Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-red-600">Brand</span>, Reimagined.</h2>
                    <Link to="/contact" className="btn-dark justify-center">
                        Let's Brand you
                    </Link>
                </div>
            </section>
        </Layout>
    );
};

export default Brand;
