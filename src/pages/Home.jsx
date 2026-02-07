import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import SplashCursor from '../components/SplashCursor';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Layers, PenTool, GitMerge, Zap, Target, TrendingUp, ChevronRight } from 'lucide-react';

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
                <section className="relative min-h-screen py-32 lg:py-0 flex items-center justify-center overflow-hidden">
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
                            className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left z-20"
                            style={{ opacity, scale }}
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                        >


                            <motion.h1 variants={fadeInUp} className="font-display text-[3.5rem] sm:text-[5rem] lg:text-[5.5rem] font-black leading-[0.9] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-500 mb-6">
                                BRING YOUR <br />
                                IDEAS TO <br /><span className="text-stroke-accent text-accent">LIFE</span>.
                            </motion.h1>

                            <motion.p variants={fadeInUp} className="text-lg text-zinc-600 dark:text-zinc-400 font-light max-w-lg mx-auto lg:mx-0 leading-relaxed mb-8">
                                Build, brand, and bridge your vision with enterprise-grade precision. We turn abstract concepts into market-dominating realities.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link to="/contact" className="group relative px-6 py-3.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold text-base rounded-full overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                                    <div className="absolute inset-0 w-0 bg-accent transition-all duration-[250ms] ease-out group-hover:w-full opacity-100" />
                                    <span className="relative flex items-center gap-2">
                                        Get Started <ArrowRight className="w-4 h-4" />
                                    </span>
                                </Link>
                                <Link to="/about" className="group px-6 py-3.5 bg-transparent border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white font-bold text-base rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all flex items-center gap-2">
                                    Case Studies <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* RIGHT: Services Grid (Moved from below) */}
                        <motion.div
                            className="lg:col-span-7 h-full w-full flex items-center"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-auto lg:h-[500px]">
                                {/* Card 1: BUILD (Tall Card) */}
                                <Link to="/build" className="md:row-span-2 relative group overflow-hidden rounded-[2rem] bg-zinc-100 dark:bg-zinc-900 min-h-[300px]">
                                    <img src="/assets/code.webp" alt="Build" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>

                                    <div className="relative h-full p-8 flex flex-col justify-end z-10 text-zinc-900 dark:text-white group-hover:text-white transition-colors">
                                        <div className="bg-white dark:bg-zinc-800 p-3 rounded-xl w-fit mb-auto shadow-lg group-hover:bg-accent group-hover:text-white transition-colors">
                                            <Layers className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-display text-3xl font-bold mb-2"><span className="text-stroke-accent text-accent">BUILD</span></h3>
                                            <p className="text-sm opacity-80 leading-relaxed">
                                                Websites, apps, & AI agents designed for scale.
                                            </p>
                                        </div>
                                        <div className="absolute bottom-8 right-8">
                                            <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                        </div>
                                    </div>
                                </Link>

                                {/* Card 2: BRAND */}
                                <Link to="/brand" className="relative group overflow-hidden rounded-[2rem] bg-zinc-100 dark:bg-zinc-900 p-8 flex flex-col justify-between hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors min-h-[240px]">
                                    <img src="/assets/brand.png" alt="Brand" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>

                                    <div className="relative z-10 flex flex-col justify-between h-full">
                                        <div className="bg-white dark:bg-zinc-800 p-3 rounded-xl w-fit shadow-md group-hover:bg-accent group-hover:text-white transition-colors">
                                            <Zap className="w-6 h-6 text-accent group-hover:text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-display text-2xl font-bold mb-1 text-zinc-900 dark:text-white group-hover:text-white transition-colors">BRAND</h3>
                                            <p className="text-zinc-500 dark:text-zinc-400 text-xs group-hover:text-white/80 transition-colors">Identity & Positioning.</p>
                                        </div>
                                    </div>
                                </Link>

                                {/* Card 3: BRIDGE */}
                                <Link to="/bridge" className="relative group overflow-hidden rounded-[2rem] bg-zinc-900 text-white p-8 flex flex-col justify-between min-h-[240px]">
                                    <img src="/assets/bridge.jpg" alt="Bridge" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>

                                    <div className="relative z-10 flex flex-col justify-between h-full">
                                        <div className="bg-white/10 p-3 rounded-xl w-fit backdrop-blur-md group-hover:bg-accent group-hover:text-white transition-colors">
                                            <GitMerge className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-display text-2xl font-bold mb-1 group-hover:text-white transition-colors">BRIDGE</h3>
                                            <p className="text-white/60 text-xs group-hover:text-white/80 transition-colors">Talent & Delivery.</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                </section>
            </div>
        </Layout>
    );
};

export default Home;
