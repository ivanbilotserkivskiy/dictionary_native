export type WordsData = {
  id: number,
  fromLanguage: string,
  toLanguage: string,
  fromWord: string,
  toWord: string
}

export type WordsDataWithTitle = {
  title: string,
  data: WordsData[]
}