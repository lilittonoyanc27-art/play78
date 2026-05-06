/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lesson, ExerciseType } from './types';
import { X, Trophy, AlertCircle, CheckCircle2, Goal, Timer, RefreshCw, Send } from 'lucide-react';

interface ExerciseViewProps {
  lesson: Lesson;
  onBack: () => void;
  onComplete: (progress: number) => void;
}

export default function ExerciseView({ lesson, onBack, onComplete }: ExerciseViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  
  // Sentence builder state
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [availableWords, setAvailableWords] = useState<string[]>([]);

  const currentExercise = lesson.exercises[currentIndex];
  const isLast = currentIndex === lesson.exercises.length - 1;

  useEffect(() => {
    if (currentExercise.type === ExerciseType.SENTENCE_BUILDER) {
      setAvailableWords([...(currentExercise.options || [])].sort(() => Math.random() - 0.5));
      setSelectedWords([]);
    }
  }, [currentIndex]);

  const handleNext = () => {
    if (isLast) {
      setIsGameOver(true);
      onComplete(100);
    } else {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsCorrect(null);
      setShowResult(false);
    }
  };

  const checkMultipleChoice = (option: string) => {
    setSelectedOption(option);
    const isRight = option === currentExercise.answer;
    setIsCorrect(isRight);
    setShowResult(true);
    
    if (isRight) setScore(s => s + 1);

    setTimeout(() => {
      handleNext();
    }, 1500);
  };

  const handleWordClick = (word: string, fromAvailable: boolean) => {
    if (showResult) return;
    
    if (fromAvailable) {
      setSelectedWords(prev => [...prev, word]);
      setAvailableWords(prev => {
        const index = prev.indexOf(word);
        if (index > -1) {
          const next = [...prev];
          next.splice(index, 1);
          return next;
        }
        return prev;
      });
    } else {
      setAvailableWords(prev => [...prev, word]);
      setSelectedWords(prev => {
        const index = prev.indexOf(word);
        if (index > -1) {
          const next = [...prev];
          next.splice(index, 1);
          return next;
        }
        return prev;
      });
    }
  };

  const checkSentence = () => {
    const fullSentence = selectedWords.join(' ');
    const isRight = fullSentence === currentExercise.answer;
    setIsCorrect(isRight);
    setShowResult(true);
    
    if (isRight) setScore(s => s + 1);

    setTimeout(() => {
      handleNext();
    }, 1500);
  };

  const renderWinner = () => {
    return (
      <div className="text-center space-y-8 py-12">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-32 h-32 bg-sporty-orange rounded-full flex items-center justify-center mx-auto shadow-2xl ring-8 ring-sporty-orange/20"
        >
          <Trophy className="w-16 h-16 text-white" />
        </motion.div>
        
        <div className="space-y-2">
          <h2 className="text-5xl font-black font-display italic uppercase leading-none">
            ԴԱՍՆ ԱՎԱՐՏՎԱԾ Է
          </h2>
          <p className="text-white/50 text-xl font-medium tracking-widest uppercase">Արդյունք: {score} / {lesson.exercises.length}</p>
        </div>

        <div className="p-8 bg-white/5 rounded-[40px] border border-white/10">
          <p className="text-white/30 text-[10px] font-black uppercase tracking-widest mb-4">Ձեր Առաջընթացը</p>
          <div className="h-4 bg-white/10 rounded-full overflow-hidden border border-white/10 mb-2">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${(score / lesson.exercises.length) * 100}%` }}
              className="h-full bg-sporty-orange"
            />
          </div>
          <p className="text-white font-bold">{Math.round((score / lesson.exercises.length) * 100)}% Ճիշտ պատասխաններ</p>
        </div>

        <button onClick={onBack} className="btn-primary w-full py-6 text-xl rounded-full shadow-2xl">
          ՀԵՏ ԴԵՊԻ ԳԼԽԱՎՈՐ
        </button>
      </div>
    );
  };

  if (isGameOver) {
    return <div className="max-w-2xl mx-auto px-4 py-6">{renderWinner()}</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header Info */}
      <div className="flex flex-col gap-6 mb-12">
        <div className="flex items-center justify-between">
          <button onClick={onBack} className="text-white/40 hover:text-white transition-colors">
            <X className="w-8 h-8" />
          </button>
          <div className="flex items-center gap-4 bg-white/5 px-6 py-3 rounded-2xl border border-white/10">
             <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="font-black text-2xl">{score}</span>
             </div>
             <div className="w-px h-8 bg-white/10" />
             <div className="text-white/30 font-black text-xs uppercase tracking-widest">
                Հարց {currentIndex + 1} / {lesson.exercises.length}
             </div>
          </div>
        </div>
        
        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${(currentIndex / lesson.exercises.length) * 100}%` }}
            className="h-full bg-sporty-orange shadow-[0_0_15px_rgba(255,126,95,0.4)]"
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-white/5 rounded-[48px] border border-white/10 p-10 md:p-14 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Timer className="w-48 h-48" />
          </div>

          <div className="relative z-10 space-y-10">
             <div className="text-center space-y-6">
                <div className="inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-sporty-orange/20 border border-sporty-orange text-sporty-orange">
                   {currentExercise.type === ExerciseType.MULTIPLE_CHOICE ? 'Ընտիր ճիշտ տարբերակը' : 'Կազմիր նախադասությունը'}
                </div>
                <h3 className="text-3xl md:text-4xl font-black leading-tight text-white italic">
                  {currentExercise.question}
                </h3>
                {currentExercise.translation && (
                  <p className="text-white/40 text-sm font-medium tracking-wide">
                     {currentExercise.translation}
                  </p>
                )}
             </div>

             {currentExercise.type === ExerciseType.MULTIPLE_CHOICE ? (
               <div className="grid grid-cols-1 gap-4">
                 {currentExercise.options?.map((opt, i) => (
                   <button
                     key={opt}
                     disabled={showResult}
                     onClick={() => checkMultipleChoice(opt)}
                     className={`p-6 md:p-8 rounded-[28px] border-4 text-xl md:text-2xl font-black transition-all text-left flex items-center justify-between group transform active:scale-[0.98] ${
                       selectedOption === opt
                         ? isCorrect 
                           ? 'border-green-400 bg-green-500/20 text-white'
                           : 'border-red-400 bg-red-500/20 text-white'
                         : 'border-white/10 bg-white/5 hover:border-white/30 text-white shadow-xl'
                     }`}
                   >
                     <span>{opt}</span>
                     {selectedOption === opt && (
                       isCorrect ? <CheckCircle2 className="w-10 h-10 text-green-400" /> : <AlertCircle className="w-10 h-10 text-red-400" />
                     )}
                   </button>
                 ))}
               </div>
             ) : (
               <div className="space-y-12">
                  <div className="min-h-[120px] p-6 bg-black/40 rounded-[32px] border-2 border-dashed border-white/10 flex flex-wrap gap-3 items-center justify-center relative">
                    {selectedWords.length === 0 && (
                      <span className="text-white/10 font-bold uppercase tracking-widest text-xs italic">Տեղադրիր բառերը այստեղ...</span>
                    )}
                    {selectedWords.map((word, idx) => (
                      <motion.button
                        layout
                        key={`${word}-${idx}`}
                        onClick={() => handleWordClick(word, false)}
                        className="bg-sporty-orange text-white px-6 py-3 rounded-2xl font-black shadow-lg"
                      >
                        {word}
                      </motion.button>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 justify-center">
                    {availableWords.map((word, idx) => (
                      <motion.button
                        layout
                        key={`${word}-${idx}`}
                        onClick={() => handleWordClick(word, true)}
                        className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-3 rounded-2xl font-black transition-colors"
                      >
                        {word}
                      </motion.button>
                    ))}
                  </div>

                  <div className="flex justify-center">
                    <button
                      onClick={checkSentence}
                      disabled={selectedWords.length === 0 || showResult}
                      className={`btn-primary shadow-2xl px-12 py-5 text-xl flex items-center gap-3 transition-all ${
                         selectedWords.length === 0 || showResult ? 'opacity-50 grayscale cursor-not-allowed' : ''
                      }`}
                    >
                      {showResult ? (
                        isCorrect ? <CheckCircle2 className="w-8 h-8" /> : <AlertCircle className="w-8 h-8" />
                      ) : (
                        <Send className="w-6 h-6" />
                      )}
                      ՍՏՈՒԳԵԼ
                    </button>
                  </div>
               </div>
             )}

             <AnimatePresence>
               {showResult && (
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`mt-4 text-center py-4 rounded-2xl font-black italic text-2xl uppercase ${isCorrect ? 'text-green-400' : 'text-red-400'}`}
                 >
                   {isCorrect ? 'Ճիշտ է! 🎉' : 'Սխալ է! 🦾'}
                 </motion.div>
               )}
             </AnimatePresence>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
