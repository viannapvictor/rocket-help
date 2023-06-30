import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../../screens/signin/SignInScreen";
import { HomeScreen } from "../../screens/home/HomeScreen";
import { RegisterScreen } from "../../screens/register/RegisterScreen";
import { DetailsScreen } from "../../screens/details/DetailsScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="register" component={RegisterScreen} />
            <Stack.Screen name="details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}