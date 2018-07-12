
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('lost').del()
    .then(function () {
      // Inserts seed entries
      return knex('lost').insert([
        {
          id: 1,
          name: 'Pouya',
          species: 'Mouse',
          photo: 'https://cdn.pixabay.com/photo/2018/03/03/02/26/mouse-3194768__340.jpg',
          user_id: 2
        },
        {
          id: 2,
          name: 'GZA',
          species: 'Rat',
          photo: 'https://vignette.wikia.nocookie.net/poohadventures/images/6/64/Rufus_%28Kim_Possible%29.jpeg/revision/latest?cb=20140708203220',
          user_id: 1
        },
        {
          id: 3,
          name: 'Ice Cube',
          species: 'Dog',
          photo: 'https://media.jumiadeals.com/ng_live/2c5421174c5ada2083a3b25.desktop-gallery-large.jpg',
          user_id: 3
        },
        {
          id: 4,
          name: 'Lil Peep',
          species: 'Lizard',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Tiliqua_scincoides_scincoides.jpg/1200px-Tiliqua_scincoides_scincoides.jpg',
          user_id: 2
        },
        {
          id: 5,
          name: 'Hot Tuna',
          species: 'Fish',
          photo: 'http://agoras24.com/wp-content/uploads/2018/03/tuna.jpg',
          user_id: 3
        },
        {
          id: 6,
          name: 'Denzel Curry',
          species: 'Dog',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Max_at_the_river2.jpg/220px-Max_at_the_river2.jpg',
          user_id: 2
        },
        {
          id: 7,
          name: '6ix9ine',
          species: 'Bird',
          photo: 'https://media.treehugger.com/assets/images/2011/10/lorikeet.jpg',
          user_id: 3
        },
        {
          id: 8,
          name: 'Slug Christ',
          species: 'Slug',
          photo: 'https://www.publicdomainpictures.net/pictures/110000/velka/banana-slug.jpg',
          user_id: 2
        },
        {
          id: 9,
          name: 'Scribe',
          species: 'Rock',
          photo: 'https://beafunmum.com/wp-content/uploads/2012/01/dreamstime_s_20093731.jpg',
          user_id: 1
        },
        {
          id: 10,
          name: 'XXXTentacion',
          species: 'Possum',
          photo: 'https://flyfishhunt.co.nz/wp-content/uploads/2016/09/IMG_6618-1-e1472796323791.jpg',
          user_id: 2
        },
      ]);
    });
};
