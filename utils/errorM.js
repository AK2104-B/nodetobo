export const errorhandler =(err,req,res,next)=>{
 err.message =err.message || "Internal server error";
 err.statusCode =err.statusCode || 500

 res.status(err.statusCode).json({
    success: false,
    message:err.message
});
next();
}


export class errorclass  extends Error {
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}