<template>
  <div class="contents">
    <div class="title_box">
      <h2>평가명이 한줄로 노출됩니다. 평가명이 한줄로 노출됩니다. 평가명이 한줄로 노출됩니다. 평가명이 한줄로 노출됩니다. 평가명이 한줄로 노출됩니다. 평가명이 한줄로 노출됩니다. </h2>
      <div class="examination">
        <button type="button" class="btnWriting"><span>필기보기</span></button>
        <span class="status completed">응시완료</span>
        <p class="info">2024.10.04(금) / 8분 39초 소요</p>
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
      <ul class="announceWrap">
        <li class="collect"><span>정답</span></li>
        <li class="wrong"><span>오답</span></li>
        <li><span>채점대기</span></li>
      </ul>
      <div class="innerWrap">
        <table>
          <caption></caption>
          <colgroup>
            <col style="width: 60px;" />
            <col >
            <col style="width: 72px;" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col"><span>문항</span></th>
              <th scope="col"><span>정답</span></th>
              <th scope="col"><span>소요시간</span></th>
            </tr>
          </thead>
          <tbody>
            <tr class="collect">
              <th scope="row"><span>1</span></th>
              <td><span>②</span></td>
              <td>1분 32초</td>
            </tr>
            <tr class="collect">
              <th scope="row"><span>2</span></th>
              <td><span>⑤</span></td>
              <td>24초</td>
            </tr>
            <tr class="current wrong">
              <th scope="row"><span>3</span></th>
              <td><span>②</span></td>
              <td>24초</td>
            </tr>
            <tr class="collect">
              <th scope="row"><span>4</span></th>
              <td><span>①</span></td>
              <td>24초</td>
            </tr>
            <tr class="collect">
              <th scope="row"><span>5</span></th>
              <td><span>④</span></td>
              <td>24초</td>
            </tr>
            <tr class="collect">
              <th scope="row"><span>6</span></th>
              <td><span>②</span></td>
              <td>24초</td>
            </tr>
            <tr class="wrong">
              <th scope="row"><span>7</span></th>
              <td><span>④</span></td>
              <td>24초</td>
            </tr>
            <tr class="wrong">
              <th scope="row"><span>8</span></th>
              <td><span>④</span></td>
              <td>24초</td>
            </tr>
            <tr class="collect">
              <th scope="row"><span>9</span></th>
              <td><span>④</span></td>
              <td>24초</td>
            </tr>
            <tr class="collect">
              <th scope="row"><span>10</span></th>
              <td><span>④</span></td>
              <td>24초</td>
            </tr>
            <tr class="wrong">
              <th scope="row"><span>11</span></th>
              <td><span>②</span></td>
              <td>24초</td>
            </tr>
            <tr class="wrong">
              <th scope="row"><span>12</span></th>
              <td><span>⑤</span></td>
              <td>24초</td>
            </tr>
            <tr class="collect">
              <th scope="row"><span>13</span></th>
              <td><span>②</span></td>
              <td>24초</td>
            </tr>
            <tr class="waiting">
              <th scope="row"><span>14</span></th>
              <td>주관식</td>
              <td>24초</td>
            </tr>
            <tr class="collect">
              <th scope="row"><span>15</span></th>
              <td><span>②</span></td>
              <td>1분 32초</td>
            </tr>
            <tr class="collect">
              <th scope="row"><span>16</span></th>
              <td><span>⑤</span></td>
              <td>24초</td>
            </tr>
            <tr class="wrong">
              <th scope="row"><span>17</span></th>
              <td><span>②</span></td>
              <td>24초</td>
            </tr>
            <tr class="collect">
              <th scope="row"><span>18</span></th>
              <td><span>①</span></td>
              <td>24초</td>
            </tr>
            <tr class="collect">
              <th scope="row"><span>19</span></th>
              <td><span>④</span></td>
              <td>24초</td>
            </tr>
            <tr class="collect">
              <th scope="row"><span>20</span></th>
              <td><span>②</span></td>
              <td>24초</td>
            </tr>
            <tr class="wrong">
              <th scope="row"><span>21</span></th>
              <td><span>④</span></td>
              <td>24초</td>
            </tr>
            <tr class="wrong">
              <th scope="row"><span>22</span></th>
              <td><span>④</span></td>
              <td>24초</td>
            </tr>
            <tr class="collect">
              <th scope="row"><span>23</span></th>
              <td><span>④</span></td>
              <td>24초</td>
            </tr>
            <tr class="collect">
              <th scope="row"><span>24</span></th>
              <td><span>④</span></td>
              <td>24초</td>
            </tr>
            <tr class="wrong">
              <th scope="row"><span>25</span></th>
              <td><span>②</span></td>
              <td>24초</td>
            </tr>
            <tr class="wrong">
              <th scope="row"><span>26</span></th>
              <td><span>⑤</span></td>
              <td>24초</td>
            </tr>
            <tr class="collect">
              <th scope="row"><span>27</span></th>
              <td><span>②</span></td>
              <td>24초</td>
            </tr>
            <tr class="waiting">
              <th scope="row"><span>28</span></th>
              <td>주관식</td>
              <td>24초</td>
            </tr>
            <tr class="collect">
              <th scope="row"><span>29</span></th>
              <td><span>②</span></td>
              <td>1분 32초</td>
            </tr>
            <tr class="collect">
              <th scope="row"><span>30</span></th>
              <td><span>⑤</span></td>
              <td>24초</td>
            </tr>
            <tr class="wrong">
              <th scope="row"><span>31</span></th>
              <td><span>②</span></td>
              <td>24초</td>
            </tr>
            <tr class="collect">
              <th scope="row"><span>32</span></th>
              <td><span>①</span></td>
              <td>24초</td>
            </tr>
            <tr class="collect">
              <th scope="row"><span>33</span></th>
              <td><span>④</span></td>
              <td>24초</td>
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
