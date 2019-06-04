
export const addLayer = layer => ({
  type: 'ADD_LAYER',
  layer
})

export const deleteLayer = layer => ({
  type: 'DELETE_LAYER',
  layer
})

export const updateLayers = layer => ({
  type: 'UPDATE_LAYERS',
  layer
})

export const updateLayerFill = (layerID, fillColor) => ({
  type: 'UPDATE_LAYER_FILL',
  layerID,
  fillColor
})
export const updateLayerBorder = (layerID, borderColor) => ({
  type: 'UPDATE_LAYER_BORDER',
  layerID,
  borderColor
})

export const updateLayerVisibility = (layerID, visibility) => ({
  type: 'UPDATE_LAYER_VISIBILITY',
  layerID,
  visibility
})

export const updateLayerName = (layerID, name) => ({
  type: 'UPDATE_LAYER_NAME',
  layerID,
  name
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

