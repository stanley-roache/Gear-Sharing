// Pulling from our lostPets reducer...
import lostPets, { initialState } from '../../../client/reducers/lostPets'

test('initial state of lostPets', () => {

    // Arrange
    const expected = initialState

    // Act
    const actual = lostPets(undefined, {})

    // Assert
    expect(actual).toEqual(expected)

})

test('add pet case', () => {

    // Arrange
    const fakePet = {
        id: 7,
        name: 'FakeBoi',
        species: 'Jack-russell terrier',
        photo: 'http://cdn3-www.dogtime.com/assets/uploads/gallery/jack-russel-terrier-dog-breed-pictures/2-face.jpg',
        user_id: 1
    }

    const action = {
        type:'ADD_LOST_PET',
        lostPet: fakePet
    }

    const expected = [...initialState, fakePet]
    
    //Act
    const actual = lostPets(undefined, action)
    
    //Assert
    expect(actual).toEqual(expected)

})

test('receive_lost_pets returns the correct state', () => {

    // Arrange
    const action = {
        type: 'RECEIVE_LOST_PETS',
        lostPets: initialState
    }

    const expected = initialState

    // Act
    const actual = lostPets(undefined, action)

    // Assert
    expect(actual).toEqual(expected)

})