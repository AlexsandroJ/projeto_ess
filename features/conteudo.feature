Feature: Conteudo

  Scenario: Adicionar um novo filme|série
    Given os seguintes filmes|séries existem:
      | id | title                  | ratingAverage | releaseYear | platform     | cover |
      |  1 | Um Sonho de Liberdade  |           7.1 |        1994 | Netflix      | link  |
      |  2 | O Poderoso Chefão      |           8.1 |        1972 | Amazon Prime | link  |
      |  3 | O Cavaleiro das Trevas |           7.5 |        2008 | HBO Max      | link  |
    When adiciono um novo filme|série com title "A Origem", releaseYear "2010", ratingAverage "7.1", cover "link" e platform "Netflix"
    Then os seguintes filmes|séries devem existir:
      | id | title                  | ratingAverage | releaseYear | platform     | cover |
      |  1 | Um Sonho de Liberdade  |           7.1 |        1994 | Netflix      | link  |
      |  2 | O Poderoso Chefão      |           8.1 |        1972 | Amazon Prime | link  |
      |  3 | O Cavaleiro das Trevas |           7.5 |        2008 | HBO Max      | link  |
      |  4 | A Origem               |           7.1 |        2010 | Netflix      | link  |

  Scenario: Editar um filme|série existente
    Given os seguintes filmes|séries existem:
      | id | title                  | ratingAverage | releaseYear | platform     | cover |
      |  1 | Um Sonho de Liberdade  |           7.1 |        1994 | Netflix      | link  |
      |  2 | O Poderoso Chefão      |           8.1 |        1972 | Amazon Prime | link  |
      |  3 | O Cavaleiro das Trevas |           7.5 |        2008 | HBO Max      | link  |
    When edito o filme|série com title "O Cavaleiro das Trevas" para ter a platform "Disney+"
    Then os seguintes filmes|séries devem existir:
      | id | title                  | ratingAverage | releaseYear | platform     | cover |
      |  1 | Um Sonho de Liberdade  |           7.1 |        1994 | Netflix      | link  |
      |  2 | O Poderoso Chefão      |           8.1 |        1972 | Amazon Prime | link  |
      |  3 | O Cavaleiro das Trevas |           7.5 |        2008 | Disney+      | link  |

  Scenario: Remover um filme|série
    Given os seguintes filmes|séries existem:
      | id | title                  | ratingAverage | releaseYear | platform     | cover |
      |  1 | Um Sonho de Liberdade  |           7.1 |        1994 | Netflix      | link  |
      |  2 | O Poderoso Chefão      |           8.1 |        1972 | Amazon Prime | link  |
      |  3 | O Cavaleiro das Trevas |           7.5 |        2008 | HBO Max      | link  |
    When remover o filme|série com title "O Poderoso Chefão"
    Then os seguintes filmes|séries devem existir:
      | id | title                  | ratingAverage | releaseYear | platform | cover |
      |  1 | Um Sonho de Liberdade  |           7.1 |        1994 | Netflix  | link  |
      |  3 | O Cavaleiro das Trevas |           7.5 |        2008 | HBO Max  | link  |

  Scenario: Editar um review existente
    Given os seguintes reviews criados pelo usuário "João" existem:
      | id | title                 | rating | reviewText               |
      |  1 | Um Sonho de Liberdade |      5 | Um filme extraordinário! |
      |  2 | O Poderoso Chefão     |      5 | extraordinário           |
    When editar o review de "Um Sonho de Liberdade" para ter reviewText "Ótimo filme, mas um pouco longo."
    Then os seguintes reviews devem existir:
      | id | title                 | rating | reviewText                       |
      |  1 | Um Sonho de Liberdade |      4 | Ótimo filme, mas um pouco longo. |
      |  2 | O Poderoso Chefão     |      5 | extraordinário                   |

  Scenario: Remover um review
    Given os seguintes reviews existem:
      | id | title                 | rating | reviewText                       |
      |  1 | Um Sonho de Liberdade |      4 | Ótimo filme, mas um pouco longo. |
      |  2 | O Poderoso Chefão     |      5 | extraordinário                   |
    When remover o review "Um Sonho de Liberdade"
    Then os seguintes reviews devem existir:
      | id | title             | rating | reviewText     |
      |  2 | O Poderoso Chefão |      5 | extraordinário |

  Scenario: Criar um novo review
    Given os seguintes filmes|séries existem:
      | id | title                  | ratingAverage | releaseYear | platform     | cover |
      |  1 | Um Sonho de Liberdade  |           7.1 |        1994 | Netflix      | link  |
      |  2 | O Poderoso Chefão      |           8.1 |        1972 | Amazon Prime | link  |
      |  3 | O Cavaleiro das Trevas |           7.5 |        2008 | HBO Max      | link  |
    When adicionar um novo review para "Um Sonho de Liberdade" com rating "5" e reviewText "Um filme extraordinário!"
    Then os seguintes reviews devem existir:
      | id | title                  | rating | reviewText               |
      |  1 | Um Sonho de Liberdade  |      5 | Um filme extraordinário! |
      |  2 | O Poderoso Chefão      |      5 | extraordinário           |
      |  3 | O Cavaleiro das Trevas |      5 | Extraordinário           |
