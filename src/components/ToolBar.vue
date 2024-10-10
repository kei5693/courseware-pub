
<template>
  <div
    class="toolbar_panel"
    :class="{active: $store.state.toolBarActive}"
    ref="toolBar_panel"
    :style="{ top: $store.state.toolBarPosition.offsetY + 'px', left: $store.state.toolBarPosition.offsetX + 'px' }"
  >
    <div
      class="toolbar_wrap"
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
          v-for="(toolBar ,index) in $store.state.toolBarMenu"
          :key="`toolBar${index}`"
          :class="{'active': toolBar.isActive, 'disabled': toolBar.isDisabled}"
          @click="toggleMenu(toolBar, index)"
          @mousedown="focusMenuOn(toolBar, index)"
          @touchstart="focusMenuOn(toolBar, index)"
          @mouseup="focusMenuOff(toolBar, index)"
          @touchend="focusMenuOff(toolBar, index)"
          >
          <button
          type="button"
            :class="toolBar.className"
          >
            <img v-if="toolBar.isDisabled" :src="require(`@/assets/images/toolBar/ico_tool_disabled${index+1}.svg`)" alt=""/>
            <img v-else :src="require(`@/assets/images/toolBar/ico_tool${toolBar.isActive ? '_active':''}${index+1}.svg`)" alt=""/>
            <span v-html="toolBar.title"></span>
          </button>
        </div>
      </div>
    </div>

    <div
      class="setup_wrap"
      :class="{
        active: $store.state.toolBarSetup.isActive,
        interval: $store.state.toolBarMenu[$store.state.toolBarSetup.currentIndex].title === '포스트잇',
        radius: $store.state.toolBarMenu[$store.state.toolBarSetup.currentIndex].title === '도형'
      }"
    >
      <div class="inner" ref="setup">
        <!-- 텍스트 -->
        <div>
          <strong>텍스트</strong>
          <ul>
            <li>
              <span>색상</span>
              <div>
                <input class="color_picker" type="color" />
              </div>
            </li>
            <li>
              <span>크기</span>
              <div>
                <div class="commmon_select">
                  <select>
                    <option value="10">10</option>
                    <option value="9">9</option>
                    <option value="8">8</option>
                  </select>
                </div>
              </div>
            </li>
            <li>
              <span>효과</span>
              <div>
                <div class="btn_effect_wrap">
                  <button
                  type="button"
                    v-for="(effect ,index) in $store.state.toolBarSetup.effect"
                    :key="`effect${index}`"
                    @click="selectEffect(effect, index)"
                    :class="{'active': effect.isActive}"
                  >
                    <img :src="require(`@/assets/images/toolBar/ico_effect${index+1}.svg`)" alt=""/>
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <!-- 도형 -->
        <div>
          <div>
            <div class="btn_shapes_wrap">
              <button
              type="button"
                v-for="(shapes ,index) in $store.state.toolBarSetup.shapes"
                :key="`shapes${index}`"
                @click="selectShapes(shapes, index)"
                :class="{'active': shapes.isActive}"
              >
                <img :src="require(`@/assets/images/toolBar/${shapes.image}.svg`)" alt=""/>
              </button>
            </div>
          </div>
        </div>

        <!-- 채우기, 테두리 -->
        <div>
          <strong>채우기</strong>
          <ul>
            <li>
              <span>색상</span>
              <div>
                <input class="color_picker" type="color" />
              </div>
            </li>
            <li>
              <span>투명도</span>
              <div class="range_wrap">
                <button type="button" class="btn_minus" @click="btnDecrease('opacity')">투명도감소</button>
                <div>
                  <input
                  type="range"
                  :min="$store.state.toolBarSetup.opacity.min"
                  :max="$store.state.toolBarSetup.opacity.max"
                  :step="$store.state.toolBarSetup.opacity.step"
                  v-model="$store.state.toolBarSetup.opacity.value"
                  :style="{'backgroundImage': opacityBackground}"
                  />
                  <span
                    :style="{'left': `${opacity}px`}"
                  >{{ $store.state.toolBarSetup.opacity.value }}
                  </span>
                </div>
                <button type="button" class="btn_plus" @click="btnIncrease('opacity')">투명도증가</button>
              </div>
            </li>
          </ul>

          <strong>테두리</strong>
          <ul>
            <li>
              <span>색상</span>
              <div>
                <input class="color_picker" type="color" />
              </div>
            </li>
            <li>
              <span>굵기</span>
              <div>
                <div class="commmon_select">
                  <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>
            </li>
            <li class="mb10">
              <span>투명도</span>
              <div class="range_wrap">
                <button type="button" class="btn_minus" @click="btnDecrease('opacity2')">투명도감소</button>
                <div>
                  <input
                  type="range"
                  :min="$store.state.toolBarSetup.opacity2.min"
                  :max="$store.state.toolBarSetup.opacity2.max"
                  :step="$store.state.toolBarSetup.opacity2.step"
                  v-model="$store.state.toolBarSetup.opacity2.value"
                  :style="{'backgroundImage': opacityBackground2}"
                  />
                  <span
                    :style="{'left': `${opacity2}px`}"
                  >{{ $store.state.toolBarSetup.opacity2.value }}
                  </span>
                </div>
                <button type="button" class="btn_plus" @click="btnIncrease('opacity2')">투명도증가</button>
              </div>
            </li>
          </ul>
        </div>
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
    opacity () {
      const step = this.$store.state.toolBarSetup.opacity.max - this.$store.state.toolBarSetup.opacity.min
      const calc2 = this.$store.state.toolBarSetup.opacity.value - this.$store.state.toolBarSetup.opacity.min
      const result = (80 / step) * calc2
      return result
    },
    opacity2 () {
      const step = this.$store.state.toolBarSetup.opacity2.max - this.$store.state.toolBarSetup.opacity2.min
      const calc2 = this.$store.state.toolBarSetup.opacity2.value - this.$store.state.toolBarSetup.opacity2.min
      const result = (80 / step) * calc2
      return result
    },
    opacityBackground () {
      return `linear-gradient(to right, #000 ${this.opacity}px, #EBEBEB ${this.opacity}px)`
    },
    opacityBackground2 () {
      return `linear-gradient(to right, #000 ${this.opacity2}px, #EBEBEB ${this.opacity2}px)`
    },
    ...mapState(['menuBarDirection', 'toolBarSetup'])
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
          Math.min(this.posY - this.calcY, this.getWindowSize().bottomLimit),
          this.getWindowSize().top
        )

        this.$store.state.toolBarPosition.offsetX = offsetX
        this.$store.state.toolBarPosition.offsetY = offsetY
      }
    },
    dragStop () {
      if (this.isDragging) {
        this.isDragging = false
      }
    },
    getWindowSize () {
      const toolBar = document.querySelector('.toolbar_panel')
      const toolBarWidth = toolBar.clientWidth + 2 // border 2
      const toolBarHeight = toolBar.clientHeight + 2 // border 2
      const toolSetupWidth = toolBar.querySelector(':scope > .setup_wrap').clientWidth + 1 // border 1
      const toolSetupHeight = toolBar.querySelector(':scope > .setup_wrap').clientHeight + 2 // border 2
      const menuBarWidth = document.querySelector('#menuBar').clientWidth + 1 // border 1
      const gapWidth = 30
      const inteval = 24
      const menuBarGapWidth = menuBarWidth + gapWidth
      const calcHeight = toolBarHeight > toolSetupHeight ? toolBarHeight + gapWidth : toolSetupHeight + gapWidth + 23

      const top = 104
      const bottom = window.innerHeight - (toolBarHeight + gapWidth)
      let left, right

      // 메뉴 방향에 따라 left, right 값 분기
      if (this.menuBarDirection === false) {
        left = this.toolBarSetup.isActive ? toolSetupWidth + menuBarGapWidth + inteval : menuBarGapWidth + inteval
        right = window.innerWidth - (toolBarWidth + gapWidth + inteval)
      } else {
        left = gapWidth + 30
        right = this.toolBarSetup.isActive ? window.innerWidth - (menuBarGapWidth + toolBarWidth + toolSetupWidth + gapWidth) : window.innerWidth - (menuBarGapWidth + toolBarWidth + gapWidth)
      }

      // 펜툴 열려있을 경우 left, right 값
      const leftLimit = menuBarGapWidth + toolSetupWidth
      const rightLimit = window.innerWidth - (menuBarGapWidth + toolBarWidth + toolSetupWidth + gapWidth)
      const bottomLimit = window.innerHeight - calcHeight
      return { left, right, top, bottom, leftLimit, rightLimit, bottomLimit }
    },
    closePopup (target) {
      if (target === 'btn_close') {
        this.$store.commit('closePopup', 5)
        this.$store.commit('initToolBar')

        this.$store.getters.toolBarBtnStatus.forEach((e) => {
          e.isActive = false
        })
      }
    },
    toggleMenu (target) {
      this.$store.state.toolBarMenu.forEach((e, index) => {
        if (e.type === 'click' && target === e) {
          if (e.isActive) {
            e.isActive = false
            this.toolBarSetup.isActive = false
          } else {
            e.isActive = true
            this.toolBarSetup.isActive = true
          }

          const toolBarSetup = this.$refs.setup.querySelectorAll(':scope > div')
          toolBarSetup.forEach((el, index2) => {
            if (index === index2) {
              this.$store.state.toolBarSetup.currentIndex = index
              el.classList.add('active')

              // 펜툴 - 펜설정 메뉴 비활성화 상태에서 메뉴바와 겹치지 않도록 이동. 시간차가 없으면 동작 이슈
              setTimeout(() => {
                const { toolBarPosition } = this.$store.state
                const toolBar = document.querySelector('.toolbar_panel')
                const offsetX = toolBarPosition.offsetX
                const offsetY = toolBarPosition.offsetY

                if (offsetX !== null) {
                  if (!this.menuBarDirection && offsetX < this.getWindowSize().leftLimit) {
                    toolBarPosition.offsetX = this.getWindowSize().left
                  } else if (this.menuBarDirection && offsetX > this.getWindowSize().rightLimit) {
                    toolBarPosition.offsetX = this.getWindowSize().rightLimit
                  }

                  if (toolBarPosition.offsetX !== offsetX) {
                    this.toolBarSetup.isActive ? toolBar.classList.add('transition') : toolBar.classList.remove('transition')
                    toolBar.addEventListener('transitionend', () => toolBar.classList.remove('transition'))
                  }
                }

                if (offsetY !== null) {
                  if (offsetY > this.getWindowSize().bottomLimit) {
                    toolBarPosition.offsetY = this.getWindowSize().bottomLimit
                  }

                  if (toolBarPosition.offsetY !== offsetY) {
                    this.toolBarSetup.isActive ? toolBar.classList.add('transition') : toolBar.classList.remove('transition')
                    toolBar.addEventListener('transitionend', () => toolBar.classList.remove('transition'))
                  }
                }
              }, 1)
            } else {
              el.classList.remove('active')
            }
          })
        } else {
          e.isActive = false
        }
      })
    },
    focusMenuOn (target, currentIndex) {
      if (target.type !== 'click' && !target.isDisabled) {
        this.$store.state.toolBarMenu.forEach((e, index) => {
          if (index === currentIndex) {
            e.isActive = true
          }
        })
      }
    },
    focusMenuOff (target, currentIndex) {
      if (target.type !== 'click') {
        this.$store.state.toolBarMenu.forEach((e, index) => {
          if (index === currentIndex) {
            e.isActive = false
          }
        })
      }
    },
    selectEffect (target) {
      this.$store.state.toolBarSetup.effect.forEach((e) => {
        if (target === e) {
          e.isActive ? e.isActive = false : e.isActive = true
        } else {
          e.isActive = false
        }
      })
    },
    selectShapes (target) {
      this.$store.state.toolBarSetup.shapes.forEach((e) => {
        if (target === e) {
          e.isActive ? e.isActive = false : e.isActive = true
        } else {
          e.isActive = false
        }
      })
    },
    // 감소
    btnDecrease (type) {
      const { opacity, opacity2 } = this.$store.state.toolBarSetup
      if (type === 'opacity' && opacity.value > opacity.min) {
        opacity.value--
      } else if (type === 'opacity2' && opacity2.value > opacity2.min) {
        opacity2.value--
      }
    },
    // 증가
    btnIncrease (type) {
      const { opacity, opacity2 } = this.$store.state.toolBarSetup
      if (type === 'opacity' && opacity.value < opacity.max) {
        opacity.value++
      } else if (type === 'opacity2' && opacity2.value < opacity2.max) {
        opacity2.value++
      }
    }
  }
}
</script>
