const {User,Role} = require('../models/index');

const getCurrentUser = async(id) => {
    console.log(id)
    const user = await User.findOne({where:{id},include:{model:Role},attributes:{exclude:['password','roleId','refreshToken']},raw:true});
    return user;
}

module.exports={getCurrentUser}