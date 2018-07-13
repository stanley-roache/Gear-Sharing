// Pulling what we need from our foundPet actions / reducers:
import { receiveFoundPets, addFoundPet, RECEIVE_FOUND_PETS, ADD_FOUND_PET } from '../../../client/actions/foundPets'
import { initialState } from '../../../client/reducers/foundPets';

test('Add found pet adds a pet', () => {

    // Arrange
    const fakePet = {
            id: 4,
            species: 'Dog',
            photo: 'https://www.thehappycatsite.com/wp-content/uploads/2017/09/oil.jpg',
            user_id: 3
    }

    const expected = {
        type: ADD_FOUND_PET,
        foundPet: fakePet
    }

    // Act
    const actual = addFoundPet(fakePet)

    // Assert
    expect(actual).toEqual(expected)

})

test('ReceiveFoundPets gives back initial state', () => {

    //Arrange
    const expected = {
        type: RECEIVE_FOUND_PETS,
        foundPets: initialState
    }

    //Act
    const actual = receiveFoundPets(initialState);

    //Assert
    expect(actual).toEqual(expected)

})