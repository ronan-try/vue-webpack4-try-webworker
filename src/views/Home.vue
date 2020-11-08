<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
import Woker from './ba.worker'

export default {
  name: 'Home',
    mounted () {
    const w = new Woker();
    setInterval(()=>{
      w.postMessage(10);
      console.log('post');
    }, 1000);
    w.message = function ({data}) {
      console.warn(data);
    }
  }
}
</script>
