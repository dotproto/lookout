export interface SubscriptionObserver<T, E> {
  /** Sends the next value in the sequence */
  next: (value: T) => void;

  /** Sends the sequence error */
  error: (errorValue: E) => void;

  /** Sends the completion notification */
  complete: () => void;

  /** A boolean value indicating whether the subscription is closed */
  readonly closed: boolean;
}
