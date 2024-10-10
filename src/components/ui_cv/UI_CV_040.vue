<template>
  <div class="contents">
    <div class="title_box">
      <h2>콘텐츠명이 노출됩니다.</h2>
    </div>

    <div class="inner">
      <div class="noti_content web_url">
        <div class="inner">
          <div class="visual"><img :src="require(`@/assets/images/common/ico_url_visual.svg`)" alt="" /></div>

          <div class="copy_content">
            <div>
              <input type="text" placeholder="www.example.com" />
              <button type="button"><span>복사</span></button>
            </div>
          </div>

          <button type="button">참고자료 확인하기</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
