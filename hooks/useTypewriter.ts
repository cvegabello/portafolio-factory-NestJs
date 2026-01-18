// hooks/useTypewriter.ts
import { useState, useEffect } from 'react';

export const useTypewriter = (words: string[], typingSpeed = 150, deletingSpeed = 100, pauseTime = 2000) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const i = loopNum % words.length;
    const fullText = words[i];

    const handleTyping = () => {
      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      // Velocidad dinámica: más rápido al borrar
      let typeSpeed = isDeleting ? deletingSpeed : typingSpeed;

      if (!isDeleting && text === fullText) {
        // Terminó de escribir la palabra -> Pausa antes de borrar
        typeSpeed = pauseTime;
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        // Terminó de borrar -> Pasa a la siguiente palabra
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        typeSpeed = 500;
      }
    };

    const timer = setTimeout(handleTyping, typing ? typingSpeed : pauseTime);
    
    // Cleanup para evitar memory leaks
    return () => clearTimeout(timer);

  }, [text, isDeleting, loopNum, words, typingSpeed, deletingSpeed, pauseTime, typing]);

  return text;
};