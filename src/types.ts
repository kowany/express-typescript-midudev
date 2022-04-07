import { Visibility, Weather } from "./enums"


export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// export type NoSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'weather' | 'visibility' | 'date' >

export type NoSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>
export type newDiaryEntry = Omit<DiaryEntry, 'id'>
