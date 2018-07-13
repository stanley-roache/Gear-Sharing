// Pulling from our foundPets reducer...
import foundPets, { initialState } from '../../../client/reducers/foundPets'

test('initial state of foundPets', () => {

    // Arrange
    const expected = initialState

    // Act
    const actual = foundPets(undefined, {})

    // Assert
    expect(actual).toEqual(expected)

})

test('add pet case', () => {

    // Arrange
    const fakePet = {
        id: 7,
        species: 'Jack-russell terrier',
        photo: 'http://cdn3-www.dogtime.com/assets/uploads/gallery/jack-russel-terrier-dog-breed-pictures/2-face.jpg',
        user_id: 1
    }

    const action = {
        type:'ADD_FOUND_PET',
        foundPet: fakePet
    }

    const expected = [...initialState, fakePet]
    
    //Act
    const actual = foundPets(undefined, action)
    
    //Assert
    expect(actual).toEqual(expected)

})

test('receive_found_pets returns the correct state', () => {

    // Arrange
    const action = {
        type: 'RECEIVE_FOUND_PETS',
        foundPets: initialState
    }

    const expected = initialState

    // Act
    const actual = foundPets(undefined, action)

    // Assert
    expect(actual).toEqual(expected)

})