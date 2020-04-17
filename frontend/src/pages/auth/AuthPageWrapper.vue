<template>
  <q-page
    padding
    class="flex flex-center"
  >
    <transition
      appear
      enter-active-class="animated jackInTheBox"
      leave-active-class="animated fadeOut"
      transition-duration="2.3s"
    >
      <div
        class="q-pa-md"
        style="background-color:#00000000;width:400px; margin-bottom:33vh"
      >

        <q-card-section class="flex flex-center">
          <div class="text-h5 text-uppercase text-weight-light">{{title}}</div>
          <div class="text-caption text-uppercase">{{subtitle}}</div>
        </q-card-section>

        <q-card-section>

          <slot></slot>
        </q-card-section>

      </div>
    </transition>
    
  </q-page>
</template>

<script>
  export default {
    name: 'AuthPageWrapper',
    props: {
      title: {
        type: String,
        required: true
      },
      subtitle: {
        type: String,
      }
    }
  }
</script>
