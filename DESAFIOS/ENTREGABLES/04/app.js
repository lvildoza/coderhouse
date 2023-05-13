import express from "express";
const app = express();

const productos = [
    {   
        title: "Reloj",
        description: "muñeca",
        price: 12.35,
        thumbnail: "https://cdn4.iconfinder.com/data/icons/azullustre-mayosoft/AzulLustre_icons/256/Reloj_arena.png",
        id: 1
    },
    {
        title: "Hamburgesa",
        description: "triple",
        price: 35,
        thumbnail: "https://cdn1.iconfinder.com/data/icons/cartoon-snack/128/burger-512.png",
        id: 2
    },
    {
        title: "Camion",
        description: "de carga",
        price: 135,
        thumbnail: "https://cdn1.iconfinder.com/data/icons/construction-tool-line-foreman-equipment/512/Dump_truck-512.png",
        id: 3
    },
    {   
        title: "Pelota",
        description: "voley",
        price: 40,
        thumbnail: "https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_dribbble-512.png",
        id: 4
    },
    {
        title: "Lupa",
        description: "de mano",
        price: 85,
        thumbnail: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-search-strong-512.png",
        id: 5
    },
    {
        title: "Lampara",
        description: "comun",
        price: 25,
        thumbnail: "https://cdn0.iconfinder.com/data/icons/education-340/100/Tilda_Icons_1ed_lightbulb_14-512.png",
        id: 6
    },
    {   
        title: "Anillo",
        description: "redondo",
        price: 40,
        thumbnail: "https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_dribbble-512.png",
        id: 7
    },
    {
        title: "Algo",
        description: "lo que sea",
        price: 95,
        thumbnail: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-search-strong-512.png",
        id: 8
    },
    {
        title: "Perro",
        description: "rescatado",
        price: 15,
        thumbnail: "https://cdn0.iconfinder.com/data/icons/education-340/100/Tilda_Icons_1ed_lightbulb_14-512.png",
        id: 9
    },
    {
        title: "Gato",
        description: "rescatado",
        price: 15,
        thumbnail: "https://cdn0.iconfinder.com/data/icons/education-340/100/Tilda_Icons_1ed_lightbulb_14-512.png",
        id: 10
    }
];

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send("Hola! el servidor esta arriba en el puerto 8080")
});

app.get("/productos", (req, res) => {
    res.send(productos);
});

app.get("/productos/:id", (req, res) => {
    const {id} = req.params
    const producto = productos.find((producto) => producto.id == id);
    if(producto) return res.json(producto);
    res.status(404).json({ error: "El producto no esta disponible" });
});

app.get("/productos", (req, res) => {
    const { title } = req.query;
    const producto = productos.find((producto) => producto.title == title);
    res.send(producto);
});

app.listen(8080,()=>console.log("¡Servidor arriba en el puerto 8080!"))