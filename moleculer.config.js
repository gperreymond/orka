const { nodename, metadata, moleculer: { transporter, metrics }, namespace } = require('./application.config')

module.exports = {
  nodeID: nodename,
  namespace,
  metadata,
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
