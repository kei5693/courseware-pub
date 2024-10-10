<template>
  <div class="contents">
    <div class="title_box">
      <h2>평가명이 한줄로 노출됩니다. 평가명이 한줄로 노출됩니다. 평가명이 한줄로 노출됩니다. 평가명이 한줄로 노출됩니다. 평가명이 한줄로 노출됩니다. 평가명이 한줄로 노출됩니다. </h2>
      <div class="examination">
        <span class="status">응시중</span>
      </div>
    </div>

    <div class="inner">
      <div class="dummy_layout" ref="dummy_layout">
        <img
          src="@/assets/images/dummy/demo.jpg" ref="dummy"
        />
        <div class="text">
          <p>width: {{ this.width }}</p>
          <p>height: {{ this.height }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      width: null,
      height: null
    }
  },
  mounted () {
    this.setContentSize()
    window.addEventListener('resize', this.setContentSize)
  },
  methods: {
    // 화면 비율 확인 임시 스크립트
    setContentSize () {
      const aspectRatio = 16 / 10
      let calc = this.$refs.dummy_layout.clientHeight * aspectRatio
      if (calc > this.$refs.dummy_layout.clientWidth) {
        calc = this.$refs.dummy_layout.clientWidth
      }
      this.$refs.dummy.style.width = `${calc}px`

      this.width = calc.toFixed(2)
      this.height = this.$refs.dummy_layout.clientHeight
    }
  }
}
</script>
