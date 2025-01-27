export function formateDate(date: string): string {
    console.log(date)
    const standardDate = new Date(date)
    // return 'gogo'
  return `${standardDate.getFullYear()}-${standardDate.getMonth() + 1}-${standardDate.getDate()}`
}
