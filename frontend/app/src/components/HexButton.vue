<template>
<div style="filter: drop-shadow(5px 6px 5px rgba(0, 0, 0, 0.9)); ">
    <q-btn
        :to="to"
        class="grow"
        :style="{backgroundColor: color,width:size, height: size, clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}">
        <div class="flex flex-center justify-center column q-gutter-md" >
        <q-icon :name="icon" class="" size="calc(10px + 5vmin)"></q-icon>
        <span class="text-center text-weight-light hex-text" style="font-size: calc(0.1in + 2vmin)">
        {{title}}
        </span>
        </div>

    </q-btn>
    </div>
</template>
<script>
export default {
    props:{
        title:{
            required: true,
            type: String
        },
        size:{
            type: String,
            default: 'calc(1in + 20vmin)'
        },
        icon:{
            type: String
        },
        to:{
            type: String
        },
        color:{
            type: String,
            default: '#00FFFF22'
        },

    }
}
</script>
<style >
.grow, .q-icon, .hex-text { transition: all .5s ease-in; }
.grow:hover { transform: scale(1.05)  }
.grow:hover .q-icon { transform: scale(1.5)  }
.grow:hover .hex-text { transform: scale(1.2)  }
</style>