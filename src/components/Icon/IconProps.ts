import {
  ArrowUpIcon,
  CalendarIcon,
  CheckCircleIcon,
  ChevronLeftIcon,
  EyeOffIcon,
  EyeOnIcon,
  HeartFillIcon,
  HeartIcon,
  LockIcon,
  LogoutIcon,
  MenuIcon,
  StarIcon,
  ThumbsUpIcon,
  UserIcon,
  XCircleIcon,
} from '@icons';
import {ThemeColors} from '@theme';

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  onPress?: () => void;
}

export interface IconBase {
  size?: number;
  color?: string;
}

export const iconRegistry = {
  arrowUp: ArrowUpIcon,
  calendar: CalendarIcon,
  checkCircle: CheckCircleIcon,
  chevronLeft: ChevronLeftIcon,
  eyeOff: EyeOffIcon,
  eyeOn: EyeOnIcon,
  heartFill: HeartFillIcon,
  heart: HeartIcon,
  lock: LockIcon,
  logout: LogoutIcon,
  menu: MenuIcon,
  star: StarIcon,
  thumbsUp: ThumbsUpIcon,
  user: UserIcon,
  xCircle: XCircleIcon,
};

type IconType = typeof iconRegistry;

export type IconName = keyof IconType;
