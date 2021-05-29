import "antd/dist/antd.css";
import "../src/styles/alignmentUtilities.scss";
import "../src/styles/spacingUtilities.scss";
import "../src/styles/textUtilities.scss";
import "../src/styles/general.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
