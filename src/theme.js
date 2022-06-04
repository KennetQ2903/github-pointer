import { Platform } from 'react-native'

export const theme = {
  appBar: {
    primary: '#24292e',
    textSecondary: '#586069',
    textPrimary: '#fefefe'
  },
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    white: '#fefefe',
    error: '#f16'
  },
  fontSizes: {
    body: 14,
    subHeading: 16,
    Head: 18
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System'
    })
  },
  fontWeights: {
    normal: '400',
    bold: '700'
  }
}
