import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyOrderCards = () => {
  const domString = `
    <h3 id="no-orders-header">No Orders</h3>
  `;
  renderToDom('#orderCards', domString);
};

const showOrderCards = (array) => {
  clearDom();

  let domString = '';
  array.forEach((order) => {
    if (order.closed === false) {
      domString += `
      <div class="card order-card">
        <div class="card-body">
          <h3 class="card-title card-order-name">${order.order_name}</h3>
          <p class="card-text card-order-status">Order Status: <span style="color: green">Open</span></p>
          <p class="card-text card-phone-number">Customer Phone Number: ${order.phone_number}</p>
          <p class="card-text card-email-address">Customer Email Address: ${order.email_address}</p>
          <p class="card-text card-order-type">Order Type: ${order.order_type}</p>
          <i class="btn" style="color: rgb(0, 110, 236)" id="view-order-btn--${order.firebaseKey}">Details</i>
          <i class="btn" style="color: rgb(159, 0, 252)" id="edit-order-btn--${order.firebaseKey}">Edit</i>
          <i class="btn" style="color: red" id="delete-order-btn--${order.firebaseKey}">Delete</i>
        </div>
      </div>
      `;
    } else {
      domString += `
      <div class="card order-card">
        <div class="card-body">
          <h3 class="card-title card-order-name">${order.order_name}</h3>
          <p class="card-text card-order-status">Order Status: <span style="color: red">Closed</span></p>
          <p class="card-text card-phone-number">Customer Phone Number: ${order.phone_number}</p>
          <p class="card-text card-email-address">Customer Email Address: ${order.email_address}</p>
          <p class="card-text card-order-type">Order Type: ${order.order_type}</p>
          <i class="btn" style="color: rgb(0, 110, 236)"  id="view-order-btn--${order.firebaseKey}">Details</i>
          <i class="btn" style="color: rgb(159, 0, 252)" id="edit-order-btn--${order.firebaseKey}">Edit</i>
        </div>
      </div>
      `;
    }
  });
  renderToDom('#orderCards', domString);
};

export { emptyOrderCards, showOrderCards };
