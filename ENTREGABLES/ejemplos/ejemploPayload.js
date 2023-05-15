

res.send({status:"success",payload:products})
res.status(400).send({status:"error",error:"Ocurrió un error"})
res.send({products})