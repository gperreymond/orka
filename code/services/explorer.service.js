module.exports = {
  name: 'explorer',
  actions: {
    dockerAvailable: require('./actions/explorer/docker-available'),
    listNodes: require('./actions/explorer/list-nodes')
  }
}
