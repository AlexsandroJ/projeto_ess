const { Given, When, Then } = require('@cucumber/cucumber');
const fs = require('fs');
const filePath = "test.json";

const reviews = [
    {
        id: 1,
        title: "Um Sonho de Liberdade",
        rating: 5,
        reviewText: "Um filme extraordinário!"
    },
    {
        id: 2,
        title: "O Poderoso Chefão",
        rating: 5,
        reviewText: "Extraordinário"
    }
];

const filmes = [
    {
        "id": 1,
        "title": "Um Sonho de Liberdade",
        "ratingAverage": 7.1,
        "releaseYear": 1994,
        "platform": "Netflix",
        "cover": "link"
    },
    {
        "id": 2,
        "title": "O Poderoso Chefão",
        "ratingAverage": 8.1,
        "releaseYear": 1972,
        "platform": "Amazon Prime",
        "cover": "link"
    },
    {
        "id": 3,
        "title": "O Cavaleiro das Trevas",
        "ratingAverage": 7.5,
        "releaseYear": 2008,
        "platform": "HBO Max, Disney+",
        "cover": "link"
    }
]

function news_test(data) {
    try {
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath); // Apaga o arquivo existente
            console.log('Iniciando Novo Arquivo de Testes');
        }
        const dadosJSON = JSON.stringify(data, null, 2);
        fs.writeFileSync(filePath, dadosJSON, 'utf8');
    } catch (erro) {
        console.error('Erro ao manipular o arquivo:', erro);
    }
}

function  getAllMovies() {
    try {
        const dadosBrutos = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(dadosBrutos);
        //console.log(dados);
        return data;
    } catch (erro) {
        console.error('Erro ao ler o arquivo:', erro);
    }
}

function addMovie(movie) {
    try {
        const data = getAllMovies();
        data.push(movie);
        //console.log(data);
        const dadosJSON = JSON.stringify(data, null, 2); // 'null' e '2' são usados para formatar o JSON com indentação
        fs.writeFileSync(filePath, dadosJSON, 'utf8');
    } catch (erro) {
        console.error('Erro ao escrever no arquivo:', erro);
    }
}

function updateMovie(param, updateData) {
    try {
        const data = getAllMovies();
        data.forEach(element => {
            if (element.title == param) {
                element.platform = updateData;
            }
        });
        const dadosJSON = JSON.stringify(data, null, 2); // 'null' e '2' são usados para formatar o JSON com indentação
        fs.writeFileSync(filePath, dadosJSON, 'utf8');
    } catch (erro) {
        console.error('Erro ao escrever no arquivo:', erro);
    }
}

function comparar_data(data, data2) {
    if (data.length == data2.length) {
        let cont = 0;
        for (let index = 0; index < data.length; index++) {
            if (data[index].id == data2[index].id) {
                //console.log("\n", movies[index].id, "==", json[index].id, "\n");
                cont++;
            }
        }
        if (cont == data.length) {
            console.log("Sim\n");
        } else {
            console.log('Não\n');
        }
    } else {
        console.log('Não\n');
    }
}

function deleteMovie(title) {
    try {
        const data = getAllMovies();
        const index = data.findIndex(element => element.title === title);
        if (index !== -1) {
            // Remover o item do array usando splice
            data.splice(index, 1);
        }
        const dadosJSON = JSON.stringify(data, null, 2); // 'null' e '2' são usados para formatar o JSON com indentação

        fs.writeFileSync(filePath, dadosJSON, 'utf8');
    } catch (erro) {
        console.error('Erro ao escrever no arquivo:', erro);
    }
}

function getAllReviewsForMovie() {
    try {
        const dadosBrutos = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(dadosBrutos);
        //console.log(dados);
        return data;
    } catch (erro) {
        console.error('Erro ao ler o arquivo:', erro);
    }
}

function updateReview(param, updateData) {
    try {
        const data = getAllReviewsForMovie();
        data.forEach(element => {
            if (element.title == param) {
                element.reviewText = updateData;
            }
        });
        const dadosJSON = JSON.stringify(data, null, 2); // 'null' e '2' são usados para formatar o JSON com indentação
        fs.writeFileSync(filePath, dadosJSON, 'utf8');
    } catch (erro) {
        console.error('Erro ao escrever no arquivo:', erro);
    }
}

function deleteReview(title) {
    try {
        const data = getAllReviewsForMovie();
        const index = data.findIndex(element => element.title === title);
        if (index !== -1) {
            // Remover o item do array usando splice
            data.splice(index, 1);
        }
        const dadosJSON = JSON.stringify(data, null, 2); // 'null' e '2' são usados para formatar o JSON com indentação

        fs.writeFileSync(filePath, dadosJSON, 'utf8');
    } catch (erro) {
        console.error('Erro ao escrever no arquivo:', erro);
    }
}

function addReview(review) {
    try {
        const data = getAllReviewsForMovie();
        data.push(review);
        //console.log(data);
        const dadosJSON = JSON.stringify(data, null, 2); // 'null' e '2' são usados para formatar o JSON com indentação
        fs.writeFileSync(filePath, dadosJSON, 'utf8');
    } catch (erro) {
        console.error('Erro ao escrever no arquivo:', erro);
    }
}

Given('os seguintes filmes|séries existem:', function (dataTable) {
    news_test(filmes);
    const data = getAllMovies();
    const dataTableNew = dataTable.hashes();
    console.log("\nos seguintes filmes|séries existem:\n");
    //console.log("\n", dataTableNew.length, "==", data.length, "\n");
    comparar_data(dataTableNew, data);

});

When('adiciono um novo filme|série com title {string}, releaseYear {string}, ratingAverage {string}, cover {string} e platform {string}', function (string, string2, string3, string4, string5) {
    const data =
    {
        "id": 4,
        "title": string,
        "releaseYear": string2,
        "ratingAverage": string3,
        "cover": string4,
        "platform": string5,
    };
    console.log(`adiciono um novo filme|série com title ${string}, releaseYear ${string}, ratingAverage ${string}, cover ${string} e platform ${string}`);
    addMovie(data);
});

Then('os seguintes filmes|séries devem existir:', function (dataTable) {
    const data = getAllMovies();
    const dataTableNew = dataTable.hashes();
    console.log("\nos seguintes filmes|séries devem existir:\n");
    //console.log("\n", dataTableNew.length, "==", data.length, "\n");
    comparar_data(dataTableNew, data);
});

When('edito o filme|série com title {string} para ter a platform {string}', function (string, string2) {
    updateMovie(string, string2);
    console.log(`\nEdito o filme|série com title: ${string} para ter a platform: ${string2}`);
    const data = getAllMovies();
    data.forEach(element => {
        if (element.title == string) {
            if (element.platform = string2) {
                console.log("\nSim\n");
            }
        }
    });
});

When('remover o filme|série com title {string}', function (string) {
    deleteMovie(string);
    console.log(`\nremover o filme|série com title ${string}`);
    const data = getAllMovies();
    const index = data.findIndex(element => element.title === string);
    if (index == -1) {
        console.log("\nSim\n");
    }
});

Given('os seguintes reviews criados pelo usuário {string} existem:', function (string, dataTable) {
    news_test(reviews);
    const data = getAllReviewsForMovie();
    const dataTableNew = dataTable.hashes();
    console.log("\nos seguintes reviews criados pelo usuário {string} existem:\n");
    //console.log("\n", dataTableNew.length, "==", data.length, "\n");
    comparar_data(dataTableNew, data);
});

When('editar o review de {string} para ter reviewText {string}', function (string, string2) {
    updateReview(string, string2);
    console.log(`\neditar o review de ${string} para ter reviewText ${string}`);
});

Then('os seguintes reviews devem existir:', function (dataTable) {
    const data = getAllReviewsForMovie();
    const dataTableNew = dataTable.hashes();
    console.log("\nos seguintes reviews devem existir:\n");
    comparar_data(dataTableNew, data);
});

When('adicionar um novo review para {string} com rating {string} e reviewText {string}', function (string, string2,string3) {
    news_test(reviews);
    const data = {
        id: 3,
        title: "Um Sonho de Liberdade",
        rating: 5,
        reviewText: "Um filme extraordinário!"
    };
    addReview(data);
    console.log(`adicionar um novo review para ${string} com rating ${string} e reviewText ${string}`);
});

Given('os seguintes reviews existem:', function (dataTable) {
    news_test(reviews);
    const data = getAllReviewsForMovie();
    const dataTableNew = dataTable.hashes();
    console.log("\nos seguintes reviews existem:\n");
    //console.log("\n", dataTableNew.length, "==", data.length, "\n");
    comparar_data(dataTableNew, data);
});

When('remover o review {string}', function (string) {
    deleteReview(string);
    console.log(`\nremover o review ${string}`);
    const data = getAllReviewsForMovie();
    const index = data.findIndex(element => element.title === string);
    if (index == -1) {
        console.log("\nSim\n");
    }
});

