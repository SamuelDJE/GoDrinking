import { Image, Pressable, Text, View } from "react-native"
import { styles } from './style'


export const CardProduct = ({ image, title, description, onPress }) => {
    return (
        <View style={styles.cardContainer}>
            <Image source={image} style={styles.imgProduct} />
            <View>
                <Text style={styles.titleProduct}>{title}</Text>
                <Text style={styles.descriptionProduct}>{description}</Text>
            </View>


            <Pressable style={styles.btnLearnMore} onPress={onPress}>
                <Text style={styles.txtBtn}>Saiba mais</Text>
            </Pressable>
        </View>
    )
}