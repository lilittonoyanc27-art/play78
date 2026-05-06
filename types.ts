/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum GameMode {
  RACE = 'race',
  MAZE = 'maze'
}

export enum ExerciseType {
  MULTIPLE_CHOICE = 'multiple_choice',
  SENTENCE_BUILDER = 'sentence_builder',
  THEORY = 'theory'
}

export interface Exercise {
  id: string;
  type: ExerciseType;
  question: string;
  options?: string[];
  answer?: string;
  theoryText?: string;
  translation?: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  exercises: Exercise[];
  progress: number;
}
