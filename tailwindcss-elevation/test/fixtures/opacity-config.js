module.exports = {
  content: ["../*.{html,js}"],
  plugins: [require("../../index")([], { opacityBoost: "0.1" })],
};
