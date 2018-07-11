export const initialState = [
    {
        id: 1,
        name: 'Frodo',
        species: 'Jack-russell terrier',
        photo: 'http://cdn3-www.dogtime.com/assets/uploads/gallery/jack-russel-terrier-dog-breed-pictures/2-face.jpg',
        user_id: 1
    },
    {
        id: 2,
        name: 'Bilbo',
        species: 'Tabby cat',
        photo: 'https://www.thehappycatsite.com/wp-content/uploads/2017/09/oil.jpg',
        user_id: 4
    },
    {
        id: 3,
        name: 'Gamgee',
        species: 'Goldfish',
        photo: 'https://r.hswstatic.com/w_907/gif/goldfish-alcohol.jpg',
        user_id: 2
    }
]

export default function lostPets(state = initialState, action) {
    switch (action.type) {

        case 'RECEIVE_LOST_PETS':
            return action.lostPets;
        case 'ADD_LOST_PET':
            return [...initialState, action.lostPet];
        default:
            return state;
    }
}