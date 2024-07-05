export function formatDate(dateStr) {
  return new Intl.DateTimeFormat("he", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(new Date(dateStr));
}
