import { faker } from "@faker-js/faker";

export type EvaluationPoint = {
  id: string;
  nome: string;
  country: string;
  city: string;
  location: {
    latitude: number;
    longitude: number;
  };
};

export function createEvaluationPoints(): EvaluationPoint {
  const id = faker.string.uuid();
  const nome = faker.company.name();
  const country = "Brazil";
  const city = "Rondonópolis";
  const location = {
    latitude: faker.location.latitude({ min: 16, max: 17 }),
    longitude: faker.location.longitude({ min: 54, max: 55 }),
  };

  return {
    id,
    nome,
    country,
    city,
    location,
  };
}