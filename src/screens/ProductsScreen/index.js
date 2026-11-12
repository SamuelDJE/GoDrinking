import { Image, TextInput, View, Text } from "react-native"
import Logo from "../../assets/images/logo.png"
import Filtro from "../../assets/images/filtro.png"
import { styles } from "./style"
import { CardProduct } from "../../components/CardProduct"
import latinhaCard from  "../../assets/images/LatinhaCard.png"

export const ProductsScreen = () => {
    return (
        <View style={styles.containerHomeScreen}>
            <Image source={Logo} style={styles.logoHome} />
            <View style={styles.containerInput}>
                <TextInput />
                <Image source={Filtro} />
            </View>
            <View style={styles.ourProducts}>
                <View>
                    <Text style={styles.textOurProducts}>Nossos</Text>
                    <Text style={styles.textHighLightOurProducts}>Produtos</Text>
                </View>
                <View style={styles.containerProducts}>
                    <CardProduct image={latinhaCard} title="TNT Roxo" description="Nosso sabor conta como..."/>
                    <CardProduct image={latinhaCard} title="TNT Roxo" description="Nosso sabor conta como..."/>
                    <CardProduct image={latinhaCard} title="TNT Roxo" description="Nosso sabor conta como..."/>
                    <CardProduct image={latinhaCard} title="TNT Roxo" description="Nosso sabor conta como..."/>
                    <CardProduct image={latinhaCard} title="TNT Roxo" description="Nosso sabor conta como..."/>
                    <CardProduct image={latinhaCard} title="TNT Roxo" description="Nosso sabor conta como..."/>
                    <CardProduct image={latinhaCard} title="TNT Roxo" description="Nosso sabor conta como..."/>
                    <CardProduct image={latinhaCard} title="TNT Roxo" description="Nosso sabor conta como..."/>
                </View>
            </View>
        </View>
    )
}