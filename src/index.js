import server from './server';
import getData from './core/get-data';

const URL = 'http://sedeplacer.bordeaux-metropole.fr/Toutes-les-infos-circulation/Pont-Chaban-Delmas-Fermetures';

const PORT = process.env.PORT || 1339;

getData(URL)
  .then((data) => {
    server(data)
    .listen(PORT, () => {
      console.log(`Api running on port ${PORT} !`);
    });
  })
  .catch(e => {
    console.log(e);
  });
