<template>
  <div
    class="panel_wrap list_panel"
    :class="{in_class: inClass}"
  >
    <div class="panel_header">
      <div class="inner">
        <div class="title">
          <img :src="require(`@/assets/images/panel/${issueData.logo}.png`)" alt="" />
          <h2><span>[{{issueData.number}}차시]</span> <strong>{{issueData.title}}</strong></h2>
        </div>
        <div
          class="object_wrap"
          :class="{active: issueData.showObjectives}"
        >
          <button type="button" @click="ObjectiveToggle"><span>학습목표</span></button>
          <div class="object_content">
            <div class="inner" v-html="issueData.objectives"></div>
          </div>
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
        <div class="learning_list_wrap">
          <div>
            <h3>학습목록</h3>
            <ul class="learning_list">
              <li
                v-for="(list, index) in getLearningList"
                :key="`list${index}`"
                :class="{disabled: list.disabled, toggle_list: list.status === 4}"
              >
                <div class="inner">
                  <div class="title">
                    <div>
                      <img :src="require(`@/assets/images/panel/ico_learn_method${list.disabled ? '_dis':''}${list.method}.svg`)" alt="" />
                      <img :src="require(`@/assets/images/panel/ico_learn_type${list.disabled ? '_dis':''}${list.type}.svg`)" alt="" />
                      <img v-if="list.aiEval" :src="require(`@/assets/images/panel/ico_ai.svg`)" alt="" />
                      <p>{{ list.title }}</p>
                    </div>
                    <!-- list.status 1,2,3 이미지 -->
                    <img
                      :style="[list.data ? {'display': 'none'} : '']"
                      :src="0 < list.status && list.status <= 3 ? require(`@/assets/images/panel/ico_learn_status${list.status}.svg`) : ''" alt=""
                    />
                    <!-- list.status 4 버튼-->
                    <div class="learning_object_wrap" v-if="list.status === 4">
                      <button
                        type="button"
                        class="btn_learning_object"
                      >
                        <span @click="showPopup($event)">학습대상보기</span>
                      </button>
                    </div>
                    <!-- list.status 5 -->
                    <span class="ai_recommend" v-if="list.status === 5">AI 추천학습제공</span>
                  </div>
                  <div class="content" v-if="list.status === 4">
                    <div class="inner_wrap">
                      <dl><dt>학습목록</dt><dd>0 ~ 100점 학습자에게 제공</dd></dl>
                      <dl><dt>공유대상</dt><dd>{{byLevelData.length}}명</dd></dl>
                      <ul>
                        <li
                          v-for="(data,index) in byLevelData"
                          :key="`data${index}`"
                        >
                          <p>{{ data.name }} <span>{{ data.score }}</span>점</p>
                        </li>
                      </ul>
                      <div class="noti_txt">
                        <p>연계평가 결과에 따라 수준별학습이 제공되는 학습자입니다.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <ul class="sub_menu" v-if="list.status !== 4">
                  <li
                    v-for="(subData, index) in list.data"
                    :key="`subData${index}`"
                  >
                    <div class="inner">
                      <div class="title">
                        <div>
                          <img :src="require(`@/assets/images/panel/ico_learn_type${list.disabled ? '_dis':''}${subData.type}.svg`)" alt="" />
                          <img v-if="subData.aiEval" :src="require(`@/assets/images/panel/ico_ai.svg`)" alt="" />
                          <p>{{ list.title }}</p>
                        </div>
                        <div class="learning_object_wrap">
                          <button
                            type="button"
                            class="btn_learning_object"
                          >
                            <span @click="showPopup($event)">학습대상보기</span>
                          </button>
                        </div>
                      </div>
                      <div class="content">
                        <div class="inner_wrap">
                          <dl><dt>학습목록</dt><dd>0 ~ 100점 학습자에게 제공</dd></dl>
                          <dl><dt>공유대상</dt><dd>{{byLevelData.length}}명</dd></dl>
                          <ul>
                            <li
                              v-for="(data,index) in byLevelData"
                              :key="`data${index}`"
                            >
                              <p>{{index+1}}번 {{ data.name }} <span>{{ data.score }}</span>점</p>
                            </li>
                          </ul>
                          <div class="noti_txt">
                            <p>연계평가 결과에 따라 수준별학습이 제공되는 학습자입니다.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div>
            <h3>Ai추천 콘텐츠</h3>
            <ul class="learning_list">
              <li
                v-for="(list, index) in getAiTutor"
                :key="`list${index}`"
                :class="{disabled: list.disabled}"
              >
                <div class="inner">
                  <div class="title">
                    <div>
                      <img :src="require(`@/assets/images/panel/ico_learn_method${list.disabled ? '_dis':''}${list.method}.svg`)" alt="" />
                      <img :src="require(`@/assets/images/panel/ico_learn_type${list.disabled ? '_dis':''}${list.type}.svg`)" alt="" />
                      <p>{{ list.title }}</p>
                    </div>
                    <img :src="require(`@/assets/images/panel/ico_learn_status${list.status}.svg`)" alt="" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="panel_footer">
      <!-- 교사가 수업중인 경우 노출 -->
      <ul class="exclusive_menu" v-if="inClass">
        <li
          v-for="(exMenu, index) in issueData.exclusive"
          :key="`exMenu${index}`"
          >
          <a href="#">{{ exMenu }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inClass: true,
      issueData: {
        logo: 'logo_daekyo',
        number: 2,
        title: '삼각형을 분류해 봅시다. 삼각형을 분류해 봅시다.',
        objectives: '여러가지 모양의 삼각형에 대한 분류 활동을통하여<br>이등변삼각형을 이해하고, 그 성질을 탐구하고 설명할 수 있다.여러가지 모양의 삼각형에 대한 분류 활동을통하여<br>이등변삼각형을 이해하고, 그 성질을 탐구하고 설명할 수 있다.여러가지 모양의 삼각형에 대한 분류 활동을통하여<br>이등변삼각형을 이해하고, 그 성질을 탐구하고 설명할 수 있다.여러가지 모양의 삼각형에 대한 분류 활동을통하여<br>이등변삼각형을 이해하고, 그 성질을 탐구하고 설명할 수 있다.여러가지 모양의 삼각형에 대한 분류 활동을통하여<br>이등변삼각형을 이해하고, 그 성질을 탐구하고 설명할 수 있다.여러가지 모양의 삼각형에 대한 분류 활동을통하여<br>이등변삼각형을 이해하고, 그 성질을 탐구하고 설명할 수 있다.여러가지 모양의 삼각형에 대한 분류 활동을통하여<br>이등변삼각형을 이해하고, 그 성질을 탐구하고 설명할 수 있다.여러가지 모양의 삼각형에 대한 분류 활동을통하여<br>이등변삼각형을 이해하고, 그 성질을 탐구하고 설명할 수 있다.여러가지 모양의 삼각형에 대한 분류 활동을통하여<br>이등변삼각형을 이해하고, 그 성질을 탐구하고 설명할 수 있다.여러가지 모양의 삼각형에 대한 분류 활동을통하여<br>이등변삼각형을 이해하고, 그 성질을 탐구하고 설명할 수 있다.',
        exclusive: [
          '활동보드추가',
          'AI평가추가',
          '참고자료추가',
          '판서보드'
        ],
        showObjectives: false
      },
      learningData: [
        {
          disabled: true,
          method: 1,
          type: 1,
          aiEval: false,
          title: '학습명이 노출됩니다. 학습명이 노출됩니다. 학습명이 노출됩니다.',
          status: 1
        },
        {
          disabled: false,
          method: 1,
          type: 1,
          aiEval: false,
          title: '학습명이 노출됩니다.',
          status: 2
        },
        {
          disabled: true,
          method: 1,
          type: 2,
          aiEval: false,
          title: '학습명이 노출됩니다.',
          status: 1
        },
        {
          disabled: false,
          method: 1,
          type: 2,
          aiEval: false,
          title: '학습명이 노출됩니다.',
          status: 2
        },
        {
          disabled: true,
          method: 1,
          type: 3,
          aiEval: false,
          title: '학습명이 노출됩니다.',
          status: 1
        },
        {
          disabled: false,
          method: 1,
          type: 3,
          aiEval: false,
          title: '학습명이 노출됩니다.',
          status: 3
        },
        {
          disabled: true,
          method: 1,
          type: 4,
          aiEval: false,
          title: '[진단/형성/총괄평가] 문제은행 기반',
          status: 0
        },
        {
          disabled: false,
          method: 1,
          type: 4,
          aiEval: true,
          title: '[진단/형성/총괄평가] 문제은행 기반 [진단/형성/총괄평가] 문제은행 기반',
          status: 5
        },
        {
          disabled: false,
          method: 1,
          type: 4,
          aiEval: false,
          title: '[진단/형성/총괄평가] 문제은행 기반 [진단/형성/총괄평가] 문제은행 기반',
          status: 5
        },
        {
          disabled: false,
          method: 1,
          type: 4,
          aiEval: false,
          title: '[진단/형성/총괄평가] 문제은행 기반',
          status: 3,
          data: [
            {
              type: 4,
              aiEval: true,
              title: '[보충/심화 자료] 문제은행 기반'
            },
            {
              type: 5,
              aiEval: false,
              title: '[보충/심화 자료] HTML 기반'
            }
          ]
        },
        {
          disabled: true,
          method: 2,
          type: 6,
          title: '[진단/형성/총괄평가] 유튜브 참고자료인 경우',
          status: 0
        },
        {
          disabled: false,
          method: 2,
          type: 6,
          title: '[진단/형성/총괄평가] 유튜브 참고자료인 경우',
          status: 3,
          data: [
            {
              type: 7,
              title: '[보충/심화 자료] 판서보드 기반'
            }
          ]
        },
        {
          disabled: true,
          method: 3,
          type: 1,
          title: '학습명이 노출됩니다.1',
          status: 1
        },
        {
          disabled: false,
          method: 3,
          type: 1,
          title: '학습명이 노출됩니다.2',
          status: 2
        },
        {
          disabled: false,
          method: 3,
          type: 1,
          title: '학습명이 노출됩니다.3',
          status: 2
        },
        {
          disabled: false,
          method: 3,
          type: 1,
          title: '학습명이 노출됩니다.4',
          status: 3
        },
        {
          disabled: false,
          method: 3,
          type: 1,
          title: '학습명이 노출됩니다.5',
          status: 3
        }
      ],
      byLevelData: [
        { name: '김강감찬', score: 80 },
        { name: '권보아', score: 99 },
        { name: '김남준', score: 100 },
        { name: '김태형', score: 80 },
        { name: '민윤기', score: 100 },
        { name: '박지민', score: 100 },
        { name: '심수봉', score: 60 },
        { name: '안중근', score: 100 },
        { name: '장영실', score: 100 },
        { name: '홍두깨', score: 45 },
        { name: '김석진', score: 100 },
        { name: '김정호', score: 85 },
        { name: '홍길동', score: 32 },
        { name: '박찬호', score: 95 },
        { name: '심순애', score: 70 },
        { name: '정약용', score: 100 }
      ]
    }
  },
  computed: {
    getLearningList () {
      const result = this.learningData.filter(el => el.method !== 3)
      return result
    },
    getAiTutor () {
      const result = this.learningData.filter(el => el.method === 3)
      return result
    }
  },
  mounted () {
    document.addEventListener('click', (e) => {
      if (e.target.closest('#container')) {
        this.isShowPopup = false
      }
    })
  },
  methods: {
    ObjectiveToggle () {
      this.issueData.showObjectives = !this.issueData.showObjectives
    },
    showPopup (e) {
      e.target.closest('li').classList.toggle('active')
    },
    closePopup () {
      this.$store.commit('closePopup', 0)
    }
  }
}
</script>
