
import fs from 'fs';
const filePath = "test.json";

export function getAllMovies() {
    try {
        const dadosBrutos = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(dadosBrutos);
        //console.log(dados);
        return data;
    } catch (erro) {
        console.error('Erro ao ler o arquivo:', erro);
    }
}
export function addMovie(movie) {
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

export function updateMovie(param, updateData) {
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

export function deleteMovie(title) {
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

export function getAllReviewsForMovie() {
    try {
        const dadosBrutos = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(dadosBrutos);
        //console.log(dados);
        return data;
    } catch (erro) {
        console.error('Erro ao ler o arquivo:', erro);
    }
}

export function updateReview(param, updateData) {
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

export function deleteReview(title) {
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

export function addReview(review) {
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
