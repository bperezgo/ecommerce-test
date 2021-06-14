import { useEffect, useRef, useState } from 'react';

type ElementExtended = Element | null;

export const useViewIntersection = <S extends ElementExtended>(
  initialRef: S
) => {
  const ref = useRef<S>(initialRef);
  const [show, setShow] = useState(false);
  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== undefined
        ? window.IntersectionObserver
        : require('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });
      if (ref.current) {
        observer.observe(ref.current);
      }
    });
  }, [ref]);
  return {
    ref,
    show,
  };
};
