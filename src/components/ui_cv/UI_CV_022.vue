<template>
  <div class="contents">
    <div class="title_box">
      <h2>평가명이 한줄로 노출됩니다. 평가명이 한줄로 노출됩니다. 평가명이 한줄로 노출됩니다. 평가명이 한줄로 노출됩니다. 평가명이 한줄로 노출됩니다. 평가명이 한줄로 노출됩니다. </h2>
      <div class="examination eval_comp">
        <span class="status">평가완료</span>
        <p class="info">2024.10.04(금) / 8분 39초 진행</p>
        <div class="btn_box btn_view_box">
          <button
            type="button"
            title="학생별 보기"
            class="btn_view_sudent"
            :class="{ active: activeButton === 'student' }"
            @click="toggleBtn('student')">
            <span>학생별 보기</span>
          </button>
          <button
            type="button"
            title="문항별 보기"
            class="btn_view_question"
            :class="{ active: activeButton === 'question' }"
            @click="toggleBtn('question')">
            <span>문항별 보기</span>
          </button>
        </div>
      </div>
    </div>

    <div class="inner">
    </div>
  </div>

  <!-- 평가 문항 -->
  <div class="evalQuestionBar">
    <div class="btnWrap">
      <div class="zoomMenu">
        <button type="button" class="btnReduction"><span>축소</span></button>
        <span>100%</span>
        <button type="button" class="btnExpansion"><span>확대</span></button>
      </div>

      <!-- active -->
      <button type="button" class="btnPrev"><span>이전</span></button>
      <!-- active -->
      <button type="button" class="btnNext active"><span>다음</span></button>

      <button type="button" class="btnHint"><span>힌트보기</span></button>
      <!-- active -->
      <button type="button" class="btnOmr" @click="btnSheetEvent" :class="{active: isSheetOpend}"><span>OMR</span></button>

      <button type="button" class="btnSave"><span>중간저장</span></button>
      <button type="button" class="btnSubmission"><span>제출하기</span></button>
    </div>
    <div class="answerSheetWrap detail" :class="{active: isSheetOpend}">
      <div class="innerWrap">
        <table>
          <caption></caption>
          <colgroup>
            <col style="width: 60px;" />
            <col >
            <col style="width: 60px;" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col"><span>문항</span></th>
              <th scope="col"><span>정답</span></th>
              <th scope="col"><span>정답률</span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"><span>1</span></th>
              <td><span>②</span></td>
              <td>30%</td>
            </tr>
            <tr>
              <th scope="row"><span>2</span></th>
              <td><span>⑤</span></td>
              <td>30%</td>
            </tr>
            <tr class="current">
              <th scope="row"><span>3</span></th>
              <td><span>②</span></td>
              <td>30%</td>
            </tr>
            <tr>
              <th scope="row"><span>4</span></th>
              <td><span>①</span></td>
              <td>30%</td>
            </tr>
            <tr>
              <th scope="row"><span>5</span></th>
              <td><span>④</span></td>
              <td>30%</td>
            </tr>
            <tr>
              <th scope="row"><span>6</span></th>
              <td><span>②</span></td>
              <td>30%</td>
            </tr>
            <tr>
              <th scope="row"><span>7</span></th>
              <td><span>④</span></td>
              <td>30%</td>
            </tr>
            <tr>
              <th scope="row"><span>8</span></th>
              <td><span>④</span></td>
              <td>30%</td>
            </tr>
            <tr>
              <th scope="row"><span>9</span></th>
              <td><span>④</span></td>
              <td>30%</td>
            </tr>
            <tr>
              <th scope="row"><span>10</span></th>
              <td><span>④</span></td>
              <td>30%</td>
            </tr>
            <tr>
              <th scope="row"><span>11</span></th>
              <td><span>②</span></td>
              <td>30%</td>
            </tr>
            <tr>
              <th scope="row"><span>12</span></th>
              <td><span>⑤</span></td>
              <td>30%</td>
            </tr>
            <tr>
              <th scope="row"><span>13</span></th>
              <td><span>②</span></td>
              <td>30%</td>
            </tr>
            <tr>
              <th scope="row"><span>14</span></th>
              <td><span>①</span></td>
              <td>30%</td>
            </tr>
            <tr>
              <th scope="row"><span>15</span></th>
              <td><span>④</span></td>
              <td>30%</td>
            </tr>
            <tr>
              <th scope="row"><span>16</span></th>
              <td><span>②</span></td>
              <td>30%</td>
            </tr>
            <tr>
              <th scope="row"><span>17</span></th>
              <td><span>④</span></td>
              <td>30%</td>
            </tr>
            <tr>
              <th scope="row"><span>18</span></th>
              <td><span>④</span></td>
              <td>30%</td>
            </tr>
            <tr>
              <th scope="row"><span>19</span></th>
              <td>주관식</td>
              <td>채점대기</td>
            </tr>
            <tr>
              <th scope="row"><span>20</span></th>
              <td>서술형</td>
              <td>30%</td>
            </tr>
            <tr>
              <th scope="row"><span>21</span></th>
              <td><span>④</span></td>
              <td>30%</td>
            </tr>
            <tr>
              <th scope="row"><span>22</span></th>
              <td><span>②</span></td>
              <td>30%</td>
            </tr>
            <tr>
              <th scope="row"><span>23</span></th>
              <td><span>④</span></td>
              <td>30%</td>
            </tr>
            <tr>
              <th scope="row"><span>24</span></th>
              <td><span>④</span></td>
              <td>30%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <!-- //평가 문항 -->
</template>
<script>
export default {
  data () {
    return {
      activeButton: 'student',
      isSheetOpend: true
    }
  },
  methods: {
    toggleBtn (buttonType) {
      this.activeButton = buttonType
    },
    btnSheetEvent () {
      this.isSheetOpend = !this.isSheetOpend
    }
  }
}
</script>
