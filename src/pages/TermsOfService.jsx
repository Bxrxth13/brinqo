import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

const TermsOfService = () => {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate(-1); // Go back to previous page
    };

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                onClick={handleClose}
            ></div>

            {/* Modal Content */}
            <div className="relative min-h-screen flex items-center justify-center p-4 md:p-8">
                <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                    {/* Close Button */}
                    <button
                        onClick={handleClose}
                        className="absolute top-6 right-6 w-10 h-10 bg-slate-100 hover:bg-accent hover:text-white rounded-full flex items-center justify-center transition-all duration-300 z-10"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {/* Content */}
                    <div className="p-8 md:p-12 lg:p-16">
                        <h1 className="font-display text-[32px] md:text-[40px] font-black text-primary mb-4 tracking-[-1px] pr-12">
                            Terms of Service
                        </h1>
                        <p className="text-secondary mb-8">Last updated: January 28, 2026</p>

                        <div className="prose prose-lg max-w-none text-secondary">
                            <h2 className="font-display text-xl font-bold text-primary mt-8 mb-3">1. Acceptance of Terms</h2>
                            <p className="mb-5 leading-relaxed text-sm">
                                By accessing and using Brinqo's services, you accept and agree to be bound by the terms
                                and provisions of this agreement. If you do not agree to abide by these terms, please
                                do not use our services.
                            </p>

                            <h2 className="font-display text-xl font-bold text-primary mt-8 mb-3">2. Services Description</h2>
                            <p className="mb-5 leading-relaxed text-sm">
                                Brinqo provides digital product development, branding, and talent solutions. We reserve
                                the right to modify, suspend, or discontinue any aspect of our services at any time
                                without prior notice.
                            </p>

                            <h2 className="font-display text-xl font-bold text-primary mt-8 mb-3">3. User Responsibilities</h2>
                            <p className="mb-5 leading-relaxed text-sm">
                                You are responsible for maintaining the confidentiality of your account information and
                                for all activities that occur under your account. You agree to notify us immediately of
                                any unauthorized use of your account.
                            </p>

                            <h2 className="font-display text-xl font-bold text-primary mt-8 mb-3">4. Intellectual Property</h2>
                            <p className="mb-5 leading-relaxed text-sm">
                                All content, features, and functionality of our services are owned by Brinqo and are
                                protected by international copyright, trademark, patent, and other intellectual property laws.
                            </p>

                            <h2 className="font-display text-xl font-bold text-primary mt-8 mb-3">5. Payment Terms</h2>
                            <p className="mb-5 leading-relaxed text-sm">
                                Payment terms will be specified in individual service agreements. All fees are
                                non-refundable unless otherwise stated in writing. We reserve the right to change
                                our pricing at any time.
                            </p>

                            <h2 className="font-display text-xl font-bold text-primary mt-8 mb-3">6. Limitation of Liability</h2>
                            <p className="mb-5 leading-relaxed text-sm">
                                Brinqo shall not be liable for any indirect, incidental, special, consequential, or
                                punitive damages resulting from your use of our services. Our total liability shall
                                not exceed the amount paid by you for the services.
                            </p>

                            <h2 className="font-display text-xl font-bold text-primary mt-8 mb-3">7. Termination</h2>
                            <p className="mb-5 leading-relaxed text-sm">
                                We may terminate or suspend your access to our services immediately, without prior
                                notice or liability, for any reason whatsoever, including without limitation if you
                                breach these Terms.
                            </p>

                            <h2 className="font-display text-xl font-bold text-primary mt-8 mb-3">8. Governing Law</h2>
                            <p className="mb-5 leading-relaxed text-sm">
                                These Terms shall be governed by and construed in accordance with the laws of the
                                jurisdiction in which Brinqo operates, without regard to its conflict of law provisions.
                            </p>

                            <h2 className="font-display text-xl font-bold text-primary mt-8 mb-3">9. Contact Us</h2>
                            <p className="mb-5 leading-relaxed text-sm">
                                If you have any questions about these Terms, please contact us at{' '}
                                <a href="mailto:legal@brinqo.com" className="text-accent hover:underline">legal@brinqo.com</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
