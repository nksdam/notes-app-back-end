const { addUser, getAllUser, getUserById, addHistory, getAllHistory, getHistoryById, updateHistory, deleteUser, connected, deleteHistory } = require('./handler')

const routes = [
  {
    method: 'POST',
    path: '/user',
    handler: addUser
  },
  {
    method: 'GET',
    path: '/',
    handler: connected
  },
  {
    method: 'GET',
    path: '/users',
    handler: getAllUser
  },
  {
    method: 'GET',
    path: '/users/{userID}',
    handler: getUserById
  },
  {
    method: 'POST',
    path: '/history',
    handler: addHistory
  },
  {
    method: 'GET',
    path: '/history',
    handler: getAllHistory
  },
  {
    method: 'GET',
    path: '/history/{id}',
    handler: getHistoryById
  },
  {
    method: 'PUT',
    path: '/history/{id}',
    handler: updateHistory
  },
  {
    method: 'DELETE',
    path: '/user/{userID}',
    handler: deleteUser
  },
  {
    method: 'DELETE',
    path: '/history/{id}',
    handler: deleteHistory
  }
]

module.exports = routes
