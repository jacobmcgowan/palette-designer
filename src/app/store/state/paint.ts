import { IPaint } from './i-paint';
import { IColor } from './i-color';
import { Color } from './color';

export class Paint implements IPaint {
  constructor(other?: IPaint) {
    if (other) {
      this.name = other.name;
      this.background = new Color(other.background);
      this.text = new Color(other.text);
    }
  }

  name: string;
  background: IColor;
  text: IColor;
}
