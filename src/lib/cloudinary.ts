const CLOUD_NAME = "dhivjpqct";

export function cloudinaryUrl(
  publicId: string,
  transformations?: string
): string {
  const transform = transformations ? `${transformations}/` : "";
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transform}${publicId}`;
}
