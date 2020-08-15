import { IPaint } from './i-paint';
import { IColor } from './i-color';
import { Color } from './color';

export class Paint implements IPaint {
  constructor(other?: IPaint) {
    if (other) {
      this.id = other.id;
      this.name = other.name;
      this.background = new Color(other.background);
      this.text = new Color(other.text);
    }
  }

  id: string;
  name: string;
  background: IColor;
  text: IColor;

  toJson(): IPaint {
    return {
      id: this.id,
      name: this.name,
      background: this.background.toJson ?
        this.background.toJson() :
        this.background,
      text: this.text.toJson ?
        this.text.toJson() :
        this.text,
    };
  }
}
