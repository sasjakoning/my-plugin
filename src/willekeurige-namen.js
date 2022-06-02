import sketch from 'sketch'
const namen = require("./namen")

export default function() {
  const doc = sketch.getSelectedDocument()
  const selectedLayers = doc.selectedLayers

  const getRandomName = () => {
    const bothGenders = namen.femalenames.concat(namen.malenames)
    let randomName =
      bothGenders[Math.floor(Math.random() * bothGenders.length)] +
      ` ` +
      namen.lastnames[Math.floor(Math.random() * namen.lastnames.length)];
    return randomName;
  };

  selectedLayers.forEach(layer => {
    const name = getRandomName()
    layer.text = name
    layer.name = name
  });
}