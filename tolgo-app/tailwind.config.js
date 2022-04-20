module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".1em",
      widest: ".25em",
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    textColor: {
      white: "#FFF",
      tolgo: "#1DA1F2",
      primary: "#3490dc",
      secondary: "#ffed4a",
      danger: "#e3342f",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      tolgo: "#1DA1F2",
      primary: "#3490dc",
      secondary: "#ffed4a",
      danger: "#e3342f",
    }),
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "3xl":
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.3)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      //  '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)",
      none: "none",
    },
  },
  borderColor: (theme) => ({
    ...theme("colors"),
    tolgo: "#1DA1F2",
    primary: "#3490dc",
    secondary: "#ffed4a",
    danger: "#e3342f",
  }),
  variants: {
    extend: {
      backgroundColor: ["checked", "active"],
      borderColor: ["hover"],
      borderRadius: ["focus", "hover"],
      padding: ['hover']
    },
  },
  plugins: [],
};
