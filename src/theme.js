import { preventUserSelect } from "./theme-helpers";

const radii = [0, 3, 5, 8, 13, 21];
radii.round = "9999px";

const fontSizes = [12, 14, 16, 24, 32, 48, 64];
fontSizes.h1 = 40;
fontSizes.h2 = fontSizes[4];
fontSizes.h3 = fontSizes[3];
fontSizes.subheading = fontSizes[2];
fontSizes.paragraph = fontSizes[2];
fontSizes.subtitle = fontSizes[1];
fontSizes.caption = fontSizes[0];
fontSizes.buttonLarge = fontSizes[2];
fontSizes.buttonSmall = fontSizes[1];

const lineHeights = ["12px", "14px", "16px", "24px", "32px", "48px", "64px"];
lineHeights.h1 = `${fontSizes[5]}px`;
lineHeights.heading = `${fontSizes[5]}px`;
lineHeights.h2 = "40px";
lineHeights.h3 = `${fontSizes[4]}px`;
lineHeights.subheading = lineHeights[2];
lineHeights.paragraph = lineHeights[3];
lineHeights.subtitle = lineHeights[2];
lineHeights.caption = "10px";
lineHeights.iconCaption = "15px";
lineHeights.buttonLarge = "16px";
lineHeights.buttonSmall = "16px";

const gradients = {};

const _buttonVariantFragments = {
    all: {
        borderRadius: 3,
        cursor: "pointer",
        "&:focus": {
            outline: "none",
        },
        transition: "background-color 200ms ease-in-out, color 200ms ease-in-out",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
    },
    iconTextWhite: {},
    textLarge: {
        variant: "text.buttonLarge",
        p: 3,
    },
    textSmall: {
        variant: "text.buttonSmall",
        p: 2,
    },
    iconLarge: {
        variant: "text.buttonLarge",
        p: 2,
    },
    iconSmall: {
        variant: "text.buttonSmall",
        p: 1,
    },
    black: {
        color: "text",
        bg: "background00",
        "&:hover": {
            color: "textBright",
            bg: "background10",
        },
        "&:active": {
            bg: "background20",
        },
        "&:disabled": {
            bg: "background00",
            cursor: "not-allowed",
            color: "textDisabled",
        },
    },
    white: {
        color: "textDark",
        bg: "white00",
        "&:hover": {
            bg: "white10",
        },
        "&:active": {
            bg: "white00",
        },
        "&:disabled": {
            cursor: "not-allowed",
            color: "textDarkDisabled",
            background: "text",
        },
    },
};

const buttonVariants = {
    textLargeBlack: {
        ..._buttonVariantFragments.all,
        ..._buttonVariantFragments.textLarge,
        ..._buttonVariantFragments.black,
    },
    textLargeWhite: {
        ..._buttonVariantFragments.all,
        ..._buttonVariantFragments.textLarge,
        ..._buttonVariantFragments.white,
    },
    textSmallBlack: {
        ..._buttonVariantFragments.all,
        ..._buttonVariantFragments.textSmall,
        ..._buttonVariantFragments.black,
    },
    textSmallWhite: {
        ..._buttonVariantFragments.all,
        ..._buttonVariantFragments.textSmall,
        ..._buttonVariantFragments.white,
    },
    iconLargeBlack: {
        ..._buttonVariantFragments.all,
        ..._buttonVariantFragments.black,
        ..._buttonVariantFragments.iconLarge,
    },
    iconSmallBlack: {
        ..._buttonVariantFragments.all,
        ..._buttonVariantFragments.black,
        ..._buttonVariantFragments.iconSmall,
    },
    iconLargeWhite: {
        ..._buttonVariantFragments.all,
        ..._buttonVariantFragments.white,
        ..._buttonVariantFragments.iconLarge,
    },
    iconSmallWhite: {
        ..._buttonVariantFragments.all,
        ..._buttonVariantFragments.white,
        ..._buttonVariantFragments.iconSmall,
    },
    transparent: {
        ..._buttonVariantFragments.all,
        ..._buttonVariantFragments.transparent,
    },
};

const theme = {
    colors: {
        textBright: "#ffffff",
        text: "rgba(255,255,255,0.87)",
        textDimmed: "rgba(255, 255, 255, 0.8)",
        textMuted: "rgba(255, 255, 255, 0.6)",
        textDisabled: "rgba(255, 255, 255, 0.4)",
        background: "#000000",
        background00: "#000000",
        background10: "#191919",
        background20: "#262626",
        highlight: "#57f12c",
        primary: "#57f12c",
        red: "#E53444",
        green: "#43B581",
        success: "#43A047",
        warning: "#FB8C00",
        danger: "#E53935",
        black00: "#000000",
        black10: "#191919",
        black20: "#262626",
        white00: "#FFFFFF",
        white10: "#F5F5F5",
        white20: "#FFFFFF",
        muted: "#162332",
        borderDefault: "rgba(255,255,255,0.15)",
        borderDark: "rgba(0,0,0,0.15)",
        borderDefaultSolid: "#4c585e",
        modes: {
            light: {
                textBright: "#ffffff",
                text: "rgba(0,0,0,0.87)",
                textDimmed: "rgba(0, 0, 0, 0.8)",
                textMuted: "rgba(0, 0, 0, 0.6)",
                textDisabled: "rgba(0, 0, 0, 0.4)",
                background: "#fafafa",
                background00: "#fafafa",
                background10: "#e6e6e6",
                background20: "#d2d2d2",
            },
        },
    },
    // typography
    gradients,
    fonts: {
        body:
            'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        heading: "inherit",
        monospace: "Menlo, monospace",
    },
    fontSizes,
    lineHeights,
    fontWeights: {
        body: "500",
        normal: "500",
        heading: "700",
        semiBold: "600",
        bold: "700",
    },
    letterSpacings: {
        nudge: "0.35px",
    },
    // borders
    borderStyles: {
        none: "none",
        solid: "solid",
    },
    borderWidths: {
        none: 0,
        normal: "1px",
        thick: "2px",
    },
    radii,
    // shadows
    shadows: {
        normal: "0px 4px 16px rgba(0, 0, 0, 0.4)",
    },
    // space
    space: [0, 4, 8, 12, 16, 20, 24, 32, 48],
    // z index
    zIndices: {
        blockingModal: 100,
        progressBar: 99,
        mobileCTA: 11,
        avatarDropdown: 10,
        scoped40: 5,
        scoped30: 4,
        scoped20: 3,
        scoped10: 2,
        scoped00: 1,
        negative: -1,
    },
    // breakpoints
    breakpoints: ["480px", "768px", "1024px", "1280px"],
    // variants
    buttons: buttonVariants,
    styles: {
        hr: {
            color: "borderDefault",
            m: 0,
        },
        a: {
            color: "primary",
        },
    },
    forms: {
        label: {
            ...preventUserSelect,
            color: "white",
            "&:hover": {
                cursor: "pointer",
            },
        },
        checkbox: {
            color: "white",
            fill: "white",
            bg: "transparent",
            m: 0,
        },
        input: {
            "&:focus": {
                outline: "none",
            },
        },
    },
    text: {
        h1: {
            fontSize: "h1",
            lineHeight: "h1",
            fontWeight: "bold",
        },
        h2: {
            fontSize: "h2",
            lineHeight: "h2",
            fontWeight: "semiBold",
        },
        h3: {
            fontSize: "h3",
            lineHeight: "h3",
            fontWeight: "bold",
        },
        subheading: {
            fontSize: "paragraph",
            lineHeight: "paragraph",
            fontWeight: "bold",
            letterSpacing: "nudge",
        },
        paragraph: {
            fontSize: "paragraph",
            lineHeight: "paragraph",
            letterSpacing: "nudge",
        },
        subtitle: {
            fontSize: "subtitle",
            lineHeight: "subtitle",
            fontWeight: "semiBold",
            letterSpacing: "nudge",
        },
        caption: {
            fontSize: "caption",
            lineHeight: "caption",
            letterSpacing: "nudge",
        },
        iconCaption: {
            fontSize: "caption",
            lineHeight: "caption",
        },
        buttonLarge: {
            fontSize: "buttonLarge",
            lineHeight: "buttonLarge",
            fontWeight: "semiBold",
            letterSpacing: "nudge",
        },
        buttonSmall: {
            fontSize: "buttonSmall",
            lineHeight: "buttonSmall",
            fontWeight: "semiBold",
            letterSpacing: "nudge",
        },
    },
};

export default theme;
