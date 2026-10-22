import { Text, View } from "react-native"
import { CardProduct } from "../CardProduct"
import LatinhaCard from "../../assets/images/LatinhaCard.png"
import {styles} from "./style"
export const OurHighlights = () => {
    return(
        <View style={styles.containerOurHighlights}>
            <Text style={styles.textOurHighlights}>Nossos <Text style={styles.textHighlights}>Destaques</Text></Text>

            <View style={styles.containerOurHighlights}>
                <CardProduct image={LatinhaCard} title={"TNT Roxo"} description={"Nosso sabor conta como..."} />
                <CardProduct image={LatinhaCard} title={"TNT Roxo"} description={"Nosso sabor conta como..."} />
            </View>
            <View style={styles.containerOurHighlights}>
                <CardProduct image={LatinhaCard} title={"TNT Roxo"} description={"Nosso sabor conta como..."} />
                <CardProduct image={LatinhaCard} title={"TNT Roxo"} description={"Nosso sabor conta como..."} />
            </View>
            <View style={styles.containerOurHighlights}>
                <CardProduct image={LatinhaCard} title={"TNT Roxo"} description={"Nosso sabor conta como..."} />
                <CardProduct image={LatinhaCard} title={"TNT Roxo"} description={"Nosso sabor conta como..."} />
            </View>
        </View>
    )
}