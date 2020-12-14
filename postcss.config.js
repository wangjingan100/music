module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 100, // 根据元素字体大小
      propList: ['*']
      // propList: ['width','height']
    }
  }
}
