import express from 'express'
import student from './student.js'
const app = express()

app.use('/student',student)
app.listen(3000, () => console.log('Port listening at 3000'))
