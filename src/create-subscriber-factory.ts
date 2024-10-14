import { faker } from "@faker-js/faker";

export type Subscriber = {
  id: string;
  name: string;
  age: number;
  contry: string;
  city: string;
  location: {
    latitude: number;
    longitude: number;
  };
};

export function createSubscriberFactory(): Subscriber {
  const id = faker.string.uuid();
  const name = faker.person.fullName();
  const age = faker.number.int({ min: 18, max: 60 });
  const country = "Brazil";
  const city = "Rondonópolis";
  const location = {
    latitude: faker.location.latitude({ min: 16, max: 17 }),
    longitude: faker.location.longitude({ min: 54, max: 55 }),
  };

  return { id, name, age, contry: country, city, location };
}
