'use client';

import { useEffect, useState } from 'react';

type Phase = 'typing' | 'waiting' | 'deleting' | 'afterErase';

interface TypingOptions {
  active?: boolean
  afterEraseDelay?: number
  displayTime?: number
  eraseSpeedBase?: number
  eraseSpeedMin?: number
  typeSpeedRange?: [number, number]
}

/**
 * Анимирует цикл «печать → ожидание → стирание» для массива строк.
 *
 * @param texts - массив строк, которые будут выводиться по очереди
 * @param typeSpeedRange - минимальная и максимальная задержка (мс) между вводом символов — имитирует непостоянную скорость печати
 * @param eraseSpeedBase - начальная задержка (мс) при стирании первого символа
 * @param eraseSpeedMin - нижний предел задержки (мс) при стирании — ускорение не опускается ниже него
 * @param displayTime - время (мс), в течение которого полная строка остаётся на экране
 * @param afterEraseDelay - пауза (мс) после полного стирания перед началом следующего цикла
 * @param active - флаг активности
 */
export const useTyping = (
  texts: string[],
  {
    active,
    afterEraseDelay = 500,
    displayTime = 2000,
    eraseSpeedBase = 200,
    eraseSpeedMin = 20,
    typeSpeedRange = [40, 150],
  }: TypingOptions = {},
) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [phase, setPhase] = useState<Phase>('typing');
  const [eraseStep, setEraseStep] = useState(0);

  useEffect(() => {
    if (!active) return;

    let id: NodeJS.Timeout;
    const full = texts[index];

    if (phase === 'typing') {
      if (text.length < full.length) {
        // Плавная случайная скорость печатания (разная задержка на каждый символ)
        const [min, max] = typeSpeedRange;
        const delay = Math.floor(Math.random() * (max - min + 1)) + min;

        id = setTimeout(() => setText(full.slice(0, text.length + 1)), delay);
      } else {
        setPhase('waiting');
      }
    }

    if (phase === 'waiting') {
      // Пауза перед началом стирания
      id = setTimeout(() => {
        setPhase('deleting');
        setEraseStep(0);
      }, displayTime);
    }

    if (phase === 'deleting') {
      if (text.length) {
        // С каждой итерацией скорость увеличивается (экспоненциальное ускорение)
        const speed = Math.max(
          eraseSpeedMin,
          eraseSpeedBase * Math.exp(-0.25 * eraseStep),
        );

        id = setTimeout(() => {
          setText(text.slice(0, -1));
          setEraseStep((s) => s + 1);
        }, speed);
      } else {
        setPhase('afterErase');
      }
    }

    if (phase === 'afterErase') {
      // Пауза перед началом следующей строки
      id = setTimeout(() => {
        setIndex((index + 1) % texts.length);
        setPhase('typing');
      }, afterEraseDelay);
    }

    return () => clearTimeout(id);
  }, [
    text,
    phase,
    index,
    texts,
    typeSpeedRange,
    eraseSpeedBase,
    eraseSpeedMin,
    displayTime,
    afterEraseDelay,
    eraseStep,
  ]);

  // Возвращаем пробел, если строка пуста, чтобы избежать схлопывания высоты
  const displayText = text || '\u00A0';

  return { key: index, phase, text: displayText };
};
