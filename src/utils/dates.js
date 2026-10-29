// Single source of truth for how dates appear on the site.
// Inputs are "YYYY-MM" (month precision) or "YYYY" (year only).
// Output: "Aug 2025", "2016", ranges "Aug 2024 – Dec 2024", open ranges "Aug 2025 – Present".

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const RANGE_SEPARATOR = " – "; // en dash
const PRESENT_LABEL = "Present";

export function formatDate(value) {
  const [year, month] = String(value).split("-");
  return month ? `${MONTHS[Number(month) - 1]} ${year}` : year;
}

export function formatDateRange(start, end) {
  return `${formatDate(start)}${RANGE_SEPARATOR}${end ? formatDate(end) : PRESENT_LABEL}`;
}
