export interface IOverviewData {
  orderPlacement: string;
  liquiditySupply: string;
  tradingVolume: string;
  tradingFrequency: number;
  createAt: number;
  userCount: number;
}

const request = <T>(url: string, options?: any): Promise<{data: T}> => {
  return fetch(url, options).then(async response => {
    const json = await response?.json()
    if (response.status !== 200) {
      return Promise.reject(json)
    }
    return json
  })
}

export function getOverview() {
  return request<IOverviewData>("https://base-api.krav.trade/krav/v1/overview")
    .then(res => res.data)
}
