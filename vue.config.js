const { defineConfig } = require("@vue/cli-service");
const automapperTransformerPlugin =
  require("@automapper/classes/transformer-plugin").default;

console.log(automapperTransformerPlugin);
const pluginOptions = {
  modelFileNameSuffix: [".model.ts", ".vm.ts"],
};

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.module
      .rule("ts")
      .use("ts-loader")
      .loader("ts-loader")
      .tap((options) => {
        options.getCustomTransformers = (program) => ({
          before: [automapperTransformerPlugin(program, pluginOptions).before],
        });
        return options;
      });
  },
});
