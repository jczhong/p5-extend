export function isColor(obj) {
    return (
        obj !== undefined && 
        obj !== null &&
        typeof obj === 'object' &&
        'mode' in obj && 
        obj.mode === 'rgb'
    );
}

export function isImage(obj) {
    return (
        obj !== undefined && 
        obj !== null && 
        typeof obj === 'object' &&
        'canvas' in obj && 
        'pixels' in obj
    );
}