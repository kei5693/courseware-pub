<template>
  <!-- 활동 컨텐츠 class 분기 activity_contents -->
  <div class="contents activity_contents">
    <div class="title_box">
      <h2>몇 개의 도형으로 만들 수 있을까?몇 개의 도형으로 만들 수 있을까?몇 개의 도형으로 만들 수 있을까?몇 개의 도형으로 만들 수 있을까?</h2>

      <div class="menu_box">
        <div class="schedule_txt color">
          <strong>활동기간</strong>
          <span>2024-10-04 ~ 2024-10-04</span>
        </div>
      </div>
    </div>

    <div class="inner">
      <ul class="activity_board_list">
        <!-- 1 -->
        <li>
          <div class="visual_cont">
            <img src="@/assets/images/dummy/img_thumbnail.png" alt="" />
          </div>
          <div class="board_cont">
            <div class="info_box">
              <strong>홍길동</strong>
            </div>
            <button type="button" class="common_btn color4"><span>상세보기</span></button>
          </div>
        </li>
        <!-- 2 -->
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
              <strong><span>1</span>모둠</strong>
              <div>
                <em class="count"><span>2</span>명</em>
              </div>
            </div>
            <div class="group_list_box">
              <ul class="group_list">
                <li><span>1번 홍길동</span></li>
                <li><span>2번 홍길동</span></li>
              </ul>
            </div>
            <button type="button" class="common_btn color4"><span>상세보기</span></button>
          </div>
        </li>
        <!-- 3 -->
        <li>
          <div class="visual_cont">
            <img src="@/assets/images/dummy/img_thumbnail.png" alt="" />
          </div>
          <div class="board_cont">
            <div class="info_box">
              <strong><span>2</span>모둠</strong>
              <div>
                <em class="count"><span>2</span>명</em>
              </div>
            </div>
            <div class="group_list_box">
              <ul class="group_list">
                <li>
                  <span>11번 홍길동홍길동홍길동</span>
                  <div>
                    <span>이끔이이끔이이끔이</span>
                  </div>
                </li>
                <li>
                  <span>12번 홍길동</span>
                  <div>
                    <span>이끔이</span>
                  </div>
                </li>
              </ul>
            </div>
            <button type="button" class="common_btn color4"><span>상세보기</span></button>
          </div>
        </li>
        <!-- 4 -->
        <li>
          <div class="visual_cont">
            <img src="@/assets/images/dummy/img_thumbnail.png" alt="" />
          </div>
          <div class="board_cont">
            <div class="info_box">
              <strong><span>3</span>모둠</strong>
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
            <button type="button" class="common_btn color4"><span>상세보기</span></button>
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
            <button type="button" class="common_btn color4"><span>상세보기</span></button>
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
              </ul>
            </div>
            <button type="button" class="common_btn color4"><span>상세보기</span></button>
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
            <button type="button" class="common_btn color4"><span>상세보기</span></button>
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
            <button type="button" class="common_btn color4"><span>상세보기</span></button>
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
            <button type="button" class="common_btn color4"><span>상세보기</span></button>
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
            <button type="button" class="common_btn color4"><span>상세보기</span></button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {}
}
</script>
