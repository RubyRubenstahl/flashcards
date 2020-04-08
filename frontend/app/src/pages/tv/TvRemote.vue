<template>

  <q-page
    class="flex flex-center cover"
    :style="getPageStyle"
  >
    <q-toolbar class="flex justify-end">
      <q-btn
        flat
        round
        dense
        icon="fas fa-cog"
        :to="`/app/tv/edit/${$route.params.id}`"
      />
      <q-btn
        flat
        round
        dense
        icon="close"
        @click="$router.go(-1)"
      />
    </q-toolbar>
      
    <span v-if="roku">
    
      <TvBtn  v-if="roku.info.isTv ==='true'" icon="fas fa-power-off"  activeColor="positive" name="power" tooltip="Power" toggle :value="roku.info.powerMode==='PowerOn'"/>
      <TvBtn icon="fas fa-mute" name="Power" event="power" />
    </span>
  </q-page>

</template>

<script>
  import { mapGetters } from 'vuex';
  import TvBtn from './TvBtn'
  export default {
    name: 'TvRemote',
    components:{TvBtn},
    computed: {
      ...mapGetters({ getTv: 'tv/get' }),
      roku(){
          debugger;

        if(this.tv && this.tv.roku && this.tv.roku.data){
          return this.tv.roku.data
        }        
      },
      tv () {
        const tv = this.getTv(this.$route.params.id);
        return tv
      },
      getPageStyle () {
        if(!this || !this.tv){return null}
        return {
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundImage:
            `linear-gradient(to bottom,rgba(3, 22, 85, 0.8),rgba(14, 11, 100, 0.75)),
          url("${this.tv && this.tv.imageUrl || '/statics/login-background.jpg'}")
          `
        }
      },
    },
    data () {
      return {

      }
    }
  }
</script>
<style scoped>
.button-active{
  color:green
}
</style>
