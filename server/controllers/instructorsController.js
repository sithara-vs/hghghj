module.exports = {
    getAllInstructors: async (req,res) => {
        const db = req.app.get('db');
        const instructors = await db.instructors.get_all_instructors();
        
        res.status(200).send(instructors)
    }
}