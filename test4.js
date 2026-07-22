async function downloadData() {
  try {
    const urls = ['movie.json', 'actors.json', 'cinemas.json'];
    const responses = await Promise.all(urls.map(url => fetch(url)));

    const [movie, actor, cinema] = await Promise.all(responses.map(res => res.json()));

    const movieOutput = `Movie title: ${movie.title}`;
    const actorOutput = `Total Actors: ${actor.length}`;
    const cinemaOutput = `Total Cinemas: ${cinema.length}`;

    myDisplayer(`
      ${movieOutput} 
      ${actorOutput} 
      ${cinemaOutput}`);

  } catch (error) {
    myDisplayer(`Error loading data: ${error.message}`);
  }
}
