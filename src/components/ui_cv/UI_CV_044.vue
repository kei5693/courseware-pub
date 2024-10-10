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
        <button type="button" title="수정" class="btn_edit" @click="btnToggle">수정</button>
        <div class="edit_inp" v-if="edit">
          <input type="text" maxlength="9" value="일이삼사오육칠팔구" />
          <div>
            <button type="button" class="btn_cancel" @click="btnToggle">취소</button>
            <button type="button" class="btn_save" @click="btnToggle">저장</button>
          </div>
        </div>
      </div>

      <div class="menu_box">
        <span class="status_participate mr16">선생님 참여중</span>
        <!-- active : 더보기 버튼 노출, top_list 정렬방향 전환 -->
        <div class="student_list_wrap" ref="studentListWrap">
          <div class="inner">
            <ul class="top_list" ref="topList">
              <li>
                <span class="active">접속</span>
                <strong>홍길동홍길동</strong>
                <em>이끔이이이이</em>
              </li>
              <li>
                <span class="active">접속</span>
                <strong>홍길동</strong>
                <em>이끔이</em>
              </li>
              <li>
                <span class="active">접속</span>
                <strong>홍길동</strong>
                <em>이끔이</em>
              </li>
              <li>
                <span class="active">접속</span>
                <strong>홍길동</strong>
                <em>이끔이</em>
              </li>
              <li>
                <span class="active">접속</span>
                <strong>홍길동</strong>
                <em>이끔이</em>
              </li>
              <li>
                <span class="active">접속</span>
                <strong>홍길동</strong>
                <em>이끔이</em>
              </li>
            </ul>
          </div>

          <!-- 더보기 버튼 student_list_wrap의 가로 보다 top_list의 가로가 더 길 경우 보여짐 -->
          <div class="btn_wrap" :class="{ opened: list}">
            <button type="button" class="btn_more" @click="toggleEvent">더보기</button>
            <button type="button" class="btn_close" @click="toggleEvent">닫기</button>
          </div>

          <div class="whole_group_wrap">
            <strong>전체 모둠원</strong>
            <ul>
              <li>
                <span class="active">접속</span>
                <strong><span>1번</span> 일이삼사오육칠팔구십일이삼사오육칠팔구십</strong>
                <em>일이삼사오육칠팔구십</em>
              </li>
              <li>
                <span class="active">접속</span>
                <strong><span>2번</span> 홍길동</strong>
                <em>이끔이</em>
              </li>
              <li>
                <span class="active">접속</span>
                <strong><span>3번</span> 홍길동</strong>
                <em>이끔이</em>
              </li>
              <li>
                <span class="">미접속</span>
                <strong><span>4번</span> 홍길동</strong>
                <em>이끔이</em>
              </li>
              <li>
                <span class="active">접속</span>
                <strong><span>5번</span> 홍길동</strong>
                <em>이끔이이이이</em>
              </li>
              <li>
                <span class="active">접속</span>
                <strong><span>6번</span> 홍길동</strong>
                <em>이끔이</em>
              </li>
              <li>
                <span class="active">접속</span>
                <strong><span>7번</span> 홍길동</strong>
                <em>이끔이</em>
              </li>
              <li>
                <span class="active">접속</span>
                <strong><span>8번</span> 홍길동</strong>
                <em>이끔이</em>
              </li>
              <li>
                <span class="">미접속</span>
                <strong><span>9번</span> 홍길동</strong>
                <em>이끔이</em>
              </li>
              <li>
                <span class="">미접속</span>
                <strong><span>10번</span> 홍길동</strong>
                <em>이끔이</em>
              </li>
              <li>
                <span class="">미접속</span>
                <strong><span>11번</span> 홍길동</strong>
                <em>이끔이</em>
              </li>
              <li>
                <span class="active">접속</span>
                <strong><span>12번</span> 홍길동</strong>
                <em>이끔이</em>
              </li>
              <li>
                <span class="">미접속</span>
                <strong><span>13번</span> 홍길동</strong>
                <em>이끔이</em>
              </li>
              <li>
                <span class="">미접속</span>
                <strong><span>14번</span> 홍길동</strong>
                <em>이끔이</em>
              </li>
              <li>
                <span class="">미접속</span>
                <strong><span>15번</span> 홍길동</strong>
                <em>이끔이</em>
              </li>
            </ul>
          </div>
        </div>

        <div class="btn_wrap mr8">
          <button
            type="button"
            class="common_btn"
            :class="{color2: btn}"
            @click="btnToggle2"
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
      btn: false,
      list: false,
      edit: false
    }
  },
  mounted () {
    this.getListWidth()
    window.addEventListener('resize', this.getListWidth)
  },
  methods: {
    headerToggle () {
      this.header = !this.header
    },
    // 검수용
    btnToggle () {
      this.edit = !this.edit
    },
    btnToggle2 () {
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
    },
    toggleEvent () {
      this.list = !this.list
    }
  }
}
</script>
