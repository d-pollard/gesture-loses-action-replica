export interface SagaLoad<T> {
  type: string;
  payload: T;
}
