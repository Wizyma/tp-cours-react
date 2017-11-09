import moment from 'moment';
import { DATE_FORMAT } from './../constants';

export default data => (req, res) => {

  const {
    limit,
    from,
    to,
  } = req.query;

  const _from = from ? moment(from, DATE_FORMAT) : moment().subtract(1, 'year');
  const _to = to ? moment(to, DATE_FORMAT) : moment().add(1, 'year');

  if (
    _from.isAfter(_to) ||
    _to.isBefore(_from)
  ) {
    res
      .status(400)
      .json({
        error: 'Invalid parameters.',
      });
    return;
  }

  const json = data
    .filter(row => moment(row.date, DATE_FORMAT).isSameOrAfter(_from))
    .filter(row => moment(row.date, DATE_FORMAT).isSameOrBefore(_to))
    .filter((row, i) => !limit || i < limit);

  res
    .status(200)
    .json(json);

}
