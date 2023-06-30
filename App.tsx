import { NativeBaseProvider, StatusBar } from 'native-base';
import SignInScreen from './src/modules/screens/signin/SignInScreen';
import { THEME } from './src/styles/theme'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from './src/modules/shared/components/load/Loading';
import { HomeScreen } from './src/modules/screens/home/HomeScreen';
import { RegisterScreen } from './src/modules/screens/register/RegisterScreen';
import Router from './src/modules/shared/routes/Router';

export default function App() {
  const [ fontLoaded ] = useFonts({Roboto_400Regular, Roboto_700Bold});
  return (
    <NativeBaseProvider safeAreaView theme={THEME}>
      <StatusBar 
        barStyle='light-content'
        backgroundColor={"transparent"}
        translucent
      />
      { fontLoaded ? <Router/> : <Loading/>}
    </NativeBaseProvider>
  );
}