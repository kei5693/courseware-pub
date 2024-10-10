<template>
  <div
    class="panel_wrap chatting_panel use_footer"
    :style="[fullSize ? {'width': `calc(100% - 60px)`} : '']"
  >
    <div class="panel_header">
      <div class="inner">
        <div class="title">
          <h2>채팅</h2>
        </div>
        <button
          type="button"
          class="btn_chat_size"
          @click="popupSizeToggle"
        >
          <span>채팅창 확장</span>
        </button>
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
      <p
        class="floating_date"
        :class="{show: getScrollPosition}"
        >{{ chattingData.date }}
      </p>
      <div class="inner" ref="chatting_scroll">
        <div class="chat_contents">
          <ul class="chatting_list">
            <li
              v-for="(chatting, index) in chattingData.contentsData"
              :key="`chatting${index}`"
              :class="{me: chatting.name === 'me'}"
            >
              <!-- chatting.present" 검수용 임시 데이터 -->
              <div
                class="date_border"
                v-if="chatting.present"
              >
                <span>2024년 2월 12일 월요일</span>
              </div>

              <h3 v-if="chatting.name !== 'me'">{{ chatting.name }}</h3>

              <ul>
                <li
                  v-for="(el, index) in chatting.content"
                  :key="`content${index}`"
                >
                  <p v-if="chatting.name !== 'me'">
                    <span>{{ el.text }}</span>
                    <img v-if="el.emoji !== undefined" :src="emojiSrc[el.emoji]" alt="" />
                  </p>
                  <p v-else>
                    <img v-if="el.emoji !== undefined" :src="emojiSrc[el.emoji]" alt="" />
                    <span>{{ el.text }}</span>
                  </p>
                  <div>
                    <span>{{ el.time }}</span>
                    <button type="button" class="btn_delete"><span>삭제</span></button>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="panel_footer">
      <!-- disabled 사용 시 class disabled -->
      <div
        class="chat_inp_wrap"
        :class="{active: toggle}"
      >
        <div class="inner">
          <button
            type="button"
            class="btn_select_emoji"
            @click="toggleEmojiSelect"
          ><span>이모지 선택</span></button>
          <input type="text" placeholder="메시지를 입력해 주세요." />
          <button type="button" class="btn_send" @click="scrollEnd">전송</button>
          <!-- <input type="text" placeholder="메시지를 입력해 주세요." disabled="disabled" />
          <button type="button" class="btn_send" disabled="disabled">전송</button> -->
        </div>

        <div class="emoji_select_wrap">
          <div class="selected_emoji">
            <img v-if="selectedEmoji !== null" :src="emojiSrc[selectedEmoji]" alt="" />
          </div>
          <ul class="emoji_list">
            <li
              v-for="(emoji, index) in emojiSrc"
              :key="`emoji${index}`"
              @click="selectEmoji(index)"
            >
              <img
                :src="require(`@/assets/images/panel/chat/ico_emoji_list${index+1}.svg`)"

                alt="" />
            </li>
          </ul>
          <button
            type="button"
            class="btn_close"
            @click="toggleEmojiSelect"
          >
            <span>닫기</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      fullSize: false,
      chattingData: {
        date: '2024.02.08 목',
        contentsData: [
          {
            date: '2024년 2월 11일 월요일',
            name: '김석진',
            present: true, // 검수를 위한 임시 데이터
            content: [
              {
                time: '오전 11:15',
                text: 'Lorem ipsum dolor sit amet,  consectetur adipiscing elit.',
                emoji: 0
              }
            ]
          },
          {
            date: '2024년 2월 12일 월요일',
            name: '박지민',
            content: [
              {
                time: '오전 11:18',
                text: 'Lorem ipsum dolor sit'
              },
              {
                time: '오전 11:18',
                text: 'consectetur adipiscing elit.'
              }
            ]
          },
          {
            date: '2024년 2월 12일 월요일',
            name: 'me',
            present: true, // 검수를 위한 임시 데이터
            content: [
              {
                time: '오후 02:19',
                text: 'Lorem ipsum dolor sit',
                emoji: 2
              },
              {
                time: '오후 02:20',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                emoji: 3
              }
            ]
          },
          {
            date: '2024년 2월 12일 월요일',
            name: '김남준',
            content: [
              {
                time: '오후 11:15',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              }
            ]
          },
          {
            date: '2024년 2월 12일 월요일',
            name: '김남준',
            content: [
              {
                time: '오후 11:15',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              }
            ]
          },
          {
            date: '2024년 2월 12일 월요일',
            name: '김남준',
            content: [
              {
                time: '오후 11:15',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              }
            ]
          },
          {
            date: '2024년 2월 12일 월요일',
            name: '김남준',
            content: [
              {
                time: '오후 11:15',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              }
            ]
          },
          {
            date: '2024년 2월 12일 월요일',
            name: '김남준',
            content: [
              {
                time: '오후 11:15',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              }
            ]
          },
          {
            date: '2024년 2월 12일 월요일',
            name: '김남준',
            content: [
              {
                time: '오후 11:15',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              }
            ]
          }
        ]
      },
      scrollTop: 0,
      toggle: false,
      selectedEmoji: null,
      emojiSrc: [
        require('@/assets/images/panel/chat/ico_emoji_list1.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list2.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list3.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list4.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list5.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list6.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list7.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list8.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list9.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list10.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list11.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list12.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list13.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list14.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list15.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list16.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list17.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list18.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list19.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list20.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list21.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list22.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list23.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list24.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list25.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list26.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list27.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list28.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list29.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list30.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list31.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list32.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list33.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list34.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list35.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list36.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list37.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list38.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list39.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list40.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list41.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list42.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list43.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list44.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list45.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list46.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list47.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list48.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list49.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list50.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list51.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list52.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list53.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list54.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list55.svg'),
        require('@/assets/images/panel/chat/ico_emoji_list56.svg')
      ]
    }
  },
  computed: {
    getScrollPosition () {
      return this.scrollTop > 0 ? true : ''
    }
  },
  mounted () {
    this.$refs.chatting_scroll.addEventListener('scroll', this.detectScroll)
  },
  methods: {
    popupSizeToggle () {
      this.fullSize = !this.fullSize
    },
    closePopup () {
      this.fullSize = false
      this.$store.commit('closePopup', 2)
    },
    detectScroll () {
      this.scrollTop = this.$refs.chatting_scroll.scrollTop
      const dateBorders = document.querySelectorAll('.date_border')

      // 플로팅 날자 변경
      dateBorders.forEach((dateBorder, index) => {
        if (dateBorder.getBoundingClientRect().top < 22) {
          console.log('hide', index)
          // this.chattingData.date = '2024.02.22 금'
        } else {
          console.log('show', index)
          // this.chattingData.date = '2024.02.08 목'
        }
      })
    },
    scrollEnd () {
      const target = this.$refs.chatting_scroll
      const computedStyle = window.getComputedStyle(target)
      const paddingValue = parseInt(computedStyle.getPropertyValue('padding-top')) + parseInt(computedStyle.getPropertyValue('padding-bottom'))
      const targetHeight = target.clientHeight - paddingValue
      const childrenHeight = target.querySelector(':scope .chat_contents').clientHeight
      const scrollEnd = childrenHeight - targetHeight

      this.$refs.chatting_scroll.scrollTop = scrollEnd
    },
    selectEmoji (index) {
      this.selectedEmoji = index
    },
    toggleEmojiSelect () {
      this.toggle = !this.toggle
    }
  }
}
</script>
