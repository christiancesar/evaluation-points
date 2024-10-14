/**
 * Uma Instituição está promovendo um concurso em uma determinada cidade, para que as pessoas que iram fazer o concurso
 * não se desloquem para distâncias longas, definimos pontos pela cidade, onde de acordo com sua localização, será destinada
 * para o ponto mais próximo. Com isto tenho uma lista de 100mil concurseiros e preciso de um algoritmo de estrutura de
 * dados que consiga fazer a divisão para essas localidades.
 */

import {
  createEvaluationPoints,
  EvaluationPoint,
} from "./create-evaluation-points";
import {
  createSubscriberFactory,
  Subscriber,
} from "./create-subscriber-factory";
import { utilSaveInJsonFile } from "./util-save-in-json-file";

//criando dataset de inscritos, foi delimitado para a cidade de rondonopolis

const subscribers: Subscriber[] = [];

for (let index = 0; index < 1000; index++) {
  subscribers.push(createSubscriberFactory());
}

// utilSaveInJsonFile(subscribers, "subscribers-dataset.json");

const evaluationPoints: EvaluationPoint[] = [];

for (let index = 0; index < 5; index++) {
  evaluationPoints.push(createEvaluationPoints(`Evaluation ${index}`));
}

// utilSaveInJsonFile(evaluationPoints, "evaluationPoints-dataset.json");

// console.log(evaluationPoints);

type Location = {
  latitude: number;
  longitude: number;
};

// Função para calcular a distância euclidiana entre dois pontos
function calculateDistance(
  subscribeLocation: Location,
  evaluationLocation: Location
): number {
  const latDiff = subscribeLocation.latitude - evaluationLocation.latitude;
  const lonDiff = subscribeLocation.longitude - evaluationLocation.longitude;
  return Math.sqrt(latDiff * latDiff + lonDiff * lonDiff);
}

// Função para encontrar o ponto de avaliação mais próximo de um inscrito
function findNearestEvaluationPoint(
  subscriber: Subscriber,
  evaluationPoints: EvaluationPoint[]
): EvaluationPoint {
  let nearestPoint = evaluationPoints[0];
  let minDistance = calculateDistance(
    subscriber.location,
    nearestPoint.location
  );

  for (const point of evaluationPoints) {
    const distance = calculateDistance(subscriber.location, point.location);
    if (distance < minDistance) {
      nearestPoint = point;
      minDistance = distance;
    }
  }

  return nearestPoint;
}

// Função principal para associar cada inscrito ao ponto de avaliação mais próximo
function assignSubscribersToEvaluationPoints(
  subscribers: Subscriber[],
  evaluationPoints: EvaluationPoint[]
) {
  return subscribers.map((subscriber) => {
    const nearestPoint = findNearestEvaluationPoint(
      subscriber,
      evaluationPoints
    );
    return {
      subscriber: subscriber.name,
      assignedPoint: nearestPoint.name,
    };
  });
}

// Associa os inscritos aos pontos mais próximos
const assignments = assignSubscribersToEvaluationPoints(
  subscribers,
  evaluationPoints
);

// console.log(assignments);

const assignmentClassifications = assignments.reduce((acc, curr) => {
  if (!acc[curr.assignedPoint]) {
    acc[curr.assignedPoint] = {
      subscribers: [],
      total: 0,
    };
  }

  acc[curr.assignedPoint].subscribers.push(curr.subscriber);
  acc[curr.assignedPoint].total = acc[curr.assignedPoint].subscribers.length;

  return acc;
}, {});

console.log(assignmentClassifications);
