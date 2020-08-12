import { IGeneral } from './i-general';
import { IPaint } from './i-paint';
import { Paint } from './paint';

export class General implements IGeneral {
  constructor(other?: IGeneral) {
    if (other) {
      this.background = new Paint(other.background);
      this.surface = new Paint(other.surface);
      this.primary = new Paint(other.primary);
      this.secondary = new Paint(other.secondary);
    }
  }

  background: IPaint;
  surface: IPaint;
  primary: IPaint;
  secondary: IPaint;
}
