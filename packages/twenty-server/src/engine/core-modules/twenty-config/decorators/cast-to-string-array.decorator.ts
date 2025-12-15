import { Transform } from 'class-transformer';

export const CastToStringArray = () =>
  Transform(({ value }: { value: string }) => toStringArray(value));

const toStringArray = (value: unknown): string[] | undefined => {
  if (typeof value === 'string') {
    const items = value
      .split(',')
      .map((item) => item.trim())
      .filter((item) => item.length > 0);

    return items;
  }

  if (Array.isArray(value) && value.every((item) => typeof item === 'string')) {
    return value;
  }

  return undefined;
};


