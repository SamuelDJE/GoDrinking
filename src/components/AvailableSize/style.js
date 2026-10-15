import { StyleSheet } from "react-native";
import { fonts } from "../../themes/fonts";
import { colors } from "../../themes/colors";

export const styles = StyleSheet.create({
    containerAvailableSize:{
        gap:10
    },
    textTitle:{
        fontFamily: fonts.fontTitle,
        fontSize: 25,
        fontWeight: '700',
        color: colors.colorWhite
    },
    textHighlight:{
        color: colors.colorHotDrink
    },
    scrollContent:{
        gap: 10
    }
})