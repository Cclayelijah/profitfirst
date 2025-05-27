import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from "expo-router";

export default function RootLayout() {
    return(
        <Tabs>
            <Tabs.Screen name="index" options={{href:null}} />
            <Tabs.Screen 
                name="allocations" 
                options={{
                    title: 'Allocations',
                    headerShown: false,
                    tabBarIcon: ({size, color}) => 
                        <MaterialIcons name="account-tree" size={size} color={color} />
                    
                }} />
            <Tabs.Screen 
                name="accounts" 
                options={{
                    title: 'Accounts', 
                    tabBarIcon: ({size, color}) => 
                        <MaterialIcons name="account-balance-wallet" size={size} color={color} />
                }} />
        </Tabs>
    )
}