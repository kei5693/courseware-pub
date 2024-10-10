<template>
  <div class="contents youtube_content">
    <div class="title_box">
      <h2>유튜브 영상 제목이 노출됩니다.</h2>
    </div>

    <div class="inner">
      <div
        class="player_cont"
        ref="player_cont"
      >
        <iframe
          ref="player"
          :src="`https://www.youtube.com/embed/${youtube}`"
          :width="playerValue.width"
          :height="playerValue.height"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="Tr&amp;eacute;ning TEXT">
        </iframe>
      </div>
      <div
        class="summary_cont"
        v-if="summary !== null"
      >
        <div class="inner">
          <div>
            <p v-html="summary"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      youtube: 'dRiJNwhZT0I',
      summary: '유튜브 영상 요약내용이 노출됩니다. 유튜브 영상 요약내용이 노출됩니다. 유튜브 영상 요약내용이 노출됩니다. 유튜브 영상 요약내용이 노출됩니다. 유튜브 영상 요약내용이 노출됩니다. 유튜브 영상 요약내용이 노출됩니다. 유튜브 영상 요약내용이 노출됩니다. 유튜브 영상 요약내용이 노출됩니다. 유튜브 영상 요약내용이 노출됩니다. 유튜브 영상 요약내용이 노출됩니다. 유튜브 영상 요약내용이 노출됩니다. 유튜브 영상 요약내용이 노출됩니다. 유튜브 영상 요약내용이 노출됩니다. 유튜브 영상 요약내용이 노출됩니다. 유튜브 영상 요약내용이 노출됩니다. 유튜브 영상 요약내용이 노출됩니다. 유튜브 영상 요약내용이 노출됩니다. 유튜브 영상 요약내용이 노출됩니다. 유튜브 영상 요약내용이 노출됩니다. 유튜브 영상 요약내용이 노출됩니다. 유튜브 영상 요약내용이 노출됩니다. 유튜브 영상 요약내용이 노출됩니다. 유튜브 영상 요약내용이 노출됩니다. 유튜브 영상 요약내용이 노출됩니다. 유튜브 영상 요약내용이 노출됩니다. 유튜브 영상 요약내용이 노출됩니다. 유튜브 영상 요약내용이 노출됩니다. 유튜브 영상 요약내용이 노출됩니다. 유튜브 영상 요약내용이 노출됩니다. 유튜브 영상 요약내용이 노출됩니다. 유튜브 영상 요약내용이 노출됩니다. 유튜브 영상 요약내용이 노출됩니다. 유튜브 영상 요약내용이 노출됩니다. 유튜브 영상 요약내용이 노출됩니다. 유튜브 영상 요약내용이 노출됩니다. 유튜브 영상 요약내용이 노출됩니다. 유튜브 영상 요약내용이 노출됩니다. 유튜브 영상 요약내용이 노출됩니다. 유튜브 영상 요약내용이 노출됩니다. 유튜브 영상 요약내용이 노출됩니다.',
      // summary: null,
      playerValue: {
        width: 10,
        height: 20
      }
    }
  },
  mounted () {
    this.getPlayerValue()
    window.addEventListener('resize', this.getPlayerValue)
  },
  methods: {
    getPlayerValue () {
      this.playerValue.width = this.$refs.player_cont.clientWidth
      this.playerValue.height = this.$refs.player_cont.clientHeight
    }
  }

}
</script>
