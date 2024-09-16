import { useMemo, useState } from "react"
import { SectionList, StyleSheet, Text, View } from "react-native"
import { RecentWordsMockData } from "../../mockData/recentWords"
import RecentWordsItem from "./RecentWordsItem"
import { fontSize, spacing } from "../../assets/styles/style"
import { WordsData, WordsDataWithTitle } from "../../utils/types/translation.types"
import { formLanguageKey } from "../../utils/converters/createLanguageTitle"

const getRecentWordsByLanguage = (wordsArr: WordsData[]): WordsDataWithTitle[] => {
  const wordsWithTitle = wordsArr.reduce((acc: WordsDataWithTitle[], val: WordsData) => {
    const languageKey = formLanguageKey(val.fromLanguage, val.toLanguage)
    const currentLangIndex = acc.findIndex((word) => word.title === languageKey)
    if (currentLangIndex > 0) {
      acc[currentLangIndex].data.push(val);
    } else {
      acc.push({
        title: languageKey,
        data: [val]
      });
    }

    return acc;
  }, [])
  return wordsWithTitle
}

const RecentWords = () => {
  const [ recentWords, setRecentWords ] = useState(RecentWordsMockData)
  const groupedWordsByTitle = useMemo(() => getRecentWordsByLanguage(recentWords), [recentWords])
  return (
    <View style={styles.container}>
      <SectionList
        sections={groupedWordsByTitle}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <RecentWordsItem fromWord={item.fromWord} toWord={item.toWord} />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.wordsTitle}>{title}</Text>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.spaceM, 
  },
  wordsTitle: {
    marginVertical: spacing.spaceXS,
    fontSize: fontSize.smallTitle,
  } 
})

export default RecentWords