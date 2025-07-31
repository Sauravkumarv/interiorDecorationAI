const express = require('express');
const router = express.Router();
const multer = require('multer');
const { storage } = require('../utils/cloudinary');

const upload = multer({ storage });
const { submitItem } = require('../controllers/itemController');

// Fixed route with correct field names matching frontend
router.post(
  '/submit',
  upload.fields([
    { name: 'furnitureImage', maxCount: 1 }, // Changed from 'itemImage' to match frontend
    { name: 'roomImage', maxCount: 1 }
  ]),
  submitItem
);

// // Optional: Add route to get all items
// router.get('/', async (req, res) => {
//   try {
//     const Item = require('../models/Item');
//     const items = await Item.find().sort({ submittedAt: -1 });
//     res.status(200).json(items);
//   } catch (err) {
//     res.status(500).json({ 
//       message: 'Error fetching items', 
//       error: err.message 
//     });
//   }
// });

// // Optional: Add route to get single item by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const Item = require('../models/Item');
//     const item = await Item.findById(req.params.id);
    
//     if (!item) {
//       return res.status(404).json({ message: 'Item not found' });
//     }
    
//     res.status(200).json(item);
//   } catch (err) {
//     res.status(500).json({ 
//       message: 'Error fetching item', 
//       error: err.message 
//     });
//   }
// });

// // Optional: Add route to delete item
// router.delete('/:id', async (req, res) => {
//   try {
//     const Item = require('../models/Item');
//     const deletedItem = await Item.findByIdAndDelete(req.params.id);
    
//     if (!deletedItem) {
//       return res.status(404).json({ message: 'Item not found' });
//     }
    
//     res.status(200).json({ 
//       message: 'Item deleted successfully',
//       item: deletedItem 
//     });
//   } catch (err) {
//     res.status(500).json({ 
//       message: 'Error deleting item', 
//       error: err.message 
//     });
//   }
// });

module.exports = router;