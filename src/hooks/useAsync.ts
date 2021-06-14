import { useEffect, useState, useRef, useCallback } from 'react';

/**
 * A hook to fetch async data.
 * @class useAsync
 * @borrows useAsyncObject
 * @param {object} _                props
 * @param {async} _.asyncFunc         Promise like async function
 * @param {bool} _.immediate=false    Invoke the function immediately
 * @param {object} _.funcParams       Function initial parameters
 * @param {object} _.initialData      Initial data
 * @returns {useAsyncObject}        Async object
 * @example
 *   const { execute, loading, data, error } = useAync({
 *    asyncFunc: async () => { return 'data' },
 *    immediate: false,
 *    funcParams: { data: '1' },
 *    initialData: 'Hello'
 *  })
 */

// https://stackoverflow.com/questions/56450975/to-fix-cancel-all-subscriptions-and-asynchronous-tasks-in-a-useeffect-cleanup-f

interface Response<S> {
  data: S;
}

interface IUseAsyncProps<S, T> {
  asyncFunc: (params: T) => Promise<S | undefined>;
  immediate: boolean;
  funcParams: T;
  initialData: S;
}

export const useAsync = <S, T>(props: IUseAsyncProps<S, T>) => {
  const { asyncFunc, immediate, funcParams, initialData } = { ...props };
  const [loading, setLoading] = useState(immediate);
  const [data, setData] = useState<S>(initialData);
  const [error, setError] = useState(null);
  const mountedRef = useRef(true);

  const execute = useCallback(() => {
    setLoading(true);
    const execAsyncFunc = async () => {
      try {
        const res = await asyncFunc(funcParams);
        if (res) setData(res);
        setError(null);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    execAsyncFunc();
  }, [asyncFunc, funcParams]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
    return () => {
      mountedRef.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    execute,
    loading,
    data,
    error,
  };
};
