## 資料夾命名
- composables
  - 會使用 Vue 本身方法，如 onMounted、ref 等等的共用方法，通常有較為複雜邏輯，支援 auto import ， Nuxt3 規定命名

- utils
  - 一般共用方法，不使用到 Vue 方法的共用方法

- plugins
  - 套件註冊擺放位置，Nuxt3 規定命名 

- API
  - core
    - 包裝 API 方法放置位置
  - module
    - 各個 API 實際擺放位置
    - 因 Nuxt3 框架本身設計問題，實際 API 包裝放置於 composables/useCustomFetch

## 使用套件
- UnoCss
- Vee-validate
- Pinia
- Pinia-plugin-persistedstate (Pinia 資料持久化)
- Vue-datepicker
- D3
- Dayjs
- SweetAlert
- Swiper
- GSAP
- ESLint

## 範例查看
- 可於 demo 頁面查看以下套件最簡單範例
  - Vee-validate
  - Pinia(Pinia-plugin-persistedstate)
    - 由於持久化是使用 localStorage ，因此 Pinia Store 若有開啟持久化，需特別注意 Nuxt3 SSR
  - D3JS
  - Swiper 
  - GSAP

## ESLint 
- ESLint 使用 antfu 風格 ，規則設定、省略資料夾可於 eslint.config.js 中設定、查看，若 VSCode 有安裝 ESLint 模組，會於專案中 ESLint 有問題部分自動出現毛毛蟲提示
- 使用 npm run lint 會讓整個專案跑一次 ESLint
- 使用 npm run lint:fix 會讓整個專案跑一次 ESLint，並修復靜態錯誤
- 詳細可查看文檔: https://github.com/antfu/eslint-config

## API 包裝
- 分成 getCall 、 PostCall 兩個方法(對應兩個 HTTP method)，透過 UseFetch 本身提供的 `onRequest`(API 送出前)、 `onResponse`(API 回傳後)、 `onResponseError`(API 回傳後，並且是錯誤)，做部分共用方法處理，以下為共用方法：
  - 統一 Header
  - 透過 AbortController 達成，自動取消重複 API ，或是可提供取消 API 功能
  - 搭配 requestStore (Pinia) ，製作全域 Loading 效果
  - 統一錯誤處理目前僅顯示 alert
