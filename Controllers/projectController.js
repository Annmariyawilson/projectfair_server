const projects = require('../Models/projectModel')

exports.addProject = async (req, res) => {
    try {
        const { title, des, languages, demo, github } = req.body
        const image = req.file.filename
        const userid = req.payload
        if (!title || !des || !languages || !demo || !github || !image) {
            res.status(406).json("Invalid Data")
        }
        else {

            const newProjects = new projects({
                title, description: des, languages, demo, github, image, userid
            })
            await newProjects.save()
            res.status(200).json(newProjects)
        }

    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)

    }
}

exports.getprojectList = async (req, res) => {
    try {
        const userid = req.payload
        const projectList = await projects.find({ userid })
        res.status(200).json(projectList)
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)

    }
}

exports.deleteProject = async (req, res) => {
    try {
        const { id } = req.params
        const result = await projects.findOneAndDelete({ _id: id })
        res.status(200).json(result)
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)

    }
}

exports.editProject = async (req, res) => {
    try {
        const { id } = req.params
        if (req.file) {
            var image = req.file.filename
            var { title, des, languages, github, demo } = req.body
        }
        else {
            var { title, des, languages, github, demo, image } = req.body
        }
        const userId = req.payload
        if (!title || !des || !languages || !demo || !github || !image) {
            res.status(406).json("invalid data")
        }
        else {
            const existing = await projects.findOne({ _id: id })
            existing.title = title
            existing.description = des
            existing.languages = languages
            existing.github = github
            existing.demo = demo
            existing.image = image
            existing.save()
            res.status(200).json(existing)
        }
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)

    }

}

exports.allProjects = async (req, res) => {
    try {
        const projectlist = await projects.find()
        res.status(200).json(projectlist)
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)

    }

}

