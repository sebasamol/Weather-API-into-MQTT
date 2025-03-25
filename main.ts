import mqtt from 'mqtt'

const client = mqtt.connect('mqtt://192.168.1.17', {
    username: process.env.MQTT_USERNAME,
    password: process.env.MQTT_PASSWORD,
    port: 1883
})

client.on('connect', () => {
    console.log('Connected to MQTT broker')
})

client.on('error', (error) => {
    console.error('Connection error:', error)
})

client.on('close', () => {
    console.log('Connection to MQTT broker closed')
})

client.on('offline', () => {
    console.log('Client is offline')
})
console.log('123')



