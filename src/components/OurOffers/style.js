import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";
            
export const styles = StyleSheet.create({
    textOurOffers:{
        color: colors.colorWhite,
        fontFamily: fonts.fontTitle,
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "left",
    },
    textHighLight:{
        color: colors.colorHotDrink
    },
    scrollContent:{
        gap: 15
    }
})