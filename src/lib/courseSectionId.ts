export function getCourseSectionId(moduleId: number, heading: string): string {
  const headingSlug = heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return `module-${moduleId}-${headingSlug}`;
}
