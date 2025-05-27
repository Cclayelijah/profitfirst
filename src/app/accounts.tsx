import { StyleSheet, Text, View } from 'react-native'
import AccountList from '../components/AccountList'

export default function AccountsScreen() {
    return (
        <View style={{gap: 5, padding: 5}}>
            <View style={styles.header}>
                <Text>Name</Text>
                <Text>CAP</Text>
                <Text>TAP</Text>
            </View>
            <AccountList />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    }
})