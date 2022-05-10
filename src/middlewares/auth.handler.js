
const checkAdminRole = (req, res, next) =>{

    const user = req.user;
    if(user.rol === 1){
        next();
    }else{
        res.status(401).json({message: 'Unauthorized'});
    }
}

export default checkAdminRole;