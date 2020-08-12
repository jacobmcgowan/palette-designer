import { IColor } from './i-color';

export class Color implements IColor {
  constructor(other?: Color) {
    if (other) {
      this.r = other.r;
      this.g = other.g;
      this.b = other.b;
      this.a = other.a;
    }
  }

  r: number;
  g: number;
  b: number;
  a: number;
}
