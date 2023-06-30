import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./StackNavigation";

export default function Router() {

    return (
        <NavigationContainer >
            <StackNavigation />
        </NavigationContainer>
    );
}