import { Link, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from "react-native";

export default function AllocationsScreen() {
    return (
        <View style={styles.container}>
            <Stack.Screen options={{title: 'Allocations'}} />
            <Text>Allocations</Text>

            <Link href="/allocations/add">New Alloaction</Link>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})