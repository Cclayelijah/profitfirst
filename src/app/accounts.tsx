import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import AccountList from '../components/AccountList';


export default function AccountsScreen() {
    const [name, setName] = useState('');
    const [cap, setCap] = useState('');
    const [tap, setTap] = useState('');

    const createAccount = () => {
        console.warn('Create Account: ', name)
    }

    return (
        <View style={{gap: 5, padding: 5}}>
            <View style={styles.header}>
                <Text>Name</Text>
                <Text>CAP</Text>
                <Text>TAP</Text>
            </View>
            <AccountList />
            <View style={styles.inputRow}>
                <TextInput value={name} onChangeText={setName} style={styles.input} placeholder='name' />
                <TextInput value={cap} onChangeText={setCap} style={styles.input} placeholder='CAP %' />
                <TextInput value={tap} onChangeText={setTap} style={styles.input} placeholder='TAP %' />
            </View>
            <Button title="Add Account" onPress={createAccount} />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000'
    },
    input: {
        flex: 1,
    }
})