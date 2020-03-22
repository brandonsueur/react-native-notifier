export interface ShowParams {
  animationDuration?: number; // 300
  showAnimationDuration?: number; // animationDuration || 300
  hideAnimationDuration?: number; // animationDuration || 300

  easing?: (value: number) => number; // null
  showEasing?: (value: number) => number; // easing || null
  hideEasing?: (value: number) => number; // easing || null

  onHide?: Function; // null
  onPress?: Function; // null
  hideOnPress?: boolean; // true

  swipePixelsToClose?: number; // 20
  swipeEasing?: (value: number) => number; // null
  swipeAnimationDuration?: number; // 200
}

export interface ShowNotification extends ShowParams {
  Component?: Function;
  title?: string; // null
  description?: string; // null
  duration?: number; // 3000
}

export interface StateInterface {
  title?: string;
  description?: string;
  Component: Function;
}

export type EndResult = { finished: boolean };
export type EndCallback = (result: EndResult) => void;
