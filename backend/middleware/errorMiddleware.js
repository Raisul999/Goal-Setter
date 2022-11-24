const errorHandler =(err, res,req, next)=>{
   const statusCode = res.statusCode? res.statusCode: 500;
   console.log(statusCode);
   res.status(statusCode);

   res.json({
       message: err.message,
       stack: process.env.NODE_ENV === 'production'? null: err.stack
   })
}

module.exports={
    errorHandler
}