export const formatDate = (isoString: string): string => {
  const date = new Date(isoString);

  return date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true, // To show AM/PM
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};
