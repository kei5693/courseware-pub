<template>
  <div class="contents">
    <div class="title_box">
      <h2>평가명이 노출됩니다. 평가명이 한줄로 노출됩니다. 평가명이 한줄로 노출됩니다. 평가명이 한줄로 노출됩니다. 평가명이 한줄로 노출됩니다. 평가명이 한줄로 노출됩니다.</h2>
      <div class="examination eval">
        <span class="status">평가중</span>
        <div class="eval_time_info">
          <span>평가시간</span>
          <strong>mm분 ss초</strong>
        </div>
        <div class="btn_box">
          <button type="button" class="common_btn"><span>평가완료</span></button>
        </div>
      </div>
    </div>

    <div class="inner">
      <div class="eval_status_wrap">
        <div class="eval_status">
          <div class="status">
            <strong>전체 <span>16</span>명</strong>
            <ul>
              <li class="exam_completed"><span>응시완료</span><strong>3명</strong></li>
              <li class="taking_test"><span>응시중</span><strong>4명</strong></li>
              <li><span>미응시</span><strong>9명</strong></li>
            </ul>
          </div>

          <div class="announce">
            <ul>
              <li class="current_location">현재위치</li>
              <li>미답변</li>
              <li class="answer">답변</li>
            </ul>

            <ul>
              <li class="scoring_waiting">채점 대기</li>
              <li class="correct_answer">정답</li>
              <li class="incorrect_answer">오답</li>
            </ul>

            <button type="button" title="새로고침" class="btn_refresh"><span>새로고침</span></button>
          </div>
        </div>
        <ul class="eval_status_list">
          <!-- 1 -->
          <!--
            응시완료 exam_completed
            응시중 taking_test
            접속중 connecting

            현재위치 current_location
            미답변 unanswered
            답변 answer

            채점대기 scoring_waiting
            정답 correct_answer
            오답 incorrect_answer
          -->
          <li class="exam_completed connecting">
            <div class="student_status">
              <div>
                <span>응시완료</span>
                <strong>강감찬</strong>
                <p>8분 39초 소요</p>
              </div>
              <!-- exam_completed 있을 경우만 버튼 노출되도록 css에서 제어 -->
              <button type="button"><span>평가결과</span></button>
            </div>

            <ul class="answer_sheet">
              <li class="correct_answer">①</li>
              <li class="correct_answer">②</li>
              <li class="correct_answer">⑤</li>
              <li class="incorrect_answer">③</li>
              <li class="correct_answer">②</li>

              <li class="correct_answer">⑤</li>
              <li class="correct_answer">①,④</li>
              <li class="short_answer incorrect_answer">단답식</li>
              <li class="short_answer scoring_waiting">주관식</li>
              <li class="short_answer scoring_waiting">서술형</li>
            </ul>
          </li>
          <!-- 2 -->
          <li class="exam_completed">
            <div class="student_status">
              <div>
                <span>응시완료</span>
                <strong>곽재우</strong>
                <p>9분 27초 소요</p>
              </div>
              <!-- exam_completed 있을 경우만 버튼 노출되도록 css에서 제어 -->
              <button type="button"><span>평가결과</span></button>
            </div>
            <ul class="answer_sheet">
              <li class="correct_answer">①</li>
              <li class="correct_answer">②</li>
              <li class="correct_answer">⑤</li>
              <li class="incorrect_answer">③</li>
              <li class="correct_answer">②</li>

              <li class="correct_answer">⑤</li>
              <li class="correct_answer">①,④</li>
              <li class="short_answer incorrect_answer">단답식</li>
              <li class="short_answer scoring_waiting">주관식</li>
              <li class="short_answer scoring_waiting">서술형</li>
            </ul>
          </li>
          <!-- 3 -->
          <li class="exam_completed connecting">
            <div class="student_status">
              <div>
                <span>응시완료</span>
                <strong>김석진</strong>
                <p>9분 32초 소요</p>
              </div>
              <!-- exam_completed 있을 경우만 버튼 노출되도록 css에서 제어 -->
              <button type="button"><span>평가결과</span></button>
            </div>
            <ul class="answer_sheet">
              <li class="correct_answer">①</li>
              <li class="correct_answer">②</li>
              <li class="correct_answer">⑤</li>
              <li class="incorrect_answer">③</li>
              <li class="correct_answer">②</li>

              <li class="correct_answer">⑤</li>
              <li class="correct_answer">①,④</li>
              <li class="short_answer incorrect_answer">단답식</li>
              <li class="short_answer scoring_waiting">주관식</li>
              <li class="short_answer scoring_waiting">서술형</li>
            </ul>
          </li>
          <!-- 4 -->
          <li class="taking_test connecting">
            <div class="student_status">
              <div>
                <span>응시중</span>
                <strong>김정호</strong>
                <p>10분 39초</p>
              </div>
              <!-- exam_completed 있을 경우만 버튼 노출되도록 css에서 제어 -->
              <button type="button"><span>평가결과</span></button>
            </div>
            <ul class="answer_sheet">
              <li class="answer"></li>
              <li class="answer"></li>
              <li class="answer"></li>
              <li class="answer"></li>
              <li class="answer current_location"></li>

              <li class="answer"></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </li>
          <!-- 5 -->
          <li class="taking_test connecting">
            <div class="student_status">
              <div>
                <span>응시중</span>
                <strong>김태형</strong>
                <p>10분 39초</p>
              </div>
              <!-- exam_completed 있을 경우만 버튼 노출되도록 css에서 제어 -->
              <button type="button"><span>평가결과</span></button>
            </div>
            <ul class="answer_sheet">
              <li class="answer"></li>
              <li class="answer"></li>
              <li class="answer"></li>
              <li class="answer"></li>
              <li class="answer"></li>

              <li class="answer"></li>
              <li class="answer current_location"></li>
              <li class="answer"></li>
              <li class="answer"></li>
              <li class="answer"></li>
            </ul>
          </li>
          <!-- 6 -->
          <li class="taking_test connecting">
            <div class="student_status">
              <div>
                <span>응시중</span>
                <strong>민윤기</strong>
                <p>10분 39초</p>
              </div>
              <!-- exam_completed 있을 경우만 버튼 노출되도록 css에서 제어 -->
              <button type="button"><span>평가결과</span></button>
            </div>
            <ul class="answer_sheet">
              <li class="answer"></li>
              <li class="answer"></li>
              <li class="answer"></li>
              <li class="current_location"></li>
              <li class="answer"></li>

              <li class="answer"></li>
              <li></li>
              <li></li>
              <li class="answer"></li>
              <li></li>
            </ul>
          </li>
          <!-- 7 -->
          <li class="taking_test connecting">
            <div class="student_status">
              <div>
                <span>응시중</span>
                <strong>박지민</strong>
                <p>10분 39초</p>
              </div>
              <!-- exam_completed 있을 경우만 버튼 노출되도록 css에서 제어 -->
              <button type="button"><span>평가결과</span></button>
            </div>
            <ul class="answer_sheet">
              <li class="answer"></li>
              <li class="answer"></li>
              <li class="answer"></li>
              <li class="answer"></li>
              <li class="answer"></li>

              <li class="answer"></li>
              <li class="answer"></li>
              <li class="current_location"></li>
              <li></li>
              <li></li>
            </ul>
          </li>
          <!-- 8 -->
          <li class="connecting">
            <div class="student_status">
              <div>
                <span>미응시</span>
                <strong>박찬호</strong>
                <!-- <p>9분 27초 소요</p> -->
              </div>
              <!-- exam_completed 있을 경우만 버튼 노출되도록 css에서 제어 -->
              <button type="button"><span>평가결과</span></button>
            </div>
            <ul class="answer_sheet">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>

              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </li>
          <!-- 9 -->
          <li class="connecting">
            <div class="student_status">
              <div>
                <span>미응시</span>
                <strong>박찬호</strong>
                <!-- <p>9분 27초 소요</p> -->
              </div>
              <!-- exam_completed 있을 경우만 버튼 노출되도록 css에서 제어 -->
              <button type="button"><span>평가결과</span></button>
            </div>
            <ul class="answer_sheet">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>

              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </li>
          <!-- 10 -->
          <li>
            <div class="student_status">
              <div>
                <span>미응시</span>
                <strong>박찬호</strong>
                <!-- <p>9분 27초 소요</p> -->
              </div>
              <!-- exam_completed 있을 경우만 버튼 노출되도록 css에서 제어 -->
              <button type="button"><span>평가결과</span></button>
            </div>
            <ul class="answer_sheet">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>

              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </li>
          <!-- 11 -->
          <li>
            <div class="student_status">
              <div>
                <span>미응시</span>
                <strong>박찬호</strong>
                <!-- <p>9분 27초 소요</p> -->
              </div>
              <!-- exam_completed 있을 경우만 버튼 노출되도록 css에서 제어 -->
              <button type="button"><span>평가결과</span></button>
            </div>
            <ul class="answer_sheet">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>

              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </li>
          <!-- 12 -->
          <li>
            <div class="student_status">
              <div>
                <span>미응시</span>
                <strong>박찬호</strong>
                <!-- <p>9분 27초 소요</p> -->
              </div>
              <!-- exam_completed 있을 경우만 버튼 노출되도록 css에서 제어 -->
              <button type="button"><span>평가결과</span></button>
            </div>
            <ul class="answer_sheet">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>

              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </li>
          <!-- 13 -->
          <li>
            <div class="student_status">
              <div>
                <span>미응시</span>
                <strong>박찬호</strong>
                <!-- <p>9분 27초 소요</p> -->
              </div>
              <!-- exam_completed 있을 경우만 버튼 노출되도록 css에서 제어 -->
              <button type="button"><span>평가결과</span></button>
            </div>
            <ul class="answer_sheet">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>

              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </li>
          <!-- 14 -->
          <li>
            <div class="student_status">
              <div>
                <span>미응시</span>
                <strong>박찬호</strong>
                <!-- <p>9분 27초 소요</p> -->
              </div>
              <!-- exam_completed 있을 경우만 버튼 노출되도록 css에서 제어 -->
              <button type="button"><span>평가결과</span></button>
            </div>
            <ul class="answer_sheet">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>

              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </li>
          <!-- 15 -->
          <li>
            <div class="student_status">
              <div>
                <span>미응시</span>
                <strong>박찬호</strong>
                <!-- <p>9분 27초 소요</p> -->
              </div>
              <!-- exam_completed 있을 경우만 버튼 노출되도록 css에서 제어 -->
              <button type="button"><span>평가결과</span></button>
            </div>
            <ul class="answer_sheet">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>

              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </li>
          <!-- 16 -->
          <li>
            <div class="student_status">
              <div>
                <span>미응시</span>
                <strong>박찬호</strong>
                <!-- <p>9분 27초 소요</p> -->
              </div>
              <!-- exam_completed 있을 경우만 버튼 노출되도록 css에서 제어 -->
              <button type="button"><span>평가결과</span></button>
            </div>
            <ul class="answer_sheet">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>

              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      studentData: [

      ]
    }
  }
}
</script>
