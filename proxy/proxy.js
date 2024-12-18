require('dotenv').config()
const { InspectorProxy } = require('../')
const { Vec3 } = require('vec3')

// Configuration
const SERVER_CONFIG = {
  host: 'evbopkserver.minehut.gg',
  auth: 'microsoft', //change later
}

const BASE_CONFIG = {
  baseCenter: new Vec3(-10, 63, -28),
  baseHalfLength: 50
}

const proxy = new InspectorProxy({
  host: SERVER_CONFIG.host,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  auth: SERVER_CONFIG.auth,
  profilesFolder: './nmp-cache',
  version: '1.12.2',
  checkTimeoutInterval: 90_000,
}, {
  linkOnConnect: true,
  version: '1.12.2',
  botAutoStart: false,
  botStopOnLogoff: true,
  serverAutoStart: true,
  serverStopOnBotStop: false,
  autoStartBotOnServerLogin: true,
  worldCaching: true,
  positionOffset: new Vec3(1, 0, 0),
  baseCenter: BASE_CONFIG.baseCenter,
  baseHalfLength: BASE_CONFIG.baseHalfLength
})

proxy.on('botStart', (conn) => {
  console.info('Bot spawned')
})

// Existing event listeners
proxy.on('clientDisconnect', () => {
  console.info('Client disconnected')
})

proxy.on('clientConnect', (client) => {
  console.info('Client connected')
  console.info(proxy.botIsInControl())
  proxy.broadcastMessage("TEst")
})

proxy.on('serverStart', () => console.info('Server started'))
proxy.on('serverClose', () => console.info('Server closed'))
proxy.on('botEnd', () => console.info('Bot disconnected'))
proxy.on('clientError', (client, err) => console.error('Client error:', err))

// Export configuration for easy modification
module.exports = {
  proxy,
  SERVER_CONFIG,
  BASE_CONFIG
}