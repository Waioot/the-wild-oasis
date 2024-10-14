import { useBookings } from './useBookings';

import Pagination from '../../ui/Pagination';
import BookingRow from './BookingRow';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import Empty from '../../ui/Empty';
import Spinner from '../../ui/Spinner';

function BookingTable() {
  const { bookings, isLoading, count } = useBookings();

  if (isLoading) return <Spinner />;

  // 1. Filter
  const filteredBookings = bookings.filter(booking => {
    return (
      booking.status === 'unconfirmed' ||
      booking.status === 'checked-in' ||
      booking.status === 'checked-out'
    );
  });

  // 2. Sort
  const sortedBookings = filteredBookings.sort((a, b) => {
    return a.startDate.localeCompare(b.startDate);
  });

  if (sortedBookings.length === 0) return <Empty resourceName='bookings' />;

  return (
    <Menus>
      <Table columns='0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem'>
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={sortedBookings}
          render={booking => <BookingRow key={booking.id} booking={booking} />}
        />

        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default BookingTable;
