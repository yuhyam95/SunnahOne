import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import { scale } from 'react-native-size-matters'

export const COLORS = {
    primary: "#006B3E", // dark-green
    secondary: "#A8CF45",   // lemon
    teal: "#008080", //teal
    tealgreen: "#167D7F", //teal-green
    yellow: "#EAF214",
    text: "#f2f2f2",
    white: "#fff",
    black: "#000000",
    green: "#37E39F",
    red: "#F9A8BA",
    gray: "#6A6A6A",
    lightGray: "#dbdbdb",
    lightGray1: "#f5f6fa"
};
export const SIZES = {
    // global sizes
    base: scale(8),
    font: scale(14),
    radius: scale(12),
    padding: scale(24),

    // font sizes
    h1: scale(38),
    h2: scale(21),
    h3: scale(16),
    h4: scale(14),
    body1: scale(30),
    body2: scale(22),
    body3: scale(16),
    body4: scale(14),
    body5: scale(12),
    body6: scale(10),

    // app dimensions
    width,
    height
};
export const FONTS = {
    h1: { fontFamily: "Segoe-UI-Bold", fontSize: SIZES.h1, lineHeight: scale(38), fontWeight: "bold" },
    h2: { fontFamily: "Segoe-UI-Bold", fontSize: SIZES.h2, lineHeight: scale(26), fontWeight: "bold" },
    h3: { fontFamily: "Segoe-UI-Bold", fontSize: SIZES.h3, lineHeight: scale(22), fontWeight: "bold" },
    h4: { fontFamily: "Segoe-UI-Bold", fontSize: SIZES.h4, lineHeight: scale(22), fontWeight: "bold" },
    body1: { fontFamily: "Segoe-UI", fontSize: SIZES.body1, lineHeight: scale(36), fontWeight: "" },
    body2: { fontFamily: "Segoe-UI", fontSize: SIZES.body2, lineHeight: scale(30) },
    body3: { fontFamily: "Segoe-UI", fontSize: SIZES.body3, lineHeight: scale(22) },
    body4: { fontFamily: "Segoe-UI", fontSize: SIZES.body4, lineHeight: scale(22) },
    body5: { fontFamily: "Segoe-UI", fontSize: SIZES.body5, lineHeight: scale(22) },
    body6: { fontFamily: "Segoe-UI", fontSize: SIZES.body6, lineHeight: scale(22) },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
