<template>
  <div class="panel_wrap chatbot_panel" ref="chatbot_panel">
    <div class="panel_header">
      <button type="button" class="btnNew"><span>새 대화</span></button>
      <h2>챗봇</h2>
      <button type="button" class="btn_close" @click="closePopup"><span>닫기</span></button>
    </div>
    <div class="panel_body">
      <div class="innerWrap" ref="chatting_scroll">
        <div class="initMsg">
          <div class="inner">
            <img src="@/assets/images/panel/img_chatbot.gif" alt="" />
            <div class="txt">
              <p>안녕하세요?<br>무엇이든 물어보세요!</p>
            </div>
          </div>
        </div>

        <ul class="chatList">
          <li>
            <em>3:17 PM </em>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </li>
          <li>
            <em>3:17 PM </em>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </li>
          <li>
            <em>3:17 PM </em>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </li>
          <li>
            <em>3:17 PM </em>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </li>
          <li class="chatBot">
            <span class="loading">생각중</span>
          </li>
          <li class="chatBot">
            <p>Lorem ipsum doloLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.r sit amet, consectetur adipiscing elit.</p>
            <button type="button" class="btnCopy"><span>복사</span></button>
          </li>
        </ul>
      </div>
      <div class="msgBox" :class="{active: text != '', showMsg: noti}">
        <div class="innerWrap" :class="{active: isFocused}">
          <div class="textareaWrap">
            <textarea
              placeholder="메시지를 입력해 주세요."
              v-model="text"
              @input="adjustHeight"
              @keydown.enter="adjustHeight"
              @focus="onFocus"
              @blur="onBlur"
              ref="textarea"
            ></textarea>
          </div>
          <div class="notiWrap">
            <p class="noti">최대 2000자까지 질문할 수 있습니다.</p>
            <em><strong>2000</strong>/<span>2000</span></em>
            <button type="button" @click="toggleBtn" :class="{loading: isLoading}"><span>전송</span></button>
          </div>
        </div>
        <button type="button" class="btnTop" @click="scrollEnd" :class="{active: isTopBtn}"><span>top</span></button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      text: '',
      isFocused: false,
      isLoading: false,
      scrollTop: '',
      isTopBtn: false,
      noti: false
    }
  },
  computed: {

  },
  mounted () {
    this.adjustHeight()
    this.$refs.chatting_scroll.addEventListener('scroll', this.detectScroll)
  },
  methods: {
    adjustHeight () {
      const textarea = this.$refs.textarea
      textarea.style.height = '20px'
      textarea.style.height = textarea.scrollHeight + 'px'

      textarea.scrollHeight > 54 ? this.noti = true : this.noti = false
    },
    onFocus () {
      this.isFocused = true
    },
    onBlur () {
      this.isFocused = false
    },
    closePopup () {
      this.$store.commit('closePopup', 3)
    },
    toggleBtn () {
      this.isLoading = !this.isLoading
    },
    detectScroll () {
      const target = this.$refs.chatting_scroll
      const targetHeight = target.clientHeight

      const initMsg = target.querySelector(':scope .initMsg')
      const chatList = target.querySelector(':scope .chatList')
      let initMsgHeight = 0
      let chatListHeight = 0
      if (initMsg) { initMsgHeight = initMsg.clientHeight }
      if (chatList) { chatListHeight = chatList.clientHeight }

      const childrenHeight = initMsgHeight + chatListHeight
      const scrollEnd = childrenHeight - targetHeight + 20

      this.scrollTop = this.$refs.chatting_scroll.scrollTop
      this.scrollTop < scrollEnd - 100 ? this.isTopBtn = true : this.isTopBtn = false
    },
    scrollEnd () {
      const target = this.$refs.chatting_scroll
      const targetHeight = target.clientHeight

      const initMsg = target.querySelector(':scope .initMsg')
      const chatList = target.querySelector(':scope .chatList')
      let initMsgHeight = 0
      let chatListHeight = 0
      if (initMsg) { initMsgHeight = initMsg.clientHeight }
      if (chatList) { chatListHeight = chatList.clientHeight }

      const childrenHeight = initMsgHeight + chatListHeight
      const scrollEnd = childrenHeight - targetHeight + 20

      this.$refs.chatting_scroll.scrollTo({
        top: scrollEnd,
        behavior: 'smooth'
      })
    }
  }
}
</script>
