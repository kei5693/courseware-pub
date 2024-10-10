<template>
  <div class="contents color">
    <div class="inner">
      <!-- 콘텐츠 학습 현황 -->
      <div class="contentLearningStatus">
        <div class="submissionRate">
          <strong>제출률</strong>
          <div><span style="width: 60%;"></span></div>
          <p><span>60</span>%</p>
        </div>

        <div class="questionTabMenu">
          <div class="tabTitle">
            <button type="button" class="btnPrev" @click="btnEvent('prev')" :disabled="disablePrevButton"><span>이전</span></button>
            <div>
              <ul ref="questionTab">
                <li
                  v-for="(item, index) in questionList"
                  :key="index"
                  :style="{ width: tabWidth }"
                  :class="{ active: item.isActive === true }"
                  @click="tabEvent(index)"
                >
                  <a href="#">{{ item.question }}</a>
                </li>
              </ul>
            </div>
            <button type="button" class="btnNext" @click="btnEvent('next')" :disabled="disableNextButton"><span>다음</span></button>
          </div>
          <div class="tabContent">
            <div class="questionTop">
              <div class="inner">
                <div class="question">
                  <strong>문제11)</strong>
                  <h3>데이터 센터에서 발생하는 이산화탄소를 줄이기 위해 실천하고 있는 친환경 데이터 센터 사례를 찾아보자. 데이터 센터에서 발생하는 이산화탄소를 줄이기 위해 실천하고 있는 친환경 데이터 센터 사례를 찾아보자.</h3>
                </div>
              </div>
            </div>
            <div class="questionBottom">
              <div class="inner">
                <div class="resultWrap">
                  <div class="summary">
                    <div>
                      <strong>전체 16명</strong>
                      <ul>
                        <li class="submission"><span>제출</span><strong>12명</strong></li>
                        <li><span>미제출</span><strong>4명</strong></li>
                      </ul>
                    </div>
                  </div>
                  <div class="detail">
                    <ol>
                      <li class="submission">
                        <span>1번</span>
                        <strong>강감찬강감찬</strong>
                        <div>
                          <p>학생이 입력한 내용이 모두 노출됩니다</p>
                        </div>
                      </li>
                      <li class="submission">
                        <span>2번</span>
                        <strong>권보아</strong>
                        <div>
                          <p>학생이 입력한 내용이 모두 노출됩니다</p>
                        </div>
                      </li>
                      <li>
                        <span>3번</span>
                        <strong>김남준</strong>
                        <div>
                          <p>-</p>
                        </div>
                      </li>
                      <li class="submission">
                        <span>4번</span>
                        <strong>김석진</strong>
                        <div>
                          <p>학생이 입력한 내용이 모두 노출됩니다</p>
                        </div>
                      </li>
                      <li class="submission">
                        <span>5번</span>
                        <strong>김정호</strong>
                        <div>
                          <p>학생이 입력한 내용이 모두 노출됩니다</p>
                        </div>
                      </li>
                      <li>
                        <span>6번</span>
                        <strong>김태형</strong>
                        <div>
                          <p>-</p>
                        </div>
                      </li>
                      <li>
                        <span>7번</span>
                        <strong>민윤기</strong>
                        <div>
                          <p>-</p>
                        </div>
                      </li>
                      <li class="submission">
                        <span>8번</span>
                        <strong>박지민</strong>
                        <div>
                          <p>학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다.
                            학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다.
                          </p>
                        </div>
                      </li>
                      <li class="submission">
                        <span>9번</span>
                        <strong>박찬호</strong>
                        <div>
                          <p>학생이 입력한 내용이 모두 노출됩니다</p>
                        </div>
                      </li>
                      <li class="submission">
                        <span>10번</span>
                        <strong>강감찬강감찬</strong>
                        <div>
                          <p>학생이 입력한 내용이 모두 노출됩니다</p>
                        </div>
                      </li>
                      <li class="submission">
                        <span>11번</span>
                        <strong>강감찬강감찬</strong>
                        <div>
                          <p>학생이 입력한 내용이 모두 노출됩니다</p>
                        </div>
                      </li>
                      <li class="submission">
                        <span>12번</span>
                        <strong>권보아</strong>
                        <div>
                          <p>학생이 입력한 내용이 모두 노출됩니다</p>
                        </div>
                      </li>
                      <li>
                        <span>13번</span>
                        <strong>김남준</strong>
                        <div>
                          <p>-</p>
                        </div>
                      </li>
                      <li class="submission">
                        <span>14번</span>
                        <strong>김석진</strong>
                        <div>
                          <p>학생이 입력한 내용이 모두 노출됩니다</p>
                        </div>
                      </li>
                      <li class="submission">
                        <span>15번</span>
                        <strong>김정호</strong>
                        <div>
                          <p>학생이 입력한 내용이 모두 노출됩니다</p>
                        </div>
                      </li>
                      <li>
                        <span>16번</span>
                        <strong>김태형</strong>
                        <div>
                          <p>-</p>
                        </div>
                      </li>
                      <li>
                        <span>17번</span>
                        <strong>민윤기</strong>
                        <div>
                          <p>-</p>
                        </div>
                      </li>
                      <li class="submission">
                        <span>18번</span>
                        <strong>박지민</strong>
                        <div>
                          <p>학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다.
                            학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다.
                          </p>
                        </div>
                      </li>
                      <li class="submission">
                        <span>19번</span>
                        <strong>박찬호</strong>
                        <div>
                          <p>학생이 입력한 내용이 모두 노출됩니다</p>
                        </div>
                      </li>
                      <li class="submission">
                        <span>20번</span>
                        <strong>박지민</strong>
                        <div>
                          <p>학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다.
                            학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다.
                          </p>
                        </div>
                      </li>
                      <li class="submission">
                        <span>21번</span>
                        <strong>박지민</strong>
                        <div>
                          <p>학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다.
                            학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다. 학생이 입력한 내용이 모두 노출됩니다.
                          </p>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 학습현황 -->
        <div class="learningStatusBtn opened">
          <button type="button"><span>닫기</span></button>
          <!-- <lottie-player
            autoplay
            loop
            mode="normal"
            src="/assets/json/learning.json"
            style="width: 60px; height: 60px;"
          >
          </lottie-player> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      isActive: false,
      tabMenuWidth: 0,
      tabWidth: 0,
      currentIdx: 0,
      currentTabIdx: 0,
      tabMoveValue: 0,
      questionList: [
        { isActive: true, question: '문제1' },
        { isActive: false, question: '문제2' },
        { isActive: false, question: '문제3' },
        { isActive: false, question: '문제4' },
        { isActive: false, question: '문제5' }
      ]
    }
  },
  computed: {
    disablePrevButton () {
      return this.currentTabIdx === 0 || this.questionList.length <= 10
    },
    disableNextButton () {
      return this.currentTabIdx >= this.tabLimit - 1 || this.questionList.length <= 10
    },
    tabLimit () {
      return Math.ceil(this.questionList.length / 10)
    }
  },
  mounted () {
    this.updateMenuWidth()

    this.$nextTick(() => {
      window.addEventListener('resize', this.updateMenuWidth)
      this.updateMenuWidth()
    })
  },
  methods: {
    updateMenuWidth () {
      this.tabMenuWidth = this.$refs.questionTab.offsetWidth - 4
      this.tabWidth = (this.$refs.questionTab.offsetWidth - 36) / 10 + 'px'
    },
    tabEvent (idx) {
      this.questionList.forEach((el, index) => {
        if (index === idx) {
          el.isActive = true
        } else {
          el.isActive = false
        }
      })
    },
    btnEvent (value) {
      if (value === 'next') {
        this.currentTabIdx = Math.min(this.currentTabIdx + 1, this.tabLimit - 1)
      } else {
        this.currentTabIdx = Math.max(this.currentTabIdx - 1, 0)
      }

      this.tabMoveValue = this.currentTabIdx > 0
        ? (this.$refs.questionTab.offsetWidth * this.currentTabIdx) + (4 * this.currentTabIdx)
        : 0

      this.$refs.questionTab.style.transform = `translateX(-${this.tabMoveValue}px)`
    }
  }
}
</script>
