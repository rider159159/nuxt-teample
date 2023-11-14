export async function getDogImage(payload = {}, isLoading = true, errorHandles = null, customHeader = null) {
  return useCustomFetch().getCall('/breed/bulldog/french/images/random', payload, isLoading, errorHandles, customHeader)
}
