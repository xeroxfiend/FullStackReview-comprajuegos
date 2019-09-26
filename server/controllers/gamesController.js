module.exports = {
    getGames: async (req, res) => {
        const db = req.app.get('db')
        const games = await db.get_games()
        res.status(200).send(games)
    }
}