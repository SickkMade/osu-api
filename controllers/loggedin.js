const model = require('../models/loggedin.js')

module.exports = {
    getIndex: async (req, res) => {
        const access_token = req.cookies.access_token
        const data = await model.getUsers(access_token)
        //console.log(data)
        res.render('osu.ejs', {users: "banana"})
    }
}