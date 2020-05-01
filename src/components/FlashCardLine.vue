<template>
    <div>
    <div v-if="line.type==='value'">{{line.value}}</div>
    <div v-if="line.type==='input'">
        <input @change="$emit({name: line.name, value: inputVal})"/>
    </div>
    </div>
</template>
<script>
export default {
    name: "FlashCardLine",
    data() {
        return {
            inputs:{
                
            }
        }
    },
    props:{
        line:{
            type: Object,
            required: true
        }
    }
}
</script>
    
