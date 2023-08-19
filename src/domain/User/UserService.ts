import {userAuthenticationResponseMock} from './UserMock';
import {LoginPayload, UserAuthenticationResponse} from './UserTypes';

const authenticateUser = async ({
  userName,
  password,
}: LoginPayload): Promise<UserAuthenticationResponse> => {
  await new Promise(resolve => setTimeout(resolve, 1000));

  if (userName === 'user' && password === '123') {
    return userAuthenticationResponseMock;
  } else {
    throw new Error('User or password invalid');
  }
};

export const userService = {
  authenticateUser,
};
