<template>
  <div class="panel_wrap help_panel">
    <div class="panel_header">
      <div class="inner">
        <div class="title">
          <h2>도움말 ({{ this.isTeacherMenu ? '교사' : '학생' }}용)</h2>
        </div>
      </div>
      <button
        type="button"
        class="btn_close"
        @click="closePopup($event)"
      >
        <span>닫기</span>
      </button>
    </div>
    <div
      class="panel_body"
    >
      <div class="inner">
        <ul class="help_content_wrap">
          <li
            v-for="(data, index) in this.helpDataBranch"
            :key="`data${index}`"
          >
            <div class="title_box">
              <div>
                <img :src="require(`@/assets/images/menuBar/${data.icon}`)" alt="" />
                <h3>{{ data.title }}</h3>
                <p v-html="data.desc"></p>
              </div>
              <button
                v-if="data.depth2 !== undefined"
                @click="accordionToggle"
              >
                <span>접기</span>
              </button>
            </div>

            <ul
              class="toggle_content"
              v-if="data.depth2 !== undefined"
            >
              <li
                v-for="(depth2data, index) in data.depth2"
                :key="`depth2data${index}`"
              >
                <div>
                  <h4 v-if="depth2data.title !== ''">{{ depth2data.title }}</h4>
                  <p v-if="depth2data.desc !== ''">{{ depth2data.desc }}</p>
                </div>

                <ul class="depth3_list">
                  <li
                    v-for="(depth3data, index) in depth2data.depth3"
                    :key="`depth3data${index}`"
                    :class="{'block': depth3data.layout === 'block' }"
                  >
                    <img
                      v-if="depth3data.icon !== undefined"
                      :src="require(`@/assets/images/${depth3data.icon}`)" alt="" />
                    <p v-html="depth3data.title"></p>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="panel_footer"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      helpData: {
        teacher: [
          {
            title: '목록',
            icon: 'ico_menu1.svg',
            desc: '학습목록을 확인하고 학습을 할 수 있습니다.',
            depth2: [
              {
                title: '학습방식 아이콘',
                desc: '',
                depth3: [
                  {
                    icon: 'panel/ico_learn_method1.svg',
                    title: '수업시간에 선생님과 수업을 통해<br> 학습할 수 있는 수업기반 학습입니다.'
                  },
                  {
                    icon: 'panel/ico_learn_method2.svg',
                    title: '선생님이 설정한 학습일정에 맞춰<br> 학생 스스로 학습할 수 있는 스스로하기 학습입니다.'
                  }
                ]
              },
              {
                title: '학습유형 아이콘',
                desc: '',
                depth3: [
                  {
                    icon: 'panel/ico_learn_type1.svg',
                    title: '본문자료를 읽거나 영상을 학습할 수 있는 콘텐츠 입니다.'
                  },
                  {
                    icon: 'panel/ico_learn_type2.svg',
                    title: '평가 및 문제지 유형의 콘텐츠 입니다.'
                  },
                  {
                    icon: 'panel/ico_learn_type3.svg',
                    title: '보드를 통한 개인/모둠 활동형 콘텐츠 입니다.'
                  },
                  {
                    icon: 'panel/ico_learn_type4.svg',
                    title: '학습을 위해 선생님이 추가한 링크 유형의 콘텐츠 입니다.'
                  },
                  {
                    icon: 'panel/ico_learn_type5.svg',
                    title: '학습을 위해 선생님이 추가한 유튜브 유형의 콘텐츠 입니다.'
                  },
                  {
                    icon: 'panel/ico_learn_type6.svg',
                    title: '수업중 선생님이 공유한 판서 유형의 콘텐츠 입니다.'
                  }
                ]
              },
              {
                title: '수업상태 아이콘',
                desc: '학습목록을 확인하고 학습을 할 수 있습니다.',
                depth3: [
                  {
                    icon: 'panel/ico_learn_status1.svg',
                    title: '진행하지 않은 수업'
                  },
                  {
                    icon: 'panel/ico_learn_status2.svg',
                    title: '진행중인 수업'
                  },
                  {
                    icon: 'panel/ico_learn_status3.svg',
                    title: '완료한 수업'
                  }
                ]
              },
              {
                title: '기타 아이콘',
                desc: '',
                depth3: [
                  {
                    icon: 'panel/ico_student.svg',
                    title: '평가와 연계된 수준별학습의 학습분기 기준을 확인하고,<br> 채점완료 후 학습을 공유받은 학생을 확인할 수 있습니다.'
                  },
                  {
                    icon: 'panel/ico_ai.svg',
                    title: 'AI 기반으로 생성된 평가를 나타냅니다.'
                  },
                  {
                    layout: 'block',
                    icon: 'panel/ico_ai_recommend.svg',
                    title: 'A추천학습을 설정한 평가를 나타내며,<br>채점 후 점수에 따라 A가 학생에게 추천학습을 제공합니다.'
                  }
                ]
              },
              {
                title: '수업중 제공되는 기능',
                desc: '',
                depth3: [
                  {
                    title: '<strong>활동</strong>수업중 새로운 활동을 추가 또는 시작할 수 있습니다.'
                  },
                  {
                    title: '<strong>AI평가</strong>수업중 출제범위를 설정해 평가를 시작할 수 있습니다.'
                  },
                  {
                    title: '<strong>참고자료</strong>수업중 켈링크/유튜브 참고자료를 추가할 수 있습니다.'
                  },
                  {
                    title: '<strong>판서보드</strong>선생님에게 제공되는 수입을 보조할 수 있는 보드로<br>배경을 자유롭게 설정하고, 판서를 할 수 있으며<br>학생들에게 공유할 수 있습니다.<span>※ 학생들에게 공유된 판서는 삭제하실 수 없습니다.</span>'
                  }
                ]
              }
            ]
          },
          {
            title: '학생현황',
            icon: 'ico_menu2.svg',
            desc: '학급 학생들을 확인할 수 있습니다.',
            depth2: [
              {
                title: '',
                desc: '',
                depth3: [
                  {
                    icon: 'panel/ico_attend1.svg',
                    title: '수업중 접속중인 학생을 나타냅니다.'
                  },
                  {
                    icon: 'panel/ico_attend2.svg',
                    title: '수업중 접속하지 않은 학생을 나타냅니다.'
                  }
                ]
              }
            ]
          },
          {
            title: '채팅',
            icon: 'ico_menu3.svg',
            desc: '수업중 메시지를 통해 소통할 수 있습니다.',
            depth2: [
              {
                title: '',
                desc: '',
                depth3: [
                  {
                    icon: 'panel/ico_chat_new.svg',
                    title: '새로운 메시지 표시'
                  },
                  {
                    icon: 'panel/ico_chat_emoji.svg',
                    title: '이모티콘 목록을 보고, 메시지로 전송할 수 있습니다.'
                  }
                ]
              }
            ]
          },
          {
            title: '펜툴',
            icon: 'ico_menu7.svg',
            desc: '필기할 수 있는 필기도구를 열고 닫을 수 있습니다.',
            depth2: [
              {
                title: '',
                desc: '',
                depth3: [
                  {
                    icon: 'penTool/ico_pen1.svg',
                    title: '메모 : 학습 중 메모를 추가할 수 있습니다.'
                  },
                  {
                    icon: 'penTool/ico_pen2.svg',
                    title: '펜 : 일반 학습 콘텐츠에 필기할 수 있습니다.'
                  },
                  {
                    icon: 'penTool/ico_pen3.svg',
                    title: '형광펜 : 학습 중 중요한 내용에 표시할 수 있습니다.'
                  },
                  {
                    icon: 'penTool/ico_pen4.svg',
                    title: '지우개 : 펜으로 필기한 내용을 지울 수 있습니다.'
                  },
                  {
                    icon: 'penTool/ico_pen5.svg',
                    title: '실행취소 : 펜과 지우개 작업을 취소합니다.'
                  },
                  {
                    icon: 'penTool/ico_pen6.svg',
                    title: '재실행 : 실행취소된 펜/지우개 작업을 다시 실행합니다.'
                  },
                  {
                    icon: 'penTool/ico_pen7.svg',
                    title: '초기화 : 펜으로 필기한 작업을 초기화 합니다.'
                  }
                ]
              }
            ]
          },
          {
            title: '확대',
            icon: 'ico_menu8.svg',
            desc: '일반 학습 콘텐츠를 확대하여 크게 볼 수 있습니다.'
          },
          {
            title: '축소',
            icon: 'ico_menu9.svg',
            desc: '확대한 일반 콘텐츠를 다시 축소할 수 있습니다.'
          },
          {
            title: '수업시작',
            icon: 'ico_menu5.svg',
            desc: '수업을 시작합니다.<span>※ 수업이 시작되면<br> 학생현황에 접속자를 확인할 수 있습니다.</span>'
          },
          {
            title: '수업종료',
            icon: 'ico_menu5.svg',
            desc: '수업을 종료합니다.<span>※ 브라우저를 닫을 경우 자동으로 수업이 종료됩니다.</span><span>※ 평가 또는 활동이 진행중인 경우<br>수업을 종료하실 수 없습니다.</span>'
          },
          {
            title: '주목',
            icon: 'ico_menu6.svg',
            desc: '수업중 사용할 수 있는 기능으로 학생들의 화면을<br> 잠시 가려 선생님에게 집중할 수 있도록 도와줍니다.<span>※ 평가가 진행중일 땐 주목기능을 사용하실 수 없습니다.</span>'
          },
          {
            title: 'LMS',
            icon: 'ico_menu10.svg',
            desc: '학급 LMS를 열어 대시보드를 확인할 수 있습니다.'
          },
          {
            title: '설정',
            icon: 'ico_menu11.svg',
            desc: '뷰어를 설정을 할 수 있습니다.',
            depth2: [
              {
                title: '',
                desc: '',
                depth3: [
                  {
                    title: '<strong>학급설정</strong>학급별로 사용할 기능을 설정할 수 있습니다.'
                  },
                  {
                    title: '<strong>개인설정</strong>나의 손잡이방식에 맞게 메뉴의 위치를 변경할 수 있습니다.'
                  }
                ]
              }
            ]
          }
        ],
        student: [
          {
            title: '목록',
            icon: 'ico_menu1.svg',
            desc: '학습목록을 확인하고 학습을 할 수 있습니다.',
            depth2: [
              {
                title: '학습방식 아이콘',
                desc: '',
                depth3: [
                  {
                    icon: 'panel/ico_learn_method1.svg',
                    title: '수업시간에 선생님과 수업을 통해<br> 학습할 수 있는 수업기반 학습입니다.'
                  },
                  {
                    icon: 'panel/ico_learn_method2.svg',
                    title: '선생님이 설정한 학습일정에 맞춰<br> 학생 스스로 학습할 수 있는 스스로하기 학습입니다.'
                  }
                ]
              },
              {
                title: '학습유형 아이콘',
                desc: '',
                depth3: [
                  {
                    icon: 'panel/ico_learn_type1.svg',
                    title: '본문자료를 읽거나 영상을 학습할 수 있는 콘텐츠 입니다.'
                  },
                  {
                    icon: 'panel/ico_learn_type2.svg',
                    title: '평가 및 문제지 유형의 콘텐츠 입니다.'
                  },
                  {
                    icon: 'panel/ico_learn_type3.svg',
                    title: '보드를 통한 개인/모둠 활동형 콘텐츠 입니다.'
                  },
                  {
                    icon: 'panel/ico_learn_type4.svg',
                    title: '학습을 위해 선생님이 추가한 링크 유형의 콘텐츠 입니다.'
                  },
                  {
                    icon: 'panel/ico_learn_type5.svg',
                    title: '학습을 위해 선생님이 추가한 유튜브 유형의 콘텐츠 입니다.'
                  },
                  {
                    icon: 'panel/ico_learn_type6.svg',
                    title: '수업중 선생님이 공유한 판서 유형의 콘텐츠 입니다.'
                  }
                ]
              },
              {
                title: '수업상태 아이콘',
                desc: '학습 가능한 콘텐츠의 학습여부를 확인할 수 있습니다.',
                depth3: [
                  {
                    icon: 'panel/ico_learn_status1.svg',
                    title: '진행하지 않은 수업'
                  },
                  {
                    icon: 'panel/ico_learn_status2.svg',
                    title: '진행중인 수업'
                  },
                  {
                    icon: 'panel/ico_learn_status3.svg',
                    title: '완료한 수업'
                  }
                ]
              },
              {
                title: '기타 아이콘',
                desc: '',
                depth3: [
                  {
                    icon: 'panel/ico_student.svg',
                    title: '평가와 연계된 수준별학습의 학습분기 기준을 확인하고,<br> 채점완료 후 학습을 공유받은 학생을 확인할 수 있습니다.'
                  },
                  {
                    icon: 'panel/ico_ai.svg',
                    title: 'AI 기반으로 생성된 평가를 나타냅니다.'
                  },
                  {
                    layout: 'block',
                    icon: 'panel/ico_ai_recommend.svg',
                    title: 'A추천학습을 설정한 평가를 나타내며,<br>채점 후 점수에 따라 A가 학생에게 추천학습을 제공합니다.'
                  }
                ]
              }
            ]
          },
          {
            title: '채팅',
            icon: 'ico_menu3.svg',
            desc: '수업중 메시지를 통해 소통할 수 있습니다.',
            depth2: [
              {
                title: '',
                desc: '',
                depth3: [
                  {
                    icon: 'panel/ico_chat_new.svg',
                    title: '새로운 메시지 표시'
                  },
                  {
                    icon: 'panel/ico_chat_emoji.svg',
                    title: '이모티콘 목록을 보고, 메시지로 전송할 수 있습니다.'
                  }
                ]
              }
            ]
          },
          {
            title: '펜툴',
            icon: 'ico_menu7.svg',
            desc: '필기할 수 있는 필기도구를 열고 닫을 수 있습니다.',
            depth2: [
              {
                title: '',
                desc: '',
                depth3: [
                  {
                    icon: 'penTool/ico_pen1.svg',
                    title: '메모 : 학습 중 메모를 추가할 수 있습니다.'
                  },
                  {
                    icon: 'penTool/ico_pen2.svg',
                    title: '펜 : 일반 학습 콘텐츠에 필기할 수 있습니다.'
                  },
                  {
                    icon: 'penTool/ico_pen3.svg',
                    title: '형광펜 : 학습 중 중요한 내용에 표시할 수 있습니다.'
                  },
                  {
                    icon: 'penTool/ico_pen4.svg',
                    title: '지우개 : 펜으로 필기한 내용을 지울 수 있습니다.'
                  },
                  {
                    icon: 'penTool/ico_pen5.svg',
                    title: '실행취소 : 펜과 지우개 작업을 취소합니다.'
                  },
                  {
                    icon: 'penTool/ico_pen6.svg',
                    title: '재실행 : 실행취소된 펜/지우개 작업을 다시 실행합니다.'
                  },
                  {
                    icon: 'penTool/ico_pen7.svg',
                    title: '초기화 : 펜으로 필기한 작업을 초기화 합니다.'
                  }
                ]
              }
            ]
          },
          {
            title: '확대',
            icon: 'ico_menu8.svg',
            desc: '일반 학습 콘텐츠를 확대하여 크게 볼 수 있습니다.'
          },
          {
            title: '축소',
            icon: 'ico_menu9.svg',
            desc: '확대한 일반 콘텐츠를 다시 축소할 수 있습니다.'
          },
          {
            title: 'LMS',
            icon: 'ico_menu10.svg',
            desc: '학급 LMS를 열어 대시보드를 확인할 수 있습니다.'
          },
          {
            title: '설정',
            icon: 'ico_menu11.svg',
            desc: '뷰어를 설정을 할 수 있습니다.',
            depth2: [
              {
                title: '',
                desc: '',
                depth3: [
                  {
                    title: '<strong>개인설정</strong>나의 손잡이방식에 맞게 메뉴의 위치를 변경할 수 있습니다.'
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  },
  computed: {
    isTeacherMenu () {
      return this.$store.state.isTeacher
    },
    helpDataBranch () {
      return this.isTeacherMenu ? this.helpData.teacher : this.helpData.student
    }
  },
  mounted () {
    // document.querySelector('.help_panel').classList.add('active')
  },
  methods: {
    closePopup () {
      this.$store.commit('closePopup', 11)
    },
    accordionToggle (e) {
      const parentsLi = document.querySelectorAll('.help_content_wrap > li')
      const targetParent = e.target.closest('li')
      parentsLi.forEach(li => {
        if (li !== targetParent) {
          li.classList.remove('active')
        }
      })
      targetParent.classList.toggle('active')
    }
  }
}
</script>
