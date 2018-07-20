const initialState = {}
  
  export default function auth (state = initialState, action) {
    switch (action.type) {
      case 'SET_USER':
        return {
          id: action.user.id,
          firstName: action.user.first_name,
          lastName: action.user.last_name,
          username: action.user.user_name,
          email: action.user.email_address,
          gear: action.user.gear
        }
      default:
        return state
    }
  }