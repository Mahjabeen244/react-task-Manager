export const formatDate = (dateString) => {
  if (!dateString) return "No date";
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
};
