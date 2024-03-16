export interface InitialStateI {
  requesting?: boolean;
  success?: boolean;
  status?: string;
  message?: string | number;
  error?: string | any;
}
export interface State<T> extends InitialStateI {
  list?: T[];
  single?: T;
}

export interface Meta<T> {
  arg?: T;
  requestId: string;
  requestStatus: string;
}
export interface MessageStatus {
  status: 'warning' | 'success' | 'error' | 'Warning' | 'Success' | 'Error';
  message?: string;
  errorCode?: number;
}
export interface ListResponse<T> extends MessageStatus {
  results?: T[];
}
export interface SingleResponse<T> extends MessageStatus {
  results?: T;
}