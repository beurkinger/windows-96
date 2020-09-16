import { useEffect, useState } from 'preact/hooks';

const useDocumentClickToggle = (
  initialState = false
): [boolean, (bool: boolean) => void] => {
  const [bool, setBool] = useState<boolean>(initialState);

  useEffect(() => {
    if (bool) addEventListener();
    return removeEventListener;
  }, []);

  const addEventListener = () => {
    document.addEventListener('click', handleDocumentClick, false);
  };

  const removeEventListener = () => {
    document.removeEventListener('click', handleDocumentClick, false);
  };

  const handleDocumentClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    removeEventListener();
    setBool(false);
  };

  const updateBool = (newState: boolean) => {
    if (bool === newState) return;

    if (newState) {
      addEventListener();
      setBool(true);
    } else {
      removeEventListener();
      setBool(false);
    }
  };

  return [bool, updateBool];
};

export default useDocumentClickToggle;
