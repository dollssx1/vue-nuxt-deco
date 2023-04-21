import { NuxtAxiosInstance } from '@nuxtjs/axios'

export let $axios: NuxtAxiosInstance

export function init(axiosInstance: NuxtAxiosInstance) {
  $axios = axiosInstance
}

