
const checkAdminRole = (req, res, next) =>{
    const user = req.body;
    if(user.rol_id === '1'){
        next();
    }else{
        res.status(401).json({message: 'Unauthorized'});
    }
}

export default checkAdminRole;