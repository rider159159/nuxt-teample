<script setup>
const config = useRuntimeConfig()


async function getProposalList (queryObj) {
  const res = await useFetch('/proposal',{
    query: queryObj,
    baseURL: config.public.BASE_API_URL,
    method:'GET',
    onResponse({ response }) {
      response._data = {
        ...response._data.data.list,
      }
    },
  })
  return res
}

const hotQuery = {
  order: 3,
  page: 1,
  pageSize: 3
}
const recentlyQuery = {
  order: 1,
  page: 1,
  pageSize: 3
}
const carouselQuery = {
  page: 1,
  pageSize: 6
}
const promise = [getProposalList(hotQuery), getProposalList(recentlyQuery), getProposalList(carouselQuery)]
const [ { data:recentlyProposalList },{ data:hotProposalList },{ data:carouselProposalList } ] = await Promise.all(promise)

</script>

<template>
  <div class="mx-auto flex flex-col items-center">
    <p>首頁</p>
  </div>
</template>

<style scoped lang="scss">
.test{
  a {
    color: #00ff06;
    padding:20px
  }
}
</style>
