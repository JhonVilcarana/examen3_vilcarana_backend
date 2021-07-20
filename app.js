
const fileUpload = require ('express-fileupload');
const history = require ('connect-history-api-fallback');
const path = require ('path');
const app = express();
const express =require('express') 
const morgan = require('morgan') 
const app = express();
const cors = require('cors');

// Middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(fileUpload({useTempFiles: true}));

// Routes
app.use(morgan('dev'));
app.get('/', function(req, res, next){
    res.send('Bienvenido a Node JS...!');
});

app.use('/api', authRoutes);

// Middlewares for Vue
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));
console.log(__dirname);

// Settings
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), ()=>{
    console.log('Server on port ' + app.get('port'));
});
module.exports = app;