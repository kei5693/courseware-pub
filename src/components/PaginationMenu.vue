<template>
  <div
    id="paginationMenu"
    :class="{active: isActive}"
    @mouseenter="paginationEvent('open')"
    @mouseleave="paginationEvent()"
    @click="paginationEvent('open')"
  >
    <button
      type="button"
      class="btnPrev"
      :disabled="disablePrevButton"
      @click="btnEvent('prev')"
    ><span>이전</span>
    </button>

    <div class="innerCont">
      <div class="txtCont">
        <label>
          <input type="checkbox" v-model="fixingPin" />
        </label>
        <p>콘텐츠 제목이 말줄임 없이 모두 노출됩니다. 콘텐츠 제목이 말줄임 없이 모두 노출됩니다.</p>
      </div>
      <p><span>{{ currentIdx+1 }}</span>/{{ endIdx }}</p>
    </div>

    <button
      type="button"
      class="btnNext"
      :disabled="disableNextButton"
      @click="btnEvent('next')"
    ><span>다음</span>
    </button>
  </div>
</template>

<script>

export default {
  components: {

  },
  data () {
    return {
      isActive: false,
      fixingPin: false,
      currentIdx: 0,
      endIdx: 10
    }
  },
  computed: {
    disablePrevButton () {
      return this.currentIdx === 0
    },
    disableNextButton () {
      return this.currentIdx >= this.endIdx - 1
    }
  },
  mounted () {
  },
  methods: {
    btnEvent (value) {
      if (this.isActive) {
        if (value === 'next') {
          this.currentIdx = Math.min(this.currentIdx + 1, this.endIdx - 1)
        } else {
          this.currentIdx = Math.max(this.currentIdx - 1, 0)
        }
      }
    },
    paginationEvent (value) {
      if (value === 'open') {
        this.isActive = true
      } else {
        if (!this.fixingPin) {
          this.isActive = false
        }
      }
    }
  }
}
</script>
