/**
 * join style strings.
 * @param styles style strings.
 */
export const s = (...styles: string[]): string => {
  return styles.join(';') + ';'
}
