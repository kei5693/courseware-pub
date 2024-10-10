<template>
  <div class="panel_wrap setup_panel">
    <div class="panel_header">
      <div class="inner">
        <div class="title">
          <h2>설정</h2>
        </div>
      </div>
      <button
        type="button"
        class="btn_close"
        @click="closePopup"
      >
        <span>닫기</span>
      </button>
    </div>
    <div class="panel_body">
      <div class="inner">
        <dl class="setup_menu_wrap">
          <dt>수업지원 도구 사용여부</dt>
          <dd>
            <p>채팅</p>
            <div>
              <span class="inp_checkbox">
                <input type="checkbox" id="inp1" /><label for="inp1"><span></span></label>
              </span>
            </div>
          </dd>
          <dt>개인뷰어설정</dt>
          <dd>
            <p>메뉴바위치</p>
            <div>
              <div class="inp_radio">
                <input type="radio" name="rdo" id="rdo1" /><label for="rdo1"><span>왼쪽</span></label>
              </div>
              <div class="inp_radio">
                <input type="radio" name="rdo" id="rdo2" /><label for="rdo2"><span>오른쪽</span></label>
              </div>
            </div>
          </dd>
        </dl>
      </div>
    </div>
    <div class="panel_footer">
      <div class="btn_box">
        <button type="button" class="common_btn"><span>설정저장</span></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    closePopup () {
      this.$store.commit('closePopup', 10)
    }
  }
}
</script>
