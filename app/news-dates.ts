const DAY_MS = 24 * 60 * 60 * 1000;
const TIME_ZONE = 'Asia/Shanghai';

// Partial historical dates remain partial. Date-only entries use midnight in Hangzhou.
export function newsDateValue(value: string): number | null {
  const calendar = /^(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?$/.exec(value);
  if (calendar) {
    const year = Number(calendar[1]);
    const month = Number(calendar[2] || 1);
    const day = Number(calendar[3] || 1);
    const date = new Date(Date.UTC(year, month - 1, day));
    if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) return null;
    return date.getTime() - 8 * 60 * 60 * 1000;
  }
  // Require an explicit timezone rather than interpreting the visitor's local timezone.
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2}(?:\.\d{1,3})?)?(?:Z|[+-]\d{2}:\d{2})$/.test(value)) return null;
  if (newsDateValue(value.slice(0, 10)) === null) return null;
  const timestamp = Date.parse(value);
  return Number.isFinite(timestamp) ? timestamp : null;
}

export function formatNewsDate(value: string): string {
  const timestamp = newsDateValue(value);
  if (timestamp === null || /^\d{4}$/.test(value)) return value;
  const date = new Date(timestamp);
  const monthOnly = /^\d{4}-\d{2}$/.test(value);
  return new Intl.DateTimeFormat('en-US', {
    timeZone: TIME_ZONE, year: 'numeric', month: 'short', ...(monthOnly ? {} : { day: 'numeric' }),
  }).format(date);
}

export function newsYear(value: string): string {
  const timestamp = newsDateValue(value);
  return timestamp === null ? value.slice(0, 4) : new Intl.DateTimeFormat('en-US', {
    timeZone: TIME_ZONE, year: 'numeric',
  }).format(timestamp);
}

export function isRecentNews(value: string, now: number | null): boolean {
  if (now === null || !/^\d{4}-\d{2}-\d{2}(?:T|$)/.test(value)) return false;
  const timestamp = newsDateValue(value);
  if (timestamp === null) return false;
  const age = now - timestamp;
  return age >= 0 && age < 30 * DAY_MS;
}

export function compareNewsDates(a: {date:string}, b: {date:string}): number {
  return (newsDateValue(b.date) ?? 0) - (newsDateValue(a.date) ?? 0);
}
