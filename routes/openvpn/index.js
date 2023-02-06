'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return 'openvpn-learn-address'
  })

  fastify.post('/', async function (request, reply) {
    console.log(request.body)
    return reply.code(200).send()
  })
}
