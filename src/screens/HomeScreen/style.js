import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

export const styles = StyleSheet.create({
    containerHomeScreen: {
        backgroundColor: colors.colorDarkPurple,
        flex: 1,
        gap: 40, 
        paddingLeft: 20,
    },
    logoHome: {
        width: 140,
        height: 55,
    }
})