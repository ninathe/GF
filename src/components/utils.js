// let layers = 0;
let lastId = 0;
let colors = ['#ff1744', '#2979ff', '#00b8d4', '#00bfa5',  '#ff6d00', '#00bfa5', '#ffd600', '#d50000' ]

export default function formatJson(json, name, noBorder, opacity) {
    if(!json.name)
      json.name = "Layer"
    if(name)
      json.name = name
    if(!json.visible)
      json.visible = "visible"
    if(!json.id)
      json.id = "layer-"+lastId;
    if(!json.fillColor)
      json.fillColor = colors[lastId%colors.length]
    json.fillOpacity = opacity?opacity:1
    if(!noBorder && !json.borderColor)
      json.borderColor = "black"
    if(noBorder)
      json.borderColor = null
    lastId++;
    return json
}
