import { StyleSheet } from "react-native";
import WebView from "react-native-webview";
import Constants from "expo-constants";
import ErrorBoundary from "./ErrorBoundary";
export default function App() {
  const handleNavigationStateChange = (navState: any) => {
    console.log("New URL", navState.url); //access the ever changing url
  };
  return (
    <ErrorBoundary>
      <WebView
        style={styles.container}
        source={{ uri: "https://expo.dev/" }}
        onNavigationStateChange={handleNavigationStateChange}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
