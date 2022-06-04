import { View } from 'react-native'
import { RepositoryList } from './RepositorieList.jsx'
import { AppBar } from './AppBar'
import { Redirect, Route, Switch } from 'react-router-native'
import { LoginForm } from '../pages/Login.jsx'
const Main = () => {
  return (
    <View style={{ flex: 1 }}>

      <Switch>
        <Route path='/' exact>
          <RepositoryList />
        </Route>
        <Route path='/signin' exact>
          <LoginForm />
        </Route>
        <Redirect to='/' />
      </Switch>
      <AppBar />
    </View>
  )
}

export default Main
