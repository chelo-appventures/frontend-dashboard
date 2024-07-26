import express from "express";
import cors from "cors";

//SDK Mercado Pago
import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({
    accessToken: "APP_USR-1956120656197140-071614-04ab5c009f18c5e6b68007d03c4fa92b-1902332853"
})

const app = express();
const port = 8080;

const tunnel = "https://product-filling-transparency-laos.trycloudflare.com"

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Soy el server :) ");
});

app.post("/create_preference", async (req, res) => {
    try {
        const body = {
            items: [
                {
                    title: req.body.title,
                    quantity: Number(req.body.quantity),
                    unit_price: Number(req.body.price),
                },
            ],
            back_urls: {
                success: `${tunnel}/booking/checkout/qr`,
                failure: `${tunnel}/booking/checkout/qr`,
                pending: `${tunnel}/booking/checkout/qr`,
            },
            auto_return: "approved",
        };
        
        const preference = new Preference(client);
        const result = await preference.create({ body });
        res.json({
            id: result.id
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Error al crear la preferencia :(",
        });
    }
})

app.listen(port, () => {
    console.log(`El servidor está corriendo en el puerto ${port}`);
});