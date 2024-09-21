const db = require('../config/firebase');

// Crear Cliente
exports.createCustomer = async (req, res) => {
  try {
    const customer = req.body;
    const docRef = await db.collection('customers').add(customer);
    res.status(201).send(`Customer created with ID: ${docRef.id}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Obtener todos los Clientes
exports.getCustomers = async (req, res) => {
  try {
    const snapshot = await db.collection('customers').get();
    const customers = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Otros métodos como updateCustomer, getCustomerById, deleteCustomer...
