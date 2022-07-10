export interface AuthStore {
  token: string;
  initialize: () => void;
  refresh: () => Promise<void>;
}
