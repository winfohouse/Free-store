export function toSlug(title: string): string {
  return title.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').slice(0, 60);
}

// Convert to lowercase
// Remove spaces from start and end
// Remove all non-alphanumeric chars except spaces// 
// Replace spaces with dashes// 
// Collapse multiple dashes to single dash// 
// Limit length to 60 chars (optional but good for SEO)

export function deSlug(slug: string): string {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
}
// Capitalize the first letter of each word
// Replace dashes with spaces
