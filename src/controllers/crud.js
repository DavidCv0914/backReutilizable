import conexion from "../database/db.js";

export const createCajones = async (req, res) => {
  try {
    let { nombre, foto, observaciones } = req.body;
    
    const [create] = await conexion.query("INSERT INTO equipos_fermentacion(nombre, urlfoto, observaciones) VALUES (?,?,?)",[nombre, foto, observaciones]);

    if (create.affectedRows != 0) {
      res.json("create")
    }else{
      res.json("no create")
    }

  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: "ERROR 404", error });
  }
};


export const createTecnicas = async (req, res) => {
  try {
    let { nombre, foto, observaciones } = req.body;
    
    const [create] = await conexion.query("INSERT INTO tecnicas_volteo(nombre, urlfoto, observaciones) VALUES (?,?,?)",[nombre, foto, observaciones]);

    if (create.affectedRows != 0) {
      res.json("create")
    }else{
      res.json("no create")
    }


  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: "ERROR 404", error });
  }
};

