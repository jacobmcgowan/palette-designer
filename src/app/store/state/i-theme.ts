import { IPaint } from './i-paint';

export interface ITheme {
  name: string;
  background: IPaint;
  surface: IPaint;
  primary: IPaint;
  secondary: IPaint;
  warn: IPaint;
  toJson?(): ITheme;
}
