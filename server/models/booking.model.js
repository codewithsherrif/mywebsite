const bookingSchema = new Schema({
  bookingId: {
    type: String,
    required: true,
    unique: true,
    default: () => uuidv4().slice(0, 9), // Shorter ID for bookings
  },
  customerDetails: {
    fullName: String,
    email: String,
    phone: String,
  },
  serviceDate: Date,
  serviceType: String,
});
