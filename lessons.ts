/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Lesson, ExerciseType } from './types';

export const LESSONS: Lesson[] = [
  {
    id: 'spanish-essentials',
    title: 'Իսպաներենի Հիմունքներ',
    description: 'Necesitar, Tener que և Hay que: Սովորիր տարբերությունները և կազմիր նախադասություններ:',
    progress: 0,
    exercises: [
      // 15 Multiple Choice: Necesitar vs Tener que vs Hay que
      { id: 'm1', type: ExerciseType.MULTIPLE_CHOICE, question: 'Yo ___ un bolígrafo para escribir.', options: ['necesito', 'tengo que', 'hay que'], answer: 'necesito', translation: 'Necesitar (կարիք ունենալ)' },
      { id: 'm2', type: ExerciseType.MULTIPLE_CHOICE, question: '___ estudiar mucho para el examen.', options: ['Hay que', 'Necesito', 'Tengo'], answer: 'Hay que', translation: 'Hay que (պետք է - ընդհանուր)' },
      { id: 'm3', type: ExerciseType.MULTIPLE_CHOICE, question: 'Juan ___ trabajar mañana.', options: ['tiene que', 'hay que', 'necesita que'], answer: 'tiene que', translation: 'Tener que (պարտավոր լինել)' },
      { id: 'm4', type: ExerciseType.MULTIPLE_CHOICE, question: 'Nosotros ___ agua fría.', options: ['necesitamos', 'tenemos que', 'hay que'], answer: 'necesitamos', translation: 'Necesitar' },
      { id: 'm5', type: ExerciseType.MULTIPLE_CHOICE, question: 'Para aprender, ___ practicar.', options: ['hay que', 'tienes que', 'necesito'], answer: 'hay que', translation: 'Hay que' },
      { id: 'm6', type: ExerciseType.MULTIPLE_CHOICE, question: '¿Tú ___ ir al médico?', options: ['tienes que', 'hay que', 'necesitas que'], answer: 'tienes que', translation: 'Tener que' },
      { id: 'm7', type: ExerciseType.MULTIPLE_CHOICE, question: 'Ellos ___ ayuda con la maleta.', options: ['necesitan', 'tienen que', 'hay que'], answer: 'necesitan', translation: 'Necesitar' },
      { id: 'm8', type: ExerciseType.MULTIPLE_CHOICE, question: 'En la biblioteca ___ estar en silencio.', options: ['hay que', 'tiene que', 'necesitas'], answer: 'hay que', translation: 'Hay que' },
      { id: 'm9', type: ExerciseType.MULTIPLE_CHOICE, question: 'Yo ___ comprar comida hoy.', options: ['tengo que', 'hay que', 'necesito que'], answer: 'tengo que', translation: 'Tener que' },
      { id: 'm10', type: ExerciseType.MULTIPLE_CHOICE, question: 'Ustedes ___ un mapa.', options: ['necesitan', 'tienen que', 'hay que'], answer: 'necesitan', translation: 'Necesitar' },
      { id: 'm11', type: ExerciseType.MULTIPLE_CHOICE, question: '___ comer frutas para estar sano.', options: ['Hay que', 'Necesitas', 'Tengo que'], answer: 'Hay que', translation: 'Hay que' },
      { id: 'm12', type: ExerciseType.MULTIPLE_CHOICE, question: 'Nosotros ___ limpiar la casa.', options: ['tenemos que', 'hay que', 'necesitamos que'], answer: 'tenemos que', translation: 'Tener que' },
      { id: 'm13', type: ExerciseType.MULTIPLE_CHOICE, question: '¿Qué ___ hacer yo?', options: ['tengo que', 'hay que', 'necesita'], answer: 'tengo que', translation: 'Tener que' },
      { id: 'm14', type: ExerciseType.MULTIPLE_CHOICE, question: 'Él ___ una bicicleta nueva.', options: ['necesita', 'tiene que', 'hay que'], answer: 'necesita', translation: 'Necesitar' },
      { id: 'm15', type: ExerciseType.MULTIPLE_CHOICE, question: 'Para entrar, ___ pagar la entrada.', options: ['hay que', 'tengo que', 'necesitas'], answer: 'hay que', translation: 'Hay que' },

      // 10 Sentence Builders
      { id: 's1', type: ExerciseType.SENTENCE_BUILDER, question: 'Կազմիր նախադասությունը. "Ես պետք է սովորեմ"', options: ['Yo', 'tengo', 'que', 'estudiar'], answer: 'Yo tengo que estudiar' },
      { id: 's2', type: ExerciseType.SENTENCE_BUILDER, question: 'Կազմիր նախադասությունը. "Պետք է ուտել"', options: ['Hay', 'que', 'comer'], answer: 'Hay que comer' },
      { id: 's3', type: ExerciseType.SENTENCE_BUILDER, question: 'Կազմիր նախադասությունը. "Մենք կարիք ունենք օգնության"', options: ['Nosotros', 'necesitamos', 'ayuda'], answer: 'Nosotros necesitamos ayuda' },
      { id: 's4', type: ExerciseType.SENTENCE_BUILDER, question: 'Կազմիր նախադասությունը. "Դու պարտավոր ես գնալ"', options: ['Tú', 'tienes', 'que', 'ir'], answer: 'Tú tienes que ir' },
      { id: 's5', type: ExerciseType.SENTENCE_BUILDER, question: 'Կազմիր նախադասությունը. "Պետք է խմել ջուր"', options: ['Hay', 'que', 'beber', 'agua'], answer: 'Hay que beber agua' },
      { id: 's6', type: ExerciseType.SENTENCE_BUILDER, question: 'Կազմիր նախադասությունը. "Նրանք պետք է աշխատեն"', options: ['Ellos', 'tienen', 'que', 'trabajar'], answer: 'Ellos tienen que trabajar' },
      { id: 's7', type: ExerciseType.SENTENCE_BUILDER, question: 'Կազմիր նախադասությունը. "Դուք կարիք ունեք ժամանակի"', options: ['Ustedes', 'necesitan', 'tiempo'], answer: 'Ustedes necesitan tiempo' },
      { id: 's8', type: ExerciseType.SENTENCE_BUILDER, question: 'Կազմիր նախադասությունը. "Պետք է լսել"', options: ['Hay', 'que', 'escuchar'], answer: 'Hay que escuchar' },
      { id: 's9', type: ExerciseType.SENTENCE_BUILDER, question: 'Կազմիր նախադասությունը. "Նա պետք է քնի"', options: ['Él', 'tiene', 'que', 'dormir'], answer: 'Él tiene que dormir' },
      { id: 's10', type: ExerciseType.SENTENCE_BUILDER, question: 'Կազմիր նախադասությունը. "Ես կարիք ունեմ գրքի"', options: ['Yo', 'necesito', 'un', 'libro'], answer: 'Yo necesito un libro' },
    ]
  }
];
