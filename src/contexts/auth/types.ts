import {LoginPayload, UserAuthenticationResponse} from '@domain';

export interface AuthContextData {
  authData?: UserAuthenticationResponse;
  signIn: ({userName, password}: SignInParams) => Promise<void>;
  signOut: () => void;
  loading: boolean;
}

export type SignInParams = Omit<LoginPayload, 'deviceToken'>;

export interface ChildrenProps {
  children: React.ReactNode;
}
