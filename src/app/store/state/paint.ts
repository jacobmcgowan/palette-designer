import { Color } from './color';

export interface Paint {
  id: string;
  name: string;
  background: Color;
  text: Color;
  toJson?(): Paint;
}
