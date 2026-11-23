import { Text, View } from "react-native"
import { CardProduct } from "../CardProduct"
import LatinhaCard from "../../assets/images/LatinhaCard.png"
import {styles} from "./style"
import { useNavigation } from "@react-navigation/native"



export const OurHighlights = () => {
    const navigation = useNavigation()
    return(
        <View style={styles.containerOurHighlights}>
            <Text style={styles.textOurHighlights}>Nossos <Text style={styles.textHighlights}>Destaques</Text></Text>

            <View style={styles.containerOurHighlights}>
                <CardProduct image={LatinhaCard} title={"TNT Roxo"} description={"Nosso sabor conta como..."} onPress={() => navigation.navigate("details")}/>
                <CardProduct image={LatinhaCard} title={"TNT Roxo"} description={"Nosso sabor conta como..."} onPress={() => navigation.navigate("details")} />
            </View>
            <View style={styles.containerOurHighlights}>
                <CardProduct image={LatinhaCard} title={"TNT Roxo"} description={"Nosso sabor conta como..."} onPress={() => navigation.navigate("details")}/>
                <CardProduct image={LatinhaCard} title={"TNT Roxo"} description={"Nosso sabor conta como..."} onPress={() => navigation.navigate("details")}/>
            </View>
            <View style={styles.containerOurHighlights}>
                <CardProduct image={LatinhaCard} title={"TNT Roxo"} description={"Nosso sabor conta como..."} onPress={() => navigation.navigate("details")}/>
                <CardProduct image={LatinhaCard} title={"TNT Roxo"} description={"Nosso sabor conta como..."} onPress={() => navigation.navigate("details")}/>
            </View>
        </View>
    )
}