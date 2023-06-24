import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthenticatedUserProvider } from "./providers";
import { RootNavigator } from "./navigation/RootNavigator";
import { Amplify } from "aws-amplify";
import config from "./src/aws-exports";
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthenticatedUserProvider>
        <RootNavigator />
      </AuthenticatedUserProvider>
    </SafeAreaProvider>
  );
}
