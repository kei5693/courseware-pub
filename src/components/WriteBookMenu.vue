
<template>
  <div id="writeBookMenu">
    <button
      type="button"
      v-for="(menu, index) in writeBookMenu"
      :key="`menu${index}`"
      @click="toggleMenu(index)"
      :class="{active: menu.isActive}"
      >
      <img :src="require(`@/assets/images/writeBook/ico_menu${menu.isActive ? '_active':''}${index+1}.svg`)" alt=""/>
      <span>{{ menu.name }}</span>
    </button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      writeBookMenu: [
        {
          isActive: false,
          name: '배경설정'
        },
        {
          isActive: false,
          name: '판서공유'
        },
        {
          isActive: false,
          name: '종료'
        }
      ]
    }
  },
  methods: {
    toggleMenu (currentIndex) {
      this.writeBookMenu.forEach((e, index) => {
        if (index === currentIndex) {
          e.isActive ? e.isActive = false : e.isActive = true
        } else {
          e.isActive = false
        }
      })
    }
  }
}
</script>
