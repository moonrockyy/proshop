import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Mahan Jafari',
    email: 'mahan@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Peyman Jafari',
    email: 'peyman@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
