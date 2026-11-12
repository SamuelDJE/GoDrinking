import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";

export const styles = StyleSheet.create({
     containerDetailsProduct:{
        backgroundColor: "#000",
        flex: 1
    },
    featuredProducts:{
        backgroundColor: colors.colorDarkPurple,
        flexDirection:"row",
        gap:45,
        justifyContent:"flex-end",
        alignItems:"center",
        paddingRight: 25,
        paddingVertical: 25
    },
    imagesProduct:{
        gap: 20,
    },
    detailsProducts:{
        backgroundColor: "#000",
        paddingTop: 25,
        borderTopWidth:2,
        borderTopColor:colors.colorHotDrink,
        paddingLeft:25,
        gap:20
    },
    volumeProducts:{
        backgroundColor:colors.colorHotDrink,
        color:colors.colorWhite,
        paddingVertical:4,
        paddingHorizontal:25,
        position:"absolute",
        top:-15,
        left:25
    },
    textTitle:{
        fontSize:40,
        fontWeight:"700",
        color: colors. colorWhite,
        lineHeight:45,
        fontFamily: fonts.fontTitle
    },
    textHighlight:{
        fontSize:40,
        fontWeight:"700",
        color: colors.colorHotDrink,
        lineHeight:45,
        fontFamily: fonts.fontTitle
    },
    textDescription:{
        color: colors.colorGray,
        width: 380,
        fontSize: 18
    }
})