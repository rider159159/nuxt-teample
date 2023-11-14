<script setup>
import { storeToRefs } from 'pinia'

// 登入彈窗
const { IS_REQUEST } = storeToRefs(requestStore())
</script>

<template>
  <div v-if="IS_REQUEST" class="loadingContainer">
    <div id="floatingCirclesG">
      <div id="frotateG_01" class="f_circleG" />
      <div id="frotateG_02" class="f_circleG" />
      <div id="frotateG_03" class="f_circleG" />
      <div id="frotateG_04" class="f_circleG" />
      <div id="frotateG_05" class="f_circleG" />
      <div id="frotateG_06" class="f_circleG" />
      <div id="frotateG_07" class="f_circleG" />
      <div id="frotateG_08" class="f_circleG" />
    </div>
  </div>
</template>

<style scoped>
.loadingContainer{
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.30);
  z-index: 50;
}

#floatingCirclesG{
  position:relative;
  width:125px;
  height:125px;
  margin:auto;
  transform:scale(0.6);
}

.f_circleG{
  position:absolute;
  background-color:rgb(255,255,255);
  height:22px;
  width:22px;
  border-radius:12px;
  animation-name:f_fadeG;
  animation-duration:0.522s;
  animation-iteration-count:infinite;
  animation-direction:normal;
}

#frotateG_01{
  left:0;
  top:51px;
  animation-delay:0.0195s;
}

#frotateG_02{
  left:15px;
  top:15px;
  animation-delay:0.076s;
}

#frotateG_03{
  left:51px;
  top:0;
  animation-delay:0.1425s;
}

#frotateG_04{
  right:15px;
  top:15px;
  animation-delay:0.209s;
}

#frotateG_05{
  right:0;
  top:51px;
  animation-delay:0.2755s;
}

#frotateG_06{
  right:15px;
  bottom:15px;
  animation-delay:0.342s;
}

#frotateG_07{
  left:51px;
  bottom:0;
  animation-delay:0.4085s;
}

#frotateG_08{
  left:15px;
  bottom:15px;
  animation-delay:0.465s;
}

@keyframes f_fadeG{
  0%{
    background-color:rgb(0,0,0);
  }

  100%{
    background-color:rgb(255,255,255);
  }
}
</style>
