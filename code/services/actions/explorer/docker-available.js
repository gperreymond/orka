const { exec } = require('child_process')

const handler = async function (ctx) {
  try {
    this.logger.info(ctx.action.name, ctx.params)
    return new Promise((resolve) => {
      exec('docker version', (err) => {
        if (err) {
          this.logger.error(ctx.action.name, err.message)
          resolve({ success: false, error: err.message })
        } else {
          resolve({ success: true })
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
