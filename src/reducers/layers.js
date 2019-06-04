let initialState = []

const layers = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_LAYER':
        return [
          ...state.slice(0, state.length),
          action.layer,
          ...state.slice(state.length)
        ]

      case 'DELETE_LAYER':
        return  state.filter(function(layer){return layer.id != action.layer })
      
      case 'UPDATE_LAYER_FILL':
        return state.map((layer) => {
          // Find the item with the matching id
          if(layer.id === action.layerID) {
            return {
              ...layer,  
              fillColor: action.fillColor 
            }
          }
          return layer;
        });
      
        case 'UPDATE_LAYER_BORDER':
        return state.map((layer) => {
          // Find the item with the matching id
          if(layer.id === action.layerID) {
            return {
              ...layer,  
              borderColor: action.borderColor 
            }
          }
          return layer;
        });

      case 'UPDATE_LAYER_VISIBILITY':
        return state.map((layer) => {
          if(layer.id === action.layerID) {
            return {
              ...layer,  
              visible: action.visibility 
            }
          }
          return layer;
        });
      
      case 'UPDATE_LAYER_NAME':
        return state.map((layer) => {
          if(layer.id === action.layerID) {
            return {
              ...layer,  
              name: action.name 
            }
          }
          return layer;
        });

      case 'TOGGLE_TODO':
        return state.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      default:
        return state
    }
  }
  
  export default layers

