export const applyMask = (value: string, mask: string): string => {
  if (!mask) {
    return value;
  }

  const normalizedValue = value.replace(/[()-.\s]/g, '');

  if (!normalizedValue.length) {
    return '';
  }

  let outputValue = '';
  let normalizedValueIndex = 0;
  let i = 0;

  while (i < mask.length) {
    if (normalizedValue.length === normalizedValueIndex) {
      break;
    }

    const char = mask[i];

    if (char === '0') {
      if (!/^\d$/.test(normalizedValue[normalizedValueIndex])) {
        normalizedValueIndex++;
        continue;
      }
      outputValue += normalizedValue[normalizedValueIndex];
      normalizedValueIndex++;
    } else {
      outputValue += char;
    }

    i++;
  }

  return outputValue;
};
