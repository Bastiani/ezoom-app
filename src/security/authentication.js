import { AsyncStorage } from 'react-native';

import { LOCAL_STORAGE } from './consts';

export async function getToken() {
  return await AsyncStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN);
}

export async function isLoggedIn() {
  return await !!getToken();
}

export function setToken(token: string) {
  AsyncStorage.setItem(LOCAL_STORAGE.ACCESS_TOKEN, token);
}

export async function removeToken() {
  await AsyncStorage.removeItem(LOCAL_STORAGE.ACCESS_TOKEN);
}

export function logout() {
  Object.keys(LOCAL_STORAGE).map(key =>
    AsyncStorage.removeItem(LOCAL_STORAGE[key])
  );
}
