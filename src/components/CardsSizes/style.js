import { StyleSheet } from "react-native"
import { fonts } from "../../themes/fonts"
import { colors } from "../../themes/colors"

export const styles = StyleSheet.create({
    cardSize:{
        borderWidth: 2,
        borderColor: "#C531D0",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        width: 75,
        height: 80,
        alignItems: "center"
        
    },
    productImage:{
        width: 18,
        height: 40,
    },
    textAmount:{
        fontFamily: fonts.fontBody,
        color: colors.colorWhite
    },
    textMeasure:{
        color: colors.colorHotDrink
    },
    
})