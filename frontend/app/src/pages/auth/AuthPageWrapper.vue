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
      <q-card
        class="q-pa-md"
        style="background-color:#000000BB;width:500px"
      >

        <q-card-section class="flex flex-center">
          <div class="text-h4 text-uppercase text-weight-light">{{title}}</div>
          <div class="text-caption text-uppercase">{{subtitle}}</div>
        </q-card-section>

        <q-card-section>

          <slot></slot>
        </q-card-section>

      </q-card>
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
