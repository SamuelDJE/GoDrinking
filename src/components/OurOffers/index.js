import { View,Text, ScrollView,Image, Pressable } from "react-native";
import card1 from "../../assets/images/card1.png"
import card2 from "../../assets/images/card2.png"
import card3 from "../../assets/images/card3.png"
import { styles } from "./style"; 
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

export const OurOffers = (onPress) =>{
    useFonts({
        Oswald:require("../../assets/fonts/Oswald-VariableFont_wght.ttf")
    })
    const navigate= useNavigation()
    return(
        <View style={styles.containerOurOffers}>
            <Text style={styles.textOurOffers}>Nossas <Text style={styles.textHighLight}>Ofertas</Text></Text>
            <ScrollView horizontal contentContainerStyle={styles.scrollContent} >
                <Pressable onPress={() => navigate.navigate("products")}><Image source={card1}/></Pressable>
                <Pressable onPress={() => navigate.navigate("products")}><Image source={card2}/></Pressable>
                <Pressable onPress={() => navigate.navigate("products")}><Image source={card3}/></Pressable>
            </ScrollView>
        </View>
    )
}