const Hotel = require('../model/hotel.js');

function addHotel(req, res, next) {
    Hotel.create({
            name: req.body.name,
            image: req.body.image,
            location: req.body.location,
            type: req.body.type,
            price: req.body.price
        })
        .then(function () {
            res.status(201).json({
                message: "Hotel berhasil ditambahkan"
            })
        })
        .catch(function (err) {
            res.status(500).json({
                error: err,
            })
        })
}

function getHotel(req, res, next) {
    Hotel.findAll()
        .then(function (hotels) {
            res.status(200).json(hotels)
        })
        .catch(err => console.error(err));
}

const getHotelById = async(req, res) =>{
    try{
        const response= await Hotel.findOne({
            where:{
                id_hotel:req.params.id
            }
        });
        res.json(response);
    } catch(error){
        console.log(error.message);
    }
}

function backfillHotel(req, res, next) {
    Hotel.bulkCreate([{
                name: "Rosewood",
                urlImage: "https://i.ytimg.com/vi/QWB-yrCBw9Y/hqdefault.jpg",
                location: "Bekasi"
            },
            {
                name: "Article 2",
                urlImage: "https://t3n.de/news/wp-content/uploads/2022/12/EQE-e1672242194293.jpg",
                location: "Bekasi"
            },
            {
                name: "Article 3",
                urlImage: "https://cdn.mos.cms.futurecdn.net/c3RwNWN8XeDGfgrBXGaR4f-1200-80.jpg",
                location: "Bekasi"
            }
        ])
        .then(() => res.json({
            message: "Successfully backfilled in"
        }))
        .catch(err => {
            console.error(err);
            res.status(500).json({
                error: err
            })
        });
}

module.exports = {
    addHotel,
    getHotel,
    getHotelById,
    backfillHotel
};
