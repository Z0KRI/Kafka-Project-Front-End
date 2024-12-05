import { HTMLAttributes } from "vue";

export interface ICarousel {
  src: string;
  msg?: string;
  class?: HTMLAttributes["class"];
}
