import * as EventEmitter from 'events';

export interface Observer {
  update(parameter);
}

export class Observerable {
  private _eventEmitter: EventEmitter;
  
  constructor() {
    this._eventEmitter = new EventEmitter();
  }

  public subscribe(eventType: string, observer: Observer) {
    this._eventEmitter.on(eventType, observer.update);
  }

  public unsubscribe(eventType: string, observer: Observer) {
    this._eventEmitter.removeListener(eventType, observer.update);
  }

  public notify(eventType: string, data: any) {
    this._eventEmitter.emit(eventType, data);
  }
}
