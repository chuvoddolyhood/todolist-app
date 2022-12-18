import { StyleSheet } from "react-native"
import colorsStyle from "./container/colors.style"

const appStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorsStyle.background
    },
    header: {
        marginTop: 40,
        marginHorizontal: 18,
        marginBottom: 10
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colorsStyle.second
    }
})

export default appStyle