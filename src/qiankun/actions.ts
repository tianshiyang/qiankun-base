import eventEmtter from "./eventEmtter"
// 初始化 state
const initState = {
  name: "张三",
  count: 200
}
const actions = eventEmtter.initGlobalState(initState)

export default actions
