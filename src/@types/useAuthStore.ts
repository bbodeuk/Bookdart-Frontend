export interface AuthStore {
  initialize: () => void;
  refresh: () => Promise<void>;
}
