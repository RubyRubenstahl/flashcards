<template>
  <q-btn rounded size="xl" :color="value && activeColor || color">
    <q-icon :name="toggle && value && activeIcon || icon"/>
  </q-btn>
</template>
<script>
  export default {
    name: 'TvBtn',
    props: {
      icon: { type: String },
      color: {type: String, default: null}, 
      activeColor: { type: String },
      activeIcon: { type: String },
      name: { type: String },
      label: { type: String },
      tooltip: {type: String},
      toggle: { type: Boolean, default: false },
      value: { type: Boolean, default: false },
    }
  }
</script>