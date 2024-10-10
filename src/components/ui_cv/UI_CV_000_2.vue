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
                  <strong>문제2)</strong>
                  <h3>정보과학의 지식과 기술이 경제 분야와 스포츠 분야 등에서 활용되고 있는 사례를 조사하여 발표해 보자.</h3>
                </div>
                <div class="exampleAnswer">
                  <strong>예시 답안</strong>
                  <div class="questionTable">
                    <table>
                      <caption>예시 답안 안내</caption>
                      <colgroup>
                        <col style="width: 136px;" />
                        <col style="width: 136px;" />
                        <col />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th scope="row">경제분야</th>
                          <td>금융</td>
                          <td>은행과 금융 기관은 고객의 거래 데이터를 분석하여 맞춤형 금융 상품을 제공하고 사기 행위를 탐지합니다.</td>
                        </tr>
                        <tr>
                          <th scope="row">스포츠 분야</th>
                          <td>데이터분석</td>
                          <td>선수의 경기 데이터를 분석하여 퍼포먼스를 향상시키고 부상을 예방합니다.</td>
                        </tr>
                        <tr>
                          <th scope="row">발행사</th>
                          <td>맞춤형 치료</td>
                          <td>유전자 데이터를 분석하여 개인 맞춤형 치료법을 개발하고 적용합니다.</td>
                        </tr>
                      </tbody>
                    </table>
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
                          <div class="questionTable">
                            <table>
                              <caption>예시 답안 안내</caption>
                              <colgroup>
                                <col style="width: 136px;" />
                                <col style="width: 136px;" />
                                <col />
                              </colgroup>
                              <tbody>
                                <tr>
                                  <th scope="row">경제분야</th>
                                  <td>금융</td>
                                  <td>은행과 금융 기관은 고객의 거래 데이터를 분석하여 맞춤형 금융 상품을 제공하고 사기 행위를 탐지합니다.</td>
                                </tr>
                                <tr>
                                  <th scope="row">스포츠 분야</th>
                                  <td>데이터분석</td>
                                  <td>선수의 경기 데이터를 분석하여 퍼포먼스를 향상시키고 부상을 예방합니다.</td>
                                </tr>
                                <tr>
                                  <th scope="row">발행사</th>
                                  <td>맞춤형 치료</td>
                                  <td>유전자 데이터를 분석하여 개인 맞춤형 치료법을 개발하고 적용합니다.</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </li>
                      <li class="submission">
                        <span>2번</span>
                        <strong>권보아</strong>
                        <div>
                          <div class="questionTable">
                            <table>
                              <caption>예시 답안 안내</caption>
                              <colgroup>
                                <col style="width: 136px;" />
                                <col style="width: 136px;" />
                                <col />
                              </colgroup>
                              <tbody>
                                <tr>
                                  <th scope="row">경제분야</th>
                                  <td>금융</td>
                                  <td>은행과 금융 기관은 고객의 거래 데이터를 분석하여 맞춤형 금융 상품을 제공하고 사기 행위를 탐지합니다.</td>
                                </tr>
                                <tr>
                                  <th scope="row">스포츠 분야</th>
                                  <td>데이터분석</td>
                                  <td>선수의 경기 데이터를 분석하여 퍼포먼스를 향상시키고 부상을 예방합니다.</td>
                                </tr>
                                <tr>
                                  <th scope="row">발행사</th>
                                  <td>맞춤형 치료</td>
                                  <td>유전자 데이터를 분석하여 개인 맞춤형 치료법을 개발하고 적용합니다.</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
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
                          <div class="questionTable">
                            <table>
                              <caption>예시 답안 안내</caption>
                              <colgroup>
                                <col style="width: 136px;" />
                                <col style="width: 136px;" />
                                <col />
                              </colgroup>
                              <tbody>
                                <tr>
                                  <th scope="row">경제분야</th>
                                  <td>금융</td>
                                  <td>은행과 금융 기관은 고객의 거래 데이터를 분석하여 맞춤형 금융 상품을 제공하고 사기 행위를 탐지합니다.</td>
                                </tr>
                                <tr>
                                  <th scope="row">스포츠 분야</th>
                                  <td>데이터분석</td>
                                  <td>선수의 경기 데이터를 분석하여 퍼포먼스를 향상시키고 부상을 예방합니다.</td>
                                </tr>
                                <tr>
                                  <th scope="row">발행사</th>
                                  <td>맞춤형 치료</td>
                                  <td>유전자 데이터를 분석하여 개인 맞춤형 치료법을 개발하고 적용합니다.</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </li>
                      <li class="submission">
                        <span>5번</span>
                        <strong>김정호</strong>
                        <div>
                          <div class="questionTable">
                            <table>
                              <caption>예시 답안 안내</caption>
                              <colgroup>
                                <col style="width: 136px;" />
                                <col style="width: 136px;" />
                                <col />
                              </colgroup>
                              <tbody>
                                <tr>
                                  <th scope="row">경제분야</th>
                                  <td>금융</td>
                                  <td>은행과 금융 기관은 고객의 거래 데이터를 분석하여 맞춤형 금융 상품을 제공하고 사기 행위를 탐지합니다.</td>
                                </tr>
                                <tr>
                                  <th scope="row">스포츠 분야</th>
                                  <td>데이터분석</td>
                                  <td>선수의 경기 데이터를 분석하여 퍼포먼스를 향상시키고 부상을 예방합니다.</td>
                                </tr>
                                <tr>
                                  <th scope="row">발행사</th>
                                  <td>맞춤형 치료</td>
                                  <td>유전자 데이터를 분석하여 개인 맞춤형 치료법을 개발하고 적용합니다.</td>
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
                      <li class="submission">
                        <span>8번</span>
                        <strong>박지민</strong>
                        <div>
                          <div class="questionTable">
                            <table>
                              <caption>예시 답안 안내</caption>
                              <colgroup>
                                <col style="width: 136px;" />
                                <col style="width: 136px;" />
                                <col />
                              </colgroup>
                              <tbody>
                                <tr>
                                  <th scope="row">경제분야</th>
                                  <td>금융</td>
                                  <td>은행과 금융 기관은 고객의 거래 데이터를 분석하여 맞춤형 금융 상품을 제공하고 사기 행위를 탐지합니다.</td>
                                </tr>
                                <tr>
                                  <th scope="row">스포츠 분야</th>
                                  <td>데이터분석</td>
                                  <td>선수의 경기 데이터를 분석하여 퍼포먼스를 향상시키고 부상을 예방합니다.</td>
                                </tr>
                                <tr>
                                  <th scope="row">발행사</th>
                                  <td>맞춤형 치료</td>
                                  <td>유전자 데이터를 분석하여 개인 맞춤형 치료법을 개발하고 적용합니다.</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </li>
                      <li class="submission">
                        <span>9번</span>
                        <strong>박찬호</strong>
                        <div>
                          <div class="questionTable">
                            <table>
                              <caption>예시 답안 안내</caption>
                              <colgroup>
                                <col style="width: 136px;" />
                                <col style="width: 136px;" />
                                <col />
                              </colgroup>
                              <tbody>
                                <tr>
                                  <th scope="row">경제분야</th>
                                  <td>금융</td>
                                  <td>은행과 금융 기관은 고객의 거래 데이터를 분석하여 맞춤형 금융 상품을 제공하고 사기 행위를 탐지합니다.</td>
                                </tr>
                                <tr>
                                  <th scope="row">스포츠 분야</th>
                                  <td>데이터분석</td>
                                  <td>선수의 경기 데이터를 분석하여 퍼포먼스를 향상시키고 부상을 예방합니다.</td>
                                </tr>
                                <tr>
                                  <th scope="row">발행사</th>
                                  <td>맞춤형 치료</td>
                                  <td>유전자 데이터를 분석하여 개인 맞춤형 치료법을 개발하고 적용합니다.</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </li>
                      <li class="submission">
                        <span>10번</span>
                        <strong>강감찬강감찬</strong>
                        <div>
                          <div class="questionTable">
                            <table>
                              <caption>예시 답안 안내</caption>
                              <colgroup>
                                <col style="width: 136px;" />
                                <col style="width: 136px;" />
                                <col />
                              </colgroup>
                              <tbody>
                                <tr>
                                  <th scope="row">경제분야</th>
                                  <td>금융</td>
                                  <td>은행과 금융 기관은 고객의 거래 데이터를 분석하여 맞춤형 금융 상품을 제공하고 사기 행위를 탐지합니다.</td>
                                </tr>
                                <tr>
                                  <th scope="row">스포츠 분야</th>
                                  <td>데이터분석</td>
                                  <td>선수의 경기 데이터를 분석하여 퍼포먼스를 향상시키고 부상을 예방합니다.</td>
                                </tr>
                                <tr>
                                  <th scope="row">발행사</th>
                                  <td>맞춤형 치료</td>
                                  <td>유전자 데이터를 분석하여 개인 맞춤형 치료법을 개발하고 적용합니다.</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </li>
                      <li class="submission">
                        <span>11번</span>
                        <strong>강감찬강감찬</strong>
                        <div>
                          <div class="questionTable">
                            <table>
                              <caption>예시 답안 안내</caption>
                              <colgroup>
                                <col style="width: 136px;" />
                                <col style="width: 136px;" />
                                <col />
                              </colgroup>
                              <tbody>
                                <tr>
                                  <th scope="row">경제분야</th>
                                  <td>금융</td>
                                  <td>은행과 금융 기관은 고객의 거래 데이터를 분석하여 맞춤형 금융 상품을 제공하고 사기 행위를 탐지합니다.</td>
                                </tr>
                                <tr>
                                  <th scope="row">스포츠 분야</th>
                                  <td>데이터분석</td>
                                  <td>선수의 경기 데이터를 분석하여 퍼포먼스를 향상시키고 부상을 예방합니다.</td>
                                </tr>
                                <tr>
                                  <th scope="row">발행사</th>
                                  <td>맞춤형 치료</td>
                                  <td>유전자 데이터를 분석하여 개인 맞춤형 치료법을 개발하고 적용합니다.</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </li>
                      <li class="submission">
                        <span>12번</span>
                        <strong>권보아</strong>
                        <div>
                          <div class="questionTable">
                            <table>
                              <caption>예시 답안 안내</caption>
                              <colgroup>
                                <col style="width: 136px;" />
                                <col style="width: 136px;" />
                                <col />
                              </colgroup>
                              <tbody>
                                <tr>
                                  <th scope="row">경제분야</th>
                                  <td>금융</td>
                                  <td>은행과 금융 기관은 고객의 거래 데이터를 분석하여 맞춤형 금융 상품을 제공하고 사기 행위를 탐지합니다.</td>
                                </tr>
                                <tr>
                                  <th scope="row">스포츠 분야</th>
                                  <td>데이터분석</td>
                                  <td>선수의 경기 데이터를 분석하여 퍼포먼스를 향상시키고 부상을 예방합니다.</td>
                                </tr>
                                <tr>
                                  <th scope="row">발행사</th>
                                  <td>맞춤형 치료</td>
                                  <td>유전자 데이터를 분석하여 개인 맞춤형 치료법을 개발하고 적용합니다.</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
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
                          <div class="questionTable">
                            <table>
                              <caption>예시 답안 안내</caption>
                              <colgroup>
                                <col style="width: 136px;" />
                                <col style="width: 136px;" />
                                <col />
                              </colgroup>
                              <tbody>
                                <tr>
                                  <th scope="row">경제분야</th>
                                  <td>금융</td>
                                  <td>은행과 금융 기관은 고객의 거래 데이터를 분석하여 맞춤형 금융 상품을 제공하고 사기 행위를 탐지합니다.</td>
                                </tr>
                                <tr>
                                  <th scope="row">스포츠 분야</th>
                                  <td>데이터분석</td>
                                  <td>선수의 경기 데이터를 분석하여 퍼포먼스를 향상시키고 부상을 예방합니다.</td>
                                </tr>
                                <tr>
                                  <th scope="row">발행사</th>
                                  <td>맞춤형 치료</td>
                                  <td>유전자 데이터를 분석하여 개인 맞춤형 치료법을 개발하고 적용합니다.</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </li>
                      <li class="submission">
                        <span>15번</span>
                        <strong>김정호</strong>
                        <div>
                          <div class="questionTable">
                            <table>
                              <caption>예시 답안 안내</caption>
                              <colgroup>
                                <col style="width: 136px;" />
                                <col style="width: 136px;" />
                                <col />
                              </colgroup>
                              <tbody>
                                <tr>
                                  <th scope="row">경제분야</th>
                                  <td>금융</td>
                                  <td>은행과 금융 기관은 고객의 거래 데이터를 분석하여 맞춤형 금융 상품을 제공하고 사기 행위를 탐지합니다.</td>
                                </tr>
                                <tr>
                                  <th scope="row">스포츠 분야</th>
                                  <td>데이터분석</td>
                                  <td>선수의 경기 데이터를 분석하여 퍼포먼스를 향상시키고 부상을 예방합니다.</td>
                                </tr>
                                <tr>
                                  <th scope="row">발행사</th>
                                  <td>맞춤형 치료</td>
                                  <td>유전자 데이터를 분석하여 개인 맞춤형 치료법을 개발하고 적용합니다.</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
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
                          <div class="questionTable">
                            <table>
                              <caption>예시 답안 안내</caption>
                              <colgroup>
                                <col style="width: 136px;" />
                                <col style="width: 136px;" />
                                <col />
                              </colgroup>
                              <tbody>
                                <tr>
                                  <th scope="row">경제분야</th>
                                  <td>금융</td>
                                  <td>은행과 금융 기관은 고객의 거래 데이터를 분석하여 맞춤형 금융 상품을 제공하고 사기 행위를 탐지합니다.</td>
                                </tr>
                                <tr>
                                  <th scope="row">스포츠 분야</th>
                                  <td>데이터분석</td>
                                  <td>선수의 경기 데이터를 분석하여 퍼포먼스를 향상시키고 부상을 예방합니다.</td>
                                </tr>
                                <tr>
                                  <th scope="row">발행사</th>
                                  <td>맞춤형 치료</td>
                                  <td>유전자 데이터를 분석하여 개인 맞춤형 치료법을 개발하고 적용합니다.</td>
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
