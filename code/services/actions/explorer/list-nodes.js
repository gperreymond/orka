const handler = async function (ctx) {
  try {
    this.logger.info(ctx.action.name, ctx.params)

    const services = ctx.broker.registry.getServiceList({
      withActions: true,
      onlyAvailable: true,
      skipInternal: true
    })

    // group by nodeID
    const grouped = {}
    services.forEach(svc => {
      if (!grouped[svc.nodeID]) {
        grouped[svc.nodeID] = []
      }
      grouped[svc.nodeID].push({
        name: svc.name,
        actions: Object.keys(svc.actions || {})
      })
    })

    // transformer en array
    const result = Object.entries(grouped).map(([nodeID, services]) => ({
      nodeID,
      services
    }))

    return { success: true, result }
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
