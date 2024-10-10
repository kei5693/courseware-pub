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
            <button type="button" class="btnPrev" @click="btnEvent('prev')"
              :disabled="disablePrevButton"><span>이전</span></button>
            <div>
              <ul ref="questionTab">
                <li v-for="(item, index) in questionList" :key="index" :style="{ width: tabWidth }"
                  :class="{ active: item.isActive === true }" @click="tabEvent(index)">
                  <a href="#">{{ item.question }}</a>
                </li>
              </ul>
            </div>
            <button type="button" class="btnNext" @click="btnEvent('next')"
              :disabled="disableNextButton"><span>다음</span></button>
          </div>
          <div class="tabContent">
            <div class="questionTop">
              <div class="inner">
                <div class="question">
                  <strong>문제16)</strong>
                  <h3>사이버 범죄 신고의 기관명과 홈페이지 및 전화번호를 조사해 적어보자.</h3>
                </div>

                <div class="answer">
                  <strong>정답</strong>
                  <div>
                    <div class="questionTable">
                      <table>
                        <caption>예시 답안 안내</caption>
                        <colgroup>
                          <col style="width: 220px;" />
                          <col />
                          <col />
                          <col />
                        </colgroup>
                        <thead>
                          <tr>
                            <th scope="col">구분</th>
                            <th scope="col">기관명</th>
                            <th scope="col">홈페이지</th>
                            <th scope="col">전화번호</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">저작권 피해 신고</th>
                            <td>한국저작권보호원</td>
                            <td><a href="#" target="_blank" title="새창 열림">https://www.kcopa.or.kr</a></td>
                            <td>1588-0190</td>
                          </tr>
                          <tr>
                            <th scope="row">개인 정보 침해 신고</th>
                            <td>인터넷진흥원 개인 정보 침해 신고 센터</td>
                            <td><a href="#" target="_blank" title="새창 열림">https://privacy.kisa.or.kr</a></td>
                            <td>118</td>
                          </tr>
                          <tr>
                            <th scope="row">사이버 명예 훼손 신고</th>
                            <td>방송통신심의위원회 인터넷 피해 구제 센터</td>
                            <td><a href="#" target="_blank" title="새창 열림">https://remedy.kocsc.or.kr</a></td>
                            <td>1377</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
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
                        <li class="correct"><span>정답</span><strong>7명</strong></li>
                        <li class="wrong"><span>오답</span><strong>5명</strong></li>
                        <li><span>제출전</span><strong>4명</strong></li>
                      </ul>
                    </div>
                    <p>정답률 58%</p>
                  </div>
                  <div class="detail">
                    <ol class="type2">
                      <li class="correct">
                        <span>1번</span>
                        <strong>강감찬강감찬</strong>
                        <div>
                          <div class="questionTable">
                            <table>
                              <caption>예시 답안 안내</caption>
                              <colgroup>
                                <col style="width: 220px;" />
                                <col />
                                <col />
                                <col />
                              </colgroup>
                              <thead>
                                <tr>
                                  <th scope="col">구분</th>
                                  <th scope="col">기관명</th>
                                  <th scope="col">홈페이지</th>
                                  <th scope="col">전화번호</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">저작권 피해 신고</th>
                                  <td>한국저작권보호원</td>
                                  <td><a href="#" target="_blank" title="새창 열림">https://www.kcopa.or.kr</a></td>
                                  <td>1588-0190</td>
                                </tr>
                                <tr>
                                  <th scope="row">개인 정보 침해 신고</th>
                                  <td>인터넷진흥원 개인 정보 침해 신고 센터</td>
                                  <td><a href="#" target="_blank" title="새창 열림">https://privacy.kisa.or.kr</a></td>
                                  <td>118</td>
                                </tr>
                                <tr>
                                  <th scope="row">사이버 명예 훼손 신고</th>
                                  <td>방송통신심의위원회 인터넷 피해 구제 센터</td>
                                  <td><a href="#" target="_blank" title="새창 열림">https://remedy.kocsc.or.kr</a></td>
                                  <td>1377</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </li>
                      <li class="wrong">
                        <span>2번</span>
                        <strong>권보아</strong>
                        <div>
                          <div class="questionTable">
                            <table>
                              <caption>예시 답안 안내</caption>
                              <colgroup>
                                <col style="width: 220px;" />
                                <col />
                                <col />
                                <col />
                              </colgroup>
                              <thead>
                                <tr>
                                  <th scope="col">구분</th>
                                  <th scope="col">기관명</th>
                                  <th scope="col">홈페이지</th>
                                  <th scope="col">전화번호</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">저작권 피해 신고</th>
                                  <td>한국저작권보호원</td>
                                  <td><a href="#" target="_blank" title="새창 열림">https://www.kcopa.or.kr</a></td>
                                  <td>1588-0190</td>
                                </tr>
                                <tr>
                                  <th scope="row">개인 정보 침해 신고</th>
                                  <td>인터넷진흥원 개인 정보 침해 신고 센터</td>
                                  <td><a href="#" target="_blank" title="새창 열림">https://privacy.kisa.or.kr</a></td>
                                  <td>118</td>
                                </tr>
                                <tr>
                                  <th scope="row">사이버 명예 훼손 신고</th>
                                  <td>방송통신심의위원회 인터넷 피해 구제 센터</td>
                                  <td><a href="#" target="_blank" title="새창 열림">https://remedy.kocsc.or.kr</a></td>
                                  <td>1377</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </li>
                      <li><span>3번</span>
                        <strong>김남준</strong>
                        <div>
                          <p>-</p>
                        </div>
                      </li>
                      <li class="correct">
                        <span>4번</span>
                        <strong>김석진</strong>
                        <div>
                          <div class="questionTable">
                            <table>
                              <caption>예시 답안 안내</caption>
                              <colgroup>
                                <col style="width: 220px;" />
                                <col />
                                <col />
                                <col />
                              </colgroup>
                              <thead>
                                <tr>
                                  <th scope="col">구분</th>
                                  <th scope="col">기관명</th>
                                  <th scope="col">홈페이지</th>
                                  <th scope="col">전화번호</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">저작권 피해 신고</th>
                                  <td>한국저작권보호원</td>
                                  <td><a href="#" target="_blank" title="새창 열림">https://www.kcopa.or.kr</a></td>
                                  <td>1588-0190</td>
                                </tr>
                                <tr>
                                  <th scope="row">개인 정보 침해 신고</th>
                                  <td>인터넷진흥원 개인 정보 침해 신고 센터</td>
                                  <td><a href="#" target="_blank" title="새창 열림">https://privacy.kisa.or.kr</a></td>
                                  <td>118</td>
                                </tr>
                                <tr>
                                  <th scope="row">사이버 명예 훼손 신고</th>
                                  <td>방송통신심의위원회 인터넷 피해 구제 센터</td>
                                  <td><a href="#" target="_blank" title="새창 열림">https://remedy.kocsc.or.kr</a></td>
                                  <td>1377</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </li>
                      <li class="correct">
                        <span>5번</span>
                        <strong>김정호</strong>
                        <div>
                          <div class="questionTable">
                            <table>
                              <caption>예시 답안 안내</caption>
                              <colgroup>
                                <col style="width: 220px;" />
                                <col />
                                <col />
                                <col />
                              </colgroup>
                              <thead>
                                <tr>
                                  <th scope="col">구분</th>
                                  <th scope="col">기관명</th>
                                  <th scope="col">홈페이지</th>
                                  <th scope="col">전화번호</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">저작권 피해 신고</th>
                                  <td>한국저작권보호원</td>
                                  <td><a href="#" target="_blank" title="새창 열림">https://www.kcopa.or.kr</a></td>
                                  <td>1588-0190</td>
                                </tr>
                                <tr>
                                  <th scope="row">개인 정보 침해 신고</th>
                                  <td>인터넷진흥원 개인 정보 침해 신고 센터</td>
                                  <td><a href="#" target="_blank" title="새창 열림">https://privacy.kisa.or.kr</a></td>
                                  <td>118</td>
                                </tr>
                                <tr>
                                  <th scope="row">사이버 명예 훼손 신고</th>
                                  <td>방송통신심의위원회 인터넷 피해 구제 센터</td>
                                  <td><a href="#" target="_blank" title="새창 열림">https://remedy.kocsc.or.kr</a></td>
                                  <td>1377</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
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
                      <li class="wrong">
                        <span>8번</span>
                        <strong>박지민</strong>
                        <div>
                          <div class="questionTable">
                            <table>
                              <caption>예시 답안 안내</caption>
                              <colgroup>
                                <col style="width: 220px;" />
                                <col />
                                <col />
                                <col />
                              </colgroup>
                              <thead>
                                <tr>
                                  <th scope="col">구분</th>
                                  <th scope="col">기관명</th>
                                  <th scope="col">홈페이지</th>
                                  <th scope="col">전화번호</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">저작권 피해 신고</th>
                                  <td>한국저작권보호원</td>
                                  <td><a href="#" target="_blank" title="새창 열림">https://www.kcopa.or.kr</a></td>
                                  <td>1588-0190</td>
                                </tr>
                                <tr>
                                  <th scope="row">개인 정보 침해 신고</th>
                                  <td>인터넷진흥원 개인 정보 침해 신고 센터</td>
                                  <td><a href="#" target="_blank" title="새창 열림">https://privacy.kisa.or.kr</a></td>
                                  <td>118</td>
                                </tr>
                                <tr>
                                  <th scope="row">사이버 명예 훼손 신고</th>
                                  <td>방송통신심의위원회 인터넷 피해 구제 센터</td>
                                  <td><a href="#" target="_blank" title="새창 열림">https://remedy.kocsc.or.kr</a></td>
                                  <td>1377</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </li>
                      <li class="wrong">
                        <span>9번</span>
                        <strong>박찬호</strong>
                        <div>
                          <div class="questionTable">
                            <table>
                              <caption>예시 답안 안내</caption>
                              <colgroup>
                                <col style="width: 220px;" />
                                <col />
                                <col />
                                <col />
                              </colgroup>
                              <thead>
                                <tr>
                                  <th scope="col">구분</th>
                                  <th scope="col">기관명</th>
                                  <th scope="col">홈페이지</th>
                                  <th scope="col">전화번호</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">저작권 피해 신고</th>
                                  <td>한국저작권보호원</td>
                                  <td><a href="#" target="_blank" title="새창 열림">https://www.kcopa.or.kr</a></td>
                                  <td>1588-0190</td>
                                </tr>
                                <tr>
                                  <th scope="row">개인 정보 침해 신고</th>
                                  <td>인터넷진흥원 개인 정보 침해 신고 센터</td>
                                  <td><a href="#" target="_blank" title="새창 열림">https://privacy.kisa.or.kr</a></td>
                                  <td>118</td>
                                </tr>
                                <tr>
                                  <th scope="row">사이버 명예 훼손 신고</th>
                                  <td>방송통신심의위원회 인터넷 피해 구제 센터</td>
                                  <td><a href="#" target="_blank" title="새창 열림">https://remedy.kocsc.or.kr</a></td>
                                  <td>1377</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </li>
                      <li class="correct">
                        <span>10번</span>
                        <strong>심순애</strong>
                        <div>
                          <div class="questionTable">
                            <table>
                              <caption>예시 답안 안내</caption>
                              <colgroup>
                                <col style="width: 220px;" />
                                <col />
                                <col />
                                <col />
                              </colgroup>
                              <thead>
                                <tr>
                                  <th scope="col">구분</th>
                                  <th scope="col">기관명</th>
                                  <th scope="col">홈페이지</th>
                                  <th scope="col">전화번호</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">저작권 피해 신고</th>
                                  <td>한국저작권보호원</td>
                                  <td><a href="#" target="_blank" title="새창 열림">https://www.kcopa.or.kr</a></td>
                                  <td>1588-0190</td>
                                </tr>
                                <tr>
                                  <th scope="row">개인 정보 침해 신고</th>
                                  <td>인터넷진흥원 개인 정보 침해 신고 센터</td>
                                  <td><a href="#" target="_blank" title="새창 열림">https://privacy.kisa.or.kr</a></td>
                                  <td>118</td>
                                </tr>
                                <tr>
                                  <th scope="row">사이버 명예 훼손 신고</th>
                                  <td>방송통신심의위원회 인터넷 피해 구제 센터</td>
                                  <td><a href="#" target="_blank" title="새창 열림">https://remedy.kocsc.or.kr</a></td>
                                  <td>1377</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </li>
                      <li class="wrong">
                        <span>11번</span>
                        <strong>권보아</strong>
                        <div>
                          <div class="questionTable">
                            <table>
                              <caption>예시 답안 안내</caption>
                              <colgroup>
                                <col style="width: 220px;" />
                                <col />
                                <col />
                                <col />
                              </colgroup>
                              <thead>
                                <tr>
                                  <th scope="col">구분</th>
                                  <th scope="col">기관명</th>
                                  <th scope="col">홈페이지</th>
                                  <th scope="col">전화번호</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">저작권 피해 신고</th>
                                  <td>한국저작권보호원</td>
                                  <td><a href="#" target="_blank" title="새창 열림">https://www.kcopa.or.kr</a></td>
                                  <td>1588-0190</td>
                                </tr>
                                <tr>
                                  <th scope="row">개인 정보 침해 신고</th>
                                  <td>인터넷진흥원 개인 정보 침해 신고 센터</td>
                                  <td><a href="#" target="_blank" title="새창 열림">https://privacy.kisa.or.kr</a></td>
                                  <td>118</td>
                                </tr>
                                <tr>
                                  <th scope="row">사이버 명예 훼손 신고</th>
                                  <td>방송통신심의위원회 인터넷 피해 구제 센터</td>
                                  <td><a href="#" target="_blank" title="새창 열림">https://remedy.kocsc.or.kr</a></td>
                                  <td>1377</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
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
        { isActive: false, question: '문제5' },
        { isActive: false, question: '문제6' },
        { isActive: false, question: '문제7' },
        { isActive: false, question: '문제8' },
        { isActive: false, question: '문제9' },
        { isActive: false, question: '문제10' },
        { isActive: false, question: '문제11' },
        { isActive: false, question: '문제12' },
        { isActive: false, question: '문제13' },
        { isActive: false, question: '문제14' }
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
