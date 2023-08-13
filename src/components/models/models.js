import mongoose from "mongoose";

const esquemaCuenta = new mongoose.Schema({
    mesa:{
        type: mongoose.Schema.Types.ObjectId,
        ref: `mesa`
    },
    creada: {
        fecha: Date,
        hora: String
    },
    cerrada:{
        estado: {
            type: String,
            enum: [`si`, `no`]
        },
        fecha:String
    },
    consumo:[
        {
        pedido:
        {
            numero: number,
        },
        abierto:
        {
            type: String,
            enum: [`si`, `no`]
        },
        fecha: Date,
        hora: String,
        ultimaActualizacion: 
        {
            fecha: Date,
            hora: String
        },
        estado:String,
        productos:[
            {peroducto:String,
            precio:String}
        ]

        },

    ],
    total:String


})


const mesaEsquema = new mongoose.Schema({
    numeroDeMesa : String,
    encargado : String,
    comensales : number,
    ocupada : {
        fecha:Date,
        hora: String
    },
    estado: String

}) 










const Cuenta = mongoose.model(`Cuenta`,esquemaCuenta);
const Mesa = mongoose.model(`Mesa`,mesaEsquema);
module.exports = Cuenta ,Mesa;