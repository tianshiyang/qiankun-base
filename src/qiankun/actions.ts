import { initGlobalState, MicroAppStateActions } from "qiankun"
// 初始化 state
const initState = {
  name: "张三",
  count: 200
}

const actions: MicroAppStateActions = initGlobalState(initState)

export default actions
