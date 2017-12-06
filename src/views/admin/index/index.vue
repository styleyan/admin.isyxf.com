<template>
  <div class="">websocket测试--{{yxf}}</div>
</template>
<script>
import websocket from '../../../utils/websocket'
const ws = websocket('localhost:8080', { port: '', token: '23sdf' })
ws.send('------------sdfsf')
ws.on('message', (ev, message) => {
  console.log(ev, message)
})

setInterval(() => {
  ws.send('------------sdfsf')
}, 3000)

export default {
  data() {
    return {
      'yxf': 'ddd',
    }
  },
}
</script>

