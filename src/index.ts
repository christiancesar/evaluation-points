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
  evaluationPoints.push(createEvaluationPoints());
}

utilSaveInJsonFile(evaluationPoints, "evaluationPoints-dataset.json");

console.log(evaluationPoints);
