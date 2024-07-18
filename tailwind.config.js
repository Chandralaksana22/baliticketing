const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  plugins: [
    require('daisyui')
  ],
  theme: {
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};

module.exports = config;