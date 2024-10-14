import {
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineBanknotes,
  HiOutlineChartBar,
} from 'react-icons/hi2';
import Stat from './Stat';
import { formatCurrency } from '../../utils/helpers';
function Stats({ bookings, confirmedStays, numDays, cabinsCount }) {
  // 1. Calculate stats
  const numBookings = bookings.length;
  // 2. Calculate sales
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  // 3. Calculate checkins
  const checkins = confirmedStays.length;

  // 4. Calculate occupancy rate
  const occupancyRate =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinsCount);

  return (
    <>
      <Stat
        title='Bookings'
        value={numBookings}
        color='blue'
        icon={<HiOutlineBriefcase />}
      />
      <Stat
        title='Sales'
        value={formatCurrency(sales)}
        color='green'
        icon={<HiOutlineBanknotes />}
      />
      <Stat
        title='Check ins'
        value={checkins}
        color='indigo'
        icon={<HiOutlineCalendar />}
      />
      <Stat
        title='Occupancy rate'
        value={Math.round(occupancyRate * 100) + '%'}
        color='yellow'
        icon={<HiOutlineChartBar />}
      />
    </>
  );
}

export default Stats;
