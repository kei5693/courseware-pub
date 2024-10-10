<template>
  <div
    id="container"
    :class="containerClasses"
  >
    <MenuBar />
    <PenTool />
    <ToolBar />
    <PaginationMenu />
    <router-view />
  </div>
</template>

<script>
import MenuBar from './components/MenuBar.vue'
import PenTool from './components/PenTool.vue'
import ToolBar from './components/ToolBar.vue'
import PaginationMenu from './components/PaginationMenu.vue'

export default {
  components: {
    MenuBar,
    PenTool,
    ToolBar,
    PaginationMenu
  },
  data () {
    return {}
  },
  computed: {
    containerClasses () {
      return {
        direction_right: this.$store.state.menuBarDirection,
        cursor_pen: this.$store.state.penToolMenu[1].isActive,
        cursor_highlighter: this.$store.state.penToolMenu[2].isActive,
        cursor_eraser: this.$store.state.penToolMenu[3].isActive
      }
    }
  }
}
</script>
