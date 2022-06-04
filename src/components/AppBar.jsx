import { Image, ScrollView, StyleSheet, View } from 'react-native'
import { StyledText } from './StyledText.jsx'
// import Constants from 'expo-constants'
import { theme } from '../theme.js'
import { Link, useLocation } from 'react-router-native'

const AppBarTab = ({ children, to, icon }) => {
  const { pathname } = useLocation()
  const active = pathname === to
  const textStyles = [
    styles.text,
    active && {
      color: theme.colors.white
    }
  ]
  const itemStyles = [
    active ? styles.activeText : styles.inactiveText
  ]

  const icons = {
    home: !active ? require('../../assets/icons/home.png') : require('../../assets/icons/homeActive.png'),
    user: !active ? require('../../assets/icons/userInactive.png') : require('../../assets/icons/userActive.png')
  }

  // const icons = icon === 'home' && !active ? require('../../assets/icons/home.png') : require('../../assets/icons/homeActive.png')
  // icon && active === 'user' ? '../../assets/icons/userInactive.png' : '../../assets/icons/userActive.png'

  return (
    <Link to={to} style={itemStyles}>
      <View style={{ alignItems: 'center' }}>
        <Image
          source={
          icons[icon]
        }
          style={{ width: 24, height: 24 }}
        />
        <StyledText style={textStyles} fontSize='subheading'>
          {children}
        </StyledText>
      </View>
    </Link>
  )
}

export const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTab icon='home' to='/'>
          Repositories
        </AppBarTab>

        <AppBarTab icon='user' to='/signin'>
          Signin
        </AppBarTab>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    backgroundColor: theme.appBar.primary,
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 3,
    marginVertical: 5,
    position: 'absolute',
    left: 0,
    bottom: 0
  },
  scroll: {
    paddingBottom: 5
  },
  text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 10,
    textAlign: 'center'
  },
  activeText: {
    backgroundColor: theme.colors.primary,
    borderRadius: 15,
    height: 55,
    marginHorizontal: 5,
    justifyContent: 'flex-end',
    paddingBottom: 5
  },
  inactiveText: {
    borderRadius: 15,
    height: 55,
    marginHorizontal: 5,
    justifyContent: 'flex-end',
    paddingBottom: 5
  }
})
