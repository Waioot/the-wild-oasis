import { useSearchParams } from 'react-router-dom';
import { getBookingsAfterDate } from '../../services/apiBookings';
import { useQuery } from '@tanstack/react-query';
import { subDays } from 'date-fns';

export default function useRecentBookings() {
  const [searchParams] = useSearchParams();

  const numDays = Number(searchParams.get('last') || 7);
  const queryDate = subDays(new Date(), numDays).toISOString();
  const { isLoading, data: bookings } = useQuery({
    queryKey: ['bookings', `last-${numDays}`],
    queryFn: () => getBookingsAfterDate(queryDate),
  });

  return { bookings, isLoading };
}
