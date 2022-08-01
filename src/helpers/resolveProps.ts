import { IMediaQuery } from '../types/mediaQueryTypes';

export const resolveProps = (props: IMediaQuery) => {
  for (const prop in props) {
    if (prop.includes('Width') || prop.includes('Height')) {
      return `${props[prop]}px`;
    }
    return props[prop];
  }
};
