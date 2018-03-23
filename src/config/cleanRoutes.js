import { AppNavigator } from './router'

const cleanSessionRoutes = () => {
  const appNavDefaultGetStateForAction = AppNavigator.router.getStateForAction

  AppNavigator.router.getStateForAction = (action, state) => {
    return appNavDefaultGetStateForAction(action, state)
  }
}

export default cleanSessionRoutes
