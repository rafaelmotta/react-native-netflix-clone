import {
  StackNavigator
} from 'react-navigation'

import cleanSessionRoutes from './cleanRoutes'

import {
  App,
  Downloads,
  Home,
  List,
  More,
  MovieDetails,
  NewUser,
  Notifications,
  Search,
  Settings,
  Splash,
  Users
} from '../containers'

/**
 * We do not use theme variables here in order to avoid
 * conflicts with redux. Otherwise we loose the hot reloading
 * functions
 */
const navigationOptions = {
  headerTintColor: '#FFF',
  headerBackTitle: null,
  headerStyle: {
    backgroundColor: '#000',
    elevation: 0,
    borderBottomWidth: 0,
    borderBottomColor: 'transparent',
    shadowColor: 'transparent',
    shadowOffset: {
      width: 0,
      height: 0
    }
  },
  headerTitleStyle: {
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: 18 
  }
}

export const AppNavigator = StackNavigator(
  {
    Splash: {
      screen: Splash
    },
    App: {
      screen: App
    },
    Downloads: {
      screen: Downloads
    },
    Home: {
      screen: Home
    },
    List: {
      screen: List
    },
    More: {
      screen: More
    },
    MovieDetails: {
      screen: MovieDetails
    },
    NewUser: {
      screen: NewUser
    },
    Notifications: {
      screen: Notifications
    },
    Search: {
      screen: Search
    },
    Settings: {
      screen: Settings
    },
    Users: {
      screen: Users
    }
  }, {
    navigationOptions
  }
)

cleanSessionRoutes(AppNavigator)
