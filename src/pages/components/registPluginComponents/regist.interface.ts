import { UserConfig } from './../../userConfig/index';
export type DirectionType = 'lt' | 't' | 'rt' | 'r' | 'rb' | 'b' | 'lb' | 'l';
export const directionArr: DirectionType[] = [
  'lt',
  't',
  'rt',
  'r',
  'rb',
  'b',
  'lb',
  'l',
];

export interface ITextProps {
  config: UserConfig;
  index: number;
}
