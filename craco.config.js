const CracoAntDesignPlugin = require('craco-antd');
const { getThemeVariables } = require('antd/dist/theme');

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          ...getThemeVariables({ dark: true }),
          'body-background': '#222222',
          'primary-color': '#883b75',
          'error-color': '#ff3b21',
          'typography-title-margin-bottom': '1em',
          'form-item-margin-bottom': '28px'
        }
      }
    }
  ]
};
