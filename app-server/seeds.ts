import { faker } from '@faker-js/faker';

interface FakeUser {
  uuid: string;
  firstName: string;
  lastName: string;
  birthday: Date;
  favouriteMusicGenre: string;
}
export function fakeUser(): FakeUser {
  return {
    uuid: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    birthday: faker.date.birthdate(),
    favouriteMusicGenre: faker.music.genre(),
  };
}

export function seedFakeUser(count: number = 20): FakeUser[] {
  let users: FakeUser[] = [];
  for (let i = 0; i <= count; i++) {
    users.push(fakeUser());
  }
  return users;
}
