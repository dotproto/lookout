import { Subscription } from "./subscription";

export interface Observer<T, E = any> {
  /** Receives the subscription object when `subscribe` is called */
  start?: (subscription: Subscription<T, E>) => void;

  /** Receives the next value in the sequence */
  next?: (value: T) => void;

  /** Receives the sequence error */
  error?: (errorValue: E) => void;

  /** Receives a completion notification */
  complete?: () => void;
}
                          
