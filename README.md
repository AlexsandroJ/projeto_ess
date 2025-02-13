# Next Cucumber 

## 1 Instalar Git

Windows:
Acesse o site oficial do [Git](https://git-scm.com)

Baixe o instalador para Windows.

Execute o instalador e siga as instruções na tela, mantendo as configurações padrão recomendadas.

macOS:
Você pode instalar o Git usando o Homebrew.

Terminal
```
brew install git
```
Linux:
No Ubuntu ou distribuições baseadas em Debian:

Terminal
```
sudo apt-get update
sudo apt-get install git
```

## 2. Instalar Node.js e npm
Node.js é um ambiente de execução de JavaScript, e npm (Node Package Manager) é o gerenciador de pacotes padrão para Node.js, usado para instalar bibliotecas e ferramentas de desenvolvimento.

Windows e macOS:
Acesse o site oficial do [Node.js](https://nodejs.org)

Baixe o instalador para o seu sistema operacional (recomendo a versão LTS).

Execute o instalador e siga as instruções na tela, mantendo as configurações padrão recomendadas.

Linux:
No Ubuntu ou distribuições baseadas em Debian:

Terminal
```
sudo apt-get update
sudo apt-get install -y nodejs
sudo apt-get install -y npm
```
Terminal
```
sudo dnf install nodejs
sudo dnf install npm
```
## 3. Clonar o Repositório do Projeto
Usando o Git, você pode clonar o repositório do seu projeto para obter uma cópia local.

Terminal
```
git clone https://github.com/AlexsandroJ/projeto_ess.git
```
## 4. Navegar até o Diretório do Projeto
Depois de clonar o repositório, navegue até o diretório do projeto.

Terminal
```
cd projeto_ess
```
## 5. Instalar as Dependências do Projeto
Use o npm para instalar todas as dependências listadas no arquivo package.json do projeto.

Terminal
```
npm install
```
## 6. Iniciar os testes do Projeto
Uma vez que as dependências estejam instaladas, você pode iniciar os testes do projeto.

Terminal
```
npm test
```
### Link Tutorial [cucumber.js](https://cucumber.io/docs/guides/10-minute-tutorial/?lang=javascript)
 
### Funções para testes da features em features/step_definitions/stepdefs.js
#### Após adicionar novas features o cucumber gera exemplos de funções para testes no terminal, apenas copiar e colocar no arquivo correto em features/step_definitions/ o cucumber mapeia os textos das features nas funções de testes

## 7. Nextjs
Com os testes concluidos agora é a vez de rodar a aplicação

Iniciar modo de desenvolvimento
Terminal
```
npm run dev
```

Iniciar construção da aplicação
Terminal
```
npm run build
```

Iniciar a aplicação em modo de produçao
Terminal
```
npm start
```
