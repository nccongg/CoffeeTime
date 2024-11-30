import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name='my_order' options={{ headerShown: false }} />
    </Stack>
  );
}
