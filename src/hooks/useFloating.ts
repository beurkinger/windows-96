import { useEffect, useState } from 'preact/hooks';

const useFloating = (
  initialState = false
): [boolean, (isOpen: boolean) => void] => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  useEffect(() => {
    if (isOpen) addEventListener();
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
    setIsOpen(false);
  };

  const updateIsOpen = (newState: boolean) => {
    if (isOpen === newState) return;

    if (newState) {
      addEventListener();
      setIsOpen(true);
    } else {
      removeEventListener();
      setIsOpen(false);
    }
  };

  return [isOpen, updateIsOpen];
};

export default useFloating;
