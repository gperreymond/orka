const { moleculer: { transporter, metrics } } = require('./application.config')

module.exports = {
  logger: true,
  transporter,
  metrics: {
    enabled: metrics.enabled,
    reporter: [{
      type: 'Prometheus',
      options: {
        port: metrics.port,
        path: '/metrics',
        defaultLabels: registry => ({
          namespace: registry.broker.namespace,
          nodeID: registry.broker.nodeID
        })
      }
    }]
  },
  async started (broker) {
  }
}
