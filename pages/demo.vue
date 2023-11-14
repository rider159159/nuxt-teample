<script setup>
import { scrollToError } from '@/utils/scroll'
import { checkObjKey } from '@/utils/common'
import { getDogImage } from '@/api/module/dog'

// onMounted(async () => {
//   await test()
// })
const image = ref('')
async function test() {
  const { data } = await getDogImage()
  image.value = data.value.message
}

const userInfo = ref({
  USER_INFO_REF: {},
})

onMounted(() => {
  const { USER_INFO_REF } = storeToRefs(userInfoStore())
  userInfo.value.USER_INFO_REF = USER_INFO_REF
})

const formBody = ref({
  time: 0,
  account: '',
  password: '',
})

const modalStatus = ref(false)

// 表單送出
async function onSubmit(value) {
  console.log(value)
  // router.push({ name: 'login' })
}

const passwordType = ref('password')

// 錯誤方法
function onInvalidSubmit({ errors }) {
  if (checkObjKey(errors).length > 0)
    scrollToError('.modalBody')
}

function setUserInfo() {
  userInfo.value.USER_INFO_REF.name = 'Ryder'
  userInfo.value.USER_INFO_REF.age = 30
  userInfo.value.USER_INFO_REF.gender = 'Man'
}
</script>

<template>
  <section>
    <h3 class="mt-6 text-2xl font-bold">
      獲得 API
    </h3>
    <button type="button" class="z-100 relative" @click="test">
      打 API
    </button>
    <img :src="image" alt="">
    <h3 class="mt-6 text-2xl font-bold">
      日期套件
    </h3>
    <VueDatePicker v-model="formBody.time" locale="zh-TW" />
    <h3 class="mt-6 text-2xl font-bold">
      GSAP 動畫效果
    </h3>
    <GSAP />
    <h3 class="mt-6 text-2xl font-bold">
      D3JS 圖表套件
    </h3>
    <ClientOnly>
      <Map />
    </ClientOnly>
    <h3 class="mt-6 text-2xl font-bold">
      輪播
    </h3>
    <Carousel />
    <div class="flex flex-col">
      <h3 class="mt-6 text-2xl font-bold">
        彈窗 + Veevalidate 驗證
      </h3>
      <button type="button" class="my-4" @click="modalStatus = true">
        開啟彈窗
      </button>
      <h3 class="mt-6 text-2xl font-bold">
        Store 以及持久化
      </h3>
      <button type="button" @click="setUserInfo">
        獲得會員資料
      </button>
    </div>

    <h2>會員資料</h2>
    <label for="formName">
      <p>姓名</p>
      <input id="formName" v-model="userInfo.USER_INFO_REF.name" type="text" class="b">
    </label>

    <label for="formAge">
      <p>年齡</p>
      <input id="formAge" v-model="userInfo.USER_INFO_REF.age" type="number" class="b">
    </label>

    <label for="formGender">
      <p>性別</p>
      <input id="formGender" v-model="userInfo.USER_INFO_REF.gender" type="text" class="b">
    </label>

    <CommonModal v-model="modalStatus" title="VeeValidate 測試">
      <VForm v-slot="{ errors }" class="w-full md:w-90% flex flex-col gap-4" @submit="onSubmit" @invalid-submit="onInvalidSubmit">
        <div class="text-h3 text-center my-10px">
          註冊
        </div>
        <div>
          <label for="account" class="flex flex-col">
            <p class="mb-2 text-lg">帳號</p>
            <VField
              id="account" v-model="formBody.account" type="text" name="account" label="帳號" rules="required" placeholder="請輸入帳號"
              class="w-full h-48px text-h6 leading-h4 px-2 rounded-8px b-2px border-line focus:outline-none focus:border-brand3"
              :class="{ '!border-#FF5D71': errors.account }"
            />
          </label>
          <span v-if="errors.account" class="errorMessage block text-#FF5D71 text-14px">{{ errors.account }}</span>
        </div>
        <div>
          <label for="username" class="flex flex-col">
            <p class="mb-2 text-lg">用戶名稱</p>
            <VField
              id="username" v-model="formBody.username" type="text" name="username" label="用戶名稱" rules="required" placeholder="請輸入會員名稱"
              class="w-full h-48px text-h6 leading-h4 px-2 rounded-8px b-2px border-line focus:outline-none focus:border-brand3"
              :class="{ '!border-#FF5D71': errors.username }"
            />
          </label>
          <span v-if="errors.username" class="errorMessage block text-#FF5D71 text-14px">{{ errors.username }}</span>
        </div>
        <div>
          <label for="email" class="flex flex-col">
            <p class="mb-2 h6">電子信箱</p>
            <VField
              id="email" v-model="formBody.email" type="email" name="email" label="電子信箱" rules="required|email" placeholder="請輸入電子信箱"
              class="w-full h-48px text-h6 leading-h4 px-2 rounded-8px b-2px border-line focus:outline-none focus:border-brand3"
              :class="{ '!border-#FF5D71': errors.email }"
            />
          </label>
          <span v-if="errors.email" class="errorMessage block text-#FF5D71 text-14px">{{ errors.email }}</span>
        </div>
        <div>
          <label for="password" class="flex flex-col">
            <p class="mb-2">密碼</p>
            <button type="button" class="my-2 self-start" @click="passwordType === 'text' ? passwordType = 'password' : passwordType = 'text'">顯示密碼</button>
            <VField
              id="password" v-model="formBody.password" :type="passwordType" name="password" label="密碼" rules="required" placeholder="顯示密碼"
              class="w-full h-48px text-h6 leading-h4 px-2 rounded-8px b-2px border-line focus:outline-none focus:border-brand3"
              :class="{ '!border-#FF5D71': errors.password }"
            />
          </label>
          <span v-if="errors.password" class="errorMessage block text-#FF5D71 text-14px">{{ errors.password }}</span>
        </div>
        <div>
          <label for="password" class="flex flex-col">
            <p class="mb-2">生日</p>
            <VField
              id="birthday" v-model="formBody.birthday" type="date" name="birthday" label="生日" rules="required" placeholder="請輸入電子信箱"
              class="w-full h-48px text-h6 leading-h4 px-2 rounded-8px b-2px border-line focus:outline-none focus:border-brand3"
              :class="{ '!border-#FF5D71': errors.password }"
            />
          </label>
          <span v-if="errors.password" class="errorMessage block text-#FF5D71 text-14px">{{ errors.password }}</span>
        </div>
        <div class="box h-50 w-fill bg-pink" />
        <div class="box h-50 w-fill bg-blue" />
        <div class="box h-50 w-fill bg-red" />
        <button type="submit" class="mt-4 w-full py-2 py-2 bg-brand-1 hover:bg-brand-2 duration-300 text-white rounded-3xl" @keyup.enter="submitForm">
          註冊
        </button>
      </VForm>
    </CommonModal>
  </section>
</template>
