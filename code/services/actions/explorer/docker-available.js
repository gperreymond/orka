const { exec } = require('child_process')

const handler = async function (ctx) {
  try {
    this.logger.info(ctx.action.name, ctx.params)
    return new Promise((resolve) => {
      exec('docker version', (error) => {
        if (error) {
          this.logger.error('Error checking Docker status:', error)
          resolve({ success: true, result: false })
        } else {
          resolve({ success: true, result: true })
        }
      })
    })
  } catch (e) {
    /* istanbul ignore next */
    this.logger.error(ctx.action.name, e.message)
    /* istanbul ignore next */
    return { success: false, error: e.message }
  }
}

module.exports = {
  handler
}
