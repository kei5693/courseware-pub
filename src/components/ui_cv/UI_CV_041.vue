<template>
  <!-- 활동 컨텐츠 class 분기 activity_contents -->
  <div class="contents hide_border activity_contents">
    <div class="title_box">
      <h2>활동 설정</h2>

      <div class="menu_box">
        <p class="noti_txt">지금 활동을 시작하지 않으시나요? 저장버튼을 눌러 저장해주세요!</p>
        <div class="btn_wrap">
          <button type="button" class="common_btn color"><span>취소</span></button>
          <button type="button" class="common_btn color2"><span>역할저장</span></button>
          <button type="button" class="common_btn"><span>활동시작</span></button>
        </div>
      </div>
    </div>

    <!-- 041에서만 pt0 사용 -->
    <div class="inner pt0">
      <div class="form_list_wrap split_form">
        <div class="split_cont">
          <div class="form_table">
            <table role="table" aria-label="Form Table">
              <caption>활동설정테이블</caption>
              <colgroup>
                <col style="width: 80px;" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row" id="activityMethodLabel">활동방식</th>
                  <td>
                    <div class="content" role="radiogroup" aria-labelledby="activityMethodLabel">
                      <div class="radio_flex">
                        <span class="common_radio"><input type="radio" name="rdo1-1" id="rdo1-1"><label for="rdo1-1">수업기반활동</label></span>
                        <span class="common_radio"><input type="radio" name="rdo1-1" id="rdo1-2"><label for="rdo1-2">스스로하기</label></span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row" id="submissionPeriodLabel">제출기간</th>
                  <td>
                    <div class="content" role="group" aria-labelledby="submissionPeriodLabel">
                      <div class="VueDatePicker">
                        <VueDatePicker v-model="dateA" :format="formattedDateA" position="left" placeholder="YYYY.MM.DD" :enable-time-picker="false" :disabled="false" auto-apply>
                          <template #input-icon><span class="input-slot-image"></span></template>
                        </VueDatePicker>
                        <span>~</span>
                        <VueDatePicker v-model="dateB" :format="formattedDateB" position="left" placeholder="YYYY.MM.DD" :enable-time-picker="false" :disabled="true" auto-apply>
                          <template #input-icon><span class="input-slot-image"></span></template>
                        </VueDatePicker>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row" id="activityTypeLabel">활동유형</th>
                  <td>
                    <div class="content" role="radiogroup" aria-labelledby="activityTypeLabel">
                      <div class="radio_flex">
                        <span class="common_radio"><input type="radio" name="rdo1-2" id="rdo1-3"><label for="rdo1-3">개인활동</label></span>
                        <span class="common_radio"><input type="radio" name="rdo1-2" id="rdo1-4"><label for="rdo1-4">모둠활동</label></span>
                        <span class="common_radio"><input type="radio" name="rdo1-2" id="rdo1-5" disabled="disabled"><label for="rdo1-5">과제활동</label></span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="align_top interval">
                  <th scope="row" if="teamSelect">모둠구성</th>
                  <td>
                    <div class="content">
                      <div class="commmon_select width_auto">
                        <select aria-labelledby="teamSelect">
                          <option value="최근 등록된 모둠 불러오기">최근 등록된 모둠 불러오기</option>
                          <option value="2024-01-11[1단원]삼각형을 알아볼까요?">2024-01-11[1단원]삼각형을 알아볼까요?</option>
                          <option value="2024-01-11[1단원]삼각형을 알아볼까요?">2024-01-11[1단원]삼각형을 알아볼까요?</option>
                        </select>
                      </div>
                      <div class="flex_box">
                        <div class="bundle_box">
                          <span class="common_checkbox"><input type="checkbox" id="inp1-1"><label for="inp1-1">신규구성</label></span>
                          <div class="commmon_select">
                            <select aria-label="모둠 수 선택">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                            </select>
                            <span>모둠</span>
                          </div>
                        </div>
                        <div>
                          <p>모둠원 랜덤편성</p>
                          <span class="inp_checkbox"><input type="checkbox" id="inp123" aria-label="모둠원 랜덤편성 체크"><label for="inp123"><span></span></label></span>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row" id="roleSettings">역할설정</th>
                  <td>
                    <div class="content" role="radiogroup" aria-labelledby="roleSettings">
                      <div class="radio_flex">
                        <span class="common_radio"><input type="radio" name="rdo1-3" id="rdo1-6"><label for="rdo1-6">사용</label></span>
                        <span class="common_radio"><input type="radio" name="rdo1-3" id="rdo1-7"><label for="rdo1-7">미사용</label></span>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="form_table">
            <table role="table" aria-label="Form Table">
              <caption>활동설정테이블</caption>
              <colgroup>
                <col style="width: 80px;" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row">활동주제</th>
                  <td>
                    <div class="content">
                      <input type="text" placeholder="활동주제를 입력해주세요" aria-label="활동주제 입력" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row" id="boardBackground">보드배경</th>
                  <td>
                    <div class="content" role="group" aria-labelledby="boardBackground">
                      <div class="radio_flex">
                        <span class="common_radio"><input type="radio" name="rdo1-4" id="rdo1-8"><label for="rdo1-8">없음</label></span>
                        <span class="common_radio"><input type="radio" name="rdo1-4" id="rdo1-9"><label for="rdo1-9">활동자료</label></span>
                        <span class="common_radio file_upload">
                          <input type="radio" name="rdo1-4" id="rdo1-10"><label for="rdo1-10">직접등록</label>
                          <div class="common_file_upload icon">
                            <span><input type="file" id="inpFile" aria-label="직접등록 파일 선택" @change="getFileChange" /><label for="inpFile">직접등록</label></span>
                            <!-- 파일 첨부 시 -->
                            <div class="img_thumbnail">
                              <img src="@/assets/images/dummy/img_thumbnail2.png" alt="이미지 썸네일" />
                              <button type="button"><span>닫기</span></button>
                            </div>
                          </div>
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row" id="selfAssessment">자기평가</th>
                  <td>
                    <div class="content" role="radiogroup" aria-labelledby="selfAssessment">
                      <div class="radio_flex">
                        <span class="common_radio"><input type="radio" name="rdo1-5" id="rdo1-11"><label for="rdo1-11">사용</label></span>
                        <span class="common_radio"><input type="radio" name="rdo1-5" id="rdo1-12"><label for="rdo1-12">미사용</label></span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">동료평가</th>
                  <td>
                    <div class="content">
                      <p>평가지가 제공되지 않는 활동입니다.</p>
                    </div>
                  </td>
                </tr>
                <tr class="align_top interval2">
                  <th scope="row" class="mt4" id="toBeShared">공유대상</th>
                  <td>
                    <div class="content" role="radiogroup" aria-labelledby="toBeShared">
                      <div class="radio_flex">
                        <span class="common_radio"><input type="radio" name="rdo1-6" id="rdo1-13"><label for="rdo1-13">학급전체</label></span>
                        <span class="common_radio"><input type="radio" name="rdo1-6" id="rdo1-14"><label for="rdo1-14">개별학생</label></span>
                      </div>
                      <ul class="student_list">
                        <li v-for="(student, index) in activityData.studentData" :key="`student${index}`" :class="{active: student.isActive}" @click="selectStudent(index)">
                          {{ index + 1 }}번 {{ student.name }}
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <a href="#activityInfoWrap" class="common_btn mt16 btn_reset"><span>활동보드 다시 만들기</span></a>
      </div>

      <div class="activity_info_wrap" id="activityInfoWrap">
        <div class="member_list_wrap">
          <ul class="activity_board_list">
            <!-- 1 -->
            <li>
              <div class="visual_cont">
                <img src="@/assets/images/dummy/img_thumbnail.png" alt="" />
                <div class="btn_wrap">
                  <button type="button" class="common_btn color4"><span>미리보기</span></button>
                  <div class="common_file_upload">
                    <span>
                      <input type="file" id="inpFile2" />
                      <label for="inpFile2">배경설정</label>
                    </span>
                  </div>
                </div>
              </div>
              <div class="board_cont">
                <div class="info_box">
                  <strong>홍길동</strong>
                </div>
              </div>
            </li>
            <!-- 2 -->
            <li>
              <div class="visual_cont">
                <img src="@/assets/images/dummy/img_thumbnail.png" alt="" />
                <div class="btn_wrap">
                  <button type="button" class="common_btn color4"><span>미리보기</span></button>
                  <button type="button" class="common_btn color2"><span>배경설정</span></button>
                </div>
              </div>
              <div class="board_cont">
                <div class="info_box">
                  <strong><span>1</span>모둠</strong>
                  <div>
                    <button type="button" class="common_btn color5" @click="popupOpen"><span>모둠원 구성</span></button>
                  </div>
                </div>
                <div class="group_form_box">
                  <p>모둠원을 구성해주세요!</p>
                </div>
              </div>
            </li>
            <!-- 3 -->
            <li>
              <div class="visual_cont">
                <img src="@/assets/images/dummy/img_thumbnail.png" alt="" />
                <div class="btn_wrap">
                  <button type="button" class="common_btn color4"><span>미리보기</span></button>
                  <button type="button" class="common_btn color2"><span>배경설정</span></button>
                </div>
              </div>
              <div class="board_cont">
                <div class="info_box">
                  <strong><span>2</span>모둠</strong>
                  <div>
                    <button type="button" class="common_btn color5" @click="popupOpen"><span>모둠원 구성</span></button>
                  </div>
                </div>
                <div class="group_form_box">
                  <ul>
                    <li>
                      <span>1번 홍길동동동동동</span>
                      <input type="text" maxlength="10" disabled="disabled" placeholder="역할 미사용" />
                    </li>
                    <li>
                      <span>2번 홍길동</span>
                      <input type="text" maxlength="10" disabled="disabled" placeholder="역할 미사용" />
                    </li>
                    <li>
                      <span>3번 홍길동</span>
                      <input type="text" maxlength="10" disabled="disabled" placeholder="역할 미사용" />
                    </li>
                    <li>
                      <span>4번 홍길동</span>
                      <input type="text" maxlength="10" disabled="disabled" placeholder="역할 미사용" />
                    </li>
                    <li>
                      <span>5번 홍길동</span>
                      <input type="text" maxlength="10" disabled="disabled" placeholder="역할 미사용" />
                    </li>
                    <li>
                      <span>6번 홍길동</span>
                      <input type="text" maxlength="10" disabled="disabled" placeholder="역할 미사용" />
                    </li>
                    <li>
                      <span>7번 홍길동</span>
                      <input type="text" maxlength="10" disabled="disabled" placeholder="역할 미사용" />
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <!-- 4 -->
            <li>
              <div class="visual_cont">
                <img src="@/assets/images/dummy/img_thumbnail.png" alt="" />
                <div class="btn_wrap">
                  <button type="button" class="common_btn color4"><span>미리보기</span></button>
                  <button type="button" class="common_btn color2"><span>배경설정</span></button>
                </div>
              </div>
              <div class="board_cont">
                <div class="info_box">
                  <strong><span>3</span>모둠</strong>
                  <div>
                    <button type="button" class="common_btn color5" @click="popupOpen"><span>모둠원 구성</span></button>
                  </div>
                </div>
                <div class="group_form_box">
                  <ul>
                    <li>
                      <span>1번 홍길동</span>
                      <input type="text" maxlength="10" placeholder="역할을 입력해주세요." />
                    </li>
                    <li>
                      <span>2번 홍길동</span>
                      <input type="text" maxlength="10" placeholder="역할을 입력해주세요." />
                    </li>
                    <li>
                      <span>3번 홍길동</span>
                      <input type="text" maxlength="10" placeholder="역할을 입력해주세요." />
                    </li>
                    <li>
                      <span>4번 홍길동</span>
                      <input type="text" maxlength="10" placeholder="역할을 입력해주세요." />
                    </li>
                    <li>
                      <span>5번 홍길동</span>
                      <input type="text" maxlength="10" placeholder="역할을 입력해주세요." />
                    </li>
                    <li>
                      <span>6번 홍길동</span>
                      <input type="text" maxlength="10" placeholder="역할을 입력해주세요." />
                    </li>
                    <li>
                      <span>7번 홍길동</span>
                      <input type="text" maxlength="10" placeholder="역할을 입력해주세요." />
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <!-- 5 -->
            <li>
              <div class="visual_cont">
                <img src="@/assets/images/dummy/img_thumbnail.png" alt="" />
                <div class="btn_wrap">
                  <button type="button" class="common_btn color4"><span>미리보기</span></button>
                  <button type="button" class="common_btn color2"><span>배경설정</span></button>
                </div>
              </div>
              <div class="board_cont">
                <div class="info_box">
                  <strong><span>4</span>모둠</strong>
                  <div>
                    <button type="button" class="common_btn color5" @click="popupOpen"><span>모둠원 구성</span></button>
                  </div>
                </div>
                <div class="group_form_box">
                  <ul>
                    <li>
                      <span>1번 홍길동</span>
                      <input type="text" maxlength="10" placeholder="역할을 입력해주세요." />
                    </li>
                    <li>
                      <span>2번 홍길동</span>
                      <input type="text" maxlength="10" placeholder="역할을 입력해주세요." />
                    </li>
                    <li>
                      <span>3번 홍길동</span>
                      <input type="text" maxlength="10" placeholder="역할을 입력해주세요." />
                    </li>
                    <li>
                      <span>4번 홍길동</span>
                      <input type="text" maxlength="10" placeholder="역할을 입력해주세요." />
                    </li>
                    <li>
                      <span>5번 홍길동</span>
                      <input type="text" maxlength="10" placeholder="역할을 입력해주세요." />
                    </li>
                    <li>
                      <span>6번 홍길동</span>
                      <input type="text" maxlength="10" placeholder="역할을 입력해주세요." />
                    </li>
                    <li>
                      <span>7번 홍길동</span>
                      <input type="text" maxlength="10" placeholder="역할을 입력해주세요." />
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <!-- 6 -->
            <li>
              <div class="visual_cont">
                <img src="@/assets/images/dummy/img_thumbnail.png" alt="" />
                <div class="btn_wrap">
                  <button type="button" class="common_btn color4"><span>미리보기</span></button>
                  <button type="button" class="common_btn color2"><span>배경설정</span></button>
                </div>
              </div>
              <div class="board_cont">
                <div class="info_box">
                  <strong><span>5</span>모둠</strong>
                  <div>
                    <button type="button" class="common_btn color5" @click="popupOpen"><span>모둠원 구성</span></button>
                  </div>
                </div>
                <div class="group_form_box">
                  <ul>
                    <li>
                      <span>1번 홍길동</span>
                      <input type="text" maxlength="10" placeholder="역할을 입력해주세요." />
                    </li>
                    <li>
                      <span>2번 홍길동</span>
                      <input type="text" maxlength="10" placeholder="역할을 입력해주세요." />
                    </li>
                    <li>
                      <span>3번 홍길동</span>
                      <input type="text" maxlength="10" placeholder="역할을 입력해주세요." />
                    </li>
                    <li>
                      <span>4번 홍길동</span>
                      <input type="text" maxlength="10" placeholder="역할을 입력해주세요." />
                    </li>
                    <li>
                      <span>5번 홍길동</span>
                      <input type="text" maxlength="10" placeholder="역할을 입력해주세요." />
                    </li>
                    <li>
                      <span>6번 홍길동</span>
                      <input type="text" maxlength="10" placeholder="역할을 입력해주세요." />
                    </li>
                    <li>
                      <span>7번 홍길동</span>
                      <input type="text" maxlength="10" placeholder="역할을 입력해주세요." />
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <!-- 7 -->
            <li>
              <div class="visual_cont">
                <img src="@/assets/images/dummy/img_thumbnail.png" alt="" />
                <div class="btn_wrap">
                  <button type="button" class="common_btn color4"><span>미리보기</span></button>
                  <button type="button" class="common_btn color2"><span>배경설정</span></button>
                </div>
              </div>
              <div class="board_cont">
                <div class="info_box">
                  <strong><span>6</span>모둠</strong>
                  <div>
                    <button type="button" class="common_btn color5" @click="popupOpen"><span>모둠원 구성</span></button>
                  </div>
                </div>
                <div class="group_form_box">
                  <ul>
                    <li>
                      <span>1번 홍길동</span>
                      <input type="text" maxlength="10" placeholder="역할을 입력해주세요." />
                    </li>
                    <li>
                      <span>2번 홍길동</span>
                      <input type="text" maxlength="10" placeholder="역할을 입력해주세요." />
                    </li>
                    <li>
                      <span>3번 홍길동</span>
                      <input type="text" maxlength="10" placeholder="역할을 입력해주세요." />
                    </li>
                    <li>
                      <span>4번 홍길동</span>
                      <input type="text" maxlength="10" placeholder="역할을 입력해주세요." />
                    </li>
                    <li>
                      <span>5번 홍길동</span>
                      <input type="text" maxlength="10" placeholder="역할을 입력해주세요." />
                    </li>
                    <li>
                      <span>6번 홍길동</span>
                      <input type="text" maxlength="10" placeholder="역할을 입력해주세요." />
                    </li>
                    <li>
                      <span>7번 홍길동</span>
                      <input type="text" maxlength="10" placeholder="역할을 입력해주세요." />
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <!-- 8 -->
            <li>
              <div class="visual_cont">
                <img src="@/assets/images/dummy/img_thumbnail.png" alt="" />
                <div class="btn_wrap">
                  <button type="button" class="common_btn color4"><span>미리보기</span></button>
                  <button type="button" class="common_btn color2"><span>배경설정</span></button>
                </div>
              </div>
              <div class="board_cont">
                <div class="info_box">
                  <strong><span>7</span>모둠</strong>
                  <div>
                    <button type="button" class="common_btn color5" @click="popupOpen"><span>모둠원 구성</span></button>
                  </div>
                </div>
                <div class="group_form_box">
                  <ul>
                    <li>
                      <span>1번 홍길동</span>
                      <input type="text" maxlength="10" placeholder="역할을 입력해주세요." />
                    </li>
                    <li>
                      <span>2번 홍길동</span>
                      <input type="text" maxlength="10" placeholder="역할을 입력해주세요." />
                    </li>
                    <li>
                      <span>3번 홍길동</span>
                      <input type="text" maxlength="10" placeholder="역할을 입력해주세요." />
                    </li>
                    <li>
                      <span>4번 홍길동</span>
                      <input type="text" maxlength="10" placeholder="역할을 입력해주세요." />
                    </li>
                    <li>
                      <span>5번 홍길동</span>
                      <input type="text" maxlength="10" placeholder="역할을 입력해주세요." />
                    </li>
                    <li>
                      <span>6번 홍길동</span>
                      <input type="text" maxlength="10" placeholder="역할을 입력해주세요." />
                    </li>
                    <li>
                      <span>7번 홍길동</span>
                      <input type="text" maxlength="10" placeholder="역할을 입력해주세요." />
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 14 모둠원구성 -->
    <div class="modal_layer_popup short_size">
      <div class="dimmed_layer" @click="closePopup($event)"></div>
      <div class="layer_content_wrap">
        <div class="layer_content">
          <!-- header -->
          <div class="layer_header">
            <div class="inner">
              <h1>2모둠 모둠원 구성</h1>
            </div>
          </div>

          <!-- body -->
          <div class="layer_body">
            <div class="form_list_wrap max_height418">
              <table class="form_tbl">
                <caption></caption>
                <colgroup>
                  <col style="width: 34px;" />
                  <col style="width: 22px;" />
                  <col />
                  <col style="width: 60px;" />
                </colgroup>
                <!-- <thead>
                <tr>
                  <th scope="col">선택</th>
                  <th scope="col">수업중</th>
                  <th scope="col">성명</th>
                  <th scope="col">모둠</th>
                </tr>
              </thead> -->
                <tbody>
                  <tr v-for="(student, index) in activityData.studentData" :key="`student${index}`">
                    <td>
                      <input type="checkbox" v-model="student.isActive" />
                    </td>
                    <td><span class="in_class" :class="{active: student.inClass}"></span></td>
                    <td>{{ student.name }}</td>
                    <td>
                      <template v-if="student.group !== null">
                        {{ student.group }}모둠
                      </template>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- footer -->
          <div class="layer_footer">
            <div class="btn_dialog">
              <button type="button" class="common_btn color" @click="closePopup($event)"><span>닫기</span></button>
              <button type="button" class="common_btn"><span>구성</span></button>
            </div>
          </div>
        </div>

        <button type="button" class="layer_close" @click="closePopup($event)">close
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
export default {
  components: { VueDatePicker },
  data () {
    return {
      dateA: null,
      dateB: null,
      dateC: null,
      dateD: null,
      dateE: null,
      fileInfo: null,
      picked1: new Date(),
      picked2: new Date(),
      activityData: {
        group: false,
        useRoll: true,
        studentData: [
          { name: '김강감찬', isActive: false, inClass: true, group: 1, role: null },
          { name: '권보아', isActive: false, inClass: true, group: 2, role: null },
          { name: '김남준', isActive: false, inClass: true, group: 1, role: null },
          { name: '김태형', isActive: false, inClass: true, group: 1, role: '이끔이' },
          { name: '민윤기', isActive: false, inClass: true, group: 1, role: '기록이' },
          { name: '박지민', isActive: false, inClass: true, group: 2, role: '나눔이' },
          { name: '심수봉', isActive: false, inClass: true, group: null, role: null },
          { name: '안중근', isActive: false, inClass: true, group: 3, role: null },
          { name: '장영실', isActive: false, inClass: false, group: 3, role: '이끔이' },
          { name: '홍두깨', isActive: false, inClass: false, group: 3, role: '기록이' },
          { name: '김석진', isActive: false, inClass: false, group: 3, role: '나눔이' },
          { name: '김정호', isActive: false, inClass: false, group: null, role: '이끔이' },
          { name: '홍길동', isActive: false, inClass: false, group: null, role: '기록이' },
          { name: '박찬호', isActive: false, inClass: false, group: null, role: '나눔이' },
          { name: '심순애', isActive: false, inClass: false, group: null, role: '이끔이' },
          { name: '정약용', isActive: false, inClass: false, group: null, role: '기록이' }
        ]
      }
    }
  },
  computed: {
    hoursArray () {
      const arr = []
      for (let i = 0; i < 24; i++) {
        arr.push({ text: i < 10 ? `0${i}` : i, value: i })
      }
      return arr
    },
    formattedDateA () {
      const date = this.picked1
      const day = date.getDate()
      const month = date.getMonth() + 1
      const year = date.getFullYear()

      return `${year}.${month}.${day}`
    },
    formattedDateB () {
      const date = this.picked1
      const day = date.getDate()
      const month = date.getMonth() + 1
      const year = date.getFullYear()

      return `${year}.${month}.${day}`
    }
  },
  methods: {
    popupOpen () {
      const target = document.querySelector('.modal_layer_popup')
      target.classList.add('active')
    },
    closePopup (e) {
      e.target.closest('.modal_layer_popup').classList.remove('active')
    },
    getFileChange (e) {
      const file = e.target.files[0]
      if (file) {
        this.fileInfo = {
          name: file.name,
          size: (file.size / 1024).toFixed(2)
        }
      }
    },
    datepickerOpened () {
      console.log('opened')
    },
    datepickerClosed () {
      console.log('closed')
    },
    selectStudent (currentIndex) {
      this.activityData.studentData.forEach((e, index) => {
        if (index === currentIndex) {
          e.isActive ? e.isActive = false : e.isActive = true
        }
      })
    }
  }
}
</script>
