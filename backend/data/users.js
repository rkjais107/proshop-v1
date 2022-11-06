import bcrypt from 'bcryptjs';

const users = [
    {
        name: "Manas Jaiswal",
        email: "admin@example.com",
        password: bcrypt.hashSync('12345', 10),
        isAdmin: true
    },
    {
        name: "Raunak Jaiswal",
        email: "raunak@example.com",
        password: bcrypt.hashSync('12345', 10),
    },
    {
        name: "Somu Jaiswal",
        email: "somu@example.com",
        password: bcrypt.hashSync('12345', 10),
    },
]

export default users