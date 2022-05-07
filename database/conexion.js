import mongoose from "mongoose";


export async function conectar(){
    try{
        await mongoose.connect(process.env.DATABASE);
        console.log("Exito en la conexion con BD")
    }catch(error){
        console.log("ERROR "+error+": en la conexion con BD")
    }
}
