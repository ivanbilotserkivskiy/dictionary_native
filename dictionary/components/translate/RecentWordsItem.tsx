import React from "react"
import { Text, View, StyleSheet } from "react-native"
import { fontSize, spacing } from "../../assets/styles/style"

type Props = {
  fromWord: string,
  toWord: string
}

const RecentWordsItem: React.FC<Props> = ({ fromWord, toWord }) => {
  return (
    <View style={styles.wordsContainer}>
        <Text style={[styles.leftWord, styles.word]}>{fromWord}</Text>
        <Text style={[styles.rightWord, styles.word]}>{toWord}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wordsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: spacing.spaceXXS,
  },
  rightWordContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  word: {
    fontSize: fontSize.medium
  },
  leftWord: {
    width: 200,
  },
  rightWord: {
    width: 2000
  }
})

export default RecentWordsItem