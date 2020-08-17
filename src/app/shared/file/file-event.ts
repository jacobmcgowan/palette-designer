import { FileEventTarget } from './file-event-target';

export interface FileEvent extends Event {
  target: FileEventTarget;
}
