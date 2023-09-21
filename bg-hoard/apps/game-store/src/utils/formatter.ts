export function formatRating(rating: number | undefined): string {
    if (rating === undefined) return '';
    return `${Math.round(rating * 100) / 10} / 10`;
}