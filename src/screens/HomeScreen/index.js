import { Image, ScrollView } from "react-native"
import Logo from '../../assets/images/logo.png'
import { OurOffers } from "../../components/OurOffers"
import { styles } from "./style"
import { AvailableSize } from "../../components/AvailableSize"
import { OurHighlights } from "../../components/OurHighlights"

export const HomeScreen = () => {



    return (
        <ScrollView contentContainerStyle={styles.containerHomeScreen}>
            <Image source={Logo} style={styles.logoHome} />
            <OurOffers />
            <AvailableSize/>
            <OurHighlights/>
        </ScrollView>
    )
}