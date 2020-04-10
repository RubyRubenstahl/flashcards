<template>
  <fragment>
    <q-checkbox
      v-for="user in users"
      :key="user._id"
      :value="value"
      :val="user._id"
      :label="user.username"
      @input="$val=>$emit('input', $val)"
    />
  </fragment>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'UserSelector',
    created(){
        this.selectCurrentUser();
        
    },
    data () {
      return {
          selectedUsers:[],
          initialized:false
      }
    },
    methods:{
        selectCurrentUser(){
            const allUserIds = this.users.map(user=>user._id);
            // console.log(this.currentUser._)
            this.$emit('input', [this.currentUser._id])
        },
    },
    computed: {
      ...mapGetters({
        users: 'users/list',
        currentUser: 'auth/user'
      }),
    },
    props: {
      value: {
        type: Array
      }
    },
    watch:{
    }
  }
</script>

