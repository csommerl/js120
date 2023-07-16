function createInvoice(services) {
  let [phone, internet] = [3000, 5500];

  if (services) {
    phone = services.phone ?? phone;
    internet = services.internet ?? internet;
  }

  return {
    phone,
    internet,
    payments: [],

    total: function() {
      return this.phone + this.internet;
    },

    addPayment: function(payment) {
      this.payments.push(payment);
    },

    addPayments: function(payments) {
      payments.forEach(this.addPayment, this);
    },

    paymentsTotal: function() {
      return this.payments.reduce((sum, payment) => {
        return sum + payment.total();
      }, 0);
    },

    amountDue: function() {
     return this.total() - this.paymentsTotal();
    },
  };
}

function createPayment(services = {}) {
  return {
    internet: services.internet ?? 0,
    phone: services.phone ?? 0,

    total: function() {
      return services.amount ?? (this.internet + this.phone);
    },
  };
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

let payment3 = createPayment({ phone: 1000 });

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0
