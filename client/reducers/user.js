const initialState = {}
  
  export default function user (state = initialState, action) {
    switch (action.type) {
      case 'SET_USER':
      console.log('setting user', action)
        return {
          id: action.user.id,
          firstName: action.user.first_name,
          lastName: action.user.last_name,
          username: action.user.user_name,
          email: action.user.email_address,
          gear: action.user.gear
        }
      case 'GEAR_ADD':
        // untested
        let newGearArr = [...state.gear, action.item]
        return {
          ...state,
          gear: newGearArr
        }
        // note: may need deeper copy
      default:
        return state
    }
  }