Feature: Exemplo para testes e estudos

  Scenario: Cadastro de usuário novo
    Given que o usuário não está cadastrado com o CPF "123.456.789-09"
    When o usuário insere o nome "João Silva" e o CPF "123.456.789-09"
    And o usuário submete o formulário de cadastro
    Then o usuário deve ser cadastrado com sucesso

  Scenario: Tentativa de cadastro de usuário já cadastrado
    Given que o usuário já está cadastrado com o CPF "123.456.789-09"
    When o usuário insere o nome "João Silva" e o CPF "123.456.789-09"
    And o usuário submete o formulário de cadastro
    Then o usuário deve ver uma mensagem de erro indicando que o usuário já está cadastrado

  Scenario: Mostrar informações do filme de uma tabela
    Given existem os seguintes filmes:
      | Name                     | Year | IMDb |
      | The Shawshank Redemption | 1994 | 9.3  |
      | The Godfather            | 1972 | 9.2  |
      | The Dark Knight          | 2008 | 9.0  |
    When exibe os filmes
    Then deve ver os seguintes detalhes do filme:
      | Name                     | Year | IMDb |
      | The Shawshank Redemption | 1994 | 9.3  |
      | The Godfather            | 1972 | 9.2  |
      | The Dark Knight          | 2008 | 9.0  |

