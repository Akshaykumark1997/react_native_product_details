/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
  black:{
    primary:"#404040",
    secondary: "#1A1919"
  },
  white:{
    primary:"#F8F8F8",
    secondary:"#FFF"
  },
  red:{
    primary: "#E44A4A",
    secondary: "#E35D33"
  },
  yellow:{
    primary: "#E3AD33"
  },
  green:{
    primary: "#1C3A13",
    secondary:"#146651"
  }
};