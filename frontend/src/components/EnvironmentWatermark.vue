<template>
  <div
    @click.self.passive 
    v-if="!isProduction"
    class="watermark"
  >
    <span v-for="(text, index) in watermarkText" :key="index"  class="text-uppercase q-pa-xl text-weight-bold">
        {{text}}
    </span>
  </div>

</template>

<script>
  export default {
    // name: 'ComponentName',
    data () {
      return {}
    },
    computed: {
      isProduction () {
        console.log(process.env.buildType)
        return process.env.buildType === 'production'
      },
      buildType () {
        return process.env.buildType;
      },
      watermarkText(){
        return new Array(10000).fill(`${this.buildType} Mode`);

      }
    }
  }
</script>
<style scoped>
  .watermark{
    width: 30in;
    height:30in;
    
    color:#80808011;
    position:fixed;
    font-size:.8in;
    
    z-index:5000000000000000000000000;
    user-select: none;
    pointer-events: none;
    transform: translate(-15in,-15in)  rotateZ(-45deg);
  }
</style>