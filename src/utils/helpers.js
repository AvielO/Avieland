export function formatDate(dateStr) {
  const date = new Date(dateStr);
  date.setHours(date.getHours() - 3); // 3 - Our timezone

  return new Intl.DateTimeFormat("he", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(new Date(date));
}

export function formatDateToHour(dateStr) {
  const date = new Date(dateStr);
  date.setHours(date.getHours() - 3); // 3 - Our timezone

  return new Intl.DateTimeFormat("he", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}

export const calculateTimeUntilNextFiveMinute = () => {
  const now = new Date();
  const minutes = now.getMinutes();
  const next5MinuteMark = Math.ceil((minutes + 1) / 5) * 5;
  const next5Minute = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    now.getHours(),
    next5MinuteMark,
  );
  const timeUntilNextFiveMinute = Math.round(
    Math.max(0, (next5Minute - now) / 1000),
  ); // time in seconds

  return timeUntilNextFiveMinute;
};
