import sketch from 'sketch'
const namen = require("./namen")

export default function() {
  const doc = sketch.getSelectedDocument()
  const selectedLayers = doc.selectedLayers

  const getRandomName = () => {
    let randomName =
      namen.malenames[Math.floor(Math.random() * namen.malenames.length)] +
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