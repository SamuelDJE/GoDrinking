import { View, Text, ScrollView } from "react-native"
import { CardsSizes } from "../CardsSizes"
import latinha from "../../assets/images/Latinha.png"
import garrafa from "../../assets/images/Garrafa.png"
import { styles } from "./style"

export const AvailableSize = () => {
    return (
        <View style={styles.containerAvailableSize}>
            <Text style={styles.textTitle}>Tamanhos<Text style={styles.textHighlight}>Disponíveis</Text></Text>
            <ScrollView horizontal contentContainerStyle={styles.scrollContent}>
                <CardsSizes image={latinha} amount="269" measure="ml" />
                <CardsSizes image={latinha} amount="350" measure="ml" />
                <CardsSizes image={latinha} amount="429" measure="ml"/>
                <CardsSizes image={latinha} amount="609" measure="ml"/>
                <CardsSizes image={garrafa} amount="1.5" measure="L"/>
                <CardsSizes image={garrafa} amount="2.5" measure="L"/>
            </ScrollView>
        </View>
    )
}