module.exports = {
    getAllClasses: async (req,res) => {
        const db = req.app.get('db');
        const classes = await db.classes.get_all_classes();
        
        res.status(200).send(classes)
    },


    getSpecificClass:async (req,res) => {
        const db = req.app.get('db');
        const {day_of_the_week} = req.query;
        const classes = await db.classes.get_specific_classes({day_of_the_week});

        res.status(200).send(classes)



}
}