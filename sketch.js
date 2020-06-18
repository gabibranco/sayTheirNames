let sayTheirNames = ['João Pedro Mattos',
                     'Miguel Otávio Santana da Silva',
                     'Marielle Franco',
                     'Lucas Custódio dos Santos',
                     'Carlos Magno de Oliveira Nascimento',
                     'Carlos Alberto da Silva Ferreira',
                     'Everson Gonçalves Silote',
                     'Herinaldo Vinicius de Santana',
                     'Alan de Souza Lima',
                     'Douglas Rodrigues',
                     'Matheus Santos de Morais',
                     'Ágatha Félix',
                     'Jean Rodrigo da Silva Aldrovande',
                     'Fabio dos Santos Vieira',
                     'Roberto de Souza',
                     'Carlos Eduardo da Silva Souza',
                     'Cleiton Corrêa de Souza',
                     'Wesley Castro',
                     'Wilton Esteves Domingos Junior',
                     'Evaldo dos Santos Rosa',
                     'Matheus Oliveira',
                     'Evaldo Rosa dos Santos',
                     'Marcus Vinicius',
                     'Emilly Caetano da Costa',
                     'Wilton Estever Domingos Jr',
                     'Wesley Castro Rodrigues',
                     'Cleiton Corrêa de Souza',
                     'Carlos Eduardo Silva Souza',
                     'Roberto Silva de Souza',
                     'Pedro Gonzaga',
                     'Claudia Ferreira',
                     'Amarildo Dias de Souza',
                     'Ketellen Gomes',
                     'Kauã Rozario',
                     'Rodrigo Alexandre da Silva Serrano',
                     'Eduardo de Jesus Ferreira',
                     'Luana Barbosa',
                     'Rodrigo Alexandre da Silva Serrano',
                     'Kelvin Gomes Cavalcante',
                     'Marcos Vinícius Dos Santos',
                     'Davi Fiuza',
                     'Igor Mendes',
                     'Lucas de Azevedo Albino',
                     'Roberto Campos da Silva',
                     'Flávio Lucas Azevedo'
                    ]



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  textSize(32);
  textFont('Ultra');
}

function draw() {
  stroke(255);
  strokeWeight(4);
  let name = random(sayTheirNames);
  text(name, random(-100,windowWidth), random(-5,windowHeight +5));
}
