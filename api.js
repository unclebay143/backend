// npm packages
let express = require('express')
let bodyParser = require('body-parser')
let fs = require('fs')

const app = express()
app.use(bodyParser.json())

// exported modules
let usersRoute = require('./Routes/usersRoute')
let notificationsRoute = require('./Routes/notificationsRoute')
let taskRoute = require('./Routes/tasksRoute')
// let todoControllers = require('./controllers/todoController')
// let feedback = require('./controllers/feedback')
// const timeSheetController = require('./controllers/timesheetController')
// const calendarController = require('./controllers/calenderContol')
// const eScheduleController = require('./controllers/e-schedule')


// app.use((error, req, res, next) => {
//     if (req.file){
//         fs.unlink(req.file.path, (err) => {
//             console.log(err)
//         })
//     }
// })

// instantiate controllers
app.use('/api/companyName/users', usersRoute)
app.use('/api/companyName/notifications', notificationsRoute)
app.use('/api/companyName/tasks', taskRoute)
// todoControllers(app)
// feedback(app)
// calendarController(app)
// eScheduleController(app)
// timeSheetController(app)

// app.use((req, res, next) => {
//     throw new error('This route does not exist')
// })

// app.use((error, req, res, next) => {
//     if(res.headerSent){
//         return next(error)
//     }
//     res.status(error.code || 500)
//     res.json({message: error.message || 'Unknown error occurred'})
// })


app.listen(8000)
console.log('Listening on port 8000')