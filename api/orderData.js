import client from '../utils/client';

const endpoint = client.databaseURL;

const getOrder = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const deleteOrder = (firebasekey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders/${firebasekey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json,'
    },
  })
    .then((response) => {
      if (response.ok) {
        resolve();
      } else {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject('Error deleting order');
      }
    })
    .catch(reject);
});

const createOrder = (paylod) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(paylod),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders/${payload.firebasekey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleOrder = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getOrder, deleteOrder, createOrder, updateOrder, getSingleOrder
};
