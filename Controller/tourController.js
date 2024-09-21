const db = require('../config/firebase');

// Crear Cliente
exports.createTour = async (req, res) => {
  try {
    const tour = req.body;
    const docRef = await db.collection('tours').add(tour);
    console.log(docRef)
    res.status(201).send(docRef.id)//`Order created with ID: ${docRef.id}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Obtener todos los Clientes
exports.getTours = async (req, res) => {
  try {
    const snapshot = await db.collection('tours').get();
    const customers = snapshot.docs.map(doc => (
      {
        tourId: doc.id,  // Asigna el ID del documento a tourId
        tourName: doc.data().tourName,
        description: doc.data().description,
        location: doc.data().location,
        durationHours: doc.data().durationHours,
        price: doc.data().price,
        maxCapacity: doc.data().maxCapacity,
        createdAt: new Date(doc.data().createdAt) // Asigna la fecha de creación actual
      }));
      //{ id: doc.id, ...doc.data() }));
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
