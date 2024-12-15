const { createCanvas } = require('canvas');
const fs = require('fs');
const { createIcon } = require('ico-canvas');

// Create a canvas
const canvas = createCanvas(16, 16);
const ctx = canvas.getContext('2d');

// Draw background
ctx.fillStyle = '#4F46E5';
ctx.fillRect(0, 0, 16, 16);

// Draw text
ctx.fillStyle = '#FFFFFF';
ctx.font = 'bold 12px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('K', 8, 8);

// Create ico file
createIcon([canvas], './public/favicon.ico');
