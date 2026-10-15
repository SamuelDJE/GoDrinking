import { View,Text,Image } from "react-native"
import { styles } from "./style"

export const CardsSizes = ({image, amount, measure}) => {
    return(
        <View style={styles.cardSize}>
            <Image source={image} style={styles.productImage} />
            <Text style={styles.textMeasure}><Text style={styles.textAmount}>{amount}</Text><Text>{measure}</Text></Text>
        </View>
    )
}