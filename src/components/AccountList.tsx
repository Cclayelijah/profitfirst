import { FlatList } from 'react-native'
import AccountListItem from '../components/AccountListItem'

export default function AccountList() {
    return (
        <FlatList 
            data={[1,2,3]}
            contentContainerStyle={{gap: 5}}
            renderItem={() => <AccountListItem />}
        />
    )
}