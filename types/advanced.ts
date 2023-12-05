import { StateHandler } from "$ts/states";

export interface AdvancedOption {
  name: string;
  image: string;
  description: string;
  action: (handler: StateHandler) => any;
}
