<template>
  <div class="contents">
    <div class="title_box">
      <h2>[진단/형성/성취도 평가] 평가명이 노출됩니다. 평가명이 노출됩니다. 평가명이 노출됩니다. 평가명이 노출됩니다. 평가명이 노출됩니다.</h2>
      <div class="examination">
        <button type="button" class="common_btn color6"><span>미리보기 종료</span></button>
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
      <button type="button" class="btnPrev active"><span>이전</span></button>
      <!-- active -->
      <button type="button" class="btnNext active"><span>다음</span></button>
      <button type="button" class="btnNext"><span>다음</span></button>

      <button type="button" class="btnHint"><span>힌트보기</span></button>
      <!-- active -->
      <button type="button" class="btnOmr" @click="btnSheetEvent" :class="{active: isSheetOpend}"><span>OMR</span></button>

      <button type="button" class="btnSave"><span>중간저장</span></button>
      <button type="button" class="btnSubmission"><span>제출하기</span></button>
    </div>
    <div class="answerSheetWrap" :class="{active: isSheetOpend}">
      <div class="innerWrap">
        <table>
          <caption></caption>
          <colgroup>
            <col style="width: 60px;" />
            <col >
          </colgroup>
          <thead>
            <tr>
              <th scope="col"><span>문항</span></th>
              <th scope="col"><span>답안</span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"><span>1</span></th>
              <td>
                <div class="multiple">
                  <span class="num1">1</span>
                  <span class="num2 active">2</span>
                  <span class="num3">3</span>
                  <span class="num4">4</span>
                  <span class="num5">5</span>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row"><span>2</span></th>
              <td>
                <div class="multiple">
                  <span class="num1">1</span>
                  <span class="num2">2</span>
                  <span class="num3">3</span>
                  <span class="num4 active">4</span>
                  <span class="num5">5</span>
                </div>
              </td>
            </tr>
            <tr class="current">
              <th scope="row"><span>3</span></th>
              <td>
                <div class="multiple">
                  <span class="num1">1</span>
                  <span class="num2">2</span>
                  <span class="num3 active">3</span>
                  <span class="num4">4</span>
                  <span class="num5">5</span>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row"><span>4</span></th>
              <td>
                <div class="multiple">
                  <span class="num1">1</span>
                  <span class="num2">2</span>
                  <span class="num3 active">3</span>
                  <span class="num4">4</span>
                  <span class="num5">5</span>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row"><span>5</span></th>
              <td></td>
            </tr>
            <tr>
              <th scope="row"><span>6</span></th>
              <td>
                <div class="multiple">
                  <span class="num1">1</span>
                  <span class="num2">2</span>
                  <span class="num3">3</span>
                  <span class="num4">4</span>
                  <span class="num5 active">5</span>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row"><span>7</span></th>
              <td>
                <div class="multiple">
                  <span class="num1 active">1</span>
                  <span class="num2">2</span>
                  <span class="num3">3</span>
                  <span class="num4">4</span>
                  <span class="num5">5</span>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row"><span>8</span></th>
              <td>
                <div class="multiple">
                  <p>답안작성완료</p>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row"><span>9</span></th>
              <td>
                <div class="multiple">
                  <p>답안작성완료</p>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row"><span>10</span></th>
              <td>
                <div class="multiple">
                  <p>답안작성완료</p>
                </div>
              </td>
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
      isSheetOpend: true
    }
  },
  methods: {
    btnSheetEvent () {
      this.isSheetOpend = !this.isSheetOpend
    }
  }
}
</script>
