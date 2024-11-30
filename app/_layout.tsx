import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import SplashScreen from "@/components/based/splashScreen";
import { useColorScheme } from "react-native";

// https://docs.expo.dev/develop/user-interface/safe-areas/
import { SafeAreaView } from "react-native-safe-area-context";

// https://akveo.github.io/react-native-ui-kitten/docs/guides/icon-packages#eva-icons
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";

// https://docs.expo.dev/router/reference/authentication/
import { Slot } from "expo-router";
import { RootSiblingParent } from "react-native-root-siblings";
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(app)",
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  const [isAppReady, setIsAppReady] = useState(false);

  // Simulate loading process for the app
  useEffect(() => {
    const prepareApp = async () => {
      try {
        // Fake async work: API calls, asset loading, etc.
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsAppReady(true);
      } catch (e) {
        console.error("Error during app preparation", e);
      }
    };

    prepareApp();
  }, []);

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  if (!loaded || !isAppReady) {
    return <SplashScreen />;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RootSiblingParent>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
          >
            <Slot />
          </ThemeProvider>
        </ApplicationProvider>
      </RootSiblingParent>
    </SafeAreaView>
  );
}
