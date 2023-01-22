import { useRef } from "react";

export function useInstance<T>(instance: T) {
  const ref = useRef<T | null>(null);

  if (ref.current === null) {
    ref.current = instance;
  }

  return ref.current;
}
