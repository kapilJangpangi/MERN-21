import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123421', 10),
    isAdmin: true
  },
  {
    name: 'Walter White',
    email: 'walter@example.com',
    password: bcrypt.hashSync('123421', 10),
    
  },
  {
    name: 'Skyler White',
    email: 'skyler@example.com',
    password: bcrypt.hashSync('123421', 10),
    
  },
]

export default users