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
    w.postMessage(10);
  }
}
</script>
