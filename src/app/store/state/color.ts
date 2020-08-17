export interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
  readonly rgba?: string;
  readonly hex6?: string;
  readonly hex8?: string;
  toJson?(): Color;
}
