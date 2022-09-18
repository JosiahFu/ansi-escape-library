const esc = '\033';
const csi = esc + '[';

exports.gencs = (suffix: string) => (...n = [1]) => csi + n.join(';') + suffix;

