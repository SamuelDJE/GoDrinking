import { View, Image, Text, Button } from "react-native"
import imageProduct from "../../assets/images/Latinha.png"
import OptionImagem from "../../assets/images/Group.png"
import { styles } from "./styles"
import { ButtonPrimary } from "../../components/ButtonPrimary"


export const DetailsProduct = () => {
    return (
        <View style={styles.containerDetailsProduct}>
            <View style={styles.featuredProducts}>
                <Image source={imageProduct} />
                <View style={styles.imagesProduct}>
                    <Image source={OptionImagem} />
                    <Image source={OptionImagem} />
                    <Image source={OptionImagem} />
                    <Image source={OptionImagem} />
                </View>
            </View>
            <View style={styles.detailsProducts}>
                <Text style={styles.volumeProducts}>269ml</Text>

                <View>
                    <View>
                        <Text style={styles.textTitle}>TNT Energy</Text>
                        <Text style={styles.textHighlight}>Açai com Guaraná</Text>
                    </View>
                    <Text style={styles.textDescription}>Combina o sabor marcante do açaí com o toque do guaraná em uma bebida energética refrescante. Ideal para quem bus...</Text>
                </View>
                <ButtonPrimary title={"Comprar"}/>
            </View>
        </View>
    )
}