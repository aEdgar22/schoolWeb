
const checkAdminRole = (req, res, next) =>{
    console.log(req.user)
    const user = req.user;
    if(user.rol === 1){
        next();
    }else{
        res.status(401).json({message: 'Unauthorized'});
    }
}

export default checkAdminRole;