<template>
  <div class="contents">
    <div class="title_box">
      <h2>평가명이 한줄로 노출됩니다. 평가명이 한줄로 노출됩니다. 평가명이 한줄로 노출됩니다. 평가명이 한줄로 노출됩니다. 평가명이 한줄로 노출됩니다. 평가명이 한줄로 노출됩니다. </h2>
      <div class="examination">
        <span class="status">응시중</span>
      </div>
    </div>

    <div class="inner">
      <div class="dummy_layout">
        <div ref="dummy">
          <P>16 / 10</P>
          <p>width: {{ this.width }}</p>
          <p>height: {{ this.height }}</p>
        </div>
      </div>
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
                  <span class="num1">1</span>
                  <span class="num2">2</span>
                  <span class="num3">3</span>
                  <span class="num4 active">4</span>
                  <span class="num5">5</span>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row"><span>9</span></th>
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
              <th scope="row"><span>10</span></th>
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
              <th scope="row"><span>11</span></th>
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
              <th scope="row"><span>12</span></th>
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
              <th scope="row"><span>13</span></th>
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
              <th scope="row"><span>14</span></th>
              <td>
                <div class="multiple">
                  <p>답안작성완료</p>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row"><span>15</span></th>
              <td>
                <div class="multiple">
                  <p>답안작성완료</p>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row"><span>16</span></th>
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
              <th scope="row"><span>17</span></th>
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
              <th scope="row"><span>18</span></th>
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
              <th scope="row"><span>19</span></th>
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
              <th scope="row"><span>20</span></th>
              <td>
                <div class="multiple">
                  <p>답안작성완료</p>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row"><span>21</span></th>
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
      width: null,
      height: null,
      isSheetOpend: true
    }
  },
  mounted () {
    this.setContentSize()
    window.addEventListener('resize', this.setContentSize)
  },
  methods: {
    // 화면 비율 확인 임시 스크립트
    setContentSize () {
      const aspectRatio = 16 / 10
      const width = this.$refs.dummy.clientHeight * aspectRatio
      this.$refs.dummy.style.width = `${width}px`

      this.width = width.toFixed(2)
      this.height = this.$refs.dummy.clientHeight
    },
    btnSheetEvent () {
      this.isSheetOpend = !this.isSheetOpend
    }
  }
}
</script>
