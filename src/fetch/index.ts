export interface IOverviewData {
  orderPlacement: string;
  liquiditySupply: string;
  tradingVolume: string;
  tradingFrequency: number;
  createAt: number;
  userCount: number;
}

const request = (url: string, options?: any) => {
  return fetch(url, options).then(async response => {
    const json = await response?.json()
    if (response.status !== 200) {
      return Promise.reject(json)
    }
    return json
  })
}

export function getOverview(): Promise<IOverviewData> {
  return request("https://base-api.krav.trade/krav/v1/overview")
    .then(res => res.data)
    .catch((error) => console.error(error));
}
