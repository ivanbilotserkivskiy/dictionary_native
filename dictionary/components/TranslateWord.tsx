import { useState } from "react"
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native"
import { colors, fontSize, spacing } from "../assets/styles/style"

const TranslateWord = () => {
  const [translationValue, setTranslationValue] = useState<string>('')
  
  return (
    <View style={styles.translationContainer}>
        <Text>Please Input word to translate</Text>
        <TextInput
          style={styles.translationInput}
          value={translationValue}
          onChangeText={setTranslationValue}
        />
        <TouchableOpacity>
          <View style={styles.translateButton}>
            <Text style={styles.translateButtonText}>Translate</Text>
          </View>
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  translationContainer: {
    padding: spacing.spaceM,
  },
  translationInput: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: spacing.spaceM,
    marginVertical: spacing.spaceM,
    borderRadius: 5,
    fontSize: fontSize.medium,
  },
  translateButton: {
    width: 120,
    alignItems: 'center',
    padding: spacing.spaceM,
    borderRadius: 10,
    backgroundColor: colors.primary
  },
  translateButtonText: {
    color: colors.white,
    fontSize: fontSize.medium
  }
})

export default TranslateWord