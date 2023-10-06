import express from 'express'
import session from 'express-session'
import morgan from 'morgan'
import { engine} from 'express-handlebars'
import {join, dirname} from 'path'
import { fileURLToPath } from 'url'
import  empleadosRoutes from './routes/empelados.routes.js'
import clientesRoutes from './routes/clientes.routes.js'
import camionesRoutes from './routes/camiones.routes.js'
//Initialization
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(session({
    secret: 'secretsoftware',
    resave: false,
    saveUninitialized: false,
}));

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', join(__dirname, 'views'));

app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: join(app.get('views'), 'layouts'),
    partialsDir: join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine','.hbs');
//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended:false}));
app.use(express.json());
//Routes
app.get('/', (req,res) => {
    if (req.session.usuarioId) {
        res.redirect('/list'); 
    } else {
        res.redirect('/login');
    }
});
app.use('/',empleadosRoutes);
app.use('/',clientesRoutes);
app.use('/',camionesRoutes);
//Public files
app.use(express.static(join(__dirname,'public')));
//Run Server
app.listen(app.get('port'), ()=>
    console.log('Server listening on port', app.get('port')));