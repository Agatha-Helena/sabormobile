import { View, Text, StyleSheet } from 'react-native'

export default function HomeScreen() {
    return(
        <View style={StyleSheet.container}>
            <Text style={StyleSheet.title}>
                Sabor Digital Mobile
            </Text>
            <Text>
                Bem-vindo ao aplicativo!
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
});