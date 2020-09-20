const CracoAntDesignPlugin = require("craco-antd");
const { getThemeVariables } = require("antd/dist/theme");

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: { customizeTheme: getThemeVariables({ dark: true }) },
    },
  ],
};
