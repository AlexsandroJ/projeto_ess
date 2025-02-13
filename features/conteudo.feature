Feature: Conteudo

  Scenario: Exibir onde os filmes|séries estão disponíveis
    Given os seguintes filmes|séries existem:
      | title                  | ratingAverage | releaseYear | platform     | cover |
      | Um Sonho de Liberdade  |           7.1 |        1994 | Netflix      | link  |
      | O Poderoso Chefão      |           8.1 |        1972 | Amazon Prime | link  |
      | O Cavaleiro das Trevas |           7.5 |        2008 | HBO Max      | link  |
    When exibe a disponibilidade dos filmes|séries
    Then devo ver a seguinte disponibilidade:
      | title                  | ratingAverage | releaseYear | platform     | cover |
      | Um Sonho de Liberdade  |           7.1 |        1994 | Netflix      | link  |
      | O Poderoso Chefão      |           8.1 |        1972 | Amazon Prime | link  |
      | O Cavaleiro das Trevas |           7.5 |        2008 | HBO Max      | link  |

  Scenario: Adicionar um novo filme|série
    Given os seguintes filmes|séries existem:
      | title                  | ratingAverage | releaseYear | platform     | cover |
      | Um Sonho de Liberdade  |           7.1 |        1994 | Netflix      | link  |
      | O Poderoso Chefão      |           8.1 |        1972 | Amazon Prime | link  |
      | O Cavaleiro das Trevas |           7.5 |        2008 | HBO Max      | link  |
    When adiciono um novo filme|série com title "A Origem", releaseYear "2010", ratingAverage "7.1", cover "link" e platform "Netflix"
    Then os seguintes filmes|séries devem existir:
      | title                  | ratingAverage | releaseYear | platform     | cover |
      | Um Sonho de Liberdade  |           7.1 |        1994 | Netflix      | link  |
      | O Poderoso Chefão      |           8.1 |        1972 | Amazon Prime | link  |
      | O Cavaleiro das Trevas |           7.5 |        2008 | HBO Max      | link  |
      | A Origem               |           7.1 |        2010 | Netflix      | link  |

  Scenario: Editar um filme|série existente
    Given os seguintes filmes|séries existem:
      | title                  | ratingAverage | releaseYear | platform     | cover |
      | Um Sonho de Liberdade  |           7.1 |        1994 | Netflix      | link  |
      | O Poderoso Chefão      |           8.1 |        1972 | Amazon Prime | link  |
      | O Cavaleiro das Trevas |           7.5 |        2008 | HBO Max      | link  |
      | A Origem               |           7.1 |        2010 | Netflix      | link  |
    When edito o filme|série com title "O Cavaleiro das Trevas" para ter a platform "Disney+"
    Then os seguintes filmes|séries devem existir:
      | title                  | ratingAverage | releaseYear | platform        | cover |
      | Um Sonho de Liberdade  |           7.1 |        1994 | Netflix         | link  |
      | O Poderoso Chefão      |           8.1 |        1972 | Amazon Prime    | link  |
      | O Cavaleiro das Trevas |           7.5 |        2008 | HBO Max,Disney+ | link  |
      | A Origem               |           7.1 |        2010 | Netflix         | link  |

  Scenario: Remover um filme|série
    Given os seguintes filmes|séries existem:
      | title                  | ratingAverage | releaseYear | platform     | cover |
      | Um Sonho de Liberdade  |           7.1 |        1994 | Netflix      | link  |
      | O Poderoso Chefão      |           8.1 |        1972 | Amazon Prime | link  |
      | O Cavaleiro das Trevas |           7.5 |        2008 | HBO Max      | link  |
    When remover o filme|série com title "O Poderoso Chefão"
    Then os seguintes filmes|séries devem existir:
      | title                  | ratingAverage | releaseYear | platform | cover |
      | Um Sonho de Liberdade  |           7.1 |        1994 | Netflix  | link  |
      | O Cavaleiro das Trevas |           7.5 |        2008 | HBO Max  | link  |

  Scenario: Editar um review existente
    Given os seguintes reviews criadas pelo usuário "João" existem:
      | title                 | rating | reviewText               |
      | Um Sonho de Liberdade |      5 | Um filme extraordinário! |
      | O Poderoso Chefão     |      5 | extraordinário           |
    When editar o review de "Um Sonho de Liberdade" para ter rating "4" e reviewText "Ótimo filme, mas um pouco longo."
    Then os seguintes reviews devem existir:
      | title                 | rating | reviewText                       |
      | Um Sonho de Liberdade |      4 | Ótimo filme, mas um pouco longo. |
      | O Poderoso Chefão     |      5 | extraordinário                   |

  Scenario: Criar um novo review
    Given os seguintes filmes|séries existem:
      | title                  | ratingAverage | releaseYear | platform     | cover |
      | Um Sonho de Liberdade  |           7.1 |        1994 | Netflix      | link  |
      | O Poderoso Chefão      |           8.1 |        1972 | Amazon Prime | link  |
      | O Cavaleiro das Trevas |           7.5 |        2008 | HBO Max      | link  |
    When adicionar um novo review para "Um Sonho de Liberdade" com rating "5" e reviewText "Um filme extraordinário!"
    Then os seguintes reviews devem existir:
      | title                 | rating | reviewText               |
      | Um Sonho de Liberdade |      5 | Um filme extraordinário! |
      | O Poderoso Chefão     |      5 | extraordinário           |

  Scenario: Remover um review
    Given os seguintes reviews existem:
      | title                 | rating | reviewText                       |
      | Um Sonho de Liberdade |      4 | Ótimo filme, mas um pouco longo. |
      | O Poderoso Chefão     |      5 | extraordinário                   |
    When remover o review "Um Sonho de Liberdade"
    Then os seguintes reviews devem existir:
      | title             | rating | reviewText     |
      | O Poderoso Chefão |      5 | extraordinário |
