import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

const PrivacyPolicy = () => {
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
                            Privacy Policy
                        </h1>
                        <p className="text-secondary mb-8">Last updated: January 28, 2026</p>

                        <div className="prose prose-lg max-w-none text-secondary">
                            <h2 className="font-display text-xl font-bold text-primary mt-8 mb-3">1. Information We Collect</h2>
                            <p className="mb-5 leading-relaxed text-sm">
                                We collect information you provide directly to us, such as when you create an account,
                                fill out a form, make a purchase, or communicate with us. This information may include
                                your name, email address, phone number, company name, and any other information you choose to provide.
                            </p>

                            <h2 className="font-display text-xl font-bold text-primary mt-8 mb-3">2. How We Use Your Information</h2>
                            <p className="mb-5 leading-relaxed text-sm">
                                We use the information we collect to provide, maintain, and improve our services,
                                process transactions, send you technical notices and support messages, respond to your
                                comments and questions, and communicate with you about products, services, and events.
                            </p>

                            <h2 className="font-display text-xl font-bold text-primary mt-8 mb-3">3. Information Sharing</h2>
                            <p className="mb-5 leading-relaxed text-sm">
                                We do not sell, trade, or otherwise transfer your personal information to outside parties
                                except to trusted third parties who assist us in operating our website, conducting our business,
                                or servicing you, so long as those parties agree to keep this information confidential.
                            </p>

                            <h2 className="font-display text-xl font-bold text-primary mt-8 mb-3">4. Data Security</h2>
                            <p className="mb-5 leading-relaxed text-sm">
                                We implement appropriate technical and organizational security measures to protect your
                                personal information against unauthorized access, alteration, disclosure, or destruction.
                            </p>

                            <h2 className="font-display text-xl font-bold text-primary mt-8 mb-3">5. Your Rights</h2>
                            <p className="mb-5 leading-relaxed text-sm">
                                You have the right to access, update, or delete your personal information at any time.
                                You may also opt out of receiving promotional communications from us by following the
                                instructions in those messages.
                            </p>

                            <h2 className="font-display text-xl font-bold text-primary mt-8 mb-3">6. Cookies</h2>
                            <p className="mb-5 leading-relaxed text-sm">
                                We use cookies and similar tracking technologies to track activity on our website and
                                hold certain information. You can instruct your browser to refuse all cookies or to
                                indicate when a cookie is being sent.
                            </p>

                            <h2 className="font-display text-xl font-bold text-primary mt-8 mb-3">7. Contact Us</h2>
                            <p className="mb-5 leading-relaxed text-sm">
                                If you have any questions about this Privacy Policy, please contact us at{' '}
                                <a href="mailto:privacy@brinqo.com" className="text-accent hover:underline">privacy@brinqo.com</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
