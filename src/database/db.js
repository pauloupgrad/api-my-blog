import mongoose from "mongoose"

const connectDatabase = () => {
    console.log("Aguarde estamaos conectando!")

    mongoose.connect("mongodb+srv://pauloupgrad:QvWMdOhKY0IDCxS7@cluster0.wawzici.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log("MongoDB Atlas Conectado"))
        .catch((error) => console.log(error))
}


export default connectDatabase