export const movieGenres = [
  {
    value: 'action',
    label: 'Action',
  },
  {
    value: 'comedy',
    label: 'Comedy',
  },
  {
    value: 'family',
    label: 'Family',
  },
  {
    value: 'history',
    label: 'History',
  },
  {
    value: 'sci_fi',
    label: 'Sci-Fi',
  },
  {
    value: 'war',
    label: 'War',
  },
  {
    value: 'adventure',
    label: 'Adventure',
  },
  {
    value: 'crime',
    label: 'Crime',
  },
  {
    value: 'fantasy',
    label: 'Fantasy',
  },
  {
    value: 'horror',
    label: 'Horror',
  },
  {
    value: 'news',
    label: 'News',
  },
  {
    value: 'sport',
    label: 'Sport',
  },
  {
    value: 'western',
    label: 'Western',
  },
  {
    value: 'animation',
    label: 'Animation',
  },
  {
    value: 'documentary',
    label: 'Documentary',
  },
  {
    value: 'film_noir',
    label: 'Film-Noir',
  },
  {
    value: 'music',
    label: 'Music',
  },
  {
    value: 'reality_tv',
    label: 'Reality-TV',
  },
  {
    value: 'talk_show',
    label: 'Talk-Show',
  },
  {
    value: 'biography',
    label: 'Biography',
  },
  {
    value: 'drama',
    label: 'Drama',
  },
  {
    value: 'game_show',
    label: 'Game-Show',
  },
  {
    value: 'musical',
    label: 'Musical',
  },
  {
    value: 'romance',
    label: 'Romance',
  },
  {
    value: 'thriller',
    label: 'Thriller',
  },
];

export const userRatings = (() => {
  const ratings = [];
  for (let i = 1; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      ratings.push({
        value: i + '.' + j,
        label: i + '.' + j,
      });
    }
  }

  ratings.push({
    value: '10',
    label: '10',
  });
  return ratings;
})();
