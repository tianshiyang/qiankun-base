import { cloneDeep } from "lodash"
class EventEmtter {
  state: unknown = null
  callbackList: Array<(state: unknown, prev: unknown) => void> = []

  initGlobalState (state: unknown) {
    this.state = state
    return {
      onGlobalStateChange: this.onGlobalStateChange.bind(this),
      setGlobalState: this.setGlobalState.bind(this),
      getGlobalState: this.getGlobalState.bind(this)
    }
  }

  onGlobalStateChange (callback: (state: unknown, prev: unknown) => void) {
    this.callbackList.push(callback)
  }

  getGlobalState (callback: (state: unknown) => void) {
    callback(this.state)
  }

  setGlobalState (state: unknown) {
    const prev = cloneDeep(this.state)
    this.state = state
    this.callbackList.forEach(res => {
      res(this.state, prev)
    })
  }
}
const eventEmitter = new EventEmtter()
export default eventEmitter
