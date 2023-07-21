module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "#333",
            a: {
              color: "#3182ce",
              "&:hover": {
                color: "#2c5282",
              },
            },
            h1: {
              color: "primary-red-500d",
              fontWeight: "font-medium",
            },
          },
        },
      },
      colors: {
        "primary-light-pink": "#FFE7F1",
        "primary-sea-green": "#73DD9B",
        "primary-light-blue": "#E0E5FF",
        "primary-pink": "#F096E3",
        "primary-green": "#73DD9B",
        "primary-magenta": "#73DD9B",
        "primary-black": "#1E1E1E",
      },
      boxShadow: {
        button: "2.5px 2.5px 0px 0px rgba(0,0,1);",
      },
      fontFamily: {
        degular: ["var(--font-degular)"],
      },
    },
  },
  plugins: [],
};
