import { useEffect, useCallback, useMemo } from 'react';

import initialize from './initialize';

const useDarkMode = (
  initialValue = false,
  {
    element,
    classNameDark,
    classNameLight,
    onChange,
    storageKey = 'darkMode',
    storageProvider,
    global,
  } = {}
) => {
  const { usePersistedDarkModeState, getDefaultOnChange, getInitialValue } =
    useMemo(
      () => initialize(storageKey, storageProvider, global),
      [storageKey, storageProvider, global]
    );

  const [state, setState] = usePersistedDarkModeState(
    getInitialValue(initialValue)
  );

  const stateChangeCallback = useMemo(
    () =>
      onChange || getDefaultOnChange(element, classNameDark, classNameLight),
    [onChange, element, classNameDark, classNameLight, getDefaultOnChange]
  );

  // Call the onChange handler
  useEffect(() => {
    stateChangeCallback(state);
  }, [stateChangeCallback, state]);

  return {
    value: state,
    enable: useCallback(() => setState(true), [setState]),
    disable: useCallback(() => setState(false), [setState]),
    toggle: useCallback(() => setState((current) => !current), [setState]),
  };
};

export default useDarkMode;
