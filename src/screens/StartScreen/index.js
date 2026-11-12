import { Image, View, Text, Pressable } from "react-native"
import { ButtonPrimary } from "../../components/ButtonPrimary"
import { ButtonOutline } from "../../components/ButtonOutline"
import Logo from '../../assets/images/logo.png'
import { styles } from "./style"
import { useFonts } from "expo-font"
import { fonts } from "../../themes/fonts"
import { useNavigation } from "@react-navigation/native"

export const StartScreen = () => {

    useFonts({
        Oswald: require("../../assets/fonts/Oswald-VariableFont_wght.ttf")
    })

    const Navigation = useNavigation()
    return (
        <View style={styles.containerStartScreen}>
            <Image source={Logo} />
            <Text style={styles.textWelCome}>Seu app para comprar energéticos de forma rápida, prática e segura. Encontre suas marcas favoritas e receba onde estiver.</Text>
            <Pressable onPress={() => Navigation.navigate("home")}>
                <Text style={styles.teste}> CLIQUE AQUI</Text>
            </Pressable>
            <ButtonPrimary title="Entrar" />
            <ButtonOutline title="Cadastrar" />
        </View>
    )
}