import { Platform, NativeModules } from 'react-native'
import I18n from 'i18n-js'
import en from './en-US' //import the English words
import pt from './pt-BR' //import the Portuguese words

//Useful site about translating the app:
//https://medium.com/reactbrasil/internacionaliza%C3%A7%C3%A3o-em-react-native-77fb1a56f8e9

//Function that will help to make a pattern with the translations received by getLanguageByDevice function.
//This is necessary because idioms config on iOS and Android can be different, for example:
//on iOS the portuguese settings could be pt_US, and on Android could be pt_BR.
const normalizeTranslate = {
  'en_US': 'en_US',
  'pt_BR': 'pt_BR',
  'en': 'en_US',
  'pt_US': 'pt_BR',
}

//function that get the current idiom
const getLanguageByDevice = () => {
  return Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale //get the idiom on iOS
    : NativeModules.I18nManager.localeIdentifier //get the idiom on Android
}

//setting the idioms that i18n will support
I18n.translations = {
  'en_US': en,
  'pt_BR': pt,
}

//verify if the idiom is actually supported. If not, default setting will be 'en_US'
const setLanguageToI18n = () => {
  const language = getLanguageByDevice()
  const translateNormalize = normalizeTranslate[language]
  const iHaveThisLanguage = I18n.translations.hasOwnProperty(translateNormalize)
  iHaveThisLanguage
    ? I18n.locale = translateNormalize
    : I18n.defaultLocale = 'en_US'
}

setLanguageToI18n();

export const translate = key => I18n.t(key);