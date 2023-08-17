module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#a00003',
      },
      backgroundImage: {
        site: "linear-gradient(90deg, hsla(212, 27%, 11%, 1) 0%, hsla(244, 12%, 23%, 1) 100%);",
        about: "url('./assets/about.png')",
        services: "url('./assets/services.png')",
      },
      backgroundSize: {
        contain: "contain",
        "350px": "350px",
      }
    },
  },
  plugins: [],
};
