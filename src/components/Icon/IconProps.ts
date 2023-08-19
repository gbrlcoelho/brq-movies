import {
  ArrowUpIcon,
  CheckCircleIcon,
  EyeOffIcon,
  EyeOnIcon,
  LockIcon,
  LogoutIcon,
  MenuIcon,
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
  checkCircle: CheckCircleIcon,
  eyeOff: EyeOffIcon,
  eyeOn: EyeOnIcon,
  lock: LockIcon,
  logout: LogoutIcon,
  menu: MenuIcon,
  user: UserIcon,
  xCircle: XCircleIcon,
};

type IconType = typeof iconRegistry;

export type IconName = keyof IconType;
