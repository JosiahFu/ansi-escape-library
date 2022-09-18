export const esc = '\033';
export const csi = esc + '[';

export const gencs = (suffix: string) => (...n: number[]) => csi + n.join(';') + suffix;

