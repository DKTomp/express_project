import mysql from 'mysql2/promise'

let db

try {
    db = await mysql.createConnection ({
        host: 'localhost',
        user: 'root',
        password: 'October191!',
        database: 'studentdb'
    })
    console.log('Connected to database')
}
catch (error) {
    console.log('Error connecting to database', error)
}

export default db
