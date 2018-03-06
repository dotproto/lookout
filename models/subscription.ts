export interface Subscription<T, E = any> {
  /** Cancels the subscription */
  unsubscribe: () => void;

  /** A boolean value indicating whether the subscription is closed */
  closed: () => boolean;
}
