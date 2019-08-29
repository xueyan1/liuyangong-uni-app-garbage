// 缓存历史数据
export function setHistory (name) {
  let history = uni.getStorageSync('history') || []
  history.unshift(name)
  uni.setStorageSync('history', history)
}

export default {
  setHistory
}