import { CRASH_EVERY_X_CALLS } from './../constants';
export default (req, res, next) => {

  const currentCall = req.cookies.call || 0;
  const cookieValue = parseInt(currentCall, 10) + 1;

  res.cookie('call', cookieValue);

  if (
    !CRASH_EVERY_X_CALLS ||
    (currentCall && currentCall % CRASH_EVERY_X_CALLS !== 0)
  ) {
    next();
  } else {
    res
      .status(500)
      .end('Something terribad happened :(');
  }
}
