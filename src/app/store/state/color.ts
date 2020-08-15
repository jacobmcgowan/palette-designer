import { IColor } from './i-color';

export class Color implements IColor {
  constructor(other?: IColor) {
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

  get rgba(): string {
    return `rgba(${this.r},${this.g},${this.b},${this.a})`;
  }

  get hex6(): string {
    return `#${this._decToHex(this.r)}${this._decToHex(this.g)}${this._decToHex(this.b)}`;
  }

  get hex8(): string {
    return `${this.hex6}${this._decToHex(Math.floor(this.a * 255))}`;
  }

  toJson(): IColor {
    return {
      r: this.r,
      g: this.g,
      b: this.b,
      a: this.a,
      rgba: this.rgba,
      hex6: this.hex6,
      hex8: this.hex8,
    };
  }

  private _decToHex(dec: number): string {
    return dec.toString(16).padStart(2, '0');
  }
}
