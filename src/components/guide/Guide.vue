<template>
  <div class="guideContentWrap">
    <div class="innerWrap">
      <div>
        <h2>버튼</h2>
        <div class="gridList">
          <button type="button" class="common_btn"><span>설정저장</span></button>
          <button type="button" class="common_btn" disabled><span>설정저장</span></button>
          <button type="button" class="common_btn color"><span>설정저장</span></button>
          <button type="button" class="common_btn color2"><span>설정저장</span></button>
          <button type="button" class="common_btn color3"><span>설정저장</span></button>
          <button type="button" class="common_btn color4"><span>설정저장</span></button>
          <button type="button" class="common_btn color5"><span>설정저장</span></button>
          <button type="button" class="common_btn color6"><span>설정저장</span></button>
        </div>
      </div>

      <div>
        <h2>라디오</h2>
        <div class="gridList">
          <span class="common_radio">
            <input type="radio" name="rdo1-1" id="rdo1-1">
            <label for="rdo1-1">라디오1</label>
          </span>
          <span class="common_radio">
            <input type="radio" name="rdo1-1" id="rdo1-2">
            <label for="rdo1-2">라디오2</label>
          </span>
          <span class="common_radio">
            <input type="radio" name="rdo1-1" id="rdo1-3" disabled />
            <label for="rdo1-3">라디오3</label>
          </span>
        </div>
      </div>

      <div>
        <h2>체크박스</h2>
        <div class="gridList">
          <span class="common_checkbox">
            <input type="checkbox" id="chk1-1"><label for="chk1-1">체크박스1</label>
          </span>
          <span class="common_checkbox tree">
            <input type="checkbox" id="inp11"><label for="inp11">중단원1</label>
          </span>
          <span class="inp_checkbox">
            <input type="checkbox" id="inp123"><label for="inp123"><span></span></label>
          </span>
        </div>
      </div>

      <div>
        <h2>셀렉트박스</h2>
        <div style="width: 200px;">
          <div class="commmon_select">
            <select>
              <option value="2문항">2문항</option>
              <option value="3문항">3문항</option>
              <option value="4문항">4문항</option>
            </select>
          </div>
        </div>
        <div style="width: 400px;">
          <div class="commmon_select widthAuto">
            <select>
              <option value="2문항">2문항</option>
              <option value="3문항">3문항</option>
              <option value="4문항">4문항</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <h2>파일 업로드</h2>
        <div class="gridList">
          <div class="common_file_upload">
            <span>
              <input type="file" id="inpFile2" /><label for="inpFile2">배경설정</label>
            </span>
          </div>

          <div class="common_file_upload icon">
            <span>
              <input type="file" id="inpFile" /><label for="inpFile">직접등록</label>
            </span>
            <!-- 파일 첨부 시 -->
            <div class="img_thumbnail">
              <img src="@/assets/images/dummy/img_thumbnail2.png" alt="" />
              <button type="button"><span>닫기</span></button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2>체크박스</h2>
        <div class="gridList">
          <div style="display: flex;align-items: center;">
            <div class="inp_radio">
              <input type="radio" name="rdo" id="rdo321" /><label for="rdo321"><span>왼쪽</span></label>
            </div>
            <div class="inp_radio">
              <input type="radio" name="rdo" id="rdo322" /><label for="rdo322"><span>오른쪽</span></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
