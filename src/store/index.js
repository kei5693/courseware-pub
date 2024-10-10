import { createStore } from 'vuex'

export default createStore({
  state: {
    // 교사, 학생
    isTeacher: true,
    // 수업중인가
    isInClass: true,
    // 작은 사이즈 테블릿 대응
    shortenMenu: false,
    // 하단 메뉴 클릭 이벤트
    shortenMenuToggle: false,
    // 메뉴바 방향
    menuBarDirection: false,
    // 메뉴바
    menuBarData: [
      {
        menuPosition: 'top',
        type: 'click',
        title: '목록',
        isActive: false,
        isDisabled: false,
        color: 'rgba(255, 107, 0, 0.08)',
        popupName: 'list_panel'
      },
      {
        menuPosition: 'top',
        type: 'click',
        title: '학생현황',
        isActive: false,
        isDisabled: false,
        color: 'rgba(32, 183, 105, 0.08)',
        popupName: 'student_panel'
      },
      {
        menuPosition: 'top',
        type: 'click',
        title: '채팅',
        isActive: false,
        isDisabled: false,
        color: 'rgba(255, 183, 0, 0.08)',
        chatNoti: true,
        popupName: 'chatting_panel'
      },
      {
        menuPosition: 'top',
        type: 'click',
        title: '챗봇',
        isActive: false,
        isDisabled: false,
        color: 'rgba(59, 163, 219, 0.08)',
        popupName: 'chatbot_panel'
      },
      {
        menuPosition: 'top',
        type: 'click',
        title: '수업종료',
        isActive: false,
        isDisabled: false,
        color: 'rgba(52, 167, 229, 0.08)'
      },
      {
        menuPosition: 'top',
        type: 'click',
        title: '주목',
        isActive: false,
        isDisabled: false,
        color: 'rgba(136, 190, 22, 0.08)'
      },
      {
        menuPosition: 'top',
        type: 'click',
        title: '펜툴',
        isActive: false,
        isDisabled: false,
        color: 'rgba(218, 108, 219, 0.08)',
        popupName: 'pentool_panel'
      },
      {
        menuPosition: 'top',
        type: 'focus',
        title: '확대',
        isActive: false,
        isDisabled: false,
        color: 'rgba(137, 135, 255, 0.08)'
      },
      {
        menuPosition: 'top',
        type: 'focus',
        title: '축소',
        isActive: false,
        isDisabled: false,
        color: 'rgba(255, 133, 133, 0.08)'
      },
      {
        menuPosition: 'bottom',
        type: 'focus',
        title: 'LMS',
        isActive: false,
        isDisabled: false,
        color: 'rgba(59, 163, 219, 0.08)'
      },
      {
        menuPosition: 'bottom',
        type: 'click',
        title: '설정',
        isActive: false,
        isDisabled: false,
        color: 'rgba(118, 116, 243, 0.08)',
        popupName: 'setup_panel'
      },
      {
        menuPosition: 'bottom',
        type: 'click',
        title: '도움말',
        isActive: false,
        isDisabled: false,
        color: 'rgba(102, 148, 238, 0.08)',
        popupName: 'help_panel'
      }
    ],
    // 펜툴
    penToolMenu: [
      {
        type: 'focus',
        isActive: false,
        className: 'btn_memo',
        title: '메모'
      },
      {
        type: 'click',
        isActive: false,
        className: 'btn_pen',
        title: '펜'
      },
      {
        type: 'click',
        isActive: false,
        className: 'btn_highlighter',
        title: '하이<br>라이트'
      },
      {
        type: 'click',
        isActive: false,
        className: 'btn_eraser',
        title: '지우개'
      },
      {
        type: 'focus',
        isActive: false,
        isDisabled: false,
        className: 'btn_cancel',
        title: '실행취소'
      },
      {
        type: 'focus',
        isActive: false,
        isDisabled: false,
        className: 'btn_rerun',
        title: '재실행'
      },
      {
        type: 'focus',
        isActive: false,
        isDisabled: true,
        className: 'btn_reset',
        title: '초기화'
      },
      {
        type: 'click',
        isActive: false,
        className: 'btn_close',
        title: '닫기'
      }
    ],
    // 펜 설정
    penToolSetup: {
      isActive: false,
      color: [
        {
          value: '#FFF',
          isActive: false
        },
        {
          value: '#999',
          isActive: false
        },
        {
          value: '#000',
          isActive: false
        },
        {
          value: '#0078B8',
          isActive: false
        },
        {
          value: '#FF6B00',
          isActive: false
        },
        {
          value: '#20B769',
          isActive: false
        },
        {
          value: '#FFBF1B',
          isActive: false
        },
        {
          value: '#DA6CDB',
          isActive: false
        }
      ],
      thickness: {
        value: 25,
        min: 10,
        max: 40,
        step: 1
      },
      opacity: {
        value: 0,
        min: 0,
        max: 90,
        step: 1
      }
    },
    penToolPosition: {
      offsetX: null,
      offsetY: null
    },
    // 툴바
    toolBarActive: false,

    toolBarMenu: [
      {
        type: 'click',
        isActive: false,
        isDisabled: false,
        className: 'btn_writing_box',
        title: '글상자'
      },
      {
        type: 'click',
        isActive: false,
        isDisabled: false,
        className: 'btn_post_it',
        title: '포스트잇'
      },
      {
        type: 'click',
        isActive: false,
        isDisabled: false,
        className: 'btn_shapes',
        title: '도형'
      },
      {
        type: 'file',
        isActive: false,
        isDisabled: false,
        className: 'btn_image',
        title: '이미지'
      }
    ],
    // 툴바 설정
    toolBarSetup: {
      isActive: false,
      color: [
        {
          value: '#FFF',
          isActive: false
        },
        {
          value: '#999',
          isActive: false
        },
        {
          value: '#000',
          isActive: false
        },
        {
          value: '#0078B8',
          isActive: false
        },
        {
          value: '#FF6B00',
          isActive: false
        },
        {
          value: '#20B769',
          isActive: false
        },
        {
          value: '#FFBF1B',
          isActive: false
        },
        {
          value: '#DA6CDB',
          isActive: false
        }
      ],
      opacity: {
        value: 0,
        min: 0,
        max: 90,
        step: 1
      },
      opacity2: {
        value: 0,
        min: 0,
        max: 90,
        step: 1
      },
      effect: [
        { isActive: true },
        { isActive: false },
        { isActive: false },
        { isActive: false }
      ],
      shapes: [
        {
          isActive: true,
          image: 'ico_shapes_ellipse'
        },
        {
          isActive: false,
          image: 'ico_shapes_polygon'
        },
        {
          isActive: false,
          image: 'ico_shapes_square'
        },
        {
          isActive: false,
          image: 'ico_shapes2_ellipse'
        },
        {
          isActive: false,
          image: 'ico_shapes2_polygon'
        },
        {
          isActive: false,
          image: 'ico_shapes2_square'
        },
        {
          isActive: false,
          image: 'ico_shapes2_star'
        }
      ],
      currentIndex: 0
    },
    toolBarPosition: {
      offsetX: null,
      offsetY: null
    },
    // 학생 임시 데이터
    studentData: [
      { name: '강감찬', class: '4학년 1반', inClass: true, score: 80 },
      { name: '권보아', class: '3학년 1반', inClass: true, score: 99 },
      { name: '김남준', class: '2학년 1반', inClass: false, score: 100 },
      { name: '김태형', class: '2학년 1반', inClass: false, score: 80 },
      { name: '민윤기', class: '2학년 1반', inClass: false, score: 100 },
      { name: '박지민', class: '2학년 1반', inClass: true, score: 100 },
      { name: '심수봉', class: '2학년 1반', inClass: true, score: 60 },
      { name: '안중근', class: '2학년 1반', inClass: false, score: 100 },
      { name: '장영실', class: '2학년 1반', inClass: false, score: 100 },
      { name: '홍두깨', class: '2학년 1반', inClass: true, score: 45 },
      { name: '김석진', class: '2학년 1반', inClass: false, score: 100 },
      { name: '김정호', class: '2학년 1반', inClass: true, score: 85 },
      { name: '홍길동', class: '2학년 1반', inClass: false, score: 32 },
      { name: '박찬호', class: '2학년 1반', inClass: true, score: 95 },
      { name: '심순애', class: '2학년 1반', inClass: false, score: 70 },
      { name: '정약용', class: '2학년 1반', inClass: false, score: 100 }
    ],
    // 판서 배경 화면 임시 데이터
    bgImagesData: {
      selectedImage: {
        name: '배경명 노출됩니다. 한줄 말줄임처리',
        img: 'writeBook/bg_01.png'
      },
      bgImages: [
        {
          name: '사용안함',
          img: 'modal/background/thumbnail0.png',
          isActive: false
        },
        {
          name: '배경명 노출됩니다. 한줄 말줄임처리',
          img: 'modal/background/thumbnail1.png',
          isActive: false
        },
        {
          name: '배경명 노출됩니다.',
          img: 'modal/background/thumbnail2.png',
          isActive: false
        },
        {
          name: '배경명 노출됩니다.',
          img: 'modal/background/thumbnail3.png',
          isActive: false
        },
        {
          name: '배경명 노출됩니다.',
          img: 'modal/background/thumbnail4.png',
          isActive: false
        },
        {
          name: '배경명 노출됩니다.',
          img: 'modal/background/thumbnail5.png',
          isActive: false
        },
        {
          name: '배경명 노출됩니다.',
          img: 'modal/background/thumbnail6.png',
          isActive: false
        },
        {
          name: '배경명 노출됩니다.',
          img: 'modal/background/thumbnail7.png',
          isActive: false
        },
        {
          name: '배경명 노출됩니다.',
          img: 'modal/background/thumbnail8.png',
          isActive: false
        },
        {
          name: '배경명 노출됩니다.',
          img: 'modal/background/thumbnail9.png',
          isActive: false
        },
        {
          name: '배경명 노출됩니다.',
          img: 'modal/background/thumbnail10.png',
          isActive: false
        },
        {
          name: '배경명 노출됩니다.',
          img: 'modal/background/thumbnail11.png',
          isActive: false
        },
        {
          name: '배경명 노출됩니다.',
          img: 'modal/background/thumbnail12.png',
          isActive: false
        },
        {
          name: '배경명 노출됩니다.',
          img: 'modal/background/thumbnail13.png',
          isActive: false
        },
        {
          name: '배경명 노출됩니다.',
          img: 'modal/background/thumbnail14.png',
          isActive: false
        }
      ]
    }
  },
  getters: {
    // 수업중인 학생
    getInClassStatus: (state) => {
      const result = state.studentData.filter(el => el.inClass === true)
      return result
    },
    // 교사, 학생 펜툴 메뉴 분리
    penToolBtnStatus: (state) => {
      let result = ''
      if (state.isStudent) {
        result = state.penToolMenu.filter(el => el.className !== 'btn_close')
      } else {
        result = state.penToolMenu
      }
      return result
    }
  },
  mutations: {
    shortenMenu: (state, payload) => {
      if (payload) {
        state.shortenMenu = true
      } else {
        state.shortenMenu = false
        state.shortenMenuToggle = false
      }
    },
    shortenMenuToggle: (state) => {
      state.shortenMenuToggle = !state.shortenMenuToggle
    },
    closePopup: (state, payload) => {
      state.menuBarData[payload].isActive = false
      document.querySelector(`.${state.menuBarData[payload].popupName}`).classList.remove('active')
    },
    initPenTool: (state) => {
      document.querySelector('.pentool_panel').removeAttribute('style')
      state.penToolPosition.offsetX = undefined
      state.penToolPosition.offsetY = undefined
      state.penToolSetup.isActive = false
      state.penToolMenu[0].isActive = false
    },
    initToolBar: (state) => {
      document.querySelector('.toolbar_panel').removeAttribute('style')
      state.toolBarPosition.offsetX = undefined
      state.toolBarPosition.offsetY = undefined
      state.toolBarSetup.isActive = false
      state.toolBarMenu[0].isActive = false
    }
  },
  actions: {
  },
  modules: {
  }
})
