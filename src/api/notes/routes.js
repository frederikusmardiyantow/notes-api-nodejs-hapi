/*
    Mulai saat ini kita akan coba menetapkan standar pada penamaan dari fungsi handler. Pemberian nama fungsi handler diambil dari kombinasi method, kemudian path, dan diakhiri dengan kata ‘Handler’. Bila di path mengandung parameter, kita bisa kombinasikan juga parameter tersebut sesuai dengan penggunaannya.

    Perhatikan juga bahwa penggunaan kata plural dan singular perlu disesuaikan. Bila handler hanya menerima atau mengembalikan satu data (single), maka gunakan kata singular daripada plural (note daripada notes). Jika handler menerima atau mengembalikan banyak data, maka gunakan plural daripada singular (notes daripada note).
*/

const routes = (handler) => [
  {
    method: 'POST',
    path: '/notes',
    handler: handler.postNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: handler.getNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: handler.getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: handler.putNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: handler.deleteNoteByIdHandler,
  },
];

module.exports = routes;
