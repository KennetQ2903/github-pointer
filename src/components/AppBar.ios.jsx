import { ScrollView, StyleSheet, View } from 'react-native'
import { StyledText } from './StyledText.jsx'
import Constants from 'expo-constants'
import { theme } from '../theme.js'
import { Link, useLocation } from 'react-router-native'

const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation()
  const active = pathname === to

  const textStyles = [
    styles.text,
    active && styles.activeText
  ]
  return (
    <Link to={to}>
      <StyledText style={textStyles} fontWeight='bold' fontSize='head'>
        {children}
      </StyledText>
    </Link>
  )
}

export const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTab to='/'>
          Repositories
        </AppBarTab>

        <AppBarTab to='/signin'>
          Signin
        </AppBarTab>

        <AppBarTab to='/'>
          Account
        </AppBarTab>

        <AppBarTab to='/signin'>
          Favorites
        </AppBarTab>

        <AppBarTab to='/'>
          Config
        </AppBarTab>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    paddingTop: Constants.statusBarHeight + 10,
    flexDirection: 'row'
  },
  scroll: {
    paddingBottom: 15
  },
  text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 10
  },
  activeText: {
    color: theme.appBar.textPrimary
  }
})
