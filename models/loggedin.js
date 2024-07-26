
module.exports = {
    getUsers: async (access_token) => {
        const request = await fetch("https://osu.ppy.sh/api/v2/users/mrekk", {
            headers:{
                'Authorization': `Bearer ${access_token}`
            }
        })
        const data = await request.json()
        console.log(data)
    }
}