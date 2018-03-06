import { SymbolObservable } from './symbol-observable';
import { Subscription } from './subscription';
import { SubscriberFunction } from './subscription-function';
import { Observer } from './observer';

export interface Observable<T, E = any> {

  constructor(subscriber: SubscriberFunction);

  /** Subscribes to the sequence with an observer */
  subscribe(observer: Observer<T, E>): Subscription<T, E>;

  /** Subscribes to the sequence with callbacks */
  subscribe(onNext: Function,
            onError?: (E) => void,
            onComplete?: Function): Subscription<T, E>;

  /** Returns itself */
  [SymbolObservable](): Observable<T>;

  /** Converts items to an Observable */
  of<T>(items: T[]): Observable<T>;

  /** Converts an observable or iterable to an Observable */
  from(observable): Observable<T>;
}
