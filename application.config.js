const nconf = require('nconf')
nconf.argv().env().file({ file: 'nconf.json' })

// ************************************
let APP_MOLECULER_METRICS_ENABLED = false
let APP_MOLECULER_METRICS_PORT = 5050
let APP_NATS_PORT = 4222
// ************************************
if (nconf.get('APP_MOLECULER_METRICS_ENABLED') && nconf.get('APP_MOLECULER_METRICS_ENABLED') === 'true') { APP_MOLECULER_METRICS_ENABLED = true }
if (nconf.get('APP_MOLECULER_METRICS_PORT')) { APP_MOLECULER_METRICS_PORT = parseInt(nconf.get('APP_MOLECULER_METRICS_PORT')) }
if (nconf.get('APP_NATS_PORT')) { APP_NATS_PORT = parseInt(nconf.get('APP_NATS_PORT')) }
// ************************************

const APP_ENVIRONMENT = nconf.get('APP_ENVIRONMENT') || 'development'

const APP_NATS_HOSTNAME = nconf.get('APP_NATS_HOSTNAME') || 'localhost'
const APP_NATS_USERNAME = nconf.get('APP_NATS_USERNAME') || 'infra'
const APP_NATS_PASSWORD = nconf.get('APP_NATS_PASSWORD') || 'changeme'

const APP_METADATA_NODENAME = nconf.get('APP_METADATA_NODENAME') || false
const APP_METADATA_REGION = nconf.get('APP_METADATA_REGION') || 'global'
const APP_METADATA_DATACENTER = nconf.get('APP_METADATA_DATACENTER') || 'dc1'

if (!APP_METADATA_NODENAME) {
  console.error('[ERROR] "APP_METADATA_NODENAME" is mandatory!')
  process.exit(1)
}

module.exports = {
  nodename: APP_METADATA_NODENAME,
  namespace: APP_ENVIRONMENT,
  environment: APP_ENVIRONMENT,
  metadata: {
    region: APP_METADATA_REGION,
    datadenter: APP_METADATA_DATACENTER
  },
  moleculer: {
    metrics: {
      enabled: APP_MOLECULER_METRICS_ENABLED,
      port: APP_MOLECULER_METRICS_PORT
    },
    transporter: {
      type: 'NATS',
      options: {
        url: `nats://${APP_NATS_HOSTNAME}:${APP_NATS_PORT}`,
        user: APP_NATS_USERNAME,
        pass: APP_NATS_PASSWORD
      }
    }
  }
}
