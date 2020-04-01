import Typography from "typography"

const typography = new Typography({
  baseFontSize: "20",
  baseLineHeight: 1.666,
  scaleRatio: 4,
  googleFonts: [
    {
      name: "Ibarra Real Nova",
      styles: ["300", "400", "500"]
    },
    {
      name: "Work Sans",
      styles: ["200", "300", "400", "500"]
    }
  ],
  headerFontFamily: ["Ibarra Real Nova", "georgia", "serif"],
  headerWeight: "300",
  bodyFontFamily: ["Work Sans"],
  bodyWeight: "300"
})
export default typography
