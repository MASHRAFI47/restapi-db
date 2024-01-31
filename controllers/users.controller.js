const getAllUsers = (req, res) => {
    res.status(200).json({
        message:"all users"
    })
}

const getOneUser = (req, res) => {
    res.status(200).json({
        message:"one user"
    })
}

const createUser = (req, res) => {
    res.status(201).json({
        message:"create user"
    })
}
const updateUser = (req, res) => {
    res.status(200).json({
        message:"Update user"
    })
}
const deleteUser = (req, res) => {
    res.status(200).json({
        message:"delete user"
    })
}

module.exports = {
    getAllUsers, getOneUser, createUser, updateUser, deleteUser
}