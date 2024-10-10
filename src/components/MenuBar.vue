<template>
  <div id="menuBar">
    <div  class="top_menu" ref="top_menu">
      <span class="in_class" v-if="$store.state.isInClass">수업중</span>
      <ul>
        <template
          v-for="(menu, index) in $store.state.menuBarData"
          :key="`menu${index}`"
        >
          <li
            v-if="menu.menuPosition === 'top'"
            :class="{line: menu.title == '펜툴', active: menu.isActive, disabled: menu.isDisabled}"
            :style="[menu.isActive ? {'background': menu.color} : '']"
            @click="toggleMenuBar(index)"
            @mousedown="focusMenuOn(menu, index)"
            @touchstart="focusMenuOn(menu, index)"
            @mouseup="focusMenuOff(menu, index)"
            @touchend="focusMenuOff(menu, index)"
          >
            <a href="#">
              <img :src="require(`@/assets/images/menuBar/ico_menu${menu.isDisabled ? '_dis':''}${index+1}.svg`)" alt="" />
              <p>{{ menu.title}}</p>
              <span class="chat_noti" v-if="menu.chatNoti">채팅알림</span>
            </a>
          </li>
        </template>
      </ul>
    </div>
    <div
      class="bottom_menu"
      ref="bottom_menu"
      :class="{shorten: $store.state.shortenMenu, active: $store.state.shortenMenuToggle }"
    >
      <div class="btn_more" @click="shortenMenuToggle">
        <button type="button"><span>more</span></button>
      </div>
      <ul>
        <template
          v-for="(menu, index) in $store.state.menuBarData"
          :key="`menu${index}`"
        >
          <li
            v-if="menu.menuPosition === 'bottom'"
            :class="{active: menu.isActive, disabled: menu.isDisabled}"
            :style="[menu.isActive ? {'background': menu.color} : '']"
            @click="toggleMenuBar(index)"
            @mousedown="focusMenuOn(menu, index)"
            @touchstart="focusMenuOn(menu, index)"
            @mouseup="focusMenuOff(menu, index)"
            @touchend="focusMenuOff(menu, index)"
          >
          <a href="#">
            <img :src="require(`@/assets/images/menuBar/ico_menu${menu.isDisabled ? '_dis':''}${index+1}.svg`)" alt="" />
            <p>{{ menu.title}}</p>
          </a>
          </li>
        </template>
      </ul>
    </div>
    <List />
    <StudentStatus />
    <Chatting />
    <ChatBot />
    <Help />
    <Setup />
  </div>
</template>

<script>
import List from './panel/List.vue'
import StudentStatus from './panel/StudentStatus.vue'
import Chatting from './panel/Chatting.vue'
import ChatBot from './panel/ChatBot.vue'
import Setup from './panel/Setup.vue'
import Help from './panel/Help.vue'
export default {
  components: {
    List,
    StudentStatus,
    Chatting,
    ChatBot,
    Help,
    Setup
  },
  data () {
    return {
      windowHeight: 0
    }
  },
  computed: {
    menuHeight () {
      return this.$refs.top_menu.offsetHeight + this.$refs.bottom_menu.offsetHeight
    },
    compareHeight () {
      return this.menuHeight > this.windowHeight
    }
  },
  mounted () {
    this.windowHeight = window.innerHeight
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  },
  methods: {
    shortenMenuToggle () {
      this.$store.commit('shortenMenuToggle')
    },
    handleResize () {
      this.windowHeight = window.innerHeight
      this.$store.commit('shortenMenu', this.compareHeight)
    },
    toggleMenuBar (currentIndex) {
      this.$store.state.menuBarData.forEach((e, index) => {
        if (e.type === 'click') {
          const isActive = index === currentIndex ? !e.isActive : false
          e.isActive = isActive

          if (e.popupName) {
            const popupElement = document.querySelector(`.${e.popupName}`)
            if (isActive) {
              popupElement.classList.add('active')
            } else {
              popupElement.classList.remove('active')
              this.$store.commit('initPenTool')
            }
          }
        }
      })
    },
    focusMenuOn (target, currentIndex) {
      if (target.type === 'focus' && !target.isDisabled) {
        this.$store.state.menuBarData.forEach((e, index) => {
          if (index === currentIndex) {
            e.isActive = true
          }
        })
      }
    },
    focusMenuOff (target, currentIndex) {
      if (target.type === 'focus') {
        this.$store.state.menuBarData.forEach((e, index) => {
          if (index === currentIndex) {
            e.isActive = false
          }
        })
      }
    }
  }
}
</script>
