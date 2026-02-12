import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import SplashCursor from '../components/SplashCursor';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    ArrowRight,
    Layers,
    PenTool,
    GitMerge,
    Zap,
    Target,
    TrendingUp,
    ChevronRight,
    Shield,
    Users,
    Rocket,
    Award,
    Clock,
    Heart,
    CheckCircle2,
    Sparkles
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

const scaleOnHover = {
    hover: { scale: 1.02, transition: { duration: 0.3 } }
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

/* --- Why Brinqo Data --- */
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
        description: "We stay ahead of the curve, leveraging cutting-edge technologies like AI, Web3, and advanced analytics."
    },
    {
        icon: Award,
        title: "Quality Obsessed",
        description: "We don't ship until it's perfect. Our rigorous QA processes ensure every pixel, every line of code meets our standards."
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

const Home = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

    return (
        <Layout>
            <div ref={targetRef} className="relative bg-zinc-50 dark:bg-zinc-950 text-foreground overflow-hidden selection:bg-accent selection:text-white">

                {/* 1. HERO SECTION & SERVICES MERGED */}
                <section className="relative min-h-screen pt-20 lg:pt-24 pb-10 flex items-start justify-center overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute inset-0 z-0">
                        <SplashCursor
                            SIM_RESOLUTION={128}
                            DYE_RESOLUTION={1440}
                            DENSITY_DISSIPATION={3.0}
                            VELOCITY_DISSIPATION={1.0}
                            PRESSURE={0.5}
                            CURL={10}
                            SPLAT_RADIUS={0.3}
                            SPLAT_FORCE={6000}
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/5 pointer-events-none" />
                    </div>

                    <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center h-full">
                        {/* LEFT: Typography */}
                        <motion.div
                            className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left z-20 pt-10 lg:pt-0"
                            style={{ opacity, scale }}
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                        >


                            <motion.h1 variants={fadeInUp} className="font-display text-[2.75rem] sm:text-[4rem] md:text-[5rem] lg:text-[5.5rem] font-black leading-[0.95] lg:leading-[0.9] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-500 mb-6">
                                BRING YOUR <br />
                                IDEAS TO <br /><span className="text-stroke-accent text-accent">LIFE</span>.
                            </motion.h1>

                            <motion.p variants={fadeInUp} className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-light max-w-lg mx-auto lg:mx-0 leading-relaxed mb-8">
                                Build, brand, and bridge your vision with enterprise-grade precision. We turn abstract concepts into market-dominating realities.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto">
                                <Link to="/contact" className="group relative px-6 py-3.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold text-base rounded-full overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 w-full sm:w-auto flex justify-center">
                                    <div className="absolute inset-0 w-0 bg-accent transition-all duration-[250ms] ease-out group-hover:w-full opacity-100" />
                                    <span className="relative flex items-center gap-2">
                                        Get Started <ArrowRight className="w-4 h-4" />
                                    </span>
                                </Link>
                                <Link to="/about" className="group px-6 py-3.5 bg-transparent border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white font-bold text-base rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
                                    Case Studies <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Cards */}
                        <motion.div
                            className="lg:col-span-7 h-full w-full flex items-center"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-auto lg:h-[500px]">
                                {/* Card 1: BUILD (Tall Card) */}
                                <div className="md:row-span-2 relative group overflow-hidden rounded-[2rem] bg-gray-300 min-h-[300px] md:min-h-auto">
                                    <Link to="/build" className="absolute inset-0 z-20 hidden md:block" aria-label="Go to Build" />
                                    <img src="/assets/code.webp" alt="Build" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>

                                    <div className="relative h-full p-8 flex flex-col justify-end z-10 text-zinc-900 group-hover:text-white transition-colors">
                                        <div className="bg-white p-3 rounded-xl w-fit mb-auto shadow-lg group-hover:bg-accent group-hover:text-white transition-colors">
                                            <Layers className="w-6 h-6 text-zinc-900 group-hover:text-white" />
                                        </div>
                                        <div className="mt-8 md:mt-0">
                                            <h3 className="font-display text-3xl font-bold mb-2 text-zinc-900"><span className="text-stroke-accent text-accent">BUILD</span></h3>
                                            <p className="text-sm opacity-80 leading-relaxed text-zinc-900">
                                                Websites, apps, & AI agents designed for scale.
                                            </p>
                                        </div>
                                        <div className="absolute bottom-8 right-8 z-30">
                                            {/* Mobile Button */}
                                            <Link to="/build" className="md:hidden flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-bold hover:bg-white/30 transition-colors">
                                                Explore <ArrowRight className="w-4 h-4" />
                                            </Link>
                                            {/* Desktop Arrow */}
                                            <ArrowRight className="hidden md:block w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                        </div>
                                    </div>
                                </div>

                                {/* Card 2: BRAND */}
                                <div className="relative group overflow-hidden rounded-[2rem] bg-rose-500 p-8 flex flex-col justify-between min-h-[240px]">
                                    <Link to="/brand" className="absolute inset-0 z-20 hidden md:block" aria-label="Go to Brand" />
                                    <img src="/assets/brand.png" alt="Brand" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>

                                    <div className="relative z-10 flex flex-col justify-between h-full gap-8">
                                        <div className="flex justify-between items-start">
                                            <div className="bg-white p-3 rounded-xl w-fit shadow-md group-hover:bg-accent group-hover:text-white transition-colors">
                                                <Zap className="w-6 h-6 text-rose-600 group-hover:text-white" />
                                            </div>
                                            {/* Mobile Button */}
                                            <Link to="/brand" className="md:hidden flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-md rounded-full text-white z-30 hover:bg-white/30 transition-colors">
                                                <ArrowRight className="w-5 h-5" />
                                            </Link>
                                        </div>
                                        <div>
                                            <h3 className="font-display text-2xl font-bold mb-1 text-white group-hover:text-white transition-colors">BRAND</h3>
                                            <p className="text-white/90 text-xs group-hover:text-white/80 transition-colors">Marketing, identity, positioning, and growth</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 3: BRIDGE */}
                                <div className="relative group overflow-hidden rounded-[2rem] bg-zinc-900 text-white p-8 flex flex-col justify-between min-h-[240px]">
                                    <Link to="/bridge" className="absolute inset-0 z-20 hidden md:block" aria-label="Go to Bridge" />
                                    <img src="/assets/bridge.webp" alt="Bridge" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>

                                    <div className="relative z-10 flex flex-col justify-between h-full gap-8">
                                        <div className="flex justify-between items-start">
                                            <div className="bg-white/10 p-3 rounded-xl w-fit backdrop-blur-md group-hover:bg-accent group-hover:text-white transition-colors">
                                                <GitMerge className="w-6 h-6 text-white" />
                                            </div>
                                            {/* Mobile Button */}
                                            <Link to="/bridge" className="md:hidden flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-md rounded-full text-white z-30 hover:bg-white/30 transition-colors">
                                                <ArrowRight className="w-5 h-5" />
                                            </Link>
                                        </div>
                                        <div>
                                            <h3 className="font-display text-2xl font-bold mb-1 group-hover:text-white transition-colors">BRIDGE</h3>
                                            <p className="text-white/60 text-xs group-hover:text-white/80 transition-colors">Talent,training & Delivery.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </section>
                {/* 3. WHY BRINQO - ADVANTAGES SECTION */}
                <section className="py-16 lg:py-32 relative overflow-hidden bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl opacity-50 sm:opacity-100" />
                        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl opacity-50 sm:opacity-100" />
                        {/* Grid Pattern */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
                    </div>

                    <div className="container-custom">
                        <motion.div
                            className="text-center mb-12 lg:mb-20"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                        >
                            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6 lg:mb-8">
                                <Sparkles className="w-4 h-4 text-accent" />
                                <span className="text-sm font-medium text-accent">Why Choose Us</span>
                            </motion.div>

                            <motion.h2
                                variants={fadeInUp}
                                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
                            >
                                The Brinqo <span className="text-accent">Advantage</span>
                            </motion.h2>
                            <motion.p
                                variants={fadeInUp}
                                className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto px-4 sm:px-0"
                            >
                                Here's what sets us apart from the rest and why leading brands trust us with their digital transformation.
                            </motion.p>
                        </motion.div>

                        {/* Split Layout - Stats + Features */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                            {/* Left Side - Animated Stats */}
                            <motion.div
                                className="relative"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={staggerContainer}
                            >
                                <div className="grid grid-cols-2 gap-6">
                                    {reasons.map((reason, index) => (
                                        <motion.div
                                            key={index}
                                            variants={fadeInUp}
                                            className="group relative bg-white dark:bg-zinc-800/50 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-700/50 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                        >
                                            {/* Stat Number */}
                                            <div className="mb-3">
                                                <div className="font-display text-4xl lg:text-5xl font-black text-accent leading-none mb-1">
                                                    {reason.stat}
                                                </div>
                                                <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                                                    {reason.statLabel}
                                                </div>
                                            </div>

                                            {/* Icon */}
                                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                                                <reason.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                                            </div>

                                            {/* Decorative corner */}
                                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-accent/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Decorative Element */}
                                <div className="hidden lg:block absolute -bottom-8 -right-8 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
                            </motion.div>

                            {/* Right Side - Feature List */}
                            <motion.div
                                className="space-y-6"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={staggerContainer}
                            >
                                {reasons.map((reason, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        className="group flex gap-4 items-start"
                                    >
                                        {/* Number Badge */}
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 group-hover:bg-accent flex items-center justify-center transition-all duration-300">
                                            <span className="font-display font-bold text-accent group-hover:text-white transition-colors">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h3 className="font-display text-xl font-bold mb-2 text-zinc-900 dark:text-white group-hover:text-accent transition-colors">
                                                {reason.title}
                                            </h3>
                                            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                                                {reason.description}
                                            </p>

                                            {/* Progress line */}
                                            <div className="mt-3 h-0.5 w-0 bg-gradient-to-r from-accent to-accent/50 group-hover:w-full transition-all duration-500" />
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 4. DIFFERENTIATORS SECTION */}
                <section className="py-16 lg:py-32 bg-zinc-900 dark:bg-zinc-900">
                    <div className="container-custom">
                        <motion.div
                            className="text-center mb-12 lg:mb-16"
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
                                className="text-zinc-400 max-w-2xl mx-auto px-4"
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
                {/* 7. FINAL CTA SECTION */}
                <section className="py-16 lg:py-32">
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
                                className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10 px-4"
                            >
                                Join the brands that have already discovered the Brinqo difference. Let's create something extraordinary together.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto px-6 sm:px-0">
                                <Link
                                    to="/contact"
                                    className="group relative px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold text-base rounded-full overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 w-full sm:w-auto flex justify-center"
                                >
                                    <div className="absolute inset-0 w-0 bg-accent transition-all duration-[250ms] ease-out group-hover:w-full" />
                                    <span className="relative flex items-center justify-center gap-2">
                                        Get Started Today <ArrowRight className="w-5 h-5" />
                                    </span>
                                </Link>
                                <Link
                                    to="/about"
                                    className="px-8 py-4 bg-transparent border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white font-bold text-base rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all w-full sm:w-auto flex justify-center"
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

export default Home;
