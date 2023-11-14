import { defineStore } from 'pinia'

// request pending 中的 API 的狀態
export const requestStore = defineStore('request-store', () => {
  // 是否顯示 Loading 特效
  const LOADING_ARRAY = ref([])
  const IS_PENDING = ref(false)
  const REQUEST_ARRAY = ref([])

  const ADD_LOADING_ARRAY = (loadingToken) => {
    LOADING_ARRAY.value.push(loadingToken)
  }

  const REMOVE_TARGET_LOADING_ARRAY = (id) => {
    const loadingIndex = LOADING_ARRAY.value.findIndex(item => item.id === id)
    if (loadingIndex > -1)
      LOADING_ARRAY.value.splice(loadingIndex, 1)
  }

  const REMOVE_ALL_LOADING_ARRAY = () => {
    LOADING_ARRAY.value = []
  }

  const ADD_REQUEST_ARRAY = (loadingToken) => {
    REQUEST_ARRAY.value.push(loadingToken)
  }

  const REMOVE_TARGET_REQUEST_ARRAY = (id = '') => {
    if (id.length > 0) {
      const requestIndex = REQUEST_ARRAY.value.findIndex(item => item.id === id)
      if (requestIndex > -1) {
        // 取消 Request ，並刪除這筆資料
        const cancelRequest = REQUEST_ARRAY.value[requestIndex]
        cancelRequest.cancel?.abort()
        REQUEST_ARRAY.value.splice(requestIndex, 1)
      }
      REMOVE_TARGET_LOADING_ARRAY(id)
    }
  }

  const CANCEL_ALL_API = () => {
    REQUEST_ARRAY.value.forEach((i) => {
      i.cancel?.abort()
    })
    LOADING_ARRAY.value = []
    REQUEST_ARRAY.value = []
  }

  const IS_REQUEST = computed(() => {
    if (LOADING_ARRAY.value.length > 0)
      return true

    return false
  })

  return {
    LOADING_ARRAY,
    ADD_LOADING_ARRAY,
    REMOVE_TARGET_LOADING_ARRAY,
    ADD_REQUEST_ARRAY,
    REMOVE_TARGET_REQUEST_ARRAY,
    IS_PENDING,
    IS_REQUEST,
    CANCEL_ALL_API,
    REMOVE_ALL_LOADING_ARRAY,
  }
})
