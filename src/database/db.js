import mongoose from "mongoose"

const connectDatabase = () => {
    console.log("Aguarde estamaos conectando!")

    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log("MongoDB Atlas Conectado"))
        .catch((error) => console.log(error))
}


export default connectDatabase