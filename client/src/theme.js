export const tokensDark = {
black: {
    100: "#cfcfd1",
    200: "#9f9fa2",
    300: "#6f6e74",
    400: "#3f3e45",
    500: "#0f0e17",
    600: "#0c0b12",
    700: "#09080e",
    800: "#060609",
    900: "#030305",
},

primary: {
    //orange color
    100: "#ffe7cd",
    200: "#ffd09b",
    300: "#ffb86a",
    400: "#ffa138",
    500: "#ff8906",
    600: "#cc6e05",
    700: "#995204",
    800: "#663702",
    900: "#331b01",
},

secondary: {
    //pink
    100: "#fad6e2",
    200: "#f5adc6",
    300: "#ef83a9",
    400: "#ea5a8d",
    500: "#e53170",
    600: "#b7275a",
    700: "#891d43",
    800: "#5c142d",
    900: "#2e0a16",
},
};
// function that reverses the color palette
function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[100],
              light: tokensDark.primary[400],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[300],
            },
            neutral: {
              ...tokensDark.black,
              main: tokensDark.black[500],
            },
            background: {
              default: tokensDark.primary[600],
              alt: tokensDark.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              ...tokensLight.primary,
              main: tokensDark.black[200],
              light: tokensDark.black[300],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensDark.secondary[600],
              light: tokensDark.secondary[700],
            },
            neutral: {
              ...tokensLight.black,
              main: tokensDark.black[500],
            },
            background: {
              default: tokensDark.black[0],
              alt: tokensDark.black[100],
            },
          }),
    },
    typography: {
      fontFamily: ["Familjen Grotesk", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Familjen Grotesk", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Familjen Grotesk", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Familjen Grotesk", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Familjen Grotesk", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Familjen Grotesk", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Familjen Grotesk", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};