import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Bridge = () => {
    const [activeService, setActiveService] = useState(0);

    const services = [
        {
            id: 'talent-hiring',
            title: 'Dedicated Teams',
            icon: '👥',
            description: 'Build a fully managed remote engineering team that integrates key roles seamlessly with your culture and workflows.',
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            features: ['Full-stack developers', 'Quality assurance', 'Project management', 'DevOps support']
        },
        {
            id: 'team-augmentation',
            title: 'Staff Augmentation',
            icon: '⚡',
            description: 'Fill critical skill gaps instantly with our network of senior freelance experts. Scale up or down on demand.',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            features: ['Senior developers', 'Flexible contracts', 'Rapid onboarding', 'On-demand scaling']
        },
        {
            id: 'training',
            title: 'Training & Upskilling',
            icon: '🎓',
            description: 'Corporate training programs designed to modernise your team\'s skills in AI, Cloud, and modern frameworks.',
            image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            features: ['Custom curriculum', 'Hands-on workshops', 'Certification programs', 'Progress tracking']
        },
        {
            id: 'project-delivery',
            title: 'Project Delivery',
            icon: '🚀',
            description: 'We take full ownership of critical tech projects, delivering end-to-end execution from discovery to deployment.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            features: ['Full project ownership', 'Agile methodology', 'Quality assurance', 'Post-launch support']
        }
    ];

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
                                <img src="/assets/bridge2.jpg" alt="Network" loading="eager" className="w-full h-full object-cover rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services: Interactive Split Layout */}
            <section className="py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.05),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.03),transparent_50%)]" />

                <div className="container-custom relative z-10">
                    <div className="mb-16 text-center">
                        <span className="text-accent font-bold tracking-widest text-sm uppercase mb-2 block">Our Services</span>
                        <h2 className="font-display text-[40px] font-black text-primary mb-4">Talent Solutions</h2>
                        <p className="text-secondary text-lg max-w-2xl mx-auto">Detailed approaches to scaling your workforce with precision and speed.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                        {/* Left Side - Service Menu */}
                        <div className="lg:col-span-4 space-y-3">
                            {services.map((service, index) => (
                                <button
                                    key={service.id}
                                    onClick={() => setActiveService(index)}
                                    className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 group ${activeService === index
                                        ? 'bg-white border-accent shadow-xl shadow-accent/10'
                                        : 'bg-white/50 border-border hover:border-accent/50 hover:bg-white'
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        {/* Icon */}
                                        <div className={`text-4xl transition-transform duration-300 ${activeService === index ? 'scale-110' : 'group-hover:scale-110'
                                            }`}>
                                            {service.icon}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h3 className={`font-display font-bold text-lg mb-1 transition-colors ${activeService === index ? 'text-accent' : 'text-primary group-hover:text-accent'
                                                }`}>
                                                {service.title}
                                            </h3>
                                            <div className={`h-0.5 rounded-full transition-all duration-300 ${activeService === index ? 'w-full bg-accent' : 'w-0 bg-accent group-hover:w-12'
                                                }`} />
                                        </div>

                                        {/* Arrow indicator */}
                                        <svg
                                            className={`w-6 h-6 transition-all duration-300 ${activeService === index ? 'text-accent translate-x-1' : 'text-border group-hover:text-accent group-hover:translate-x-1'
                                                }`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Right Side - Dynamic Content Display */}
                        <div className="lg:col-span-8">
                            <div className="relative bg-white rounded-3xl border-2 border-border overflow-hidden shadow-2xl h-full min-h-[500px]">
                                {/* Image Section */}
                                <div className="relative h-64 lg:h-80 overflow-hidden">
                                    <img
                                        key={activeService} // Key ensures re-render animation
                                        src={services[activeService].image}
                                        alt={services[activeService].title}
                                        className="w-full h-full object-cover animate-[fadeIn_0.5s_ease-in-out]"
                                    />
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                                    {/* Title overlay */}
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-5xl">{services[activeService].icon}</span>
                                            <h3 className="font-display text-3xl font-black text-white">
                                                {services[activeService].title}
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-8 lg:p-10">
                                    <p className="text-secondary text-lg leading-relaxed mb-8">
                                        {services[activeService].description}
                                    </p>

                                    {/* Features List */}
                                    <div>
                                        <h4 className="font-display font-bold text-primary mb-4 flex items-center gap-2">
                                            <span className="w-1 h-6 bg-accent rounded-full" />
                                            Key Features
                                        </h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {services[activeService].features.map((feature, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-accent/5 transition-colors"
                                                    style={{ animationDelay: `${idx * 100}ms` }}
                                                >
                                                    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="text-sm font-medium text-primary">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
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

            {/* Process: Horizontal Timeline Flow */}
            <section className="py-24 bg-white relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />

                <div className="container-custom relative z-10">
                    <h2 className="font-display text-[32px] md:text-[40px] font-black text-primary mb-4 text-center">How <span className="text-accent">We</span> Match</h2>
                    <p className="text-secondary text-center mb-16 max-w-2xl mx-auto">Our proven process ensures you get the perfect talent fit in record time</p>

                    {/* Desktop Timeline */}
                    <div className="hidden md:block relative">
                        {/* Connecting Line */}
                        <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/20 via-accent/50 to-accent/20"
                            style={{ left: 'calc(12.5% + 40px)', right: 'calc(12.5% + 40px)' }} />

                        <div className="grid grid-cols-4 gap-8">
                            {[
                                { step: "01", title: "Profile", desc: "We analyze your tech stack and culture needs.", icon: "📋" },
                                { step: "02", title: "Vet", desc: "Our AI + Human process filters the top 1%.", icon: "🔍" },
                                { step: "03", title: "Match", desc: "You interview pre-selected, qualified candidates.", icon: "🤝" },
                                { step: "04", title: "Deploy", desc: "Instant onboarding with our HR & legal framework.", icon: "🚀" }
                            ].map((item, i) => (
                                <div key={i} className="relative group">
                                    {/* Arrow between steps */}
                                    {i < 3 && (
                                        <div className="hidden md:block absolute top-16 -right-8 z-20 transform translate-x-1/2">
                                            <svg width="32" height="32" viewBox="0 0 24 24" className="text-accent/60 group-hover:text-accent transition-colors">
                                                <path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                                            </svg>
                                        </div>
                                    )}

                                    {/* Step Card */}
                                    <div className="relative bg-white rounded-2xl border-2 border-border hover:border-accent transition-all duration-300 p-6 group-hover:shadow-xl group-hover:-translate-y-1">
                                        {/* Step Number Badge */}
                                        <div className="absolute -top-4 left-6 w-16 h-16 bg-gradient-to-br from-primary to-primary/80 group-hover:from-accent group-hover:to-accent/80 text-white rounded-2xl flex items-center justify-center font-display font-black text-xl shadow-lg transition-all duration-300 group-hover:scale-110">
                                            {item.step}
                                        </div>

                                        {/* Icon/Emoji */}
                                        <div className="text-4xl mb-6 mt-8 text-center group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </div>

                                        {/* Content */}
                                        <h3 className="font-display font-bold text-xl text-primary mb-3 text-center group-hover:text-accent transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-secondary leading-relaxed text-center">
                                            {item.desc}
                                        </p>

                                        {/* Progress indicator */}
                                        <div className="mt-6 h-1 w-0 bg-gradient-to-r from-accent to-accent/50 group-hover:w-full transition-all duration-500 rounded-full mx-auto" />
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
                            { step: "01", title: "Profile", desc: "We analyze your tech stack and culture needs.", icon: "📋" },
                            { step: "02", title: "Vet", desc: "Our AI + Human process filters the top 1%.", icon: "🔍" },
                            { step: "03", title: "Match", desc: "You interview pre-selected, qualified candidates.", icon: "🤝" },
                            { step: "04", title: "Deploy", desc: "Instant onboarding with our HR & legal framework.", icon: "🚀" }
                        ].map((item, i) => (
                            <div key={i} className="relative pl-20">
                                {/* Step Number Badge */}
                                <div className="absolute left-0 w-16 h-16 bg-gradient-to-br from-primary to-primary/80 text-white rounded-2xl flex items-center justify-center font-display font-black text-xl shadow-lg z-10">
                                    {item.step}
                                </div>

                                {/* Card */}
                                <div className="bg-white rounded-2xl border-2 border-border p-6 hover:border-accent hover:shadow-xl transition-all">
                                    <div className="text-3xl mb-4">{item.icon}</div>
                                    <h3 className="font-display font-bold text-lg text-primary mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-secondary leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
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
