import { useQuery } from '@tanstack/react-query';
import { getCabins as getCabinsApi } from '../../services/apiCabins';

export function useGetCabin() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ['cabins'],
    queryFn: getCabinsApi,
  });

  return { isLoading, cabins };
}
