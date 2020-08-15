import { ITheme } from './i-theme';
import { IPaint } from './i-paint';
import { Paint } from './paint';

export class Theme implements ITheme {
  constructor(other?: ITheme) {
    if (other) {
      this.name = other.name;
      this.background = new Paint(other.background);
      this.surface = new Paint(other.surface);
      this.primary = new Paint(other.primary);
      this.secondary = new Paint(other.secondary);
      this.warn = new Paint(other.warn);
    }
  }

  name: string;
  background: IPaint;
  surface: IPaint;
  primary: IPaint;
  secondary: IPaint;
  warn: IPaint;

  toJson(): ITheme {
    return {
      name: this.name,
      background: this.background.toJson ?
        this.background.toJson() :
        this.background,
      surface: this.surface.toJson ?
        this.surface.toJson() :
        this.surface,
      primary: this.primary.toJson ?
        this.primary.toJson() :
        this.primary,
      secondary: this.secondary.toJson ?
        this.secondary.toJson() :
        this.secondary,
      warn: this.warn.toJson ?
        this.warn.toJson() :
        this.warn,
    };
  }
}