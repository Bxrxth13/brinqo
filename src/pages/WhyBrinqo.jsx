import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Zap,
    Shield,
    Users,
    Target,
    Rocket,
    Award,
    Clock,
    CheckCircle2,
    Sparkles,
    TrendingUp,
    Heart
} from 'lucide-react';

/* --- Animation Variants --- */
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const reasons = [
    {
        icon: Zap,
        title: "Lightning Fast Delivery",
        description: "We don't just promise speed—we deliver it. Our agile methodology ensures your projects launch on time, every time.",
        stat: "2x",
        statLabel: "Faster than industry average"
    },
    {
        icon: Shield,
        title: "Enterprise-Grade Security",
        description: "Your data and intellectual property are protected with bank-level security protocols and best-in-class practices.",
        stat: "100%",
        statLabel: "Security compliance"
    },
    {
        icon: Users,
        title: "Dedicated Team",
        description: "You get a team that's fully invested in your success—not freelancers juggling multiple projects.",
        stat: "24/7",
        statLabel: "Support available"
    },
    {
        icon: Target,
        title: "Results-Driven Approach",
        description: "Every decision we make is backed by data and aimed at achieving your business objectives.",
        stat: "95%",
        statLabel: "Client satisfaction"
    }
];

const differentiators = [
    {
        icon: Rocket,
        title: "Innovation First",
        description: "We stay ahead of the curve, leveraging cutting-edge technologies like AI, Web3, and advanced analytics to give you a competitive edge."
    },
    {
        icon: Award,
        title: "Quality Obsessed",
        description: "We don't ship until it's perfect. Our rigorous QA processes ensure every pixel, every line of code, meets our exacting standards."
    },
    {
        icon: Clock,
        title: "Transparent Process",
        description: "Real-time updates, clear milestones, and open communication. You're never left wondering about your project status."
    },
    {
        icon: Heart,
        title: "Partnership Mindset",
        description: "We're not just vendors—we're partners invested in your long-term success. Your wins are our wins."
    }
];

const stats = [
    { value: "150+", label: "Projects Delivered" },
    { value: "50+", label: "Happy Clients" },
    { value: "12+", label: "Industries Served" },
    { value: "5+", label: "Years of Excellence" }
];

const WhyBrinqo = () => {
    return (
        <Layout>
            <div className="relative bg-zinc-50 dark:bg-zinc-950 text-foreground overflow-hidden selection:bg-accent selection:text-white">

                {/* 1. HERO SECTION */}
                <section className="relative min-h-[70vh] py-32 flex items-center justify-center overflow-hidden">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10" />
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
                        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
                    </div>

                    <div className="container-custom relative z-10">
                        <motion.div
                            className="text-center max-w-4xl mx-auto"
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                        >
                            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-8">
                                <Sparkles className="w-4 h-4 text-accent" />
                                <span className="text-sm font-medium text-accent">Why Choose Us</span>
                            </motion.div>

                            <motion.h1
                                variants={fadeInUp}
                                className="font-display text-[3rem] sm:text-[4rem] lg:text-[5rem] font-black leading-[0.95] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-500 mb-6"
                            >
                                WHY <span className="text-stroke-accent text-accent">BRINQO</span>?
                            </motion.h1>

                            <motion.p
                                variants={fadeInUp}
                                className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed mb-10"
                            >
                                Because your vision deserves more than average execution. We combine strategic thinking, technical excellence, and creative innovation to deliver results that exceed expectations.
                            </motion.p>

                            <motion.div variants={fadeInUp}>
                                <Link
                                    to="/contact"
                                    className="group relative inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold text-base rounded-full overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
                                >
                                    <div className="absolute inset-0 w-0 bg-accent transition-all duration-[250ms] ease-out group-hover:w-full" />
                                    <span className="relative flex items-center gap-2">
                                        Start Your Journey <ArrowRight className="w-5 h-5" />
                                    </span>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* 2. STATS SECTION */}
                <section className="py-16 bg-zinc-100 dark:bg-zinc-900/50">
                    <div className="container-custom">
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-4 gap-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    variants={scaleIn}
                                    className="text-center"
                                >
                                    <div className="font-display text-4xl sm:text-5xl font-black text-accent mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* 3. REASONS SECTION */}
                <section className="py-24 lg:py-32">
                    <div className="container-custom">
                        <motion.div
                            className="text-center mb-16"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                        >
                            <motion.h2
                                variants={fadeInUp}
                                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
                            >
                                The Brinqo <span className="text-accent">Advantage</span>
                            </motion.h2>
                            <motion.p
                                variants={fadeInUp}
                                className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
                            >
                                Here's what sets us apart from the rest and why leading brands trust us with their digital transformation.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                        >
                            {reasons.map((reason, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className="group relative overflow-hidden rounded-[2rem] bg-white dark:bg-zinc-900 p-8 border border-zinc-200 dark:border-zinc-800 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative z-10">
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="bg-accent/10 p-4 rounded-2xl group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                                <reason.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                                            </div>
                                            <div className="text-right">
                                                <div className="font-display text-3xl font-bold text-accent">{reason.stat}</div>
                                                <div className="text-xs text-zinc-500 dark:text-zinc-500">{reason.statLabel}</div>
                                            </div>
                                        </div>

                                        <h3 className="font-display text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                                            {reason.title}
                                        </h3>
                                        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                                            {reason.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* 4. DIFFERENTIATORS SECTION */}
                <section className="py-24 lg:py-32 bg-zinc-900 dark:bg-zinc-900">
                    <div className="container-custom">
                        <motion.div
                            className="text-center mb-16"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                        >
                            <motion.h2
                                variants={fadeInUp}
                                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
                            >
                                What Makes Us <span className="text-accent">Different</span>
                            </motion.h2>
                            <motion.p
                                variants={fadeInUp}
                                className="text-zinc-400 max-w-2xl mx-auto"
                            >
                                We don't just build products—we craft experiences that resonate with your audience and drive real business growth.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                        >
                            {differentiators.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className="group relative overflow-hidden rounded-2xl bg-zinc-800/50 p-6 border border-zinc-700/50 hover:border-accent/50 transition-all duration-500 hover:-translate-y-2"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative z-10">
                                        <div className="bg-accent/20 p-3 rounded-xl w-fit mb-5 group-hover:bg-accent transition-colors duration-300">
                                            <item.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                                        </div>

                                        <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-zinc-400 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* 5. PROMISE SECTION */}
                <section className="py-24 lg:py-32">
                    <div className="container-custom">
                        <motion.div
                            className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-accent to-accent/80 p-12 lg:p-16"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={scaleIn}
                        >
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-2xl" />
                            </div>

                            <div className="relative z-10 text-center max-w-3xl mx-auto">
                                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                                    Our Promise to You
                                </h2>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                                    {[
                                        "No hidden costs or surprises",
                                        "Clear communication always",
                                        "Results that speak for themselves"
                                    ].map((promise, index) => (
                                        <div key={index} className="flex items-center gap-2 justify-center text-white/90">
                                            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                                            <span className="text-sm font-medium">{promise}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    to="/contact"
                                    className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-accent font-bold text-base rounded-full hover:shadow-xl transition-all hover:-translate-y-1 hover:bg-zinc-100"
                                >
                                    Let's Talk <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 6. TESTIMONIAL / QUOTE SECTION */}
                <section className="py-24 lg:py-32 bg-zinc-100 dark:bg-zinc-900/50">
                    <div className="container-custom">
                        <motion.div
                            className="text-center max-w-4xl mx-auto"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-8">
                                <TrendingUp className="w-4 h-4 text-accent" />
                                <span className="text-sm font-medium text-accent">Client Success</span>
                            </div>

                            <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-8 text-zinc-900 dark:text-white">
                                "Brinqo didn't just build our product—they helped us <span className="text-accent">reimagine what was possible</span>. The team's dedication and expertise exceeded every expectation."
                            </blockquote>

                            <div className="flex items-center justify-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                                    <span className="font-bold text-accent">SK</span>
                                </div>
                                <div className="text-left">
                                    <div className="font-semibold text-zinc-900 dark:text-white">Sarah Kim</div>
                                    <div className="text-sm text-zinc-500 dark:text-zinc-400">CEO, TechVenture Inc.</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 7. CTA SECTION */}
                <section className="py-24 lg:py-32">
                    <div className="container-custom text-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                        >
                            <motion.h2
                                variants={fadeInUp}
                                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
                            >
                                Ready to <span className="text-accent">Transform</span> Your Vision?
                            </motion.h2>

                            <motion.p
                                variants={fadeInUp}
                                className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10"
                            >
                                Join the brands that have already discovered the Brinqo difference. Let's create something extraordinary together.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    to="/contact"
                                    className="group relative px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold text-base rounded-full overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
                                >
                                    <div className="absolute inset-0 w-0 bg-accent transition-all duration-[250ms] ease-out group-hover:w-full" />
                                    <span className="relative flex items-center justify-center gap-2">
                                        Get Started Today <ArrowRight className="w-5 h-5" />
                                    </span>
                                </Link>
                                <Link
                                    to="/about"
                                    className="px-8 py-4 bg-transparent border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white font-bold text-base rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all"
                                >
                                    Learn More About Us
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

            </div>
        </Layout>
    );
};

export default WhyBrinqo;
