/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                // Brand specific
                success: "#10b981",
                warning: "#f59e0b",
                info: "#3b82f6",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
                xl: "calc(var(--radius) + 4px)",
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
                display: ["Space Grotesk", "system-ui", "sans-serif"],
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0", opacity: "0", filter: "blur(4px)" },
                    to: { height: "var(--radix-accordion-content-height)", opacity: "1", filter: "blur(0)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)", opacity: "1", filter: "blur(0)" },
                    to: { height: "0", opacity: "0", filter: "blur(4px)" },
                },
                "fade-in": {
                    from: { opacity: "0" },
                    to: { opacity: "1" },
                },
                "slide-up": {
                    from: { transform: "translateY(15px)" },
                    to: { transform: "translateY(0)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-8px)" },
                },
                shimmer: {
                    from: { backgroundPosition: "200% 0" },
                    to: { backgroundPosition: "-200% 0" },
                },
                pulse: {
                   "0%, 100%": { opacity: "1" },
                   "50%": { opacity: "0.5" },
                }
            },
            animation: {
                "accordion-down": "accordion-down 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                "accordion-up": "accordion-up 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                in: "fade-in 0.6s ease-out, slide-up 0.6s ease-out",
                float: "float 4s ease-in-out infinite",
                shimmer: "shimmer 2.5s infinite linear",
                "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            },
            boxShadow: {
                glow: "0 0 20px -5px hsl(var(--primary) / 0.3)",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
}
