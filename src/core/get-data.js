import openUrl from './url-opener';

// eslint-disable-next-line
const REGEX = /<a href="(.*)">(.*)<\/a><\/p>\s*<\/td>\s*<td style="text-align: center;">\s*<p>([\d]{2}\/[\d]{2}\/[\d]{2})<\/p>\s*<\/td>\s*<td style="text-align: center;">\s*<p>([\d]{2}:[\d]{2})<\/p>\s*<\/td>\s*<td style="text-align: center;">\s*<p>([\d]{2}:[\d]{2})<\/p>\s*<\/td>\s*<td style="text-align: center;">\s*<p>(.*)<\/p>\s*<\/td>/g;

export default (url) => openUrl(url, (html) => {
  const results = [];

  let result;
  while ((result = REGEX.exec(html)) !== null) { // eslint-disable-line no-cond-assign
    results.push(result.slice(1, result.length));
  }
  return Promise.resolve(results);
})
.then(results => Promise.all(results.map((row, i) => ({
  id: i + 1,
  date: row[2],
  start: row[3],
  end: row[4],
  totale: row[5].toLowerCase().indexOf('totale') >= 0,
  reason: row[1],
  link: `http://sedeplacer.bordeaux-metropole.fr${row[0]}`,
}))));
