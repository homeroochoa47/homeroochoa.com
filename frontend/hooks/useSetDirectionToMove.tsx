import { useContext, useEffect } from 'react';
import { directionToMoveContext } from '@/pages/_app';

const useSetDirectionToMove = (direction: string) => {
  const { setDirectionToMove } = useContext(directionToMoveContext);

  useEffect(() => {
    setDirectionToMove(direction);
  }, [direction, setDirectionToMove]);
};

export default useSetDirectionToMove;
