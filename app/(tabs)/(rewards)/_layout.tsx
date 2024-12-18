import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="rewards" options={{ headerShown: false }} />
      <Stack.Screen name="redeem" options={{ headerShown: false }} />
    </Stack>
  );
}
