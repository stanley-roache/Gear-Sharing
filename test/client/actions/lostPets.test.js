// Pulling what we need from our lostPet actions / reducers:
import { receiveLostPets, addLostPet, RECEIVE_LOST_PETS, ADD_LOST_PET } from '../../../client/actions/lostPets'
import { initialState } from '../../../client/reducers/lostPets';

test('Add lost pet adds a pet', () => {

    // Arrange
    const fakePet = {
            id: 4,
            name: 'Dave',
            species: 'Dog',
            photo: 'https://www.thehappycatsite.com/wp-content/uploads/2017/09/oil.jpg',
            user_id: 3
    }

    const expected = {
        type: ADD_LOST_PET,
        lostPet: fakePet
    }

    // Act
    const actual = addLostPet(fakePet)

    // Assert
    expect(actual).toEqual(expected)

})

test('ReceiveLostPets gives back initial state', () => {

    //Arrange
    const expected = {
        type: RECEIVE_LOST_PETS,
        lostPets: initialState
    }

    //Act
    const actual = receiveLostPets(initialState);

    //Assert
    expect(actual).toEqual(expected)

})