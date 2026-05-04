const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const bookingService = {
  async saveAppointment(appointment) {
    await delay(800);
    localStorage.setItem('me-time-current-appointment', JSON.stringify(appointment));
    return appointment;
  },

  getAppointment() {
    const data = localStorage.getItem('me-time-current-appointment');
    return data ? JSON.parse(data) : null;
  },

  async confirmBooking(paymentDetails) {
    await delay(1500);
    // Simulate failure for specific case if needed
    if (paymentDetails.number === '0000000000000000') {
      throw new Error('Payment failed. Please check your card details.');
    }
    
    const appointment = this.getAppointment();
    const bookings = JSON.parse(localStorage.getItem('me-time-bookings') || '[]');
    const newBooking = { ...appointment, id: Date.now(), status: 'Upcoming' };
    
    localStorage.setItem('me-time-bookings', JSON.stringify([newBooking, ...bookings]));
    localStorage.removeItem('me-time-current-appointment');
    
    return newBooking;
  },

  getBookings() {
    return JSON.parse(localStorage.getItem('me-time-bookings') || '[]');
  }
};
