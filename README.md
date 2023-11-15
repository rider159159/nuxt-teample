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
    - 因 Nuxt3 框架本社設計問題，實際 API 包裝放置於 composables/useCustomFetch


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


## 範例查看
- 可於 demo 頁面查看
  - Vee-validate
  - Pinia(持久化)
  - D3JS
  - Swiper 
  - GSAP
  上述套件最簡單範例