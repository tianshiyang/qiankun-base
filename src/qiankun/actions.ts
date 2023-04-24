import { initGlobalState, MicroAppStateActions } from "qiankun"
// 初始化 state
const initState = {
  name: "张三",
  count: 200
}

interface MyMicroAppStateActions extends MicroAppStateActions {
  getGlobalState: (callback: (currentState: Record<string, any>) => void) => void
}

const actions: MyMicroAppStateActions = initGlobalState(initState) as MyMicroAppStateActions

actions.getGlobalState = (callback: (state: Record<string, any>) => void) => {
  callback(initState)
}

export default actions
