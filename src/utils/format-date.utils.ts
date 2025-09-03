export const formatDate = (iso?: string): string => {
  if (!iso) return '';

  const d = new Date(iso);

  return d.toLocaleString();
};
