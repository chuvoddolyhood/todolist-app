import { StyleSheet } from "react-native"
import colorsStyle from "../../container/colors.style"

const inputStyle = StyleSheet.create({
    addTask: {
        bottom: 15,
        paddingHorizontal: 18,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        backgroundColor: colorsStyle.white,
        height: 40,
        width: '85%',
        borderWidth: 1,
        borderColor: colorsStyle.primary,
        borderRadius: 20,
        paddingHorizontal: 15,
        color: colorsStyle.primary,
        fontSize: 15
    },
    iconWrapper: {
        width: 40,
        height: 40,
        backgroundColor: colorsStyle.primary,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        fontSize: 25,
        color: colorsStyle.white,
        fontWeight: 'bold'
    }
})

export default inputStyle