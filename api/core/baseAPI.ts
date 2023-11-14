export default class baseAPI {
  protected baseURL: string
  protected headers: any

  constructor(baseURL: string, headers: any) {
    this.baseURL = baseURL
    this.headers = headers
  }
}
