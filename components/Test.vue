<script setup>
const { $gsap, $d3 } = useNuxtApp()
import worldData from '@/assets/taiwan.json'
// import { geoMercator, geoPath } from 'd3-geo'
import { feature,mesh } from 'topojson-client'

onMounted(() => {
  $gsap.to('#text', {
    x: -1000,
    duration: 5,
    repeat: -1,
    ease: 'none',
  })
  drawChart()
});


function drawChart() {
  mySvg = $d3.select("#mySVG");
  const g = mySvg.append("g");

  const projection = $d3.geoMercator()
    .center([121, 24]) 
    .scale(8000)
    .translate([480, 250]);

  const path = $d3.geoPath()
    .projection(projection);

  // 在svg上绘制路径  
  mySvg.selectAll("path")
    .data(worldData.features)
    .enter()
    .append("path")
    .attr("d", path);

    g.append("path")
    .attr("fill", "none")
    .attr("stroke", "white")
    .attr("stroke-linejoin", "round")
    .attr("d", path(mesh(worldData, worldData.objects.states, (a, b) => a !== b)));

}

</script>

<template>
  <div class="m-[50px] overflow-hidden">
    <p id="text" class="whitespace-nowrap">
      這是一段文字，這是一個 GSAP 跑馬燈範例. 這是一段文字，這是一個 GSAP 跑馬燈範例. 這是一段文字，這是一個 GSAP 跑馬燈範例. 這是一段文字，這是一個 GSAP 跑馬燈範例. 這是一段文字，這是一個 GSAP 跑馬燈範例. 這是一段文字，這是一個 GSAP 跑馬燈範例. 這是一段文字，這是一個 GSAP 跑馬燈範例. 這是一段文字，這是一個 GSAP 跑馬燈範例. 這是一段文字，這是一個 GSAP 跑馬燈範例
    </p>
  </div>
</template>

<style scoped>

</style>