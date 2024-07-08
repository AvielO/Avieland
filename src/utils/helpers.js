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
