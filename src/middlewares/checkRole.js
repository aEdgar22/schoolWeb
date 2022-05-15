const checkRole = (req, res, next) =>{
    console.log(req.user)
    const user = req.user;

    if(!user.rol){
        res.json({mess: 'no está enviando rol'})
    }

    if(user.rol === 1){
       return res.redirect('/Home/admin');
        next();
    }else{
        res.status(401).json({message: 'Unauthorized'});
    }
}

export default checkRole;