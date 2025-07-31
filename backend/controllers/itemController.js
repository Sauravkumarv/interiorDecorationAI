const Item = require('../models/Item');

const submitItem = async (req, res) => {
  try {
    console.log('=== DEBUGGING FORM SUBMISSION ===');
    console.log('Request body:', req.body);
    console.log('Request files:', req.files);
    console.log('=====================================');

    const { itemName, description, dimensions, color } = req.body;

    // Ensure dimensions is a string
    let dimensionsString;
    if (typeof dimensions === 'string') {
      dimensionsString = dimensions.trim();
    } else if (typeof dimensions === 'object') {
      // If somehow an object is passed, convert it back to string
      dimensionsString = `${dimensions.length || 0} x ${dimensions.width || 0} x ${dimensions.height || 0}`;
    } else {
      dimensionsString = String(dimensions || '');
    }

    console.log('Processed dimensions:', dimensionsString);

    // Validate required fields
    if (!itemName || !description || !dimensionsString || !color) {
      return res.status(400).json({ 
        message: 'Missing required fields',
        received: { itemName, description, dimensions: dimensionsString, color }
      });
    }

    // Check files
    if (!req.files || !req.files['furnitureImage']) {
      return res.status(400).json({ 
        message: 'furnitureImage is required',
        files: req.files ? Object.keys(req.files) : 'No files'
      });
    }

    const furnitureImage = req.files['furnitureImage'][0]?.path || '';
    const roomImage = req.files['roomImage']?.[0]?.path || '';

    console.log('Creating item with data:', {
      itemName,
      description,
      dimensions: dimensionsString,
      color,
      furnitureImage,
      roomImage
    });

    const newItem = new Item({
      itemName: itemName.trim(),
      description: description.trim(),
      dimensions: dimensionsString,
      color: color.trim(),
      furnitureImage,
      roomImage,
    });

    const savedItem = await newItem.save();
    console.log('Item saved successfully:', savedItem._id);
    
    res.status(201).json({
      message: 'Item submitted successfully',
      item: savedItem
    });
    
  } catch (err) {
    console.error('=== ERROR IN SUBMIT ITEM ===');
    console.error('Error message:', err.message);
    console.error('Error name:', err.name);
    console.error('Error stack:', err.stack);
    
    // Check if it's a validation error
    if (err.name === 'ValidationError') {
      console.error('Validation errors:', err.errors);
      return res.status(400).json({ 
        message: 'Validation failed', 
        errors: err.errors,
        details: Object.keys(err.errors).map(key => ({
          field: key,
          message: err.errors[key].message
        }))
      });
    }
    
    console.error('============================');
    
    res.status(500).json({ 
      message: 'Error submitting item', 
      error: err.message,
      type: err.name
    });
  }
};

module.exports = { submitItem };