<template>
  <div class="panel_wrap student_panel">
    <div class="panel_header">
      <div class="inner">
        <div class="title">
          <h2>학생현황
            <strong class="point">{{$store.getters.getInClassStatus.length}}</strong>
            <span>/</span>
            <span>{{ $store.state.studentData.length }}</span>
          </h2>
        </div>
      </div>
      <button
        type="button"
        class="btn_close"
        @click="closePopup"
      >
        <span>닫기</span>
      </button>
    </div>
    <div class="panel_body">
      <div class="inner">
        <ul class="student_list">
          <li
            v-for="(student, index) in $store.state.studentData"
            :key="`student${index}`"
            :class="{in_class: student.inClass}"
          >
            <strong>{{ student.name }}</strong>
            <span>{{ student.class }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="panel_footer"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {
    closePopup () {
      this.$store.commit('closePopup', 1)
    }
  }
}
</script>
