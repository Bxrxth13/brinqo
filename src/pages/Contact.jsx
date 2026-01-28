import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import Layout from '../components/Layout';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for contacting us! We will get back to you shortly.');
    };

    return (
        <Layout>
            <section className="py-20 md:py-28 bg-white relative">
                <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
                    <img src="/assets/contact_hero_bg.png" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="container-custom text-center relative z-10">
                    <h1 className="font-display text-[48px] md:text-[64px] font-black leading-[1.1] text-primary mb-6 tracking-[-2px] animate-in fade-in slide-in-from-bottom-4 duration-700">
                        Let's Build Something <span className="text-accent">Great</span>
                    </h1>
                    <p className="text-[18px] leading-[1.7] text-secondary max-w-[600px] mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
                        Whether you need a new product, a brand refresh, or a dedicated team, we are here to help.
                        No commitment, just a conversation about your future.
                    </p>
                </div>
            </section>

            <section className="pb-20 md:pb-32">
                <div className="container-custom">
                    <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-border overflow-hidden grid grid-cols-1 lg:grid-cols-[1.5fr_1fr]">

                        {/* Left: Contact Form */}
                        <div className="p-8 md:p-12 lg:p-16">
                            <h2 className="font-display text-[28px] font-bold text-primary mb-6">Send us a message</h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-semibold text-primary">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            required
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none placeholder:text-slate-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-semibold text-primary">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@company.com"
                                            required
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none placeholder:text-slate-400"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="company" className="text-sm font-semibold text-primary">Company Name</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Your Company Ltd"
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none placeholder:text-slate-400"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="service" className="text-sm font-semibold text-primary">Service Interest</label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none text-primary"
                                    >
                                        <option value="">Select a Service</option>
                                        <option value="Build">Build (Engineering)</option>
                                        <option value="Brand">Brand (Strategy)</option>
                                        <option value="Bridge">Bridge (Talent)</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-primary">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        placeholder="Tell us about your project..."
                                        required
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none placeholder:text-slate-400 resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-accent hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 flex items-center justify-center gap-2 group"
                                >
                                    Send Message
                                    <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                                </button>
                            </form>
                        </div>

                        {/* Right: Contact Info (Dark Theme) */}
                        <div className="bg-[#1a1a1a] p-8 md:p-12 lg:p-16 text-white flex flex-col justify-between relative overflow-hidden">
                            {/* Decorative background circle */}
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>

                            <div>
                                <h3 className="font-display text-[28px] font-bold mb-6">Why Partner With Us?</h3>
                                <ul className="space-y-4 mb-10 text-white/80 text-sm">
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                        <span>Enterprise-grade quality for every project</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                        <span>Transparent communication & pricing</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                        <span>Full-cycle support: Build, Brand, Bridge</span>
                                    </li>
                                </ul>

                                <div className="h-px bg-white/10 mb-10"></div>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <span className="block text-sm text-white/50 mb-1">Email via</span>
                                            <a href="mailto:hello@brinqo.com" className="text-lg font-medium hover:text-accent transition-colors">hello@brinqo.com</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <span className="block text-sm text-white/50 mb-1">Call us at</span>
                                            <a href="tel:+1234567890" className="text-lg font-medium hover:text-accent transition-colors">+1 (980) 322-6955</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-accent shrink-0">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <span className="block text-sm text-white/50 mb-1">Headquarters</span>
                                            <span className="text-lg font-medium">Global · Remote First</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/10">
                                <div className="flex items-center gap-3 text-white/80">
                                    <Clock className="w-5 h-5 text-accent" />
                                    <span className="font-medium">We typically respond within 24 hours</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Contact;
