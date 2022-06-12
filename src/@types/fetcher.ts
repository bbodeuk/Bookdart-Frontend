export interface InstanceOptions {
  baseUrl?: string;
  timeOut?: number;
  commonHeader?: {
    [key: string]: string;
  };
}

export interface InstanceError {
  ok: false;
  message: string;
}

export type ErrorBuilder = (msg?: string) => InstanceError;

export type DummyPromise = () => Promise<InstanceError>;

export type SendRequest = (
  resource: string,
  init?: RequestInit,
) => Promise<unknown | InstanceError>;

export interface Instance {
  get(resource: string, init?: RequestInit): Promise<any | InstanceError>;
  post(resource: string, init?: RequestInit): Promise<any | InstanceError>;
  delete(resource: string, init?: RequestInit): Promise<any | InstanceError>;
  put(resource: string, init?: RequestInit): Promise<any | InstanceError>;
  patch(resource: string, init?: RequestInit): Promise<any | InstanceError>;
}
