/**
 * Return true if n between min and max else false.
 * 
 * @param {number} n The number to validate
 * @param {number} min The minimum value
 * @param {number} max The maximum value
 * @returns 
 */
export function between(n, min, max) {
    if (n > min && n < max) {
        return true;
    }
    return false;
}