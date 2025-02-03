export function formateDate(date: string | Date | null): string {
  console.log(date)
  if (!date) return 'No due date'
  const standardDate = new Date(date)

  return `${standardDate.getFullYear()}-${standardDate.getMonth() + 1}-${standardDate.getDate()}`
}
