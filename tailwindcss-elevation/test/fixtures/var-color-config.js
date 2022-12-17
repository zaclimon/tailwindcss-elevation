module.exports = {
  content: ["../*.{html,js}"],
  plugins: [require("../../index")([], { color: "var(--color)" })],
};
