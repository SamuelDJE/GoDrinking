import { View, Text, Image } from "react-native"
import Logo from '../../assets/images/logo.png'
import { OurOffers } from "../../components/OurOffers"
import { styles } from "./style"

export const HomeScreen = () => {



    return (
        <View style={styles.containerHomeScreen}>
            <Image source={Logo} style={styles.logoHome} />
            <OurOffers />
        </View>
    )
}