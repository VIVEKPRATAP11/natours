// import axios from 'axios';

// import { showAlert } from './alerts';

// // const stripe = Stripe(
// //   pk_test_51MQ6wPSBoyG2L04QM5EeFQE0YS9bPaygA61L0MqJqDNLFLYliNWWbSs6K921O8eXIct5VKSPQl7ovOcWoV6P4reL00L8OdFh9X
// // );
// const stripe = require('stripe')(
//   'sk_test_51MQ6wPSBoyG2L04Q9tl24g2riu475lola1qS98RU4e4k0GQ1X5fDDXOBE3Mnvd2WM8ZeBIIgnvBmJOtYnVErywgK00RXFES0DU'
// );

// export const bookTour = async (tourId) => {
//   try {
//     // Get checkout session from API
//     const session = await axios(
//       `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
//     );
//     console.log(session);
//     // Create checkout form + charge credit card
//     await stripe.redirectToCheckout({
//       sessionId: session.data.session.id,
//     });
//   } catch (err) {
//     console.log(err);
//     showAlert('error', err);
//   }
// };

import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51MQ6wPSBoyG2L04QM5EeFQE0YS9bPaygA61L0MqJqDNLFLYliNWWbSs6K921O8eXIct5VKSPQl7ovOcWoV6P4reL00L8OdFh9X'
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
