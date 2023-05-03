db = connect("localhost:27017/shelter");

function getDogsByBreed(queryBreed){
    return db.dogs.find({ breed: { $eq: queryBreed }})
}

function getDogsFor(queryName) {
    return db.owners.aggregate([
        { $match: { name: queryName } },
        { 
             $lookup: {
                  from: 'dogs',
                  as: 'pets',
                  let: { owner: '$name' },
                  pipeline: [{ $match: { $expr: { $eq: ['$ownerName', '$$owner'] } } }]
             }
         },
     ]).pretty()
}