const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const swaggerUi = require('swagger-ui-express')
const defaultMiddleware = require("./middlewares/default_middleware")
const db = require("../../../models/index")

const swaggerDocument = require('../../../swagger.json')

const app = express()

app.use(express.json())
app.use(helmet())
app.use(cors())

app.post('/laboratory', defaultMiddleware(require('../../domain/use_case/laboratory/create_laboratory_use_case')))
app.post('/laboratory/batch', defaultMiddleware(require('../../domain/use_case/laboratory/create_laboratory_batch_use_case')))
app.get('/laboratory', defaultMiddleware(require('../../domain/use_case/laboratory/list_laboratory_use_case')))
app.get('/laboratory/:id', defaultMiddleware(require('../../domain/use_case/laboratory/fetch_laboratory_use_case')))
app.delete('/laboratory/:id', defaultMiddleware(require('../../domain/use_case/laboratory/delete_laboratory_use_case')))
app.put('/laboratory/:id', defaultMiddleware(require('../../domain/use_case/laboratory/update_laboratory_use_case')))

app.post('/examination', defaultMiddleware(require('../../domain/use_case/examination/create_examination_use_case')))
app.post('/examination/batch', defaultMiddleware(require('../../domain/use_case/examination/create_examination_batch_use_case')))
app.get('/examination', defaultMiddleware(require('../../domain/use_case/examination/list_examination_use_case')))
app.get('/examination/:id', defaultMiddleware(require('../../domain/use_case/examination/fetch_examination_use_case')))
app.put('/examination/:id', defaultMiddleware(require('../../domain/use_case/examination/update_examination_use_case')))
app.delete('/examination/:id', defaultMiddleware(require('../../domain/use_case/examination/delete_examination_use_case')))

app.get('/findLaboratoryByExamination', defaultMiddleware(require('../../domain/use_case/laboratory/list_laboratory_examination_use_case')))

app.post('/laboratoryByExamination', defaultMiddleware(require('../../domain/use_case/link/laboratory_examination_use_case')))


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(8080, () => {
	console.log(`Express server started on port ${8080}.`);
});


