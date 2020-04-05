<template>
    <div class="flex flex-center q-gutter-md q-pa-lg">
        <HexButton v-for="button in buttons" v-bind="button" :key="button.name"/>
    </div>
</template>
<script>
import HexButton from './HexButton'
export default {
    name:'HexButtonGroup',
    components:{HexButton},
    props:{
        buttons:{
            type: Array,
            required: true
        }
    }
}
</script>
