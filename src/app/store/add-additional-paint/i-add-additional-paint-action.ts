import { IAction } from '../action';
import { IPaint } from '../state';

export interface IAddAdditionalPaintAction extends IAction {
  paint: IPaint;
}
