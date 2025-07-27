import React from 'react';

const tips = {
  'Plastic': 'Use reusable bags, avoid single-use plastics.',
  'Glass': 'Recycle glass jars and bottles instead of throwing them.',
  'Metal': 'Collect metal scrap and take to recycling centers.',
  'Food Organics': 'Compost leftover food to make fertilizer.',
  'Cardboard': 'Reuse boxes or recycle them.',
  'Paper': 'Go paperless where possible.',
  'Textile Trash': 'Donate old clothes or repurpose them.',
  'Vegetation': 'Compost garden waste.',
  'Miscellaneous Trash': 'Try to reduce usage of mixed material products.'
};

const EcoTips = () => (
  <div style={{ padding: '20px' }}>
    <h2>♻️ Eco Tips</h2>
    {Object.entries(tips).map(([type, tip]) => (
      <div key={type} style={{ marginBottom: '10px' }}>
        <strong>{type}:</strong> {tip}
      </div>
    ))}
  </div>
);

export default EcoTips;
