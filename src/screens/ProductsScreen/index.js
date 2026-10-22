import { Image, TextInput, View } from "react-native"
import Logo from "../../assets/images/logo.png"
import Filtro from "../../assets/images/filtro.png"
import {styles} from "./style"

export const ProductsScreen = () => {
    return(
        <View style={styles.containerHomeScreen}>
            <Image source={Logo} style={styles.logoHome}/>
            <View>
                <TextInput/>
                <Image source={Filtro}/>
            </View>
        </View>
    )
}