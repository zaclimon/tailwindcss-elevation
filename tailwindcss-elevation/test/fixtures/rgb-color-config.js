module.exports = {
  content: ["../*.{html,js}"],
  plugins: [require("../../index")([], { color: "255,0,0" })],
};
