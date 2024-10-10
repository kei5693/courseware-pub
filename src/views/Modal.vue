<template>
  <div class="contents">
    <!-- 확인용 컨텐츠 -->
    <div class="verification">
      <h1>팝업</h1>
      <ul class="test_popup">
        <li>
          <p>AI평가 추가</p>
          <button type="button" @click="popupOpen(1)">UI_CV_027</button>
        </li>
        <li>
          <p>참고자료 추가</p>
          <button type="button" @click="popupOpen(2)">UI_CV_028</button>
        </li>
        <li>
          <p>지금 확인하기</p>
          <button type="button" @click="popupOpen(3)">UI_CV_039 </button>
        </li>
        <li>
          <p>배경설정</p>
          <button type="button" @click="popupOpen(4)">UI_CV_030</button>
        </li>
        <li>
          <p>판서보드 공유</p>
          <button type="button" @click="popupOpen(5)">UI_CV_031</button>
        </li>
        <li>
          <p>판서보드 종료</p>
          <button type="button" @click="popupOpen(6)">UI_CV_032</button>
        </li>
        <li>
          <p>안내</p>
          <button type="button" @click="popupOpen(7)">UI_CV_033</button>
        </li>
        <li>
          <p>메모</p>
          <button type="button" @click="popupOpen(8)">UI_CV_018</button>
        </li>
        <li>
          <p>문제은행기반_수동제출하기[팝업](학생)</p>
          <button type="button" @click="popupOpen(9)">UI_CV_017</button>
        </li>
        <li>
          <p>문제은행기반_평가중이동불가안내[팝업]</p>
          <button type="button" @click="popupOpen(10)">UI_CV_018</button>
        </li>
        <li>
          <p>주목</p>
          <button type="button" @click="popupOpen(11)">UI_CV_038</button>
        </li>
        <li>
          <p>평가완료</p>
          <button type="button" @click="popupOpen(12)">UI_CV_019</button>
        </li>
        <li>
          <p>활동중안내</p>
          <button type="button" @click="popupOpen(13)">UI_CV_026</button>
        </li>
      </ul>
    </div>

    <!-- 1 AI평가 추가 -->
    <div class="modal_layer_popup">
      <div class="dimmed_layer" @click="closePopup($event)"></div>
      <div class="layer_content_wrap">
        <div class="layer_content">
          <!-- header -->
          <div class="layer_header">
            <div class="inner">
              <h1>AI평가 추가</h1>
            </div>
          </div>

          <!-- body -->
          <div class="layer_body">
            <div class="form_list_wrap">
              <div class="form_table">
                <table class="form_table" role="presentation">
                  <caption>AI평가 추가입력</caption>
                  <colgroup>
                    <col style="width: 80px;" />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th scope="row" id="evaluationType">평가유형<span aria-hidden="true">*</span></th>
                      <td>
                        <div class="content">
                          <div class="radio_grid" role="radiogroup" aria-labelledby="evaluationType">
                            <span class="common_radio"><input type="radio" name="rdo1-1" id="rdo1-1" aria-labelledby="rdo1-1-label"><label id="rdo1-1-label" for="rdo1-1">진단평가</label></span>
                            <span class="common_radio"><input type="radio" name="rdo1-1" id="rdo1-2" aria-labelledby="rdo1-2-label"><label id="rdo1-2-label" for="rdo1-2">형성평가</label></span>
                            <span class="common_radio"><input type="radio" name="rdo1-1" id="rdo1-3" aria-labelledby="rdo1-3-label"><label id="rdo1-3-label" for="rdo1-3">총괄평가</label></span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">평가지명<span aria-hidden="true">*</span></th>
                      <td>
                        <div class="content">
                          <input type="text" id="evaluationName" placeholder="1차시 형성평가 2회차" aria-required="true" aria-label="평가지명 입력" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" id="methodOfProvision">제공방식<span aria-hidden="true">*</span></th>
                      <td>
                        <div class="content">
                          <div class="radio_grid" role="radiogroup" aria-labelledby="methodOfProvision">
                            <span class="common_radio"><input type="radio" name="rdo1-2" id="rdo1-4" aria-labelledby="rdo1-4-label"><label id="rdo1-4-label" for="rdo1-4">동일문항</label></span>
                            <span class="common_radio"><input type="radio" name="rdo1-2" id="rdo1-5" aria-labelledby="rdo1-5-label"><label id="rdo1-5-label" for="rdo1-5">수준 별 문항</label></span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" id="evaluationTime">평가시간<span aria-hidden="true">*</span></th>
                      <td>
                        <div class="content">
                          <div class="radio_grid inp_layout" role="radiogroup" aria-labelledby="evaluationTime">
                            <span class="common_radio"><input type="radio" name="rdo1-3" id="rdo1-6" aria-labelledby="rdo1-6-label"><label id="rdo1-6-label" for="rdo1-6">제한없음</label></span>
                            <span class="common_radio"><input type="radio" name="rdo1-3" id="rdo1-7"><label for="rdo1-7"><input type="text" value="5" aria-label="평가시간 분 제한" />분 으로 제한</label></span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="align_top">
                      <th scope="row">평가구성<span aria-hidden="true">*</span></th>
                      <td>
                        <div class="content">
                          <div class="tree_menu_list">
                            <ul>
                              <li>
                                <p>대단원</p>
                                <ul class="check_list">
                                  <li>
                                    <span class="common_checkbox"><input type="checkbox" id="inp1-1" /><label for="inp1-1">지식체계1</label></span>
                                    <div class="commmon_select">
                                      <select disabled="disabled" aria-label="지식체계1 문항 수 선택">
                                        <option value="2문항">2문항</option>
                                        <option value="3문항">3문항</option>
                                        <option value="4문항">4문항</option>
                                      </select>
                                    </div>
                                  </li>
                                  <li>
                                    <span class="common_checkbox"><input type="checkbox" id="inp1-2" /><label for="inp1-2">지식체계2</label></span>
                                    <div class="commmon_select">
                                      <select aria-label="지식체계2 문항 수 선택">
                                        <option value="2문항">2문항</option>
                                        <option value="3문항">3문항</option>
                                        <option value="4문항">4문항</option>
                                      </select>
                                    </div>
                                  </li>
                                  <li>
                                    <span class="common_checkbox"><input type="checkbox" id="inp1-3" /><label for="inp1-3">지식체계3</label></span>
                                    <div class="commmon_select">
                                      <select aria-label="지식체계3 문항 수 선택">
                                        <option value="2문항">2문항</option>
                                        <option value="3문항">3문항</option>
                                        <option value="4문항">4문항</option>
                                      </select>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <span class="common_checkbox tree"><input type="checkbox" id="inp11" /><label for="inp11">중단원1</label></span>
                                <ul class="check_list">
                                  <li>
                                    <span class="common_checkbox"><input type="checkbox" id="inp2-1" /><label for="inp2-1">지식체계지식체계지식체계1</label></span>
                                    <div class="commmon_select">
                                      <select disabled="disabled" aria-label="지식체계지식체계지식체계1 문항 수 선택">
                                        <option value="2문항">2문항</option>
                                        <option value="3문항">3문항</option>
                                        <option value="4문항">4문항</option>
                                      </select>
                                    </div>
                                  </li>
                                  <li>
                                    <span class="common_checkbox"><input type="checkbox" id="inp2-2" /><label for="inp2-2">지식체계2</label></span>
                                    <div class="commmon_select">
                                      <select aria-label="지식체계2 문항 수 선택">
                                        <option value="2문항">2문항</option>
                                        <option value="3문항">3문항</option>
                                        <option value="4문항">4문항</option>
                                      </select>
                                    </div>
                                  </li>
                                </ul>
                                <div>
                                  <p>소단원</p>
                                  <ul class="check_list">
                                    <li>
                                      <span class="common_checkbox"><input type="checkbox" id="inp3-1" /><label for="inp3-1">지식체계지식체계지식체계1</label></span>
                                      <div class="commmon_select">
                                        <select disabled="disabled" aria-label="지식체계지식체계지식체계1 문항 수 선택">
                                          <option value="2문항">2문항</option>
                                          <option value="3문항">3문항</option>
                                          <option value="4문항">4문항</option>
                                        </select>
                                      </div>
                                    </li>
                                    <li>
                                      <span class="common_checkbox"><input type="checkbox" id="inp3-2" /><label for="inp3-2">지식체계2</label></span>
                                      <div class="commmon_select">
                                        <select aria-label="지식체계2 문항 수 선택">
                                          <option value="2문항">2문항</option>
                                          <option value="3문항">3문항</option>
                                          <option value="4문항">4문항</option>
                                        </select>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li><span class="common_checkbox tree"><input type="checkbox" id="inp22" /><label for="inp22">중단원2</label></span></li>
                              <li><span class="common_checkbox tree"><input type="checkbox" id="inp33" /><label for="inp33">중단원3</label></span></li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="inp_chk_wrap">
                <p>평가 진행후 결과에 따른 AI 추천학습 제공</p>
                <span class="inp_checkbox"><input type="checkbox" id="inp123"><label
                    for="inp123"><span></span></label></span>
              </div>
            </div>
          </div>

          <!-- footer -->
          <div class="layer_footer">
            <div class="btn_dialog">
              <button type="button" class="common_btn color" @click="closePopup($event)"><span>닫기</span></button>
              <button type="button" class="common_btn"><span>평가 시작</span></button>
            </div>
          </div>
        </div>

        <button type="button" class="layer_close" @click="closePopup($event)">close
        </button>
      </div>
    </div>

    <!-- 2 참고자료 추가 -->
    <div class="modal_layer_popup">
      <div class="dimmed_layer" @click="closePopup($event)"></div>
      <div class="layer_content_wrap">
        <div class="layer_content">
          <!-- header -->
          <div class="layer_header">
            <div class="inner">
              <h1>참고자료 추가</h1>
            </div>
          </div>

          <!-- body -->
          <div class="layer_body">
            <div class="form_list_wrap">
              <div class="form_table">
                <table class="form_list">
                  <caption>참고자료 추가입력</caption>
                  <colgroup>
                    <col style="width: 80px;" />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th scope="row"><label for="resourceTitle">제목<span>*</span></label></th>
                      <td>
                        <div class="content">
                          <input type="text" id="resourceTitle" placeholder="공유할 참고자료의 제목을 입력해주세요" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" id="typeLabel">유형<span>*</span></th>
                      <td>
                        <div class="content" role="radiogroup" aria-labelledby="typeLabel">
                          <div class="radio_grid">
                            <span class="common_radio"><input type="radio" name="rdo2-1" id="rdo2-1"><label for="rdo2-1">웹URL</label></span>
                            <span class="common_radio"><input type="radio" name="rdo2-1" id="rdo2-2"><label for="rdo2-2">유튜브</label>
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row"><label for="resourceUrl">URL<span>*</span></label></th>
                      <td>
                        <div class="content">
                          <p class="sub_txt">목록의 제목을 클릭하면 해당 URL을 바로 여실 수 있어요!</p>
                          <input type="text" id="resourceUrl" placeholder="참고자료의 링크를 입력해주세요" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" id="shareTargetLabel">공유대상<span>*</span></th>
                      <td>
                        <div class="content">
                          <div class="radio_grid" role="radiogroup" aria-labelledby="shareTargetLabel">
                            <span class="common_radio"><input type="radio" name="rdo2-2" id="rdo2-3"><label for="rdo2-3">학급전체</label></span>
                            <span class="common_radio"><input type="radio" name="rdo2-2" id="rdo2-4"><label for="rdo2-4">개별학생</label></span>
                          </div>
                          <div class="scroll_content">
                            <ul aria-label="학생 목록">
                              <li v-for="(student, index) in studentData" :key="`student${index}`" :class="{active: student.isActive}" @click="selectStudent(index)">
                                {{ index+1 }}번 {{ student.name }}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="bottom">
                <span class="common_checkbox"><input type="checkbox" id="inp22-1" /><label for="inp22-1">학생에게 PUSH
                    보내기</label></span>
              </div>
            </div>
          </div>

          <!-- footer -->
          <div class="layer_footer">
            <div class="btn_dialog">
              <button type="button" class="common_btn color" @click="closePopup($event)"><span>닫기</span></button>
              <button type="button" class="common_btn"><span>평가 시작</span></button>
            </div>
          </div>
        </div>

        <button type="button" class="layer_close" @click="closePopup($event)">close
        </button>
      </div>
    </div>

    <!-- 3 지금 확인하기 -->
    <div class="modal_layer_popup short_size hide_header">
      <div class="dimmed_layer" @click="closePopup($event)"></div>
      <div class="layer_content_wrap">
        <div class="layer_content">
          <!-- header -->
          <div class="layer_header"></div>

          <!-- body -->
          <div class="layer_body">
            <div class="inner">
              <p class="sub_tit">선생님 추가한 학습참고자료가 있어요!<br><strong>[지금확인하기]</strong> 버튼을 클릭해 확인해 보세요.</p>
              <div class="link_youtube">
                <a href="#"><span>학습명이 노출됩니다.</span></a>
                <a href="#" class="link"><span>학습명이 노출됩니다.</span></a>
              </div>
            </div>
          </div>

          <!-- footer -->
          <div class="layer_footer">
            <div class="btn_dialog">
              <button type="button" class="common_btn color" @click="closePopup($event)"><span>나중에 확인하기</span></button>
              <button type="button" class="common_btn"><span>지금 확인하기</span></button>
            </div>
          </div>
        </div>
        <button type="button" class="layer_close" @click="closePopup($event)">close
        </button>
      </div>
    </div>

    <!-- 4 배경설정 -->
    <div class="modal_layer_popup long_size">
      <div class="dimmed_layer" @click="closePopup($event)"></div>
      <div class="layer_content_wrap">
        <div class="layer_content">
          <!-- header -->
          <div class="layer_header">
            <div class="inner">
              <h1>배경설정</h1>
              <div class="file_upload_wrap">
                <p>권장사이즈 (1904px*1190px)</p>
                <span><input type="file" id="inpFile" /><label for="inpFile">직접등록</label></span>
              </div>
            </div>
          </div>

          <!-- body -->
          <div class="layer_body">
            <div class="inner">
              <ul class="thunbnail_list">
                <li v-for="(thumbnail, index) in $store.state.bgImagesData.bgImages" :key="`thumbnail${index}`"
                  :class="{active: thumbnail.isActive}" @click="selectThumb(index)">
                  <div class="thumb">
                    <img :src="require(`@/assets/images/${thumbnail.img}`)" alt="" />
                  </div>
                  <p>{{ thumbnail.name }}</p>
                </li>
              </ul>
            </div>
          </div>

          <!-- footer -->
          <div class="layer_footer">
            <div class="btn_dialog">
              <button type="button" class="common_btn color" @click="closePopup($event)">
                <span>취소</span>
              </button>
              <button type="button" class="common_btn"><span>적용</span></button>
            </div>
          </div>
        </div>

        <button type="button" class="layer_close" @click="closePopup($event)">close
        </button>
      </div>
    </div>

    <!-- 5 판서보드 공유 -->
    <div class="modal_layer_popup short_size">
      <div class="dimmed_layer" @click="closePopup($event)"></div>
      <div class="layer_content_wrap">
        <div class="layer_content">
          <!-- header -->
          <div class="layer_header">
            <div class="inner">
              <h1>판서 공유</h1>
            </div>
          </div>

          <!-- body -->
          <div class="layer_body">
            <div class="inner">
              <p class="sub_tit">판서공유 옵션을 선택해주세요</p>
              <ul class="inp_radio_list">
                <li><span class="common_radio"><input type="radio" name="rdo5" id="rdo5-1" /><label for="rdo5-1">참고자료로
                      추가하기</label></span></li>
                <li><span class="common_radio"><input type="radio" name="rdo5" id="rdo5-2" /><label for="rdo5-2">참고자료로
                      추가하고 학생화면에 바로 공유하기</label></span></li>
              </ul>

              <div class="form_list_wrap">
                <ul class="form_list">
                  <li>
                    <strong>평가지명<span>*</span></strong>
                    <div class="content">
                      <input type="text" placeholder="1차시 형성평가 2회차" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- footer -->
          <div class="layer_footer">
            <div class="btn_dialog">
              <button type="button" class="common_btn color"><span>취소</span></button>
              <button type="button" class="common_btn"><span>공유</span></button>
            </div>
          </div>
        </div>

        <button type="button" class="layer_close" @click="closePopup($event)">close
        </button>
      </div>
    </div>

    <!-- 6 판서보드 종료 -->
    <div class="modal_layer_popup short_size">
      <div class="dimmed_layer" @click="closePopup($event)"></div>
      <div class="layer_content_wrap">
        <div class="layer_content">
          <!-- header -->
          <div class="layer_header">
            <div class="inner">
              <h1>판서보드 종료</h1>
            </div>
          </div>

          <!-- body -->
          <div class="layer_body">
            <div class="inner">
              <p class="sub_tit">판서보드종료 시 작성하신 내용은 저장되지 않아요<br />판서보드를 종료하시겠어요?</p>
              <ul class="inp_radio_list">
                <li><span class="common_radio"><input type="radio" name="rdo6" id="rdo6-1" /><label
                      for="rdo6-1">그냥종료하기</label></span></li>
                <li><span class="common_radio"><input type="radio" name="rdo6" id="rdo6-2" /><label for="rdo6-2">참고자료로
                      추가하기</label></span></li>
                <li><span class="common_radio"><input type="radio" name="rdo6" id="rdo6-3" /><label for="rdo6-3">참고자료로
                      추가하고 학생화면에 바로 공유하기</label></span></li>
              </ul>

              <div class="form_list_wrap">
                <ul class="form_list">
                  <li>
                    <strong>평가지명<span>*</span></strong>
                    <div class="content">
                      <input type="text" placeholder="1차시 형성평가 2회차" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- footer -->
          <div class="layer_footer">
            <div class="btn_dialog">
              <button type="button" class="common_btn color"><span>취소</span></button>
              <button type="button" class="common_btn"><span>종료</span></button>
            </div>
          </div>
        </div>

        <button type="button" class="layer_close" @click="closePopup($event)">close
        </button>
      </div>
    </div>

    <!-- 7 안내-->
    <div class="modal_layer_popup short_size align_center">
      <div class="dimmed_layer" @click="closePopup($event)"></div>
      <div class="layer_content_wrap">
        <div class="layer_content">
          <!-- header -->
          <div class="layer_header">
            <div class="inner">
              <h1>안내</h1>
            </div>
          </div>

          <!-- body -->
          <div class="layer_body">
            <div class="inner">
              <div class="noti_cont">
                <img :src="require(`@/assets/images/modal/ico_noti.svg`)" alt="" />
                <strong>현재 판서보드가 열려있어요!</strong>
                <p><strong>[나가기]</strong> 버튼을 클릭하여<br>판서보드 종료후 이동해주세요</p>
              </div>
            </div>
          </div>

          <!-- footer -->
          <div class="layer_footer">
            <div class="btn_dialog">
              <button type="button" class="common_btn"><span>확인</span></button>
            </div>
          </div>
        </div>

        <button type="button" class="layer_close" @click="closePopup($event)">close</button>
      </div>
    </div>

    <!-- 8 메모-->
    <div class="modal_layer_popup short_size align_center">
      <div class="dimmed_layer" @click="closePopup($event)"></div>
      <div class="layer_content_wrap">
        <div class="layer_content">
          <!-- header -->
          <div class="layer_header">
            <div class="inner">
              <h1>메모<span>2024.02.12 12:39</span></h1>
            </div>
          </div>

          <!-- body -->
          <div class="layer_body">
            <div class="inner">
              <div class="memo_content">
                <textarea></textarea>
              </div>
            </div>
          </div>

          <!-- footer -->
          <div class="layer_footer">
            <div class="btn_dialog">
              <button type="button" class="common_btn color2"><span>삭제</span></button>
              <button type="button" class="common_btn"><span>저장</span></button>
            </div>
          </div>
        </div>

        <button type="button" class="layer_close" @click="closePopup($event)">close</button>
      </div>
    </div>

    <!-- 9 문제은행기반_수동제출하기[팝업](학생) -->
    <div class="modal_layer_popup short_size align_center notice_layout">
      <div class="dimmed_layer" @click="closePopup($event)"></div>
      <div class="layer_content_wrap">
        <div class="layer_content">
          <!-- header -->
          <div class="layer_header">
            <div class="inner">
            </div>
          </div>

          <!-- body -->
          <div class="layer_body">
            <div class="inner">
              <div class="noti_cont">
                <img :src="require(`@/assets/images/modal/ico_noti2.svg`)" alt="" />
                <strong>제출후엔 답안을 수정하실 수 없어요!<br>답안을 제출하시겠어요?</strong>
              </div>
            </div>
          </div>

          <!-- footer -->
          <div class="layer_footer">
            <div class="btn_dialog">
              <button type="button" class="common_btn color"><span>닫기</span></button>
              <button type="button" class="common_btn"><span>제출</span></button>
            </div>
          </div>
        </div>

        <button type="button" class="layer_close" @click="closePopup($event)">close</button>
      </div>
    </div>

    <!-- 10 문제은행기반_평가중이동불가안내[팝업] -->
    <div class="modal_layer_popup short_size align_center notice_layout">
      <div class="dimmed_layer" @click="closePopup($event)"></div>
      <div class="layer_content_wrap">
        <div class="layer_content">
          <!-- header -->
          <div class="layer_header">
            <div class="inner">
            </div>
          </div>

          <!-- body -->
          <div class="layer_body">
            <div class="inner">
              <div class="noti_cont">
                <img :src="require(`@/assets/images/modal/ico_noti.svg`)" alt="" />
                <strong>현재 평가가 진행중이예요!</strong>
                <p>평가중에는 이동이 불가합니다.<br>평가가 종료된 후 다른 학습을 진행하실 수 있어요</p>
              </div>
            </div>
          </div>

          <!-- footer -->
          <div class="layer_footer">
            <div class="btn_dialog">
              <button type="button" class="common_btn color"><span>닫기</span></button>
              <button type="button" class="common_btn"><span>확인</span></button>
            </div>
          </div>
        </div>

        <button type="button" class="layer_close" @click="closePopup($event)">close</button>
      </div>
    </div>

    <!-- 11 주목 -->
    <div class="modal_layer_popup attention">
      <div class="dimmed_layer" @click="closePopup($event)"></div>
      <div class="layer_content_wrap">
        <div class="layer_content">
          <!-- header -->
          <div class="layer_header">
            <div class="inner">
              <h1>주목</h1>
            </div>
          </div>

          <!-- body -->
          <div class="layer_body">
            <div class="inner">
              <img :src="require(`@/assets/images/modal/ico_attention.svg`)" alt="" />
              <p>선생님을 주목해주세요!</p>
            </div>
          </div>

          <!-- footer -->
          <div class="layer_footer"></div>
        </div>
      </div>
    </div>

    <!-- 12 평가완료 -->
    <div class="modal_layer_popup short_size align_center notice_layout">
      <div class="dimmed_layer" @click="closePopup($event)"></div>
      <div class="layer_content_wrap">
        <div class="layer_content">
          <!-- header -->
          <div class="layer_header">
            <div class="inner">
              <h1>안내</h1>
            </div>
          </div>

          <!-- body -->
          <div class="layer_body">
            <div class="inner">
              <div class="noti_cont">
                <img :src="require(`@/assets/images/modal/ico_noti3.svg`)" alt="" />
                <strong>아직 <span>응시중인 학생이 N명</span> 있습니다.<br></strong>
                <p>
                  평가를 완료하시면<br>
                  응시중인 학생의 답안이 자동으로 제출됩니다.<br>
                  평가를 완료하시겠어요?
                </p>
              </div>
            </div>
          </div>

          <!-- footer -->
          <div class="layer_footer">
            <div class="btn_dialog">
              <button type="button" class="common_btn color"><span>취소</span></button>
              <button type="button" class="common_btn"><span>평가완료</span></button>
            </div>
          </div>
        </div>

        <button type="button" class="layer_close" @click="closePopup($event)">close</button>
      </div>
    </div>

    <!-- 13 활동중안내 -->
    <div class="modal_layer_popup short_size align_center notice_layout">
      <div class="dimmed_layer" @click="closePopup($event)"></div>
      <div class="layer_content_wrap">
        <div class="layer_content">
          <!-- header -->
          <div class="layer_header">
            <div class="inner">
              <h1>안내</h1>
            </div>
          </div>

          <!-- body -->
          <div class="layer_body">
            <div class="inner">
              <div class="noti_cont">
                <img :src="require(`@/assets/images/modal/ico_noti4.svg`)" alt="" />
                <strong>현재 활동중이예요!</strong>
                <p>
                  활동보드를 중지하시거나<br>
                  종료하신 후 재시도 해주세요!
                </p>
              </div>
            </div>
          </div>

          <!-- footer -->
          <div class="layer_footer">
            <div class="btn_dialog">
              <button type="button" class="common_btn"><span>확인</span></button>
            </div>
          </div>
        </div>

        <button type="button" class="layer_close" @click="closePopup($event)">close</button>
      </div>
    </div>

    <!-- class active show 없으면 hide -->
    <div class="highlights_memo_layer active" style="top: 0%;left: 90%;">
      <div class="inner">
        <ul>
          <li><a href="#">하이라이트<span> 삭제</span></a></li>
          <li><a href="#">메모</a></li>
        </ul>
      </div>
    </div>

    <!-- class active show 없으면 hide -->
    <div class="memo_layer active" style="top: 0%;left: 80%;"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      studentData: [
        { name: '김강감찬', isActive: false, inClass: true, group: 1 },
        { name: '권보아', isActive: false, inClass: true, group: 2 },
        { name: '김남준', isActive: false, inClass: true, group: 1 },
        { name: '김태형', isActive: false, inClass: true, group: 1 },
        { name: '민윤기', isActive: false, inClass: true, group: 1 },
        { name: '박지민', isActive: false, inClass: true, group: 2 },
        { name: '심수봉', isActive: false, inClass: true, group: null },
        { name: '안중근', isActive: false, inClass: true, group: 3 },
        { name: '장영실', isActive: false, inClass: false, group: 3 },
        { name: '홍두깨', isActive: false, inClass: false, group: 3 },
        { name: '김석진', isActive: false, inClass: false, group: 3 },
        { name: '김정호', isActive: false, inClass: false, group: null },
        { name: '홍길동', isActive: false, inClass: false, group: null },
        { name: '박찬호', isActive: false, inClass: false, group: null },
        { name: '심순애', isActive: false, inClass: false, group: null },
        { name: '정약용', isActive: false, inClass: false, group: null }
      ]
    }
  },
  mounted () {
    // this.popupOpen(11)
  },
  methods: {
    popupOpen (index) {
      const target = document.querySelectorAll('.modal_layer_popup')[index - 1]
      target.classList.add('active')
    },
    closePopup (e) {
      e.target.closest('.modal_layer_popup').classList.remove('active')
    },
    selectStudent (currentIndex) {
      this.studentData.forEach((e, index) => {
        if (index === currentIndex) {
          e.isActive ? e.isActive = false : e.isActive = true
        }
      })
    },
    selectThumb (currentIndex) {
      this.$store.state.bgImagesData.bgImages.forEach((e, index) => {
        e.isActive = index === currentIndex
      })
    }
  }
}
</script>
