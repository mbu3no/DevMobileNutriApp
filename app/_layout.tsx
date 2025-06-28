import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#6CC24A' },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="index" options={{ title: "Início" }} />
      <Stack.Screen name="input" options={{ title: "Dados" }} />
      <Stack.Screen name="result" options={{ title: "Resultado" }} />
    </Stack>
  );
}
