import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/we-tube', {
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log('✅ Connected to DB');
const handleError = (Error) =>
	console.log(`❌ Error on DB Connection: ${Error}`);

db.once('open', handleOpen);
db.on('error', handleError);
