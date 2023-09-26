import cors from 'cors';
import express, { Application} from 'express';
// import routes from './app/routes/index';
import cookieParser from 'cookie-parser';
import router from './app/routes';
const app:Application =express()

app.use (cors());
app.use(cookieParser())

// perser

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/v1',router)

export default app
