import { View, Pressable, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
    return (
        <View>
            <Link href="/onboarding/Login">Login</Link>
            {/* ...other links */}
            <Link href="/onboarding/Signup">Signup</Link>
            <View>
                <Link href="/Other" asChild>
                    <Pressable>
                        <Text>Other</Text>
                    </Pressable>
                </Link>
            </View>
        </View>
    );
}
