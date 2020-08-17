import { Paint } from './paint';
import { ColorState } from './color-state';

export class PaintState implements Paint {
  constructor(other?: Paint) {
    if (other) {
      this.id = other.id;
      this.name = other.name;
      this.background = new ColorState(other.background);
      this.text = new ColorState(other.text);
    }
  }

  id: string;
  name: string;
  background: ColorState;
  text: ColorState;

  toJson(): Paint {
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
