<template>
  <!-- 활동 컨텐츠 class 분기 activity_contents -->
  <div class="contents activity_contents">
    <div class="title_box">
      <h2>몇 개의 도형으로 만들 수 있을까?몇 개의 도형으로 만들 수 있을까?몇 개의 도형으로 만들 수 있을까?몇 개의 도형으로 만들 수 있을까?</h2>

      <div class="menu_box">
        <div class="schedule_txt color">
          <strong>제출기간</strong>
          <span>2024-10-04 ~ 2024-10-04</span>
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
        <ul class="activity_board_list mt10">
          <!-- 1 -->
          <!-- unsubmitted : 미제출 -->
          <li class="unsubmitted">
            <div class="visual_cont">
              <!-- 디폴트 이미지 -->
              <img src="@/assets/images/img_default_thumbnail.png" alt="" />
              <!-- 미제출 안내 문구 unsubmitted 있으면 css에서 show -->
              <p>제출 후 확인하실 수 있어요!</p>
              <!--
                status : 미제출, 활동전
                status color: 활동중, 임시저장
                status completed : 제출완료
              -->
              <div class="status">활동전</div>
            </div>
            <div class="board_cont">
              <div class="info_box">
                <strong><span>1</span>모둠</strong>
              </div>
              <button type="button" class="common_btn"><span>활동 참여하기</span></button>
            </div>
          </li>
          <!-- 2 -->
          <!-- unsubmitted : 미제출 -->
          <li class="unsubmitted">
            <div class="visual_cont">
              <!-- 디폴트 이미지 -->
              <img src="@/assets/images/img_default_thumbnail.png" alt="" />
              <!-- 미제출 안내 문구 unsubmitted 있으면 css에서 show -->
              <p>제출 후 확인하실 수 있어요!</p>
              <!--
                status : 미제출, 활동전
                status color: 활동중, 임시저장
                status completed : 제출완료
              -->
              <div class="status">활동전</div>
            </div>
            <div class="board_cont">
              <div class="info_box">
                <strong>홍길동</strong>
              </div>
              <button type="button" class="common_btn"><span>활동 참여하기</span></button>
            </div>
          </li>
          <!-- 3 -->
          <!-- unsubmitted : 미제출 -->
          <li class="unsubmitted">
            <div class="visual_cont">
              <!-- 디폴트 이미지 -->
              <img src="@/assets/images/img_default_thumbnail.png" alt="" />
              <!-- 미제출 안내 문구 unsubmitted 있으면 css에서 show -->
              <p>제출 후 확인하실 수 있어요!</p>
              <!--
                status : 미제출, 활동전
                status color: 활동중, 임시저장
                status completed : 제출완료
              -->
              <div class="status color">활동중</div>
            </div>
            <div class="board_cont">
              <div class="info_box">
                <strong>홍길동</strong>
              </div>
              <button type="button" class="common_btn"><span>활동 참여하기</span></button>
            </div>
          </li>
          <!-- 4 -->
          <!-- unsubmitted : 미제출 -->
          <li class="unsubmitted">
            <div class="visual_cont">
              <!-- 디폴트 이미지 -->
              <img src="@/assets/images/img_default_thumbnail.png" alt="" />
              <!-- 미제출 안내 문구 unsubmitted 있으면 css에서 show -->
              <p>제출 후 확인하실 수 있어요!</p>
              <!--
                status : 미제출, 활동전
                status color: 활동중, 임시저장
                status completed : 제출완료
              -->
              <div class="status color">활동중</div>
            </div>
            <div class="board_cont">
              <div class="info_box">
                <strong>홍길동</strong>
              </div>
              <button type="button" class="common_btn"><span>활동 참여하기</span></button>
            </div>
          </li>
          <!-- 5 -->
          <!-- unsubmitted : 미제출 -->
          <li class="unsubmitted">
            <div class="visual_cont">
              <!-- 디폴트 이미지 -->
              <img src="@/assets/images/img_default_thumbnail.png" alt="" />
              <!--
                status : 미제출, 활동전
                status color: 활동중, 임시저장
                status completed : 제출완료
              -->
              <div class="status color">활동중</div>
            </div>
            <div class="board_cont">
              <div class="info_box">
                <strong>홍길동</strong>
              </div>
              <button type="button" class="common_btn"><span>활동 참여하기</span></button>
            </div>
          </li>
          <!-- 6 -->
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
              <button type="button" class="common_btn color4"><span>상세보기</span></button>
            </div>
          </li>
          <!-- 7 -->
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
              <button type="button" class="common_btn color4"><span>상세보기</span></button>
            </div>
          </li>
          <!-- 8 -->
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
              <button type="button" class="common_btn color4"><span>상세보기</span></button>
            </div>
          </li>
          <!-- 9 -->
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
              <button type="button" class="common_btn color4"><span>상세보기</span></button>
            </div>
          </li>
          <!-- 10 -->
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
              <button type="button" class="common_btn color4"><span>상세보기</span></button>
            </div>
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

    }
  },
  methods: {}
}
</script>
