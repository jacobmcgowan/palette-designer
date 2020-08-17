import { Theme } from './theme';
import { PaintState } from './paint-state';

export class ThemeState implements Theme {
  constructor(other?: Theme) {
    if (other) {
      this.name = other.name;
      this.background = new PaintState(other.background);
      this.surface = new PaintState(other.surface);
      this.primary = new PaintState(other.primary);
      this.secondary = new PaintState(other.secondary);
      this.warn = new PaintState(other.warn);
    }
  }

  name: string;
  background: PaintState;
  surface: PaintState;
  primary: PaintState;
  secondary: PaintState;
  warn: PaintState;

  toJson(): Theme {
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
