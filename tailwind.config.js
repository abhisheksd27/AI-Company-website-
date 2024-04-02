// tailwind.config.js

module.exports = {
  content: ["./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [],
  variants: {
    extend: {
      boxShadow: ['hover'],
    },
  },
  corePlugins: {
    // Disable the default boxShadow utility to prevent conflicts with the custom one
    boxShadow: false,
  },
  // Define a custom boxShadow utility
  theme: {
    extend: {
      boxShadow: {
        white: '0 4px 6px rgba(255, 255, 255, 0.1)',
      },
    },
  },
};
