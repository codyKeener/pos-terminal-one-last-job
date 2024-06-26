import { getSingleOrder } from '../api/orderData';
import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyItemCards = (firebaseKey) => {
  const domString = `
  <div id="item-page-container">
    <h3 id="no-items-header">No Items</h3>
    <div id="item-page-button-container">
        <button class="add-item-btn"" id="add-item-btn--${firebaseKey}">Add Item</button>
      </div>
    </div>
  `;
  renderToDom('#orderCards', domString);
};

const showItemCards = (array, firebaseKey) => {
  clearDom();

  let totalPrice = 0;

  array.forEach((item) => {
    const price = Number(item.price);
    totalPrice += price;
  });

  const truePrice = totalPrice.toFixed(2);

  let domString = `
  <div id="item-page-container">
  <p class="total-price">TOTAL: $${truePrice}</p>
    <div id="item-card-container">
  `;

  getSingleOrder(firebaseKey).then((order) => {
    if (order.closed === false) {
      array.forEach((item) => {
        domString += `
        <div class="card item-card">
          <div class="card-body">
            <h3 class="card-title card-item-name">${item.item_name}</h3>
            <p class="card-text card-item-price">PRICE: $${item.price}</p>
            <i class="btn" style="color: rgb(0, 110, 236)" id="edit-item-btn--${item.firebaseKey}">Edit item</i>
              <i class="btn" style="color: red" id="delete-item-btn--${item.firebaseKey}">Delete item</i>
          </div>
        </div>
        `;
      });

      domString += `
        </div>
        <div id="item-page-button-container">
          <button class="add-item-btn" id="add-item-btn--${firebaseKey}">Add Item</button>
          <button class="go-to-payment-btn" id="go-to-payment-btn--${firebaseKey}">Go To Payment</button>
        </div>
      </div>
  `;
    } else {
      array.forEach((item) => {
        domString += `
        <div class="card item-card">
          <div class="card-body">
            <h3 class="card-title card-item-name">${item.item_name}</h3>
            <p class="card-text card-item-price">PRICE: $${item.price}</p>
          </div>
        </div>
        `;
      });

      domString += `
        </div>
        <div id="item-page-order-closed-container">
          <p id="item-page-closed-order-tip-amount">Tip Amount: $${Number(order.tip_amount).toFixed(2)}</p>
          <h3> Order Closed</h3>
        </div>
      </div>
  `;
    }
    renderToDom('#orderCards', domString);
  });
};

export { emptyItemCards, showItemCards };
