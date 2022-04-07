import { Visibility, Weather } from './enums'
import { newDiaryEntry } from './types'

const parseComment = (commentForRequest: string): string => {
  if (!isString(commentForRequest)) {
    throw new Error('Incorrect o missing Comment')
  }
  return commentForRequest
}

const parseDate = (dateFromRequest: string): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect o missing Date')
  }

  return dateFromRequest
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrect o missing Weather')
  }

  return weatherFromRequest
}

const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param)
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (
    !isString(visibilityFromRequest) ||
    !isVisibility(visibilityFromRequest)
  ) {
    throw new Error('Incorrect o missing Visibility')
  }
  return visibilityFromRequest
}

const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}
const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const toNewDiaryEntry = (object: any): newDiaryEntry => {
  console.log(object)
  const newEntry: newDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }
  return newEntry
}

export default toNewDiaryEntry
