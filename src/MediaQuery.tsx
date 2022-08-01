import { resolveProps } from './helpers/resolveProps';
import { camelToKebabCase } from './helpers/camelToKebabCase';
import { IMediaQuery } from './types/mediaQueryTypes';

const MediaQuery = (props: IMediaQuery) => {
  let mql;
  for (const prop in props) {
    if (prop !== 'children') {
      mql = window.matchMedia(`(${camelToKebabCase(prop)}: ${resolveProps(props)})`);
    }
    if (typeof props[prop] == 'function') {
      return props[prop](mql?.matches);
    }
  }

  return mql?.matches ? props.children : null;
};

export default MediaQuery;
