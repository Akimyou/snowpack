module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: ['../../plugins/plugin-vue', '@snowpack/plugin-dotenv'],
};
