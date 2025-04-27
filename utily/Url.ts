export function toSlug(category: string): string {
  return category
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^\w\s-]/g, '')     // Remove special chars
    .replace(/\s+/g, '-')         // Replace spaces with hyphens
    .trim();
}


