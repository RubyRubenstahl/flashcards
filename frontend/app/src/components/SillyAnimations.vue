<template>
<section>
  <img
    src="statics/hubble.png"
    class="hubble"
  />
  <img
    src="statics/octopus.gif"
    class="octopus"
  />
  <img
    src="statics/wolf_walking.gif"
    class="wolf"
  />
  <img
    src="statics/space-unicorn.png"
    class="spaceUnicorn"
  />
</section>
</template>

<script>
  export default {
    // name: 'ComponentName',
    data () {
      return {}
    },
    computed: {
      
    }
  }
</script>
<style>

@keyframes wolf-loop {
  40%, 100% {
    transform: translate(5000px, 0);
  }
}
  .wolf{
    position: fixed;
    animation-delay: 0;
    opacity:0.6;

    animation-name: wolf-loop;
    animation-duration: 80s;
    animation-iteration-count: infinite;
    bottom:000px;
    left:-400px;
    animation-timing-function: linear;
    filter:  brightness(800%) contrast(0%);
  }

@keyframes spaceUnicorn-loop {
  40%, 100% {
    transform: translate(0px, -5000px);
  }
}
  .spaceUnicorn{
    position: fixed;
    animation-delay: 0;
    opacity:0.6;
    transform: scale(0.2) rotate(8deg);
    animation-name: spaceUnicorn-loop;
    animation-duration: 80s;
    animation-iteration-count: infinite;
    bottom:-1000px;
    left:200px;
    animation-timing-function: linear;
  }


  @keyframes hubbleloop {
  20%, 100% {
    transform: translate(5000px, 0);
  }
}
  .hubble{
    position: fixed;
    animation-delay: 20s;
    opacity:.7;

    animation-name: hubbleloop;
    animation-duration: 300s;
    animation-iteration-count: infinite;
    top:10vh;
    left:-400px;
    animation-timing-function: linear;
  
  }

    @keyframes octopus-loop {
  20%, 100% {
    transform: translate(0, 5000px);
  }
}
  .octopus{
    opacity:.5;
    position: fixed;
    animation-name: octopus-loop;
    animation-delay: 10s;
    animation-duration: 300s;
    transform: scale(2);
    animation-iteration-count: infinite;
    right:100px;
    top:-400px;
    animation-timing-function: linear;
  
  }


</style>
