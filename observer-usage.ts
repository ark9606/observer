import { Observerable, Observer } from './observer';

class LogObserver implements Observer {
  update(parameter) {
    console.log(parameter);
  }
}

class SquareObserver implements Observer {
  update(parameter) {
    console.log(parameter ** 2);
  }
}

const observerable = new Observerable();

const logger: LogObserver = new LogObserver();
observerable.subscribe('update', logger);

const square: SquareObserver = new SquareObserver();
observerable.subscribe('update', square);

observerable.notify('update', 1);
observerable.notify('update', 3);

observerable.unsubscribe('update', square);

observerable.notify('update', 5);
