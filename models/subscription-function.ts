import { Subscription } from './subscription';
import { SubscriptionObserver } from './subscription-observer';

export type SubscriberFunction<T, E> = (observer: SubscriptionObserver<T, E>) => Subscription<T, E> | (() => void);
