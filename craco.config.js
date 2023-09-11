// 添加对webpack的自定义配置
const path = require('path')

module.exports = {
  webpack: {
    // 配置路径别名
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
}
