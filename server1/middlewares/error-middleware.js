const errormiddleware=(err,req,res,next) => {
    console.log(err);
    return;
    // const status = err.status || 500;
    // const message = err.message|| "backend error";
    // const extradetails = err.extradetails ||"error from backend"
    // return res.status(status).json({message,extradetails});
}

module.exports = errormiddleware;