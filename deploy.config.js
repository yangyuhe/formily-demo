const path = require('path')
const { name: appName } = require('./package.json')
process.env.STAGING = process.env.CI_COMMIT_REF_NAME === 'staging' ? 'true' : 'false'
const staging = process.env.STAGING === 'true'
const {
  env: { DEPLOY_ENVIRONMENT = 'dev' },
} = process

const environment = (() => {
  const environment = {
    staging: 'staging',
    dev: 'staging',
    production: 'production',
    prod: 'production',
    preview: 'preview',
  }[DEPLOY_ENVIRONMENT]

  if (!environment) {
    throw new Error(`不能识别该环境变量： DEPLOY_ENVIRONMENT（${DEPLOY_ENVIRONMENT}）`)
  }

  return environment
})()

module.exports = {
  buildCommand: staging ? 'yarn build:dev' : 'yarn build', // 执行编译的命令
  buildOutput: path.resolve(__dirname, 'dist/react'), // 编译结果目录
  team: 'mcfe', // 团队，必须设置，最终会体现在 fds url 中,
  bucketName: appName,
  environment,
  staticResourcePattern: resourcePath => {
    // 需要放到 static 目录的资源，不满足此需求的一律放至 html 目录
    return !/\.(html|json)$/.test(resourcePath)
  },
}
