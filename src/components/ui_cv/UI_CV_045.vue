<template>
  <!-- 활동 컨텐츠 class 분기 activity_contents -->
  <div class="contents activity_contents">
    <div class="title_box">
      <h2>몇 개의 도형으로 만들 수 있을까?몇 개의 도형으로 만들 수 있을까?몇 개의 도형으로 만들 수 있을까?몇 개의 도형으로 만들 수 있을까?</h2>

      <div class="menu_box">
        <div class="btn_wrap">
          <button type="button"
            class="common_btn color3 btn_activity_control"
            :class="{ active: activity }"
          >
            <span>활동{{ activity == true ? "재개" : "중지" }}</span>
          </button>
          <button type="button" class="common_btn"><span>활동 종료</span></button>
        </div>
      </div>
    </div>

    <div class="inner">
      <div class="activity_notice">
        <p>활동이 부진한 학생/모둠이 있나요? 활동에 참여해 활동에 도움을 줄 수 있어요!</p>
        <button type="button" title="새로고침" class="btn_refresh"><span>새로고침</span></button>
      </div>
      <!-- 내부 스크롤 scroll_content -->
      <div class="scroll_content">
        <div class="activity_monitoring">
          <ul class="activity_board_list">
            <!-- 1 -->
            <li>
              <div class="visual_cont">
                <img src="@/assets/images/dummy/img_thumbnail.png" alt="" />
                <!--
                  status : 미제출, 활동전
                  status color: 활동중, 임시저장
                  status completed : 제출완료
                -->
                <div class="status completed">제출완료</div>
              </div>
              <div class="board_cont">
                <div class="info_box">
                  <strong>홍길동</strong>
                </div>
                <button type="button" class="common_btn"><span>활동 참여하기</span></button>
              </div>
            </li>
            <!-- 2 -->
            <li>
              <div class="visual_cont">
                <img src="@/assets/images/dummy/img_thumbnail.png" alt="" />
                <!--
                  status : 미제출, 활동전
                  status color: 활동중, 임시저장
                  status completed : 제출완료
                -->
                <div class="status completed">제출완료</div>
              </div>
              <div class="board_cont">
                <div class="info_box">
                  <strong>일이삼사오육칠팔구</strong>
                  <div>
                    <em class="count"><span>3</span>명</em>
                  </div>
                </div>
                <div class="group_list_box">
                  <ul class="group_list">
                    <li><span>1번 홍길동</span></li>
                    <li><span>2번 홍길동</span></li>
                    <li><span>3번 홍길동</span></li>
                  </ul>
                </div>
                <button type="button" class="common_btn"><span>활동 참여하기</span></button>
              </div>
            </li>
            <!-- 3 -->
            <li>
              <div class="visual_cont">
                <img src="@/assets/images/dummy/img_thumbnail.png" alt="" />
                <!--
                  status : 미제출, 활동전
                  status color: 활동중, 임시저장
                  status completed : 제출완료
                -->
                <div class="status completed">제출완료</div>
              </div>
              <div class="board_cont">
                <div class="info_box">
                  <strong><span>2</span>모둠</strong>
                  <div>
                    <em class="count"><span>4</span>명</em>
                  </div>
                </div>
                <div class="group_list_box">
                  <ul class="group_list">
                    <li>
                      <span>11번 홍길동홍길동홍길동홍길동홍길동</span>
                      <div>
                        <span>이끔이이끔이</span>
                      </div>
                    </li>
                    <li>
                      <span>12번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                    <li>
                      <span>13번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                    <li>
                      <span>14번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <button type="button" class="common_btn"><span>활동 참여하기</span></button>
              </div>
            </li>
            <!-- 4 -->
            <!-- unsubmitted : 미제출 -->
            <li class="unsubmitted">
              <div class="visual_cont">
                <!-- 디폴트 이미지 -->
                <img src="@/assets/images/img_default_thumbnail3.png" alt="" />
                <!-- 미제출 안내 문구 unsubmitted 있으면 css에서 show -->
                <p>활동이 시작되지 않은 보드예요!</p>
              </div>
              <div class="board_cont">
                <div class="info_box">
                  <strong><span>3</span>모둠</strong>
                  <div>
                    <em class="count"><span>16</span>명</em>
                  </div>
                </div>
                <div class="group_list_box">
                  <ul class="group_list">
                    <li>
                      <span>1번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                    <li>
                      <span>2번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                    <li>
                      <span>3번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                    <li>
                      <span>4번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                    <li>
                      <span>5번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                    <li>
                      <span>6번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                    <li>
                      <span>7번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                    <li>
                      <span>8번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                    <li>
                      <span>9번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                    <li>
                      <span>10번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <button type="button" class="common_btn"><span>활동 참여하기</span></button>
              </div>
            </li>
            <!-- 5 -->
            <li>
              <div class="visual_cont">
                <img src="@/assets/images/dummy/img_thumbnail.png" alt="" />
              </div>
              <div class="board_cont">
                <div class="info_box">
                  <strong><span>4</span>모둠</strong>
                  <div>
                    <em class="count"><span>12</span>명</em>
                  </div>
                </div>
                <div class="group_list_box">
                  <ul class="group_list">
                    <li>
                      <span>1번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                    <li>
                      <span>2번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                    <li>
                      <span>3번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                    <li>
                      <span>4번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                    <li>
                      <span>5번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                    <li>
                      <span>6번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                    <li>
                      <span>7번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                    <li>
                      <span>8번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                    <li>
                      <span>9번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                    <li>
                      <span>10번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <button type="button" class="common_btn"><span>활동 참여하기</span></button>
              </div>
            </li>
            <!-- 6 -->
            <li>
              <div class="visual_cont">
                <img src="@/assets/images/dummy/img_thumbnail.png" alt="" />
              </div>
              <div class="board_cont">
                <div class="info_box">
                  <strong><span>5</span>모둠</strong>
                  <div>
                    <em class="count"><span>2</span>명</em>
                  </div>
                </div>
                <div class="group_list_box">
                  <ul class="group_list">
                    <li>
                      <span>1번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                    <li>
                      <span>2번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                    <li>
                      <span>3번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                    <li>
                      <span>4번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                    <li>
                      <span>5번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                    <li>
                      <span>6번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                    <li>
                      <span>7번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                    <li>
                      <span>8번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                    <li>
                      <span>9번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                    <li>
                      <span>10번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <button type="button" class="common_btn"><span>활동 참여하기</span></button>
              </div>
            </li>
            <!-- 7 -->
            <li>
              <div class="visual_cont">
                <img src="@/assets/images/dummy/img_thumbnail.png" alt="" />
              </div>
              <div class="board_cont">
                <div class="info_box">
                  <strong><span>6</span>모둠</strong>
                  <div>
                    <em class="count"><span>2</span>명</em>
                  </div>
                </div>
                <div class="group_list_box">
                  <ul class="group_list">
                    <li>
                      <span>1번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                    <li>
                      <span>2번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <button type="button" class="common_btn"><span>활동 참여하기</span></button>
              </div>
            </li>
            <!-- 8 -->
            <li>
              <div class="visual_cont">
                <img src="@/assets/images/dummy/img_thumbnail.png" alt="" />
              </div>
              <div class="board_cont">
                <div class="info_box">
                  <strong><span>7</span>모둠</strong>
                  <div>
                    <em class="count"><span>2</span>명</em>
                  </div>
                </div>
                <div class="group_list_box">
                  <ul class="group_list">
                    <li>
                      <span>1번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                    <li>
                      <span>2번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <button type="button" class="common_btn"><span>활동 참여하기</span></button>
              </div>
            </li>
            <!-- 9 -->
            <li>
              <div class="visual_cont">
                <img src="@/assets/images/dummy/img_thumbnail.png" alt="" />
              </div>
              <div class="board_cont">
                <div class="info_box">
                  <strong><span>8</span>모둠</strong>
                  <div>
                    <em class="count"><span>2</span>명</em>
                  </div>
                </div>
                <div class="group_list_box">
                  <ul class="group_list">
                    <li>
                      <span>1번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                    <li>
                      <span>2번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <button type="button" class="common_btn"><span>활동 참여하기</span></button>
              </div>
            </li>
            <!-- 10 -->
            <li>
              <div class="visual_cont">
                <img src="@/assets/images/dummy/img_thumbnail.png" alt="" />
              </div>
              <div class="board_cont">
                <div class="info_box">
                  <strong><span>1</span>모둠</strong>
                  <div>
                    <em class="count"><span>2</span>명</em>
                  </div>
                </div>
                <div class="group_list_box">
                  <ul class="group_list">
                    <li>
                      <span>1번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                    <li>
                      <span>2번 홍길동</span>
                      <div>
                        <span>이끔이</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <button type="button" class="common_btn"><span>활동 참여하기</span></button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activity: false
    }
  },
  methods: {}
}
</script>
