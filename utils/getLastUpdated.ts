export async function getLastUpdatedDate(): Promise<string | null> {
  try {
    const url = `https://api.github.com/repos/ritaban06/minimalist-portfolio/commits?per_page=1&_=${Date.now()}`
    const res = await fetch(url, { cache: 'no-store' })
    if (!res.ok) return null
    const data = await res.json()
    if (Array.isArray(data) && data.length > 0) {
      const date = data[0]?.commit?.committer?.date
      if (date) {
        // Format as "Month Day, Year, HH:MM:SS AM/PM IST"
        const d = new Date(date)
        const dateStr = d.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          timeZone: 'Asia/Kolkata',
        })
        const timeStr = d.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
          timeZone: 'Asia/Kolkata',
        })
        return `${dateStr}, ${timeStr} IST`
      }
    }
    return null
  } catch {
    return null
  }
}
