// https://segmentfault.com/a/1190000040873895
module.exports = {
  printWidth: 120, // 换行字符串阈值
  tabWidth: 2, // 设置工具每一个水平缩进的空格数
  useTabs: false,
  semi: false, // 句末是否加分号
  singleQuote: true, // 用单引号
  trailingComma: true, // 最后一个对象元素加逗号
  bracketSpacing: true, // 对象，数组加空格
  arrowParens: 'avoid', // (x) => {} 是否要有小括号
  htmlWhitespaceSensitivity: 'ignore', // vue template 中的结束标签结尾尖括号掉到了下一行
  vueIndentScriptAndStyle: false // .vue 文件，不缩进 <script> 和 <style> 里的内容
}
