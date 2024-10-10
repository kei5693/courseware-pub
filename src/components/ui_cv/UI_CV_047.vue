<template>
  <!-- 활동 컨텐츠 class 분기 activity_contents -->
  <div
    class="contents activity_contents"
    :class="{ header_slide: header}"
  >
    <div class="title_box">
      <div class="btn_back_wrap">
        <button type="button" title="뒤로가기" class="btn_back">뒤로가기</button>
        <h2>홍길동 </h2>

        <div class="schedule_txt color ml8">
          <strong>제출기간</strong>
          <span>2024-10-04 ~ 2024-10-04</span>
        </div>
      </div>

      <div class="menu_box">
        <span class="status_participate mr16">선생님 참여중</span>
        <div class="btn_wrap mr8">
          <button
            type="button"
            class="common_btn"
            :class="{color2: btn}"
            @click="btnToggle"
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
  methods: {
    headerToggle () {
      this.header = !this.header
    },
    btnToggle () {
      this.btn = !this.btn
    }
  }
}
</script>
