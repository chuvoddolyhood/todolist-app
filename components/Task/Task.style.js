import { StyleSheet } from "react-native";
import colorsStyle from "../../container/colors.style";

const taskStyle = StyleSheet.create({
    item: {
        flexDirection: 'row',
        backgroundColor: colorsStyle.white,
        marginHorizontal: 18,
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginBottom: 12,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    square: {
        width: 48,
        height: 48,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    even: {
        backgroundColor: colorsStyle.second
    },
    odd: {
        backgroundColor: colorsStyle.green
    },
    number: {
        color: colorsStyle.white,
        fontWeight: '700',
        fontSize: 16
    },
    content: {
        width: '80%',
        fontSize: 16
    }
})

export default taskStyle;