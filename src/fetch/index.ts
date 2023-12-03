export interface IOverviewData {
  orderPlacement: string;
  liquiditySupply: string;
  tradingVolume: string;
  fees: string;
  tradingFrequency: number;
  createAt: number;
  userCount: number;
}

const request = <T>(url: string, options?: any): Promise<T> => {
  return fetch(url, options).then(async response => {
    const json = await response?.json()
    if (response.status !== 200) {
      return Promise.reject(json)
    }
    return json
  })
}

export function getOverview() {
  return request<{data: IOverviewData}>("https://api.krav.trade/krav/v1/overview")
    .then(res => res.data)
}

export function getStaking() {
  return request<{result: string}>("https://developer-access-mainnet.base.org", {
    method: 'post',
    body: JSON.stringify({
      "method": "eth_call",
      "params": [
          {
              "to": "0xDeE06ff0dBE3eBFD05b9E54B4ea228eC0FbD7f71",
              "data": "0x047fc9aa"
          },
          "latest"
      ],
      "id": 1,
      "jsonrpc": "2.0"
    })
  })
    .then(res => res.result)
}
