import { IPaint } from './i-paint';
import { IColor } from './i-color';
import { Color } from './color';

export class Paint implements IPaint {
  constructor(other?: IPaint) {
    if (other) {
      this.background = new Color(other.background);
      this.text = new Color(other.text);
    }
  }

  background: IColor;
  text: IColor;
}
