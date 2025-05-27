import { Stack } from 'expo-router'
import { Text, View } from 'react-native'

export default function AddAllocationScreen() {
    return (
        <View>
            <Stack.Screen options={{title: 'Add Allocation'}} />
            <Text>Add Allocation</Text>
        </View>
    )
}