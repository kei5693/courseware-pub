<template>
  <div class="contents color">
    <div class="title_box">
      <h2>콘텐츠명이 노출됩니다</h2>
    </div>

    <div class="inner">
      <div class="noti_content">
        <div class="inner">
          <img :src="require(`@/assets/images/common/ico_noti1.svg`)" alt="" />
          <h3>요청하신 콘텐츠를 찾을 수 없습니다.</h3>
          <h4>페이지의 주소가 잘못 입력되었거나,<br>
            변경 혹은 삭제되어 요청하신 페이지를 찾을 수가 없습니다.<br>
            입력하신 페이지의 주소가 정확한지 다시 한번 확인해 주시기바랍니다.
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
