const SatisfiedClient = require('../models/SatisfiedClient');

// Create a satisfied client
const createClient = async (req, res) => {
  try {
    const { name, section } = req.body;

    // Validate section
    if (![1, 2].includes(Number(section))) {
      return res.status(400).json({ error: 'Invalid section. Must be 1 or 2.' });
    }

    const imagePath = `/uploads/satisfiedclients/${req.file.filename}`;

    const client = new SatisfiedClient({ name, image: imagePath, section });
    await client.save();

    res.status(201).json({ message: 'Client added successfully', client });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add client' });
  }
};

// Get clients by section
const getClientsBySection = async (req, res) => {
  try {
    const section = Number(req.params.section);

    if (![1, 2].includes(section)) {
      return res.status(400).json({ error: 'Invalid section. Must be 1 or 2.' });
    }

    const clients = await SatisfiedClient.find({ section });
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch clients' });
  }
};

module.exports = {
  createClient,
  getClientsBySection,
};
