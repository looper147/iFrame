import { useEffect, useState } from "react";
import { View, Text } from "react-native";
const ErrorBoundary = ({ children }: any) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const handleComponentError = (error: Error, errorInfo: string) => {
      console.error("Error Boundary:", error, errorInfo);
      setError(error);
      setHasError(true);
    };

    const errorUtilsHandler = ErrorUtils.getGlobalHandler();
    ErrorUtils.setGlobalHandler(() => handleComponentError);
    return () => {
      ErrorUtils.setGlobalHandler(errorUtilsHandler);
    };
  }, []);

  if (hasError) {
    //fallback UI to display error
    return (
      <View>
        <Text>Something went wrong.</Text>
        {error && <Text>{error.toString()}</Text>}
      </View>
    );
  }
  return children;
};

export default ErrorBoundary;
