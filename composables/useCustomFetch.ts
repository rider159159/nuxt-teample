import baseAPI from '../api/core/baseAPI'

interface headerItem {
  [key: string]: any
}

function getPendingKey(config: any) {
  const { url, method, query = null, params = null } = config
  return [url, method, params ? JSON.stringify(params) : '', query ? JSON.stringify(query) : ''].join('&')
}

// API class ，可使用 new 創建實例
class MainAPI extends baseAPI {
  private abortController: AbortController
  constructor(baseURL: string, headers: { [key: string]: string }) {
    super(baseURL, headers)
    this.abortController = new AbortController()
  }

  /**
   * @param url API網址
   * @param payload API query 參數
   * @param isLoading API 是否使用全域 loading ，預設 true = 開啟
   * @param errorHandles API 客製化錯誤處理
   * @param customHeader 客製化 Header
   */
  public async getCall(url: string, payload?: object | null, isLoading = true, errorHandles?: null | Function, customHeader: null | headerItem = null) {
    const { ADD_LOADING_ARRAY, REMOVE_TARGET_LOADING_ARRAY, ADD_REQUEST_ARRAY, REMOVE_TARGET_REQUEST_ARRAY, CANCEL_ALL_API } = requestStore()
    const vm = this
    // 第二個參數可帶上攔截器、header、method、body
    return useFetch(url, {
      headers: {
        // this.headers 在 new 時代入， customHeader 可由各個 API 帶入
        ...this.headers,
        ...customHeader,
      },
      method: 'GET',
      // get 使用 query
      query: payload || undefined,
      baseURL: this.baseURL,
      signal: this.abortController.signal,
      // onResponseError 、 catch 會接到相同資料，但 onResponseError 才能使用 errorHandles 的方法
      onRequest({ request, options }) {
        const key = getPendingKey({ ...options, url: `${vm.baseURL}${request}` })
        // 防重複用
        REMOVE_TARGET_REQUEST_ARRAY(key)
        ADD_REQUEST_ARRAY({ id: key, cancel: vm.abortController })
        // Loading 用
        if (isLoading)
          ADD_LOADING_ARRAY({ id: key })
      },
      onResponse({ request, options }) {
        const key = getPendingKey({ ...options, url: request })
        // 防重複用
        REMOVE_TARGET_REQUEST_ARRAY(key)
        // Loading 用
        if (isLoading)
          REMOVE_TARGET_LOADING_ARRAY(key)
      },
      onResponseError() {
        CANCEL_ALL_API()
        if (errorHandles)
          errorHandles()
      },
    }).catch((error) => {
      if (!error.message.includes('aborted a request'))
        alert(error)
    })
  }

  /**
   * @param url API網址
   * @param payload API query 參數
   * @param isLoading API 是否使用全域 loading ，預設 true = 開啟
   * @param errorHandles API 客製化錯誤處理
   * @param customHeader 客製化 Header
   */
  public async postCall(url: string, payload?: object | null, isLoading = true, errorHandles?: null | Function, customHeader: null | headerItem = null) {
    const { ADD_LOADING_ARRAY, REMOVE_TARGET_LOADING_ARRAY, ADD_REQUEST_ARRAY, REMOVE_TARGET_REQUEST_ARRAY, CANCEL_ALL_API } = requestStore()
    const vm = this

    // 第二個參數可帶上攔截器、header、method、body
    return useFetch(url, {
      headers: {
        // this.headers 在 new 時代入， customHeader 可由各個 API 帶入
        ...this.headers,
        ...customHeader,
      },
      method: 'POST',
      // POST 使用 body
      body: payload,
      baseURL: this.baseURL,
      signal: this.abortController.signal,
      // onResponseError 、 catch 會接到相同資料，但 onResponseError 才能使用 errorHandles 的方法
      onRequest({ request, options }) {
        const key = getPendingKey({ ...options, url: `${vm.baseURL}${request}` })
        // 防重複用
        REMOVE_TARGET_REQUEST_ARRAY(key)
        ADD_REQUEST_ARRAY({ id: key, cancel: vm.abortController })
        // Loading 用
        if (isLoading)
          ADD_LOADING_ARRAY({ id: key })
      },
      onResponse({ request, options }) {
        const key = getPendingKey({ ...options, url: request })
        // Loading 用
        if (isLoading)
          REMOVE_TARGET_LOADING_ARRAY(key)
        REMOVE_TARGET_REQUEST_ARRAY(key)
      },
      onResponseError({ response }) {
        CANCEL_ALL_API()

        if (errorHandles)
          return errorHandles(response)
        // alert(response.statusText)
      },
    }).catch((error) => {
      alert(error)
    })
  }
}

export function useCustomFetch() {
  const { public: { apiURL } } = useRuntimeConfig()
  const API = new MainAPI(typeof apiURL === 'string' ? apiURL : 'https://dog.ceo/api', {
    // 'Content-Type': 'application/json',
    // 'Accept': 'application/json',
    // 'Authorization': `Bearer ${useCookie('token').value}`,
  })
  return API
}
