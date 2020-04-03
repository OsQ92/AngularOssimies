//https://www.freecodecamp.org/news/how-to-create-themes-for-your-angular-7-apps-using-css-variables-69251690e9c5/
export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: "light",
  properties: {
    "--background-default": "#A0A0A0", //Whiteish
    "--background-fore": "#D0D0D0",
    "--background-highlight": "#80FF85",

    "--text-default": "#000000",
    "--text-secondary": "#606060",
    "--text-highlight": "#000000",

    "--footer-default": "#80FF85",
    "--footer-text": "#000000"
  }
};

export const dark: Theme = {
  name: "dark",
  properties: {
    "--background-default": "#070707",
    "--background-fore": "#303030",
    "--background-highlight": "#be6a2f",

    "--text-default": "#FFFFFF",
    "--text-secondary": "#E0E0E0",
    "--text-highlight": "#000000",

    "--footer-default": "#FFBF80",
    "--footer-text": "#000000"
  }
};
