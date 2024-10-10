<template>
  <div class="contents">
    <div class="inner">
      <!-- 학습현황 -->
      <div
        class="learningStatusBtn"
        ref="learningStatusBtn"
        :style="{ top: offsetY + 'px', left: offsetX + 'px' }"
      >
        <button type="button" @click="routerEvent()"><span>학습<br>현황</span></button>
        <!-- <lottie-player
          autoplay
          loop
          mode="normal"
          src="/assets/json/learning.json"
          style="width: 60px; height: 60px;"
        >
        </lottie-player> -->
      </div>

      <div class="tempDiv"><p>문제 노출영역 {{ count }}</p></div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      count: 0,
      isDragging: false,
      posX: '',
      posY: '',
      startX: '',
      startY: '',
      calcX: '',
      calcY: '',
      offsetX: '',
      offsetY: ''
    }
  },
  computed: {
    ...mapState(['menuBarDirection'])
  },
  mounted () {
    this.$refs.learningStatusBtn.addEventListener('mousedown', this.dragStart)
    this.$refs.learningStatusBtn.addEventListener('touchstart', this.dragStart)

    document.addEventListener('mousemove', this.dragging)
    document.addEventListener('touchmove', this.dragging)

    document.addEventListener('mouseup', this.dragStop)
    document.addEventListener('touchend', this.dragStop)
  },
  methods: {
    dragStart (event) {
      this.count = 0
      this.isDragging = true

      const targetElement = this.$refs.learningStatusBtn
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

        this.offsetX = offsetX
        this.offsetY = offsetY

        this.count++
      }
    },
    dragStop () {
      if (this.isDragging) {
        this.isDragging = false
      }
    },
    getWindowSize () {
      const target = this.$refs.learningStatusBtn
      const targetWidth = target.clientWidth
      const targetHeight = target.clientHeight
      const menuBarWidth = document.querySelector('#menuBar').clientWidth + 1 // border 1
      const writeBookMenu = document.querySelector('#writeBookMenu')
      const gapWidth = 10
      const menuBarGapWidth = menuBarWidth + gapWidth
      const top = writeBookMenu ? writeBookMenu.clientHeight + 1 + gapWidth : gapWidth
      const bottom = window.innerHeight - (gapWidth + targetHeight)
      let left, right

      // 메뉴 방향에 따라 left, right 값 분기
      if (this.menuBarDirection === false) {
        left = menuBarGapWidth + 20
        right = window.innerWidth - (targetWidth + gapWidth + 20)
      } else {
        left = gapWidth + 20
        right = window.innerWidth - (menuBarGapWidth + targetWidth + 20)
      }
      return { left, right, top, bottom }
    },
    routerEvent () {
      if (this.count === 0) {
        this.$router.push('/Contents/UI_CV_000_1')
      }
    }
  }
}
</script>
