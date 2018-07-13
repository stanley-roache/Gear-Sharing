
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('found').del()
    .then(function () {
      // Inserts seed entries
      return knex('found').insert([
        {
          id: 1,
          species: 'Rat',
          photo: 'https://i.pinimg.com/736x/65/76/82/6576829e1c5c8184a6e4d1eae5d45c32--dumbo-rat-ratti.jpg',
          user_id: 2
        },
        {
          id: 2,
          species: 'Rat',
          photo: 'https://www.pets4homes.co.uk/images/classifieds/2017/12/12/1791876/large/female-hooded-rat-5a2fd4a8a6572.jpg',
          user_id: 1
        },
        {
          id: 3,
          species: 'Cat',
          photo: 'https://kittentoob.com/wp-content/uploads/2016/10/Tortoiseshell-Cat-3.jpg',
          user_id: 2
        },
        {
          id: 4,
          species: 'Cat',
          photo: 'https://static.boredpanda.com/blog/wp-content/uploads/2016/02/japanese-grumpy-cat-angry-koyuki-moflicious-22.jpg',
          user_id: 1
        },
        {
          id: 5,
          species: 'Dog',
          photo: 'https://i.pinimg.com/originals/3e/19/27/3e19273504cf73b873e35c76159f8d2a.jpg',
          user_id: 3
        },
        {
          id: 6,
          species: 'Dog',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Staffordshire_Bull_Terrier_600.jpg/220px-Staffordshire_Bull_Terrier_600.jpg',
          user_id: 2
        },
        {
          id: 7,
          species: 'Fish',
          photo: 'https://www.legasea.co.nz/wordpress/wp-content/uploads/Snapper.jpg',
          user_id: 3
        },
        {
          id: 8,
          species: 'Fish',
          photo: 'https://scontent.fakl4-1.fna.fbcdn.net/v/t1.15752-9/37069901_2087092828273355_7053296568820039680_n.jpg?_nc_cat=0&oh=a6e8918b22ca32167e01bbc8a1e1d5c1&oe=5BE6DD79',
          user_id: 1
        },
        {
          id: 9,
          species: 'Rock',
          photo: 'https://c1.staticflickr.com/7/6137/6025736265_8442422561_b.jpg',
          user_id: 1
        },
        {
          id: 10,
          species: 'Rock',
          photo: 'http://imaginationsoup.net/wp-content/uploads/2016/04/Pet-Rock-Assignment.jpg',
          user_id: 3
        },
      ]);
    });
};
