module.exports = {
  content: ["../*.{html,js}"],
  plugins: [
    require("../../index")([], { color: "invalid", opacityBoost: "invalid" }),
  ],
};
