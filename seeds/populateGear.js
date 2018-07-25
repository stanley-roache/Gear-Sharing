
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gear').del()
    .then(function () {
      // Inserts seed entries
      return knex('gear').insert([
        {
          id: 1,
          status: "Available",
          trustframework: "Three",
          name: 'Hammer Drill',
          description: 'Tackle a wide range of applications with quick-release chucks and multi-gear drills. Designed with large diameter gearing, optimised communtators and rugged casing to last longer.',
          photo_url: 'http://www.miconstruguia.com/wp-content/uploads/2015/04/Makita_XRH05Z_Action_Shot_7.jpg',
          user_id: 1
        },
        {
          id: 2,
          status: "Available",
          trustframework: "Two",
          name: 'Food Dehydrator',
          description: 'Easily make healthy, delicious, and natural snacks like banana chips, fruit roll-ups, and jerky!',
          photo_url: 'https://cdn3.volusion.com/wunh2.w2vhv/v/vspfiles/photos/74-1001-W-2.jpg?1524575057',
          user_id: 2
        },
        {
          id: 3,
          status: "Available",
          trustframework: "Three",
          name: 'Chainsaw',
          description: 'Powerful 14.5 Amp motor offers consistent performance and durability. Built-in chain brake for added safety. Automatic oil lubrication and built-in oil reservoir with level indicator. ',
          photo_url: 'https://www.worx.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/w/g/wg303-3.1530283278.jpg',
          user_id: 3
        },
        {
          id: 4,
          status: "Available",
          trustframework: "One",
          name: 'Hole Saw Set',
          description: 'Bi-metal holesaws with high speed steel teeth for cutting mild steel, copper, aluminium, brass, laminates, plastics and timber. Carbon steel arbor and extension.',
          photo_url: 'https://www.goldtoolsmanila.com/wp-content/uploads/2017/07/TCT-22mm-HoleSaw-3.jpg',
          user_id: 4
        },
        {
          id: 5,
          status: "Not Available",
          trustframework: "Two",
          name: 'Water Blaster',
          description: 'Compact, light weight Waterblaster, great for light cleaning jobs around the house and garden. The RE 88 comes equipped with an anti-drill and quick release coupling on the gun, rotary and fan nozzles and a detergent spray set, all as standard.ary and fan nozzles and detergent spray set, all as standard.',
          photo_url: 'http://www.kerrick.co.nz/site/DefaultSite/filesystem/images/news/SetWidth485-Drain-Cleaner-and-Water-Blaster-for-Milford.jpg',
          user_id: 1
        },
        {
          id: 6,
          status: "Not Available",
          trustframework: "One",
          name: 'Cuisinart Ice Cream Maker',
          description: 'Thanks to the simple, fast operation of this homemade ice cream maker, there’s no quicker, easier way to cool down after a hot summer day.',
          photo_url: 'https://www.williams-sonoma.com/wsimgs/rk/images/dp/wcm/201824/0101/cuisinart-ice-cream-maker-with-extra-freezer-bowl-c.jpg',
          user_id: 2
        },
        {
          id: 7,
          status: "Not Available",
          trustframework: "One",
          name: 'Hair Clippers',
          description: 'The Wahl Super Taper is one of the most popular mains clippers among NZ professionals, barbers and salons. Its powerful, realiable motor, durable, corrosion resistant chrome plated blades make it ideal for all clipper work.',
          photo_url: 'https://ae01.alicdn.com/kf/HTB1PbQYRFXXXXXmXFXXq6xXFXXXS/pet-dog-cat-hand-clippers-manual-plier-hair-trimmers-old-fashioned-manual-knife-hand-operated-clipper.jpg_640x640.jpg',
          user_id: 3
        },
        {
          id: 8,
          status: "Not Available",
          trustframework: "One",
          name: 'Dog Shower Tool Kit',
          description: 'Wash every part of your dog quickly and easily with this 360 Degree Adjustable Dog Cleaner featuring an arc-shaped hose extension with 30 powerful water jets and a refillable shampoo container.',
          photo_url: 'https://cdn.shopify.com/s/files/1/1371/9935/products/Pet-Dog-Cat-Bathing-Cleaner-360-Degree-Shower-Tool-Kit-Dog-Cleaning-Washing-Bath-Sprayers-Pet_1200x.jpg?v=1514815391',
          user_id: 4
        },
        {
          id: 9,
          status: "Not Available",
          trustframework: "Three",
          name: 'Rotary Hoe',
          description: 'The Red Roo rotary hoe has a 600mm wide cutting deck that goes to a depth of 250mm. This unit is powered by a 8.5hp petrol engine, and is easily transported by ute or trailer.',
          photo_url: 'http://img.agriexpo.online/images_ag/photo-g/168458-10377539.jpg',
          user_id: 1
        },
        {
          id: 10,
          status: "Available",
          trustframework: "One",
          name: 'Travel Hair Dryer',
          description: 'The hair dryer has 1400W power and has 2 different speed settings, it also comes with a clip off concentrator for easier styling.',
          photo_url: 'https://i1.wp.com/thebeautyinyou.mlethadaniels.net/wp-content/uploads/2018/02/Revlon-1875W-Compact-Travel-Hair-Dryer-0-3.jpg?fit=500%2C500',
          user_id: 2
        },
        {
          id: 11,
          status: "Available",
          trustframework: "Two",
          name: 'Acoustic Guitar',
          description: 'The top is bubbled and the back has some cracks. Good for musicians who are looking for an ambitious instrument with a good sound.',
          photo_url: 'https://djbe776q9tz25.cloudfront.net/6fabc00vn4qtggc5bmgejmab8g.jpg?w=535&h=535&mode=crop',
          user_id: 3
        },
        {
          id: 12,
          status: "Available",
          trustframework: "Two",
          name: 'Kayaks',
          description: 'Fishing Kayak set up includes paddle, anchor, seat, and storage /rod holder. Great fishing set up.',
          photo_url: 'https://oceankayak.johnsonoutdoors.com/sites/johnsonoutdoors-store/files/product/ocekayakl3/1097555/InSituationImage/1097555_insitu04.jpg',
          user_id: 3
        },
        {
          id: 13,
          status: "Available",
          trustframework: "One",
          name: 'Ladder',
          description: 'A Cosco 2008 Model 20-12A ABL aluminum 12ft step-ladder. Highest standing level is 112 1/8", has extra-heavy duty industrial rating, and a working load of 300lbs.',
          photo_url: 'https://ebth-com-production.imgix.net/2016/10/13/20/27/27/4b58296f-560b-470b-b7b9-9a47fd7be171/DSCN0176.jpg?ixlib=rb-1.1.0&w=880&h=880&fit=crop&crop=&auto=format',
          user_id: 1
        },
        {
          id: 14,
          status: "Available",
          trustframework: "Three",
          name: 'Engine Hoist',
          description: 'Big Red 1 Ton Engine Hoist (T31002) by Torin®. The heavy-duty Torin 1 Ton Folding Shop Crane is specifically designed to raise, lower and transport engines, differentials, transmissions and other heavy loads with minimal effort.',
          photo_url: 'https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/41070006/38a7431e7989f7c5be989e731d0fbd97.jpg?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=99cb7cdb9b612964f6991ee249b7f4b6',
          user_id: 2
        },
        {
          id: 15,
          status: "Available",
          trustframework: "Two",
          name: 'Microwave',
          description: 'Class up your cooking space. This Samsung over-the-range microwave has a sleek design and LED display to keep your kitchen looking sharp.',
          photo_url: 'https://assets.robertdyas-static.co.uk/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/r/u/russell_hobbs_rhretmm705r_17l_manual_retro_microwave_red_0002_195693_3_.jpg',
          user_id: 3
        },
        {
          id: 16,
          status: "Not Available",
          trustframework: "Three",
          name: 'Donut Factory',
          description: 'This machine can make 560 donuts/hour – that is more than 46 dozen/hour. Most often, this quantity of donuts is enough.',
          photo_url: 'https://i.pinimg.com/originals/da/2a/b6/da2ab6fe20c9814e5a633c8069a565f3.jpg',
          user_id: 4
        },
        {
          id: 17,
          status: "Available",
          trustframework: "Two",
          name: 'Golf Clubs',
          description: '7 Antique Vintage 1920s Hickory Wood Shaft Golf Clubs & Old Golf Bag.',
          photo_url: 'https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/140018394/befe9a2d0e8fc73d9d2a941223b86f99.jpg?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=4808c51dc3e23b24a7e65fdcaa8cfdb6',
          user_id: 1
        },
        {
          id: 18,
          status: "Not Available",
          trustframework: "Three",
          name: 'Row Boat Cradle',
          description: 'Great little boat we had made for our son. It does not leak a drop but does not come with oars',
          photo_url: 'http://www.plioz.com/wp-content/images/handcrafted-row-boat-cradle1.jpg',
          user_id: 2
        },
        {
          id: 19,
          status: "Available",
          trustframework: "One",
          name: 'VHS Tape Rewinder',
          description: 'Quickly rewind your videotapes and video cassettes with a fast and easy VCR rewinder. Enjoy your old movies and home videos with these bestselling brands.',
          photo_url: 'https://i.ebayimg.com/images/g/7J4AAOSwzXxaNWY1/s-l640.jpg',
          user_id: 3
        },
        {
          id: 20,
          status: "Not Available",
          trustframework: "One",
          name: 'Fedora',
          description: 'Celebrate your next night on the town while wearing this timeless classic, a black felt fedora. The perfect hat for making a classy statement at any Guys and Dolls, Gangster and Moxies, or Blues Brothers parties.',
          photo_url: 'https://memestatic2.fjcdn.com/thumbnails/comments/You+made+me+do+this+go+fedora+stand+_c6ed43c4430c0410abf9ffb8fccf6abf.jpg',
          user_id: 4
        },
        {
          id: 21,
          status: "Available",
          trustframework: "Three",
          name: 'Penny Farthing',
          description: 'An interesting penny farthing high well bicycle having wood handles and stretched leather seat.',
          photo_url: 'https://www.unicycle.uk.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/u/custompennyfarthing.jpg',
          user_id: 1
        },
        {
          id: 22,
          status: "Not Available",
          trustframework: "One",
          name: 'Barrel Cactus',
          description: 'Echinocactus grusonii, popularly known as the golden barrel cactus, golden ball or mother-in-laws cushion, is a well known species of cactus, and is endemic to east-central Mexico.',
          photo_url: 'https://st.hzcdn.com/simgs/4592cddb09593ba3_8-0200/home-design.jpg',
          user_id: 2
        },
        {
          id: 23,
          status: "Available",
          trustframework: "Two",
          name: 'Fire Extinguisher',
          description: 'Discharge a fine powder that absorbs fuel molecules, depriving the fire of a fuel source.',
          photo_url: 'https://images-na.ssl-images-amazon.com/images/I/814mx2L11TL.jpg',
          user_id: 3
        },
        {
          id: 24,
          status: "Not Available",
          trustframework: "Three",
          name: 'Jukebox',
          description: 'This is an original 1970s  jukebox but it was gutted to make it lighter as it was used as a prop in a play.  It therefore  doesnt work. It is currently on wheels. Artwork and song lists made up for the show so not original.',
          photo_url: 'https://www.hiremasterwanganui.co.nz/wp-content/uploads/2015/01/IMG_1962.jpg',
          user_id: 4
        },
      ]);
    });
};
