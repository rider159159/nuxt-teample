// 2023/10/03
export function dateYYYYMMDD(timestamp){
  const { $dayjs } = useNuxtApp()
  return timestamp ? $dayjs(timestamp).format('YYYY/MM/DD') : '-'
}


// 以下為 Dayjs 轉換格式方法
export function dateTime(timestamp){
  return timestamp ? $dayjs(timestamp).format('YYYY/MM/DD HH:mm:ss') : '-'
}


export function dateYYYYMM(timestamp){
  return timestamp ? $dayjs($dayjs.unix(timestamp)).format('YYYY/MM') : '-'
}

export function dateTimeWithDash(timestamp){
  return timestamp ? $dayjs($dayjs.unix(timestamp)).format('YYYY-MM-DD HH:mm:ss') : '-'
}

export function dateWithDashYYYYMM(timestamp){
  return timestamp ? $dayjs($dayjs.unix(timestamp)).format('YYYY-MM') : '-'
}

export function dateWithDashYYYYMMDD(timestamp){
  return timestamp ? $dayjs($dayjs.unix(timestamp)).format('YYYY-MM-DD') : '-'
}

export function dateTimeMMDDYYYY(timestamp){
  return timestamp ? $dayjs($dayjs.unix(timestamp)).format('MM/DD/YYYY HH:mm:ss') : '-'
}

export function dateMMDDYYYY(timestamp){
  return timestamp ? $dayjs($dayjs.unix(timestamp)).format('MM/DD/YYYY') : '-'
}

export function timeHHMMSS(timestamp){
  return timestamp ? $dayjs($dayjs.unix(timestamp)).format('HH:mm:ss') : '-'
}

// 剩餘 23 天
export function formatRemainingTime(timeStamp) {
  const { $dayjs } = useNuxtApp()
  const currentTime = $dayjs()
  const targetTime = $dayjs(timeStamp)
  const diff = targetTime.diff(currentTime, 'day')
  return diff
}

// 預計於 XX年XX月實現
export function formatDateAccomplish(timestamp) {
  const { $dayjs } = useNuxtApp()
  return $dayjs(timestamp).format('預計於 YYYY 年 M 月實現')
}

export function timeStampChangeString(timeStamp) {
  const { $dayjs } = useNuxtApp()
  return $dayjs(timeStamp).format('YYYY/MM/DD')
}
