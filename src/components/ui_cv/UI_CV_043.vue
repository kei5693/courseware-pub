<template>
  <!-- 활동 컨텐츠 class 분기 activity_contents -->
  <div
    class="contents activity_contents"
    :class="{ header_slide: header}"
  >
    <div class="title_box">
      <div class="btn_back_wrap edit">
        <button type="button" title="뒤로가기" class="btn_back">뒤로가기</button>
        <h2>1모둠</h2>
      </div>

      <div class="menu_box">
        <!-- top_list의 li의 길이가 더 길 경우 class active 추가로 버튼 보여줌 -->
        <div class="student_list_wrap" ref="studentListWrap">
          <ul class="top_list" ref="topList">
            <li>
              <!-- <span class="active">접속</span> -->
              <strong>홍길동</strong>
              <em>이끔이</em>
            </li>
            <li>
              <!-- <span class="active">접속</span> -->
              <strong>홍길동</strong>
              <em>이끔이</em>
            </li>
            <li>
              <!-- <span class="active">접속</span> -->
              <strong>홍길동</strong>
              <em>이끔이</em>
            </li>
          </ul>
          <!-- 더보기 버튼 student_list_wrap의 가로 보다 top_list의 가로가 더 길 경우 보여짐 -->
          <div class="btn_wrap">
            <button type="button" class="btn_more active">더보기</button>
            <button type="button" class="btn_close">닫기</button>
          </div>
        </div>

        <div class="btn_wrap mr8">
          <button
            type="button"
            class="common_btn"
            :class="{color2: btn}"
            @click="btnToggle"
            disabled="disabled"
          ><span>제출{{ btn == true ? "취소" : "하기" }}</span>
          </button>
        </div>
        <button
          type="button"
          class="btn_slide_toggle"
          @click="headerToggle"
        ></button>
      </div>
    </div>

    <div class="inner">
      <div style="background-color: #eee;height: 100%;"></div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      header: false,
      btn: false
    }
  },
  mounted () {
    this.getListWidth()
    window.addEventListener('resize', this.getListWidth)

    // 툴바
    this.$store.state.toolBarActive = true
    // 툴바 설정
    // this.$store.state.toolBarSetup.isActive = true
  },
  methods: {
    headerToggle () {
      this.header = !this.header
    },
    btnToggle () {
      this.btn = !this.btn
    },
    getListWidth () {
      const parent = this.$refs.studentListWrap
      const ulElement = this.$refs.topList
      let sumWidth = 0

      ulElement.querySelectorAll('li').forEach(liElement => {
        sumWidth += liElement.offsetWidth
      })

      parent.offsetWidth > sumWidth ? parent.classList.remove('active') : parent.classList.add('active')
    }
  }
}
</script>
