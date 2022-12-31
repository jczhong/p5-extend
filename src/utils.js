export function isColor(obj) {
    return (obj !== undefined && obj !== null && 'mode' in obj && obj.mode === 'rgb');
}

export function isImage(obj) {
    return (obj !== undefined && obj !== null && 'canvas' in obj && 'pixels' in obj);
}