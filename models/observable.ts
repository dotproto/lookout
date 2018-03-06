import { SymbolObservable } from './symbol-observable';
import { Subscription } from './subscription';
import { SubscriberFunction } from './subscription-function';
import { Observer } from './observer';

type ObservableObserver<T, E> = (observer: Observer<T, E>) => Subscription<T, E>;
type ObservableObject<T, E> = (onNext: Function,
                              onError?: (E) => void,
                              onComplete?: Function) => Subscription<T, E>;

export interface Observable<T, E = any> {

  constructor(subscriber: SubscriberFunction<T, E>);

  /** Subscribes to the sequence with an observer or with callbacks*/
  subscribe?: ObservableObserver<T, E> | ObservableObserver<T, E>;

  /** Returns itself */
  [SymbolObservable](): Observable<T, E>;

  /** Converts items to an Observable */
  of<T>(items: T[]): Observable<T, E>;

  /** Converts an observable or iterable to an Observable */
  from(observable): Observable<T, E>;

}
