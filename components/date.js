import { parseISO, format } from 'date-fns'

export default function Dates({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>updated {format(date, 'LLLL d, yyyy')}</time>
}