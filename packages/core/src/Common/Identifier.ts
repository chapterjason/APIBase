
export function generateIdentifier() {
    const now = new Date();
    const random = Math.random();

    const parts = [
        now.getTime().toString(36),
        random.toString(36).substr(2, 9)
    ]

    return parts.join('');
}