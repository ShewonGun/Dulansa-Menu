// Sinhala names, written the way they are usually printed on Sri Lankan menus
// (common English food words are written in Sinhala letters). Keyed by the English text in menu.js.
// Edit freely: any dish missing here simply falls back to its English name.

const protein = {
  Vegetable: 'එළවළු',
  Egg: 'බිත්තර',
  Fish: 'ෆිෂ්',
  Chicken: 'චිකන්',
  Seafood: 'සීෆුඩ්',
  Mixed: 'මික්ස්',
  Pork: 'පෝක්',
}

const base = {
  'Fried Rice': 'ෆ්‍රයිඩ් රයිස්',
  Noodles: 'නූඩ්ල්ස්',
  Kottu: 'කොත්තු',
  'Cheese Kottu': 'චීස් කොත්තු',
  'Chop Suey': 'චොප්සි',
  'Nasi Goreng': 'නාසිගුරාන්',
}

// Build "<Protein> <Dish>" names for the regular rice / noodle / kottu items.
const composed = {}
Object.entries(protein).forEach(([p, ps]) => {
  Object.entries(base).forEach(([b, bs]) => {
    composed[`${p} ${b}`] = `${ps} ${bs}`
  })
})

export const dishesSi = {
  ...composed,
  'Seafood Mongolian Rice': 'සීෆුඩ් මොන්ගෝලියන් රයිස්',
  'Chicken Biriyani': 'චිකන් බිරියානි',
  'Sri Lankan Omelette': 'ශ්‍රී ලාංකික ඔම්ලට්',
  'Cheese Tomato Omelette': 'චීස් තක්කාලි ඔම්ලට්',
  'Cheese Chicken Omelette': 'චීස් චිකන් ඔම්ලට්',
  'Devilled Chicken': 'ඩෙවල්ඩ් චිකන්',
  'Devilled Sausages': 'ඩෙවල්ඩ් සොසේජස්',
  'Mixed Devilled Plate': 'මික්ස් ඩෙවල්ඩ් ප්ලේට්',
  'Hot Butter Chicken': 'හොට් බටර් චිකන්',
  'Fried Chicken': 'ෆ්‍රයිඩ් චිකන්',
  'Devilled Prawns': 'ඩෙවල්ඩ් ඉස්සන්',
  'Devilled Pork': 'ඩෙවල්ඩ් පෝක්',
  'Pork Stew': 'පෝක් ස්ටූ',
  'Fried Pork': 'ෆ්‍රයිඩ් පෝක්',
  'Chicken Stew': 'චිකන් ස්ටූ',
  'Devilled Cuttlefish': 'ඩෙවල්ඩ් දැල්ලන්',
  'Hot Butter Cuttlefish': 'හොට් බටර් දැල්ලන්',
  'Fish Stew': 'ෆිෂ් ස්ටූ',
  'Hot Butter Mushrooms': 'හොට් බටර් හතු',
  'Boiled Vegetables': 'තම්බපු එළවළු',
  'Fruit Plate': 'ෆ්‍රූට් ප්ලේට්',
}

export const sectionsSi = {
  'fried-rice': { title: 'ෆ්‍රයිඩ් රයිස්' },
  noodles: { title: 'නූඩ්ල්ස්' },
  kottu: { title: 'කොත්තු' },
  'cheese-kottu': { title: 'චීස් කොත්තු' },
  'chop-suey': { title: 'චොප්සි', note: 'ෆ්‍රයිඩ් රයිස් සහ නූඩ්ල්ස්' },
  'nasi-goreng': { title: 'නාසිගුරාන්' },
  biriyani: { title: 'බිරියානි' },
  omelette: { title: 'ඔම්ලට්' },
  sides: { title: 'සයිඩ්ස්' },
  fruits: { title: 'පළතුරු' },
}
