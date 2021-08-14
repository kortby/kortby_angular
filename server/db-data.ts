export const USERS = {
  1: {
    id: 1,
    email: 'kortby@gmail.com',
    password: 'test',
  },
};

export function authenticate(email: string, password: string) {
  console.log('authentication attempt.');
  const user: any = Object.values(USERS).find((user) => user.email === email);

  if (user && user.password == password) {
    return user;
  } else {
    return undefined;
  }
}
