import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getBookings } from '../../services/apiBookings';
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../../utils/constants';

export function useBookings() {
  const [searchParams] = useSearchParams();

  const queryClient = useQueryClient();

  // 1. filter
  const filterValue = searchParams.get('status');
  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : { field: 'status', value: filterValue, method: 'eq' };

  // 2. sort
  const sortByValue = searchParams.get('sortBy') || 'startDate-asc';
  const sortBy = !sortByValue
    ? null
    : {
        field: sortByValue.split('-')[0],
        direction: sortByValue.split('-')[1],
      };

  // 3. page
  const page = Number(searchParams.get('page')) || 1;

  // 4. query
  const { isLoading, data: { data: bookings, count } = {} } = useQuery({
    queryKey: ['bookings', filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  // 5. pre-fetch
  const totalPages = Math.ceil(count / PAGE_SIZE);

  if (page < totalPages)
    queryClient.prefetchQuery({
      queryKey: ['bookings', filter, sortBy, page + 1],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ['bookings', filter, sortBy, page - 1],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
    });

  return { isLoading, bookings, count, filter, sortBy };
}
