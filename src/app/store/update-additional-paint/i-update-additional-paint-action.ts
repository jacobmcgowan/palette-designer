import { IAction } from '../action';
import { IPaint } from '../state';

export interface IUpdateAdditionalPaintAction extends IAction {
  index: number;
  paint: IPaint;
}
