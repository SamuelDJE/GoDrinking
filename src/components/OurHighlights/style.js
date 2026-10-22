import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";

export const styles = StyleSheet.create({
    textOurHighlights: {
        color: colors.colorWhite,
        fontSize: 25,
        fontWeight: "700",
        fontFamily: fonts.fontTitle,
    },
    textHighlights: {
        color: colors.colorHotDrink
    },
    containerOurHighlights:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10
    }
})
