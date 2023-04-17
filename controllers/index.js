const namefunction = (req,res,next) => {
    res.json("Ismael Alberto");
}

const lastnamefunction = (req,res,next) => {
    res.json("Banegas Sanchez");
}


module.exports = {namefunction, lastnamefunction};