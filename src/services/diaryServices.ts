import {
  DiaryEntry,
  newDiaryEntry,
  NoSensitiveInfoDiaryEntry
} from '../types'
import diaryData from './diary.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): NoSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find((d) => d.id === id)
  if (entry !== null && entry !== undefined) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }
  return undefined
}
export const getEntriesWithOutSensitiveInfo =
  (): NoSensitiveInfoDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => {
      return {
        id,
        date,
        weather,
        visibility
      }
    })
  }

export const addDiary = (newDiaryEntry: newDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map((d) => d.id)) + 1,
    ...newDiaryEntry
  }
  diaries.push(newDiary)
  return newDiary
}
