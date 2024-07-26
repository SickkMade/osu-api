const model = require('../models/callback.js')

module.exports = {
    redirect: async (req, res) => {
        const authenticationToken = await model.getAuth(req.query.code)
        res.redirect('/banana&token='+authenticationToken.access_token)
    }
}