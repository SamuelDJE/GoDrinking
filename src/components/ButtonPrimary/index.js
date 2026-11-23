import { Pressable, Text } from "react-native"
import { styles } from "./style"

export const ButtonPrimary = ({title, onPress}) => {
    return (
     <Pressable style={styles.BtnPrimary} onPress={onPress}>
        <Text style={styles.txtBtnPrimary}>{title}</Text>
     </Pressable>
    )
}