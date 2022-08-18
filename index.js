const express = require('express')

const app = express()
const port = 8000

app.set('view engine', 'hbs') // set view engine hbs
app.use('/assets', express.static(__dirname + '/assets')) // path folder untuk assets
app.use(express.urlencoded({ extended: false }))

let dataProject = []

app.get('/', function (request, response) {

    console.log(dataProject)

    response.render("index")
})

app.get('/add-project', function (request, response) {
    response.render("addProject")
})

app.post('/add-project', function (request, response) {
    let title = request.body.inputProjactName
    let start = request.body.startDate
    let end = request.body.endDate
    let desc = request.body.inputDesc
    let image = request.body.inputImage
    // let nodeJs = request.body.endDate
    // let reactJs = request.body.endDate
    // let nextJs = request.body.endDate
    // let typScript = request.body.endDate


    console.log(title);
    console.log(start);
    console.log(end);
    console.log(desc);
    // console.log(nodeJs);
    // console.log(reactJs);
    // console.log(nextJs);
    // console.log(typScript);
    console.log(image);

    let project = {
        title,
        start,
        end,
        desc,
        image
    }

    dataProject.push(project)

    response.redirect("/")
})


app.get('/contact', function (request, response) {
    response.render("contact")
})

app.get('/blog-detail/:name', function (request, response) {

    let id = request.params.name

    console.log(id);

    response.render("blog-detail", {
        id,
        title: 'Welcome',
        content: `REPUBLIKA.CO.ID, JAKARTA -- Ketimpangan sumber daya manusia (SDM) di
        sektor digital masih menjadi isu yang belum terpecahkan. Berdasarkan
        penelitian ManpowerGroup, ketimpangan SDM global, termasuk Indonesia,
        meningkat dua kali lipat dalam satu dekade terakhir. Khusus di sektor
        teknologi yang berkembang pesat, menurut Kemendikbudristek, Indonesia
        kekurangan sembilan juta pekerja teknologi hingga tahun 2030. Hal itu
        berarti Indonesia memerlukan sekitar 600 ribu SDM digital yang
        memasuki pasar setiap tahunnya.`,
        author: 'Sayed Jilliyan',
        postAt: '19 Agustus 2022'
    })
})



app.listen(8000, function () {
    console.log(`Server running on port ${port}`);
})