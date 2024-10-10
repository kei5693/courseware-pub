
<template>
  <div class="pentool_panel"
    ref="pentool_panel"
    :style="{ top: $store.state.penToolPosition.offsetY + 'px', left: $store.state.penToolPosition.offsetX + 'px' }"
  >
    <div
      class="pentool_wrap"
      :class="{ dragging: isDragging }"
    >
      <div
        class="drag_box"
        ref="draggableElement"
      >
        <span></span>
      </div>

      <div class="inner">
        <div
          v-for="(penTool ,index) in $store.getters.penToolBtnStatus"
          :key="`penTool${index}`"
          @click="toggleMenu(penTool, index)"
          @mousedown="focusMenuOn(penTool, index)"
          @touchstart="focusMenuOn(penTool, index)"
          @mouseup="focusMenuOff(penTool, index)"
          @touchend="focusMenuOff(penTool, index)"
          :class="{'active': penTool.isActive, 'disabled': penTool.isDisabled}"
          >
          <button
          type="button"
            :class="penTool.className"
            @click="closePopup(penTool.className)"
          >
            <img v-if="penTool.isDisabled" :src="require(`@/assets/images/penTool/ico_pen_disabled${index+1}.svg`)" alt=""/>
            <img v-else :src="require(`@/assets/images/penTool/ico_pen${penTool.isActive ? '_active':''}${index+1}.svg`)" alt=""/>
            <span v-html="penTool.title"></span>
          </button>
        </div>
      </div>
    </div>

    <div
      class="setup_wrap"
      :class="{active: $store.state.penToolSetup.isActive}"
    >
      <div class="inner">
        <strong>펜설정</strong>
        <ul>
          <li>
            <span>색상</span>
            <div>
              <ul class="color_list">
                <li
                  v-for="(penColor, index) in $store.state.penToolSetup.color"
                  :key="`penColor${index}`"
                  :style="{'background': penColor.value}"
                  :class="{active: penColor.isActive}"
                  @click="selectColor(index)"
                ></li>
              </ul>
            </div>
          </li>
          <li>
            <span>굵기</span>
            <div class="range_wrap">
              <button type="button" class="btn_minus" @click="btnDecrease('thickness')">굵기감소</button>
              <div>
                <input
                  type="range"
                  :min="$store.state.penToolSetup.thickness.min"
                  :max="$store.state.penToolSetup.thickness.max"
                  :step="$store.state.penToolSetup.thickness.step"
                  v-model="$store.state.penToolSetup.thickness.value"
                  :style="{'backgroundImage': thicknessBackground}"
                />
                <span
                  :style="{'left': `${thickness}px`}"
                >{{ $store.state.penToolSetup.thickness.value }}
                </span>
              </div>
              <button type="button" class="btn_plus" @click="btnIncrease('thickness')">굵기증가</button>
            </div>
          </li>
          <li>
            <span>투명도</span>
            <div class="range_wrap">
              <button type="button" class="btn_minus" @click="btnDecrease('opacity')">굵기감소</button>
              <div>
                <input
                type="range"
                :min="$store.state.penToolSetup.opacity.min"
                :max="$store.state.penToolSetup.opacity.max"
                :step="$store.state.penToolSetup.opacity.step"
                v-model="$store.state.penToolSetup.opacity.value"
                :style="{'backgroundImage': opacityBackground}"
                />
                <span
                  :style="{'left': `${opacity}px`}"
                >{{ $store.state.penToolSetup.opacity.value }}
                </span>
              </div>
              <button type="button" class="btn_plus" @click="btnIncrease('opacity')">굵기증가</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      isDragging: false,
      posX: '',
      posY: '',
      startX: '',
      startY: '',
      calcX: '',
      calcY: ''
    }
  },
  computed: {
    thickness () {
      const step = this.$store.state.penToolSetup.thickness.max - this.$store.state.penToolSetup.thickness.min
      const calc2 = this.$store.state.penToolSetup.thickness.value - this.$store.state.penToolSetup.thickness.min
      const result = (80 / step) * calc2 // 80은 input range 길이 px 값
      return result
    },
    thicknessBackground () {
      return `linear-gradient(to right, #000 ${this.thickness}px, #EBEBEB ${this.thickness}px)`
    },
    opacity () {
      const step = this.$store.state.penToolSetup.opacity.max - this.$store.state.penToolSetup.opacity.min
      const calc2 = this.$store.state.penToolSetup.opacity.value - this.$store.state.penToolSetup.opacity.min
      const result = (80 / step) * calc2
      return result
    },
    opacityBackground () {
      return `linear-gradient(to right, #000 ${this.opacity}px, #EBEBEB ${this.opacity}px)`
    },
    penToolBtnToggle () {
      return this.$store.getters.penToolBtnStatus.filter(el => el.type === 'click' && el.className !== 'btn_close')
    },
    ...mapState(['menuBarDirection', 'penToolSetup'])
  },
  mounted () {
    this.$refs.draggableElement.addEventListener('mousedown', this.dragStart)
    this.$refs.draggableElement.addEventListener('touchstart', this.dragStart)

    document.addEventListener('mousemove', this.dragging)
    document.addEventListener('touchmove', this.dragging)

    document.addEventListener('mouseup', this.dragStop)
    document.addEventListener('touchend', this.dragStop)
  },
  methods: {
    dragStart (event) {
      this.isDragging = true

      const targetElement = this.$refs.draggableElement
      const targetRect = targetElement.getBoundingClientRect()
      this.startX = event.type === 'mousedown' ? event.clientX : event.changedTouches[0].clientX
      this.startY = event.type === 'mousedown' ? event.clientY : event.changedTouches[0].clientY

      this.calcX = this.startX - targetRect.left
      this.calcY = this.startY - targetRect.top
    },
    dragging (event) {
      if (this.isDragging) {
        this.posX = event.type === 'mousemove' ? event.clientX : event.changedTouches[0].clientX
        this.posY = event.type === 'mousemove' ? event.clientY : event.changedTouches[0].clientY

        const offsetX = Math.max(
          Math.min(this.posX - this.calcX, this.getWindowSize().right),
          this.getWindowSize().left
        )
        const offsetY = Math.max(
          Math.min(this.posY - this.calcY, this.getWindowSize().bottom),
          this.getWindowSize().top
        )

        this.$store.state.penToolPosition.offsetX = offsetX
        this.$store.state.penToolPosition.offsetY = offsetY
      }
    },
    dragStop () {
      if (this.isDragging) {
        this.isDragging = false
      }
    },
    getWindowSize () {
      const penTool = document.querySelector('.pentool_panel')
      const penToolWidth = penTool.clientWidth + 2 // border 2
      const penToolHeight = penTool.clientHeight + 2 // border 2
      const penSetupWidth = penTool.querySelector(':scope > .setup_wrap').clientWidth + 1 // border 1
      const menuBarWidth = document.querySelector('#menuBar').clientWidth + 1 // border 1
      const writeBookMenu = document.querySelector('#writeBookMenu')
      const gapWidth = 15
      const menuBarGapWidth = menuBarWidth + gapWidth

      const top = writeBookMenu ? writeBookMenu.clientHeight + 1 + gapWidth : gapWidth
      const bottom = window.innerHeight - (gapWidth + penToolHeight)
      let left, right

      // 메뉴 방향에 따라 left, right 값 분기
      if (this.menuBarDirection === false) {
        left = this.penToolSetup.isActive ? penSetupWidth + menuBarGapWidth : menuBarGapWidth
        right = window.innerWidth - (penToolWidth + gapWidth)
      } else {
        left = gapWidth
        right = this.penToolSetup.isActive ? window.innerWidth - (menuBarGapWidth + penToolWidth + penSetupWidth) : window.innerWidth - (menuBarGapWidth + penToolWidth)
      }

      // 펜툴 열려있을 경우 left, right 값
      const leftLimit = menuBarGapWidth + penSetupWidth
      const rightLimit = window.innerWidth - (menuBarGapWidth + penToolWidth + penSetupWidth)
      return { left, right, top, bottom, leftLimit, rightLimit }
    },
    closePopup (target) {
      if (target === 'btn_close') {
        this.$store.commit('closePopup', 6)
        this.$store.commit('initPenTool')

        this.$store.getters.penToolBtnStatus.forEach((e) => {
          e.isActive = false
        })
      }
    },
    toggleMenu (target) {
      if (target.type === 'click') {
        // 클릭 메뉴 토글
        this.penToolBtnToggle.forEach((e) => {
          if (target === e) {
            e.isActive ? e.isActive = false : e.isActive = true
            // 펜 설정 토글
            if (e.className === 'btn_pen') {
              this.penToolSetup.isActive = !this.penToolSetup.isActive
              // 펜툴 - 펜설정 메뉴 비활성화 상태에서 메뉴바와 겹치지 않도록 이동. 시간차가 없으면 동작 이슈
              setTimeout(() => {
                const { penToolPosition } = this.$store.state
                const penTool = document.querySelector('.pentool_panel')
                const offsetX = penToolPosition.offsetX

                if (offsetX !== null) {
                  if (!this.menuBarDirection && offsetX < this.getWindowSize().leftLimit) {
                    penToolPosition.offsetX = this.getWindowSize().left
                  } else if (this.menuBarDirection && offsetX > this.getWindowSize().rightLimit) {
                    penToolPosition.offsetX = this.getWindowSize().rightLimit
                  }

                  if (penToolPosition.offsetX !== offsetX) {
                    this.penToolSetup.isActive ? penTool.classList.add('transition') : penTool.classList.remove('transition')
                    penTool.addEventListener('transitionend', () => penTool.classList.remove('transition'))
                  }
                }
              }, 1)
            } else {
              this.penToolSetup.isActive = false
            }
          } else {
            e.isActive = false
          }
        })
        // 닫기
        if (target.className === 'btn_close') {
          this.$store.commit('closePopup', 6)
        }
      }
    },
    focusMenuOn (target, currentIndex) {
      if (target.type === 'focus' && !target.isDisabled) {
        this.$store.getters.penToolBtnStatus.forEach((e, index) => {
          if (index === currentIndex) {
            e.isActive = true
          }
        })
      }
    },
    focusMenuOff (target, currentIndex) {
      if (target.type === 'focus') {
        this.$store.getters.penToolBtnStatus.forEach((e, index) => {
          if (index === currentIndex) {
            e.isActive = false
          }
        })
      }
    },
    // 감소
    btnDecrease (type) {
      const { thickness, opacity } = this.$store.state.penToolSetup
      if (type === 'thickness' && thickness.value > thickness.min) {
        thickness.value--
      } else if (type === 'opacity' && opacity.value > opacity.min) {
        opacity.value--
      }
    },
    // 증가
    btnIncrease (type) {
      const { thickness, opacity } = this.$store.state.penToolSetup
      if (type === 'thickness' && thickness.value < thickness.max) {
        thickness.value++
      } else if (type === 'opacity' && opacity.value < opacity.max) {
        opacity.value++
      }
    },
    // 펜 컬러 선택
    selectColor (currentIndex) {
      this.$store.state.penToolSetup.color.forEach((e, index) => {
        index === currentIndex ? e.isActive = true : e.isActive = false
      })
    }
  }
}
</script>
