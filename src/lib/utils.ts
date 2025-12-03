export function getImagePath(src: string): string {
    const basePath = '/everything-store';
    // If the src is already an absolute URL or starts with the base path, return it as is
    if (src.startsWith('http') || src.startsWith(basePath)) {
        return src;
    }
    // Ensure src starts with a slash if it doesn't
    const normalizedSrc = src.startsWith('/') ? src : `/${src}`;
    return `${basePath}${normalizedSrc}`;
}
