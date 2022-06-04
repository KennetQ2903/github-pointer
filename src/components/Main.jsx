import { View, Text } from 'react-native'
import { RepositoryList } from './RepositorieList.jsx'
import { AppBar } from './AppBar.jsx'
import { Redirect, Route, Switch } from 'react-router-native'
const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Switch>
        <Route path='/' exact>
          <RepositoryList />
        </Route>
        <Route path='/signin' exact>
          <Text>Working on Signin page</Text>
        </Route>
        <Redirect to='/' />
      </Switch>
    </View>
  )
}

export default Main
