import { StyleSheet, View } from "react-native"
import RecentWords from "../components/translate/RecentWords"
import TranslateWord from "../components/TranslateWord"
import { colors } from "../assets/styles/style"

const Translate = () => {
  return (
    <View style={styles.container}>
        <TranslateWord/>
        <RecentWords/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  }
})

export default Translate