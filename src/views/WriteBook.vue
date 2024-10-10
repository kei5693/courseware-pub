<template>
  <div
    class="writeBook"
    :style="{'backgroundImage': `url(${require(`@/assets/images/${$store.state.bgImagesData.selectedImage.img}`)})`}"
  >
    <h1>판서</h1>
    <WriteBookMenu />
  </div>
</template>

<script>
import WriteBookMenu from '../components/WriteBookMenu.vue'

export default {
  components: {
    WriteBookMenu
  },
  data () {
    return {}
  },
  methods: {
  }
}
</script>
