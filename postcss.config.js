// autoprefixer配置兼容性:https://github.com/browserslist/browserslist#config-file
// postcss-cssnext包含autoprefixer插件，所以要添加warnForDuplicates属性，不然在打包时有警告
module.exports = {
  plugins: {
    'postcss-nested': {}, // 支持嵌套 cssnext的嵌套
    'postcss-cssnext': { // postcss的编译 编译cssnext，下一代css
      warnForDuplicates: false
    },
    'cssnano': {
      safe: true
    } // 压缩、去除写法不好的代码，浏览器支持更好的代码
  }
}
