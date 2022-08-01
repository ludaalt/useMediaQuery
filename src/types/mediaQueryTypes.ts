export interface IMediaQuery {
  orientation?: 'portrait' | 'landscape';
  minResolution?: number | string;
  maxResolution?: string;
  minWidth?: string;
  maxWidth?: string;
  minHeight?: string;
  maxHeight?: string;
  children?: React.ReactNode | Function;
}
