/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import ExerciseView from './ExerciseView';
import { LESSONS } from './lessons';
import { Trophy, Gamepad2 } from 'lucide-react';

export default function App() {
  const [isGameActive, setIsGameActive] = useState(false);

  const handleComplete = (progress: number) => {
    console.log(`Lesson completed with ${progress}%`);
  };

  return (
    <div className="relative min-h-screen w-full text-white font-sans overflow-x-hidden selection:bg-sporty-orange/30">
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        {!isGameActive && (
          <header className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-sporty-orange rounded-2xl shadow-lg rotate-3">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-black font-display tracking-tight text-white leading-none uppercase italic">
                   ԻՍՊԱՆԵՐԵՆ
                </h1>
                <p className="text-[10px] uppercase tracking-widest text-sporty-green font-black mt-1">
                   ՄԱՐՏԱՀՐԱՎԵՐ • EDUCATION WORLD
                </p>
              </div>
            </div>
          </header>
        )}

        <main>
          {!isGameActive ? (
            <div className="space-y-12">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-7xl md:text-9xl font-black font-display mb-6 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent uppercase italic leading-none">
                  ԻՍՊԱՆԵՐԵՆԻ <br/> ՄԱՐՏԱՀՐԱՎԵՐ
                </h2>
                <p className="text-blue-100/70 text-xl font-medium max-w-xl mx-auto">
                  Սովորիր Necesitar, Tener que և Hay que տարբերությունները և կառուցիր նախադասություններ իսպաներենով:
                </p>
              </div>
              
              <div className="max-w-md mx-auto">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsGameActive(true)}
                  className="w-full bg-sporty-orange hover:bg-sporty-orange/90 text-white p-8 rounded-[40px] font-black text-3xl uppercase tracking-widest transition-all shadow-2xl flex items-center justify-center gap-6 group"
                >
                  <Gamepad2 className="w-12 h-12 group-hover:rotate-12 transition-transform" />
                  ՍԿՍԵԼ
                </motion.button>
              </div>
            </div>
          ) : (
            <ExerciseView 
              lesson={LESSONS[0]} 
              onBack={() => setIsGameActive(false)} 
              onComplete={handleComplete}
            />
          )}
        </main>

        {!isGameActive && (
          <footer className="mt-24 py-8 border-t border-white/10 text-center">
            <p className="text-white/30 text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2">
              <Gamepad2 className="w-4 h-4" /> &copy; 2024 SPANISH CHALLENGE • LEARN & WIN
            </p>
          </footer>
        )}
      </div>
    </div>
  );
}
