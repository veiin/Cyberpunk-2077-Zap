async function enviarScript(scriptText){
    const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line),
  main = document.querySelector("#main"),
  textarea = main.querySelector(`div[contenteditable="true"]`)
  
  if(!textarea) throw new Error("Não há uma conversa aberta")
  
  for(const line of lines) {
    console.log(line)
  
    textarea.textContent = line
    textarea.dispatchEvent(new InputEvent("input", { bubbles: true }));
  
    (main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click()
    
    if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250))
  }
  
  return lines.length
  }
  
  enviarScript(`De acordo com todas
  as conhecidas leis da aviação
  não existe forma pela qual
  uma abelha fosse capaz de voar.
  Suas asas são muito pequenas para elevar
  seu pequeno corpo gordo acima do solo.
  De qualquer forma, é claro,
  a abelha voa.
  Porque as abelhas não se preocupam com
  o que os humanos acham ser impossível.
  Amarelo e preto, amarelo e
  preto, amarelo e preto...
  Oh! Preto e amarelo.
  Vamos dar uma olhadinha.
  MEL
  Barry, o café está pronto!
  Estou indo!
  Oh, espere um segundo.
  -Alô?
  -Barry?
  Adam?
  Pode acreditar nisto?
  Não acredito. Pego
  você daqui a pouco.
  Bem melhor.
  Barry, por quê não usa as escadas?
  Seu pai pagou uma boa grana por elas.
  Desculpe. Estou empolgado.
  Ah, vai se formar. Estou
  muito orgulhoso de você.
  Excelentes notas. Tudo "B".
  -Estamos orgulhosos.
  -Ah, passei uma coisa aqui.
  -Tem algo em suas asas.
  -Ai, me deixa.
  -Estaremos lá. Na fila número 118.000.
  -Tchau!
  Barry, já disse para não
  voar dentro de casa.
  BEE MOVIE
  A História de uma Abelha
  -Oi, Adam.
  -Olá, Barry.
  Passou gel nas suas asas?
  Um pouco. É um dia especial.
  Finalmente estamos nos formando.
  Nunca pensei que conseguiria.
  Sim. Três dias de escola.
  Três dias no ensino médio.
  Foram estranhos.
  Três dias na universidade.
  Ainda bem que tirei uma folga
  na metade para ficar na colméia.
  Você voltou diferente.
  -Oi, Barry!
  -Oi, Otty!
  E esse bigode? Se cuide...
  -Você soube do Frankie?
  -Sim.
  Vai ao funeral?
  Não, não vou. Todos sabem que
  quando pica alguém, você morre.
  Desperdiçou justo em um esquilo.
  Foi uma bobagem.
  Sim, acho que foi do jeito errado.
  Uh, fico feliz que tenham colocado...
  um parque de diversões
  em nosso cotidiano.
  Acho que é por isso que
  não temos férias.
  Nossa, que luxuoso.
  Dadas as circunstâncias.
  -Bem, Adam, hoje nos tornamos adultos.
  -Vamos mesmo.
  -Abelha adulta.
  -Aleluia.
  -Aleluia.
  -Aleluia.
  Estudantes, professores,
  distintas abelhas...
  vamos dar as boas-vindas
  à Deoswulls.
  Bem-vindos caros
  formandos da classe...
  915.
  E assim terminamos mais
  uma formatura.
  E sua carreira começa
  nas "Indústrias Honex".
  Vamos escolher
  nosso trabalho hoje?
  Ouvi que o que
  vale é a intenção.
  Mãos à obra. Lá vamos nós.
  Mantenham suas mãos e antenas
  dentro do veículo todo o tempo.
  "Mantenham suas mãos e antenas
  dentro do veículo todo o tempo."
  -Me pergunto como será?
  -Um pouco assustador.
  Bem-Vindos ao Honex,
  uma divisão da HONESCO...
  e parte do grupo Honesgon.
  É isso aí.
  Nós sabemos que, como
  abelhas, trabalhamos muito...
  a ponto de poder trabalhar
  a vida inteira.
  O mel começa quando nossos
  valentes coletores...
  trazem o néctar de fora.
  A nossa fórmula secreta é
  automaticamente coletada
  e misturada com aromas e
  bolhas para virar isto...
  um tipo de xarope
  amarelado e doce...
  que conhecemos como...
  MEL!
  Essa garota é bonita.
  -É minha prima.
  -É mesmo?
  -Sim, somos todos primos.
  -Certo...
  Em Honex, também
  tentamos melhorar...
  todos os aspectos da vida
  de uma abelha.
  Estas abelhas estão testando
  novas tecnologias.
  -Quanto acha que ele ganha?
  -Não o suficiente.
  E aqui temos a nossa
  última invenção.
  -O Krilme.
  -O que isso faz?
  Recolhe o mel que goteja após
  o derramamento. Muitas gotas.
  Pode falar de trabalhos
  mais simples?
  É claro. Quase todos
  os trabalhos são simples...
  mas todas as abelhas sabem
  que se os trabalhos pequenos...
  forem bem feitos,
  significa muito.
  Mas escolham com cuidado, pois
  ficarão no trabalho que escolher...
  pelo resto de suas vidas.
  O mesmo trabalho pelo resto
  de sua vida? Não sabia disso.
  Qual é a diferença?
  Vocês ficarão contentes em
  saber que as abelhas...
  não tiveram um só dia de descanso
  em 27 milhões de anos.
  Então trabalharemos até morrer.
  Nós vamos tentar.
  Isso me impressionou!
  Qual a diferença?
  Adam! Como pode dizer isso?
  Um trabalho para o resto
  da vida. É loucura.
  Estou aliviado. Pelo menos teremos
  apenas uma decisão para tomar.
  Mas porque nunca nos
  contaram sobre isso?
  Barry, por que você questiona
  de tudo? Somos abelhas...
  a sociedade mais trabalhadora
  do universo.
  Não acha que as coisas estão
  acontecendo tão certinho por aqui?
  Como o quê?
  Não sei, mas você sabe
  do que eu estou falando.
  Por favor, saiam da entrada
  para que os coletores entrem...
  Ei, veja só isso. São
  os coletores de pólen.
  Nunca os vi tão de perto.
  Eles sabem como é lá fora.
  Sim, mas muitos não voltam.
  Seus loucos!
  São monstros do ar.
  Eu adoro, adoro.
  Me pergunto. Aonde
  será que eles foram?
  -Não sei.
  -Cada dia tem um plano.
  Fora da colméia, indo sabe pra
  onde, fazendo sabe o quê.
  Não pode simplesmente ser um coletor.
  Você tem que nascer para isso.
  Claro.
  Olhe isso. É mais pólen do que
  eu e você veríamos a vida toda.
  É só um símbolo de status.
  Acho que as abelhas se
  importam demais com isso.
  Talvez, e vestir roupas para
  as garotas verem você com elas.
  Do quê elas estão falando?
  Acho que também sejam suas primas.
  Distantes, distantes.
  -Vejam aqueles.
  -Bando de principiantes.
  Vamos nos divertir.
  Deve ser muito perigoso
  ser um coletor.
  Sim, uma vez um urso me pegou
  contra um cogumelo e bateu...
  na minha garganta, e um outro
  me dava tapas no rosto.
  -Meu Deus!
  -Eu acabei com eles.
  E o que você fez nesse caso?
  Obviamente, eu tentaria
  alertar as autoridades.
  Posso dar um autógrafo
  se você quiser.
  Venta bastante lá fora
  não é camaradas?
  Sim, bastante.
  Amanhã iremos a um campo de
  girassóis, a uns 10Km daqui.
  -10Km, hein?
  -Barry!
  Não é nada para nós, mas
  talvez você não agüente.
  -Talvez eu agüente.
  -Não aguenta...
  Iremos às 0900 do portão J.
  O que acha abelhão?
  É bom o bastante?
  Talvez. Se eu soubesse o
  que quer dizer 0900?
  Honex!
  Pai, você me assustou.
  Já decidiu no quê está
  interessado meu filho?
  Bem, há muitas opções.
  Mas você só escolhe uma.
  Pai, não é chato ter o mesmo
  trabalho todos os dias?
  Filho, deixe me dizer
  algo sobre a vida.
  Você escolhe um trabalho,
  e continua, e continua...
  então pega o ritmo.
  É uma coisa maravilhosa.
  Sabe pai.
  O que estou pensando...
  é que a parte de fazer mel,
  não é a certa para mim.
  E está pensando em quê? Fazer
  balões em forma de bichinhos?
  É um péssimo trabalho
  para um rapaz como você.
  Silêncio! Seu filho
  não quer fazer mel.
  Ow, Barry, você é tão
  engraçado de vez em quando.
  Não estou sendo engraçado.
  Você não é engraçado.
  Você vai fazer mel.
  -Nosso filho, um trabalhador.
  -Meu filho, um trabalhador.
  Ninguém me escuta.
  Espere para ver as coisas
  que tenho para você.
  Posso ser o que eu quiser.
  Até tatuador.
  Vamos abrir uma garrafa,
  e celebrar.
  -Talvez eu coloque um piercing.
  -Ow, querida.
  Restaurar minhas antenas.
  Vou viver com um gafanhoto.
  Vou colocar um dente de ouro.
  Dizer pra todo mundo: "toma".
  Estou tão orgulhoso.
  Não acredito, vamos começar
  a trabalhar hoje.
  Hoje é "O" dia.
  Vamos, ou melhores
  serviços acabam.
  Sim, claro.
  Contador de pólen, treinador,
  trabalhador, recepcionista,...
  -...removedor de cabelo...
  -Está disponível?
  Um momento...tem dois,
  um deles é seu.
  -Parabéns, filho. Por ali, por favor.
  -Sim.
  -Qual pegou?
  -Removedor. De primeira!
  Dupla de novatos?
  Sim, senhor. Nosso primeiro dia.
  Estamos prontos.
  Bem, então façam a escolha.
  Quer ir primeiro?
  Não, vai você.
  Deus... o que está disponível?
  Limpar banheiros, está sempre
  disponível, não sei porque.
  Alguma chance de ser
  um removedor, senhor?
  Claro. Está dentro.
  REMOVEDOR -SEM VAGAS
  Oh, desculpe mas para
  removedor não temos vagas.
  Mecânico está disponível.
  E para removedor acaba
  da abrir vaga de novo.
  O quê aconteceu?
  Bem, sempre que uma abelha morre,
  tem espaço para mais uma.
  Está vendo? mais dois, quando chegou,
  morto de baixo. morto ali. Morto pra lá...
  Morte. Essa é a vida.
  Isto é tão difícil!
  "Calefação, resfriamento,
  drenagem, coordenador, inspetor..."
  "coordenador, inspetor de
  tiras, limpador de janelas..."
  Barry, qual você acha que...
  Barry?
  Barry!
  O quê aconteceu
  com você? Onde está?
  Vou sair fora daqui.
  Sair? Sair aonde?
  -Prá fora.
  -Ah, não.
  Eu preciso, antes de trabalhar
  pelo resto da minha vida.
  Você vai morrer. Está louco?
  -Alô? Tenho outra ligação.
  -Está louco!
  Se alguém se sente corajoso...
  há uma floricultura que
  receberá rosas hoje.
  Olá, pessoal.
  -Olhe isso.
  -Não é o garoto de ontem?
  Espere filho, está área é restrita.
  Está tudo bem tenente, nós
  vamos acompanhá-lo.
  Ah, se sente com sorte?
  Assine aqui, aqui, só formalidade.
  Ok. Hoje a previsão é de
  chuva e todos...
  sabemos que abelhas não
  podem voar na chuva.
  Então tomem cuidado com
  chaminés, troncos...
  cães, pássaros, ursos e morcegos.
  E também me disseram que
  alguns beberam cervejas,
  e estão vondo igual
  a loucos por ai.
  Isso é horrível.
  E não custa lembrar a vocês:
  Regra numero 1.
  Nunca conversem com os humanos.
  Muito bem, em suas posições.
  -Preto e amarelo?
  -Amarelo!
  Está pronto para isso novato?
  Sim. Sim, vamos lá.
  -Óculos, pronto.
  -Antenas, pronto.
  -Propulsor, pronto.
  -Asas, pronto.
  Ferrão, pronto.
  Xixi nas minhas calças, pronto.
  Ok, senhoras. Vamos andando.
  Expirem as Petúnias,
  coletores de pólen.
  A todos! Tragam o pólen!
  Estou de fora! Não acredito!
  Estou de fora.
  É tão azul.
  É amplo e verde.
  Caixa de bolo!
  Aqui é o líder azul.
  Temos as rosas.
  Girem 30 graus e
  mantenham o ritmo.
  -Rosas!
  -Rosas a 30 graus.
  E inclinem.
  Afaste um pouco garoto, vai sacudir.
  Isso é que um coletor de néctar.
  Já viu isto de perto?
  -Não Senhor.
  -Tenho pólen aqui...
  dá uma sacudida aqui, outra lá...
  um pouco daquela.
  Viu isso? É um pouco de magia.
  É impressionante.
  Por que a fazemos?
  O poder do pólen. Mais pólen,
  mais flores, mais néctar.
  -Mais mel para nós.
  -Legal.
  Vejo muito amarelo. Podem ser
  margaridas. Precisamos delas?
  -Também estou vendo.
  -Espere!
  Estas flores parecem se mexer.
  Como é? Repita. Viu
  uma flor se movendo?
  Afirmativo!
  Isto é maravilhoso. O que é?
  Não sei, mais adorei essa cor.
  Cheiro bem, não é igual a
  uma flor, mas...gostei.
  -Sim. Peludas.
  -Vamos trabalhar.
  Cuidado, pessoal.
  É bem grudenta.
  -Pelo Sr. das abelhas.
  -Ei garoto, saia dai.
  -Pessoal.
  -Essa não foi uma boa.
  Afirmativo.
  Bem perto.
  Vai doer!
  Cai fora garoto.
  Você não está em uma
  boa posição, novato.
  -Vou rebater como uma bala.
  -Ho, how.
  Me ajudem!
  Sabem, acho que não são flores.
  -Contamos a ele?
  -Acho que ele já sabe.
  O que é isto?
  Último ponto!
  Prepare-se querida, porque
  você está prestes a comê-la.
  Céus!
  Que nojo.
  Tem uma abelha no carro!
  -Faça algo!
  -Estou dirigindo!
  -Olá, abelha!
  -Está aqui, vai me picar!
  Ninguém se mexe, se não se
  mexer, ela não picará.
  Parados!
  Peguei!
  -É isso ai, vovó.
  -O que você fez?
  A tensão daqui é inacreditável.
  Devo ir para casa.
  Chuva não!
  Não posso com chuva!
  Não posso com chuva!
  Não posso...!
  S.O.S., S.O.S.
  Abelha caindo!
  Pode fechar a
  janela por favor?
  Ah, tá. Veja meu novo currículo.
  Eu mesmo montei a arte.
  Viu? Dá para dobrar.
  Oh, não. Mais humanos.
  Não mereço isso.
  Ai! O que é isso?
  Talvez agora, agora vai.
  agora, agora...ow! Cristo.
  Isso é diabólico.
  É fantástico...
  eu incluí todas as minhas habilidades
  e meus filmes prediletos.
  -Qual seu predileto? Star Wars?
  -Esse mesmo.
  Esse tipo de coisa.
  Com certeza não devemos
  falar com eles. Estão loucos.
  Quando terminou minha
  entrevista de emprego...
  Ali está o sol.
  Talvez seja uma saída.
  Não lembro do sol ter um
  grande número 75 nele.
  Devo admitir, eu previ
  o aquecimento global.
  Pude sentir aquele calor.
  Primeiro pensei que fosse só eu.
  Hei. Pare! Abelha!
  Para trás. Essas são
  botas de inverno.
  Espere! Não mate!
  Você sabe que sou alérgico,
  essa coisa pode me matar.
  Por que essa vida vale
  menos que a sua?
  Por que essa vida vale menos
  que a minha? É isso que falou?
  Só estou dizendo que
  todas as vidas têm valor.
  Você não sabe o que
  ele está sentindo.
  Meu folheto.
  Pronto pequenino.
  Não tenho medo.
  É só a minha alergia.
  Hey, amigo vai colocar
  isso em seu currículo?
  Não é engraçado. Minha
  cara pode aparecer.
  Ponha com uma de suas
  habilidades.
  Bater em alguém, também é
  uma habilidade.
  Sim é claro, como quiser.
  Coma cenouras. E calorias...
  Preciso dizer alguma coisa.
  Ela salvou minha vida,
  Preciso dizer alguma coisa.
  Muito bem, aqui vou eu.
  O que vou dizer?
  Poderia me meter em problemas.
  É a lei das abelhas. Não
  podemos falar com eles.
  Não acredito que
  esteja fazendo isso.
  Eu preciso.
  Não posso. Vamos!
  Não. Sim. Não.
  Faça! Não posso.
  Como devo começar?
  "Gosta de jazz?"
  Não, não está bom.
  Ela está vindo! Fale seu tolo!
  Olá!
  Desculpe.
  -Você fala.
  -Sim eu sei. Sei.
  -Você fala!
  -Eu sei, desculpe.
  Tudo bem. Sei que estou sonhando.
  Mas, como eu fui para a cama?
  Bem, tenho certeza que
  isto é bem estranho.
  Sim, foi uma surpresa pra mim
  -quer dizer, você é uma abelha
  -Sim, eu sou uma abelha
  E eu não deveria
  estar fazendo isso
  mas todos tentaram me matar
  e se não fosse por você...
  Eu tinha que agradecer.
  Foi como me educaram
  Ai, isso é um pouco estranho
  -Estou falando com uma abelha
  -É de qualquer forma
  e a abelha está falando comigo
  Eu só queira que você soubesse
  que eu estou agradecido
  Espere, espere, espere.
  -Quando soube que fazia isso?
  -O quê?
  Fa-falar,
  Ow, da mesma maneira
  que você, eu acho
  Mama, papa, querida. Entendeu?
  -Muito engraçado.
  -Abelhas são engraçadas.
  Tem que rir pra não chorar.
  A vida é assim. De qualquer modo...
  -Você aceitaria alguma coisa?
  -O que por exemplo?
  Eu sei lá, quero dizer...sei lá
  -Café?
  -Bem, não quero incomodar, mas...
  Não tem problema. São só 2 minutos.
  -Sério?
  -É só café.
  -Odiaria causar problemas.
  -Não seja ridículo.
  Na verdade, gostaria
  muito de um café.
  Quer um pouco de torta?
  -Na verdade não.
  -Coma um pouco.
  -Não, não posso.
  -Oh, vamos.
  Estou tentando perder uns
  decigramas aqui.
  -Onde?
  -As listras não ajudam.
  -Está muito bem.
  -Não entendo nada sobre moda.
  -Você está bem?
  -Não.
  Estava colocando a gravata
  ainda dentro do táxi...
  quando finalmente cheguei
  e entrei correndo pela igreja...
  -O casamento tinha começado.
  -Sim.
  Eu disse: Melão? Eu tinha
  pensado que era Marion.
  Por quê me casaria
  com um melão?
  Essa é uma... piada de abelhas?
  Sim, é o tipo de coisa
  que fazemos.
  É diferente. Então...o quê
  vai fazer Barry?
  Sobre o trabalho? Não sei.
  Eu quero fazer minha parte...
  pela colméia, mas eu não posso
  fazer o que eles querem.
  Eu sei como se sente.
  -Mesmo?
  -Claro.
  Meus pais queriam que
  eu fosse uma advogada...
  ou médica. Mas queria
  ser uma floricultora.
  Verdade?
  Meu único interesse são flores.
  Nossa nova rainha disse a
  mesma coisa para ser eleita.
  Bem...lá está minha
  colméia, pode ver?
  -Oh, vive em um parque?
  -Sim.
  -Conhece o lago das tartarugas?
  -Sim.
  -Eu moro bem ao lado.
  -Ah, não...
  Incrível. Eu conheço tudo,
  sabia que já perdi um anel lá?
  -Verdade?
  -Sim.
  Por quê as mulheres
  colocam anéis em seus dedos?
  Por quê não!
  É como pôr um chapéu no joelho.
  -Talvez eu tente isso.
  -A senhora está bem?
  Sim, estou tomando um
  pouco de café.
  Bem, foi muito bom,
  obrigado pelo café.
  Oh, sem problemas.
  Desculpe não ter terminado.
  Se pudesse beberia
  pelo resto da minha vida.
  Eu, posso, ah...
  Posso levar um pedaço
  disto comigo?
  Sim, claro. Pegue essa migalha.
  Obrigado.
  Bom, acho que vejo você por aí.
  Ou não, ou...
  Ok, Barry.
  Muito obrigado de
  novo, por antes.
  -Aquilo? Não foi nada.
  -Nada, não.
  Bem...de qualquer modo...
  Owww. Ui.
  *** EM ANDAMENTO
  *** DE SOBREVIVÊNCIA
  COM FURAÇÕES
  Acho que isso não vai funcionar.
  Bem, ele já se inscreveu, e
  também não tem nada a perder.
  Ok, Dave. Mantenha o ritmo.
  -Incrível.
  -Foi incrível.
  Foi o momento mais feliz e
  aterrorizante da minha vida.
  Humanos, humanos. Não
  acredito que esteve com eles.
  Gigantes e aterrorizantes.
  Como eram?
  Gigantes e loucos. Falam,
  comem e dirigem igual a loucos.
  Tentaram te matar igual a TV?
  Alguns sim, outros não.
  -Como voltou?
  -Sorte.
  Bem, você foi e estou feliz.
  Viu o que queria ver...
  viveu sua aventura.
  Agora que voltou escolha um
  trabalho e tudo volta ao normal.
  -Bem...
  -Bem?
  -Bem, conheci alguém.
  -Conheceu alguém?
  É um mosquito?
  Não é uma vespa?
  Seus pais te matariam.
  -Não, não, não.
  -Uma aranha?
  Sabe o que me atrai nas aranhas?
  Sei que todos dizem
  que elas são o máximo...
  com suas 8 patas e tudo, mas
  o que mais gosto são os rostos.
  Então. Quem é ela?
  É... um...humano.
  Não, não, não. Você não fez isso.
  É a lei das abelhas.
  -Não quebraria essa lei.
  -O nome dela é Vanessa.
  Oh, garoto!
  Ela é tão legal e é floricultora.
  Não, não, não. Saiu com
  uma humana floricultora?
  -Bem, nós não saímos.
  -Foi para fora da colméia.
  Conversou com humanos
  que atacam nossas casas...
  com mangueiras e M80s,
  e nos explodem com dinamite.
  Ela salvou minha vida.
  Ela me entende.
  -Isso acabou!
  -Coma isso.
  Isso não acabou.
  O que é isso?
  -Chamam de migalha.
  -Isso é maravilhoso.
  E não comem só isso. Não é
  nem metade do que comem.
  -Sabe o que um Cinnabon?
  -Não.
  É pão, e canela, e...
  -Eles esquentam!
  -Sente-se.
  Me escute! Não somos "eles".
  Somos "nós"...só nós! Eles são "eles".
  Quem pode ignorar um
  coração que está amando?
  Não tem amor. Chega disso.
  Me escute!
  Deve começar a pensar como
  uma abelha meu amigo.
  -Pense como abelha!
  -Pense como uma abelha!
  Ai está. Ele está na piscina.
  Sabe qual é o seu problema Barry?
  Devo começar a pensar
  como uma abelha?
  Quanto tempo isso vai continuar?
  Se passaram 3 dias.
  Não entendo como não
  está trabalhando.
  Tenho várias decisões na
  vida para pensar.
  Que vida? Não tem uma
  vida. Não tem um trabalho.
  Nem parece uma abelha!
  Vai te matar só fazer
  um pouco de mel?
  Barry, saia daí, seu
  pai está falando.
  -Pode falar com ele?
  -Estou falando com ele.
  Querida, ah meu docinho
  Você é minha doce garota
  E continuo te querendo.
  Querida, ah meu docinho
  Você vem?
  Já tem tudo?
  Tudo pronto!
  -Pode ir, eu te alcanço.
  -Não demore muito.
  Não posso acreditar
  na maravilha de amar você,
  (Nem acredito que seja verdade)
  Não acredito na
  surpresa desse sentimento
  (Nem acredito que seja verdade)
  Veja isso!
  Ah querida
  ah meu docinho
  Vanessa!
  -Ainda estamos te ouvindo, Barry.
  -Eu disse para não gritar.
  Ele não responde quando grita.
  Por quê está gritando comigo?
  -Porque você não escuta.
  -Bobagem.
  -Desculpe mãe, tenho que ir.
  -Onde você vai?
  A nenhum lugar. Ver um amigo.
  Uma garota? É assim
  que você decide?
  Tchau!
  Só espero que seja
  uma abelha-jedi.
  Então ganhou todos os prêmios
  de flores em Pasadena?
  Ow, participar de um
  torneio de rosas.
  Todas as flores são um sonho.
  Você fica rodeado por milhares...
  de flores, com a multidão gritando.
  Um torneio! As rosas podem
  competir em torneios atléticos?
  Não. Uma pergunta. Por quê você
  não voa para todos os lugares?
  É cansativo. Por quê você não corre
  para todos os lados? Não é mais rápido?
  Tudo bem, tudo bem. Sua vez.
  E "Tivo"? Pode congelar
  a TV ao vivo? É loucura.
  -Você não tem algo assim?
  -Temos o HiVo...
  mas é horrível, muito,
  muito horrível.
  Oh, Deus.
  Abelhas idiotas!
  Você deveria picar
  esses bobalhões.
  Preferimos não picar.
  Pode ser fatal para nós.
  Então deve controlar
  seu temperamento.
  Sim, com muito cuidado, escreve
  um monte de cartas e joga fora.
  Como qualquer emoção.
  Raiva, ciúmes, amor.
  -Meu Deus! Você está bem?
  -Sim.
  -Qual é o seu problema?
  -É uma abelha.
  Não está incomodando ninguém.
  Saia daqui seu louco!
  O quê foi isso? Foi uma revista?
  Sim, foi. Como sabe?
  Senti umas 10 páginas.
  75 é o nosso limite.
  Parece que estuda bastante.
  Precisamos. Perdi um primo
  com uma garrafa italiana.
  Que estilo.
  O quê em nome do santo
  Hércules é isso?
  Como isso chegou aqui?
  "Linda abelha".
  "Retorno de ouro".
  "Seleção de Ray Liotta".
  Não é um ator?
  Nunca ouvi falar.
  Por quê isso está aqui?
  Para as pessoas. Para comer.
  Por quê? Não tem
  comida o suficiente?
  -Sim.
  -Como conseguiram?
  -Bem... as abelhas fazem...
  -Eu sei quem faz!
  É difícil de fazer.
  Temos que esquentar...
  esfriar, bater... São
  milhares de coisas.
  -É orgânico.
  -É o nosso orgânico.
  Isso é mel Barry.
  O quê? As abelhas não sabem
  disso, isso é roubar.
  Um grande roubo. Vocês tiram
  nossas casas, escolas...
  hospitais. É tudo o que temos.
  E está a venda?
  Irei até a fundo disto...
  Hey, Hector!
  -Já terminou?
  -Quase.
  Ele está aqui. Posso sentir.
  Acho que vou embora agora
  e deixar esse...
  mel sem ninguém vigiando.
  Você é um ladrão.
  Sabia que tinha ouvido algo.
  Então você pode falar.
  Sim eu falo. E agora é
  você que vai falar.
  De onde tiram isso?
  -Quem dá para vocês?
  -Não sei do que está falando.
  Pensei que éramos amigos.
  Não queríamos causar mal...
  para as abelhas. Tome isto,
  agora é tarde, muito tarde.
  Pegou a espada errada.
  Você será comida para
  minha iguana, Ignácio.
  De onde vem o mel?
  Conte me onde?
  Fazendas de mel.
  Vem das Fazendas de mel.
  Inseto maluco!
  Deus! Que coisa
  horrível aconteceu aqui?
  Veja essas caras.
  Nunca saberão o quê os matou.
  E agora estão a caminho
  de lugar nenhum.
  -Apenas fique parado!
  -Como?
  -Você não está morto?
  -Eu pareço morto?
  Eles vão varrer tudo o que mexer.
  -A onde vai?
  -Fazenda de mel.
  Estou atrás de algo grande aqui.
  Vou para o Alasca.
  Sangue de animais. Loucura!
  -Nada melhor!
  -Eu vou para Tacoma.
  -E você?
  -Ele está morto.
  Ok.
  O quê é isso?
  É o pára-brisas. É bem forte.
  Pule! É nossa única chance.
  Por quê tudo tem que
  estar, tão, tão, limpo?
  Por quê não está vendo?
  Abra os olhos!
  Tire a cabeça da janela!
  Da Central de notícias
  em Washington, Crow Campbell
  Não matem insetos!
  Bon voyage!
  -Ouviu algo?
  -Como o quê?
  Como, vários gritos.
  Desligue o rádio.
  -Eu estava aqui antes!
  -Hey, chupador de sangue.
  E também milhares de campos de
  mel onda a vista não alcança.
  Então eu suponho que onde esse
  carro for, é lá onde pegam mel.
  -Esse mel é nosso!
  -As abelhas são uma família.
  Bem, vivemos no mesmo lugar.
  Somos uma comunidade.
  Nós não. Cada mosquito por si.
  E se tiver problemas?
  Nós mosquitos estamos
  sempre com problemas.
  Ninguém nos quer,
  então nos matam!
  Se alguém vê um mosquito,
  mata na hora.
  Ao menos vêem o mundo todo.
  Devem conhecer muitas garotas.
  Os mosquitos não querem nada
  com sua espécie. Gostamos de...
  borboletas, libélulas.
  Não queremos um mosquito.
  Deve estar brincando!
  O chupador de sangue fica
  por aqui. Até mais abelha.
  -Ei amigos!
  -O chupador de sangue!
  Estou feliz em vê-los.
  Trouxeram as coisas?
  Colocamos em jarras, colocamos
  as etiquetas e pronto!
  O quê é esse lugar?
  As abelhas tem um cérebro do
  tamanho de um pino.
  São cabeças de pino!
  -Veja essa nova máquina de fumaça.
  -Legal.
  É disso que precisamos.
  Thomas 3000.
  Fumaça?
  90 tiros por minuto.
  Semi-automática.
  Funciona como nicotina
  ou alcatrão.
  Só um suspiro disto
  e você cai na hora.
  Elas fazem o mel, e nós
  fazemos o dinheiro.
  "Elas fazem o mel,
  e nós fazemos o dinheiro"?
  Oh, Deus.
  O que aconteceu? Vocês estão bem?
  Sim, não dura muito.
  Como chegaram aqui? Não sabem que
  isso é uma colméia artificial?
  Nossa rainha veio para cá.
  Não tínhamos escolha.
  Essa é a sua rainha?
  É um homem vestido de mulher.
  Uma rainha de mentira.
  O que é isso?
  Oh, não. Tem centenas delas.
  Mel de abelha. Nosso mel.
  Roubado em larga escala.
  É isso que eles tem feito com
  a gente. E eu pretendo fazer algo.
  -Pare, Barry.
  -Quem disse que...
  os humanos roubam o nosso mel?
  É apenas um rumor.
  Isso parece um rumor?
  São teorias da conspiração.
  As fotos foram trocadas.
  Barry, como se meteu em
  tudo isso?
  Porque ele tem falado
  com humanos.
  -O quê?
  -Falando com humanos?
  -Tem uma namorada humana.
  -Oh, Barry.
  -E eles se encontram.
  -Se encontram? Barry!
  -Não nos encontramos.
  -Mas bem que queria.
  -De que lado você está?
  -Das abelhas.
  Uma vez eu sai com uma
  vaqueira em Santo António.
  Cara, aquelas pernas não
  me deixavam dormir.
  Barry, é isso que você
  quer para a sua vida?
  Quero fazer por todos nós. Ninguém
  trabalha mais do que as abelhas.
  Pai, eu me lembro que você
  chegou em casa a noite...
  do trabalho com suas mãos ainda
  se mexendo. Não conseguia parar.
  Eu lembro disso.
  Que direito eles tem de
  roubar o nosso mel?
  Nós vivemos aqui. E lá eles
  vivem em caixas.
  Mesmo se fosse verdade,
  o que uma abelha poderia fazer?
  Vou picar neles onde realmente dói.
  -No rosto?
  -Não.
  -No olho, isso realmente dói.
  -Não.
  Pelo nariz. Nunca falha.
  Só há um lugar onde pode
  picar os humanos...
  um lugar onde realmente importa.
  "Canal 5"
  O Canal das Notíciais
  mais importantes.
  Chega de abelhas!
  Chega de abelhas!
  Com Bob Bumble.
  O âncora do Telejornal.
  O clima com Storm Stinger.
  Esportes com Lars LaBee,
  e Jeanette Chung.
  -Boa tarde, sou Bob Bumble.
  -E eu sou Jeanette Chung.
  Exclusivo. Uma abelha
  chamada Barry Benson...
  tem planos de processar
  os humanos...
  por roubar nosso mel,
  empacotar e...
  obter vantagens ilegalmente.
  Não esqueçam, amanhã
  a noite, no Bee Larry King...
  teremos três ex-rainhas
  aqui em nosso estúdio,
  falando sobre o mais novo
  livro "Damas Elegantes".
  Essa semana, no Hexágono.
  Hoje falaremos com Barry Benson.
  Alguma vez já pensou:
  "eu sou apenas um garoto...
  da colméia, não posso fazer isso".
  As abelhas não tiveram
  medo de mudar o mundo.
  Pense como Colombo Abelha,
  Gandhi Abelha, Jesus Abelha.
  Se fosse você não pensaria em...
  processar os humanos, mas
  sim em balinhas e doces.
  Quantos anos você tem?
  Quero que saiba que toda a comunidade
  abelha apoia você neste caso.
  E que você seja a
  abelha do século.
  Obrigado Larry. Sabia que tem um
  Larry King nos mundo dos humanos?
  É um nome comum. Na semana
  que vem no Bee Larry King...
  Se parece com você, tem um
  programa, as mesmas roupas...
  um quadro cheio de cores atrás.
  -Na semana que vem...
  -Com esses óculos e...
  com uma enorme mesa e os
  mesmos nomes de quadros...
  Barry! São peludos, aterrorizantes,
  e estarão aqui ao vivo...
  Sempre se inclina assim,
  ombros pequenos...
  olhos grandes, bem judeu...
  FLORES VANESSA
  Quando estiver jogando tênis,
  você ataca o ponto mais fraco...
  Era a minha avó, Ken.
  Tem 81 anos.
  Jogo é jogo. Não vou
  perder por isso.
  Silêncio, por favor.
  Estou tentando trabalhar aqui.
  -É a mesma abelha?
  -É sim.
  Estou ajudando ele a
  processar os humanos.
  Quê?
  -Olá.
  -Olá abelha.
  Este é Ken.
  Sim, eu lembro. De
  botas tamanho 43.
  Solado de borracha, eu creio.
  Por quê ele fala?
  Deveria ir. Pois tem
  muito trabalho.
  Mas é a nossa noite do iogurte!
  Oh, Adeus.
  Por que a noite do iogurte
  é tão difícil?
  Pobrezinho. Deve estar
  trabalhando nisso por horas.
  Sim, e o Adam está
  sendo de muita ajuda.
  Quanto de açúcar?
  Só uma. Tento não
  ter muita competição.
  Então, por quê
  está me ajudando?
  As abelhas tem várias qualidades.
  Sim, certo.
  Mas é bom para me distrair
  na loja. Não sei por quê
  mas em vez de flores, as pessoas
  decoram as festas com balões e globos.
  -Sim, são bonitos.
  -Se tiver 3 anos!
  -E flores artificiais.
  -Essas me deixam histérico!
  -Sim, eu também.
  -A polinização é inútil.
  As abelhas devem odiar
  essas coisas de plástico.
  Não há nada pior que
  uma flor com goma.
  Bem, talvez isso possa
  compensar um pouco.
  -Estas coisas são bastante complexas.
  -Eu imagino.
  Tem certeza que quer
  continuar com isso?
  Se tenho certeza? Quando terminar
  com os humanos não poderão
  falar "docinho, cheguei".
  Se não pagar, irão presos.
  Estamos acompanhando uma
  cena incrível em Manhatan.
  Todas os olhos e ouvidos no planeta
  estão ansiosamente esperando,
  porque pela primeira
  vez na história,
  estamos aqui para levar a vocês
  se uma abelhinha
  pode mesmo falar.
  -Será que eles vão te ouvir, Barry?
  -Não sei. Mas aqui é bem grandão, não é?
  Acredita que muitos humanos
  foram dispensados do trabalho?
  Acha que os bilhões de
  dólares da indústria de alimentos
  tem bons advogados?
  Todo mundo precisa se
  afastar da barricada.
  -Aiii!
  -Uhh!
  Qual é o problema?
  Não sei. Tive um calafrio.
  Bem, essa é a equipe das abelhas.
  Algum problema com isso?
  De pé! A Juíza Bumbleton
  está presente.
  Bem. Caso No. 4475.
  Corte Superior de N.Y.
  Barry B. Benson contra...
  Indústria do Mel.
  Que comece a sessão.
  Sr. Montgomery, você representa
  as cinco principais companhias.
  É um privilégio.
  Sr. Benson. Você representa
  todas as abelhas do mundo?
  Só estou brincando.
  Sim, meretíssima. Podemos
  prosseguir.
  Sr. Montgomery, sua
  declaração inicial, por favor.
  Senhoras e senhores do júri...
  Minha avó era uma mulher simples.
  Nasceu em uma fazenda.
  Ela acreditava que era
  direito divino do homem...
  se beneficiar do tesouro divino
  da natureza que Deus...
  criou para nós.
  Se vivermos em um mundo louco
  que o Sr. Benson imagina...
  só pensem em como seria.
  Talvez eu teria de negociar
  com o tecedor de seda...
  pelo plástico de minhas calças!
  Uma abelha que fala.
  Como podemos saber que
  isso não é uma animação...
  holográfica por computador
  estilo Hollywood?
  Poderiam estar usando raios laser.
  Ou robóticas, ventriloquismo
  ou clonagem.
  Para o que nós sabemos, ele
  poderia estar usando esteróides.
  Sr. Benson.
  Senhoras e senhores, não há truque
  nenhum, sou apenas uma abelha comum.
  E como abelha, o mel é
  importante para mim.
  É importante para todas as abelhas.
  Nós criamos. Nós fazemos
  e a protegemos com nossas vidas.
  Infelizmente, há algumas
  pessoas nesta sala...
  que podem pegar o que quiserem
  porque somos pequenos.
  E espero que quando
  tudo isso terminar...
  vejam que pegando nosso mel,
  não estão pegando...
  tudo o que temos,
  mas tudo o que somos.
  Oh, queria que ele se vestisse
  toda vez assim. Fica tão bonito.
  Chame sua primeira testemunha.
  Sr. Klaus Vanderhayden,
  das fazendas de mel.
  -Tem uma empresa bem grande?
  -Eu acho que sim.
  E vejo que também tem
  Honeyburton, e Honron!
  Sim eles pegam abelhas
  para as nossas fazendas.
  Pegam abelhas? Devo admitir
  que isso é bem perturbador.
  Suponho que não pegam
  abelhas livres, pegam?
  -Não.
  -Desculpe. Não escutei.
  -Não.
  -Não.
  Porque você não liberta
  abelhas. Você as prendem.
  E não é só isso.
  Parece que você tem um...
  urso como uma imagem nas
  caixas, não é nada legal.
  Bem, são criaturas bem
  adoráveis.
  O urso Yogi, ursinhos de pelúcia,
  urso de ouro?
  Sim. Como esse?
  Ursos matam abelhas.
  Gostaria que esse grandalhão
  destruísse suas salas...
  mordesse seus cobertores,
  destruísse suas almofadas.
  Ok, é o suficiente. Podem levá-lo.
  Sr. Sting, obrigado por vir.
  Seu nome me intriga. Devo admitir.
  De onde eu escutei antes?
  Estive em uma banda
  chamada The Police.
  Mas nunca foi um policial
  de verdade foi?
  Não. Nunca fui.
  Não, nunca foi. Então aqui temos outro
  exemplo de cultura de abelha...
  que um humano roubou o mel,
  com um nome artístico.
  Por favor.
  Já foi picado Sr. Sting?
  Eu me sinto picado, Sting!
  Ou deveria dizer:
  Sr. Gordon M. Summer!
  Esse é o nome verdadeiro? Idiota!
  Sr. Liotta, primeiro
  deixe-me parabenizar...
  pelo prêmio Emmy que
  ganhou por "ER" em 2005.
  Obrigado! Obrigado!
  Também vejo pelo seu currículo
  que é bem bonito...
  mas com um temperamento
  de "pavio curto".
  Eu adoro o que eu faço.
  Isso é um crime?
  Ainda não. Mas sabe por
  que está aqui Sr. Liotta?
  Explorar abelhas inofensivas
  para não ter que ensaiar...
  suas falas e ensaiar
  seus diálogos, Sr.?
  Cuidado Benson, posso
  "estourar" agora mesmo.
  Esse é um "bom camarada"?
  Esse é um mau camarada!
  Por quê não esmagamos
  esses vermes...
  e vamos para casa?
  Ordem! Ordem neste tribunal!
  Eu disse ordem Sr. Liotta,
  por favor, sente-se.
  ABELHA PROCESSA!
  ABELHAS PARA OS HUMANOS
  "DESAPAREÇAM!
  ESTÚDIO CANCELA
  PROJETO DE LIOTTA.
  Creio que foi agradável
  levar aquele urso para lá...
  Eu acho que os jurados
  estão do nosso lado.
  Estamos fazendo tudo certo?
  Legalmente?
  -Sou uma floricultora.
  -Certo, certo.
  -Bem, eu brindo à grande equipe.
  -Pela grande equipe!
  Bem, olá.
  -Oh, Ken!
  -Olá!
  Pensei que não viria.
  Não, só cheguei tarde.
  Tentei ligar, mas... a bateria.
  Não queria ficar sozinha
  então, chamei Barry!
  -Por sorte estava livre.
  -Sim.
  Oh, que sorte!
  Bem, ainda sobrou um pouco.
  Vou esquentar.
  Sim, esquentar. Claro.
  Ouvi dizer que joga tênis.
  Não gosto muito.
  Acho a bola um pouco grudenta.
  Eu que o diga. É mesmo.
  Ken, Barry viu seu currículo,
  e ele concorda comigo...
  que comer com palitos não
  é uma habilidade especial.
  Acha que não sei
  o quê está fazendo?
  Hey, sei quanto é difícil
  conseguir o emprego certo.
  Temos isso em comum.
  Temos?
  Bem, as abelhas tem
  centenas de empregos...
  e temos trabalho
  como tirar o lixo.
  É nisso que eu
  estava pensando.
  Ken, emprestei a sua
  lâmina de barbear à Barry.
  Espero que não se incomode.
  Vou tirar água do joelho.
  Sim, vai lá.
  Sabe? Vou me saciar com
  seus joguinhos mentais.
  -O quê é isso?
  -Vogue italiana.
  Mamma mia, são muitas páginas.
  Tem muita publicidade.
  Lembro que Vanessa disse:
  "Por quê sua vida
  vale mais que a minha"?
  Que curioso. Não me lembro.
  Acho que tem alguma
  coisa fedendo por aqui.
  Adoro esse cheiro de flores.
  Sim? Que tal esse
  cheiro de chamas?
  Nem tanto!
  Bichinho aquático!
  Não estou fazendo nada.
  Ei, olhe para mim estou usando
  um protetor labial, é patético.
  Peguei você!
  Bem, bem, bem.
  Tenho uma boa mira.
  Está blefando.
  Estou?
  -Que acha disso?
  -Sai daqui!
  Isso foi um passeio.
  Exceto que vai
  dar mais voltas!
  Ken! O quê está fazendo?
  Quer saber? Nem de mel
  eu gosto. Eu não como!
  Temos que conversar!
  É apenas uma abelha!
  E a mais amável abelha que
  conheci em muito tempo.
  Em muito tempo?
  Do que está falando?
  -Tem mais insetos na sua vida?
  -Não!
  Mas tem umas coisas que estão me
  incomodando. E você é uma delas.
  Ótimo! Abelhas falando,
  sem noite do iogurte...
  Meus nervos não agüentam...
  graças a uma pessoa emotiva.
  Adeus, Ken.
  Para sua informação
  Prefiro sem açúçar. E ser for de
  doce, que seja feita pelo homem.
  Sinto muito por tudo isso.
  Eu sei que gosto
  tinha uma abelha.
  Eu gostava disso.
  Senti um tipo de barreira
  entre eu e Ken.
  Nunca pude rompê-la. Enfim...
  Vai ficar bem para o
  julgamento de amanhã?
  Creio que as idéias do
  Sr. Montgomery se acabaram.
  Gostaria de chamar o Sr. Barry
  Benson, abelha, para depor.
  Essa é uma boa idéia.
  Agora vamos ver como é um...
  dos melhores advogados...
  Você terá de fazer algum milagre,
  ou iremos perder.
  Não se preocupe, Sr. Gamble.
  Para enganar os jurados só devo...
  relembrar do que eles não
  gostam nas abelhas.
  -Trouxe a pinça?
  -Você é alérgico?
  Só a derrotas, filho. Só a derrotas.
  Sr. abelha Benson. Uma resposta
  que todos gostariam de saber:
  Qual é exatamente a sua
  relação com aquela mulher?
  -"Bons amigos."
  -Bons amigos.
  -Bons amigos.
  -Sim.
  Tão bom que vivem juntos?
  -Espere. Espere um momento.
  -Você não é um tanto...
  bastardo?
  -Com licença, Meretíssima
  -Estou aqui para esclarecer
  toda essa relação.
  Sua rainha não criou todas
  as abelhas em sua colméia?
  -Sim, mas...
  -Então todos são seus parentes?
  -Sim. Eles são.
  -Me segura.
  Você é uma abelha ilegítima
  não é, Sr. Benson?
  O Sr. Benson é...
  Seus primos distantes?
  -Objeção!
  -Vou voar e picar ele.
  Adam, não. É o que ele quer.
  Fui picado!
  Oh, senhor, fui picado!
  Ordem! Ordem!
  -Meretíssima. Fui atacado...
  -Sr. Montgomery!
  por uma picada das
  asas da destruição!
  Viram? Não podem tratar
  eles como iguais.
  Eles são bestas selvagens...
  é só isso que eles sabem
  é a regra deles.
  -Adam, fique comigo!
  -Não sinto minhas pernas.
  Oh, anjo da piedade, venha...
  tirar o veneno do meu traseiro!
  Quero ordem no tribunal!
  Ordem! Ordem, por favor!
  -Olá, amigo.
  -Olá.
  -Dói muito?
  -Sim.
  Eu...arruinei o caso? Não?
  Não importa. O importante é que
  está vivo. Podia ter morrido.
  Estaria melhor morto. Olhe para mim.
  Eles tem uma cafeteira lá em
  baixo. Eles tem sanduíche de atum.
  Veja, tem um pouco ainda.
  Como foi picar alguém?
  Não consigo explicar, foi...
  pura adrenalina e
  depois... um êxtase.
  -Certo.
  -Acha que foi tudo armadilha?
  Claro. Desculpe fiquei
  muito empolgado com isso.
  O quê estávamos pensando?
  Olhe para nós.
  Somos só dois insetos
  nesse mundo.
  O quê acha que os humanos
  farão se ganharem?
  Não sei.
  Ouvi dizer que estão
  reunidos em um hotel.
  Não deve ser tão ruim.
  Eu tenho que verificar,
  mas eles não sairam.
  Oh, meu...
  Cof, cof, poderia...
  fechar aquela janela?
  -Por quê?
  -Porque estão fumando.
  Abelhas não fumam.
  Certo, abelhas não fumam.
  Abelhas não fumam. Mas
  algumas estão fumando.
  -Adam, é isso! É o nosso caso.
  -É mesmo? Não estava acabado?
  Não, levante, vista-se.
  Tenho que ir a um lugar.
  Volte para a corte e atrase
  o quanto puder.
  e os barquinhos que fizeram,
  agora estão prontos para navegar.
  Sr. Flayman...
  Sim, meretíssima.
  Cadê o resto de sua equipe?
  Meretíssima, é interessante,
  sabe, as abelhas sabem voar...
  por isso sempre somos bem pontuais.
  Na verdade, muito engraçada
  a história sobre...
  Meretíssima? Não deu a
  esses ridículos insetos...
  tempo suficiente nesta corte?
  Por quanto mais vamos
  permitir essas travessuras?
  Eles não estão apresentando
  uma evidência clara...
  contra os meus clientes...
  que tem negócios
  perfeitamente legítimos.
  Estou pedindo que rejeite
  esse caso completamente.
  Sr. Flayman, eu acho que...
  vou ter que considerar o
  pedido do Sr. Montgomery.
  Não podemos, temos
  um caso comprovado.
  Onde estão suas provas?
  Onde estão suas evidências?
  Mostre para mim
  a arma de fumaça!
  Espere, meretíssima!
  Quer uma arma de fumaça?
  Aqui está sua arma de fumaça!
  -O que é isso?
  -"cigarro" para abelhas.
  Isto? Este objeto inofensivo?
  Isto não machucaria uma
  mosca, muito menos uma abelha.
  Membros do jurado, vejam
  o que acontece com as abelhas...
  que nunca perguntaram:
  "Fumar ou não".
  É isso o que a natureza quer
  para nós? Ser forçado a viver...
  com essa máquina de fumaça
  em campos de concentração...
  feita de madeira pelo homem?
  Vivendo a vida como
  escravos do homem branco?
  O quê vamos fazer?
  Jogamos a carta das espécies.
  Senhoras e senhores, por favor
  libertem essas abelhas.
  Libertem as abelhas!
  Libertem as abelhas!
  Libertem as abelhas!
  A corte está a favor das abelhas.
  Vanessa, nós ganhamos!
  Sim, sabia que iria
  conseguir! Toque aqui!
  -Ai!
  -Desculpe.
  Estou bem. Vanessa sabe
  o quê isso significa?
  Finalmente todo o mel
  pertencerá as abelhas.
  Agora não precisamos trabalhar
  tão duro todo o tempo.
  Isto é um desvio perverso...
  do equilíbrio da natureza, Benson.
  Você vai se arrepender.
  -Barry...Barry
  -De quanto mel estamos falando?
  Ah, ah, não tenho tempo.
  Barry? O que está vestindo?
  Meu sueter de abelha
  e não uso calças.
  -E se Montgomery tiver razão?
  -O que quer dizer?
  Levamos uma vida de
  abelha há muito tempo.
  27 milhões de anos.
  Parabéns pela sua vitória.
  O que vai pedir com isso?
  Primeiro irei fechar todas
  as fazendas de abelhas.
  Depois irei pegar todo
  o mel que é nosso.
  Até a última gota.
  Queremos o fim da
  glorificação ao urso.
  Uma maldita máquina
  feia e inútil.
  Acho que todos sabemos o que
  eles fazem nos bosques.
  Espere o meu sinal...
  Pegue eles.
  Terá um pouco de enjôo
  por um tempo, vai ficar bem.
  Não vamos tolerar referências
  negativas as abelhas.
  Mas é só um nome artístico!
  O uso desnecessário
  de mel em banhos.
  E, la-di-da, adoçantes
  durante o café.
  Não posso respirar.
  Podem trazer, meninos!
  Bem ali. Certo.
  Sr. Buzzwell, já enchemos
  3 tanques, e continua vindo...
  acho que devemos fechar.
  Fechar? Nós nunca fechamos.
  Parem com a produção!
  Deixem de fazer mel.
  Girem a chave, senhores!
  O que faremos agora?
  Bomba!
  Fechamos a produção de mel!
  Abortar missão.
  Abortando polinização
  e coleta de néctar.
  Voltando para a base.
  Adam, você não acredita
  o quanto de mel tem lá fora.
  Ah, sim?
  O que está acontecendo?
  Cadê todo mundo?
  Estão celebrando?
  Não, estão em casa.
  Não sabem o que fazer.
  Estão descansando, dormindo.
  Seu tio Carl foi para Santo
  António com uma moça.
  Sim, mas às vezes acho que os humanos
  gostam de mel. Quem não gostaria?
  É a melhor coisa do mundo.
  Para mim era emocionante
  ser parte da produção.
  Era meu novo escritório,
  meu novo trabalho...
  eu queria fazê-lo, mesmo.
  Queria mesmo. Mas agora...
  Agora não posso.
  Não entendo porque não estão
  felizes, temos muito mais agora.
  Pensei que suas vidas
  seriam melhor.
  Não fazem nada. É surpreendente...
  como o mel muda as pessoas.
  Não tem idéia do que está
  acontecendo, não é?
  O que queria me mostrar?
  Isto.
  Oh, o que aconteceu aqui?
  Isso não é nem a metade.
  Oh, não. Oh, Deus.
  Estão morrendo.
  Não parece muito bom, parece?
  Não.
  E de quem você acha que é a culpa?
  -Das abelhas?
  -Abelhas?
  Especificamente eu.
  Quem imaginaria que deixar de
  fazer mel afetaria tudo isso?
  Não são só as flores.
  Mas as frutas e vegetais...
  todas precisam de abelhas.
  Ai está toda a enciclopédia.
  Você remove a base, e afeta todo...
  o reino animal, e depois é claro...
  A espécie humana?
  Então não tem polinização...
  Tudo poderia se desmoronar, não?
  E sei que uma parte, é minha culpa.
  Que tal um pacto suicida?
  -Como fazemos?
  -Eu pico você e depois você me pica.
  -Isso te mataria duas vezes.
  -Certo.
  Escute Barry, desculpe
  mas eu devo ir embora.
  Tive que abrir a minha
  boca e falar.
  Vanessa?
  Vanessa, por quê está indo
  embora? Pra onde está indo?
  Ao último torneio de
  rosas em Pasadena.
  Eles adiantaram para essa semana
  porque as flores estão morrendo.
  É a última chance
  que eu tenho para ver.
  Vanessa, só quero pedir desculpas.
  Não queria que terminasse assim.
  Eu sei. Eu também.
  Torneio de rosas, elas não
  podem fazer esportes.
  Um momento. Rosas!
  Rosas?
  Rosas!
  Vanessa!
  Rosas?
  Barry?
  -As rosas são flores.
  -Sim eu sei.
  Flores, abelhas, pólen.
  Eu sei. Por isso que
  esse é o último torneio.
  Talvez não. Pode pedir a
  ele para diminuir?
  Pode ir mais devagar?
  Barry!
  Ok, cometi um enorme erro
  foi um desastre e é minha culpa.
  Sim, certo.
  Arruinei o planeta, queria ajudar
  com sua floricultura, e só piorou.
  Na verdade, está
  completamente fechada!
  Oh, pensei que estava reformando.
  Mas tenho uma idéia e é
  melhor do que todas as outras.
  Não quero saber.
  Certo, estava pensando nisso:
  Eles tem as rosas, as
  rosas tem o pólen.
  Eu sei que toda abelha plantou
  uma flor neste parque.
  Só temos que pegar o que eles tem
  e juntar com o que nós temos.
  -Abelhas... Pólen!
  -Parque... Flores!
  -Re-polinização!
  -Por toda a nação!
  Torneio de Rosas,
  Pasadena, Califórnia.
  Não tem mais que flores,
  globos e algodão de açúcar.
  -Vai ter muita segurança.
  -Tenho uma idéia.
  Vanessa Bloom, FTD, em
  missão de flores oficial.
  -Não é falsa.
  -Desculpe, Sra...bonito broche.
  Obrigada. Eles que me deram.
  Uma vez lá dentro, é só
  escolher o carro certo.
  Que tal a "Princesa e a Ervilha"?
  -Sim.
  -Eu posso ser a princesa...
  -e você...
  -Sim.
  -pode ser a ervilha.
  -Sim, já entendi.
  Desculpe o atraso.
  Onde devo me sentar?
  -Quem é você?
  -Acho que sou a ervilha.
  Ervilha? Suponho que vá
  para baixo dos colchões.
  Não nesta história, querida.
  -Irei falar com o chefe!
  -Sim, pode ir.
  Todo esse desfile é um engano!
  Vamos ver o que esse bebê faz!
  Hey, o que está fazendo?
  Então, nos misturamos
  com o tráfego...
  sem levantar suspeitas.
  Uma vez no aeroporto,
  nada nos deterá.
  Parem. Segurança.
  -Vocês estacionaram o seu carro?
  -Sim.
  -Vai mantê-lo com você o tempo todo?
  -Sim.
  Podem retirar os sapatos e
  o conteúdo do seus bolsos?
  Poderia retirar seu ferrão, senhor?
  -Oh, isso faz parte de mim.
  -Tá legal.
  Estava só brincando.
  Aproveitem o vôo.
  Estamos com sorte.
  Temos pólen o suficiente
  para nosso trabalho.
  Acredita na nossa sorte?
  Temos flores para polinizar.
  Acho que isso vai
  funcionar, Vanessa.
  Tem que funcionar.
  Atenção, aqui é o Capitão Scott.
  Teremos mau tempo em Nova Iorque.
  Teremos algumas horas de atraso.
  Barry, essas flores precisam
  de água, e não temos.
  Tenho que falar
  com esses sujeitos.
  Tenha cuidado.
  Hei, alguém teria
  algumas revistinhas?
  Eu gosto de ler e falar
  durante a viagem.
  Desculpe capitão. Temos
  uma situação de emergência.
  -O que disse, Hal.
  -Não disse nada.
  -Ahh! Abelha!
  -Não se assuste!
  Não temos tempo.
  Toda a minha espécie...
  Esperem um minuto!
  Esperem, sou um advogado!
  -Quem é advogado?
  -Não se mexa.
  Oh, Barry.
  Boa tarde senhores,
  é o capitão falando.
  Poderia Miss Vanessa Bloom,
  no 24B, vir até a cabine?
  Por favor, rápido!
  O que aconteceu aqui?
  Tentei falar com eles, mas
  acabaram se batendo...
  um bateu no outro e
  agora estão desmaiados.
  É uma outra piada de abelha?
  Não. Ninguém está
  pilotando o avião.
  Aqui é a torre de controle do
  aeroporto JFK. Qual sua situação?
  Aqui é Vanessa Bloom,
  sou uma floricultora de N.Y.
  Cadê o piloto?
  Está inconsciente,
  e o co-piloto também.
  Nada bom. Tem alguém ai
  que saiba pilotar?
  -Na verdade tem.
  -Quem é?
  -Barry Benson.
  -Do caso do mel?
  Genial.
  Vanessa, isto não passa de
  uma abelha gigante de metal.
  Pode pilotar de mãos amarradas.
  Não posso pilotar um avião!
  Por quê não?
  Tem piloto automático?
  -Sim.
  -Como pode ser difícil?
  Um momento. Barry tem uma
  tempestade a frente.
  Aqui é Bob Bumble.
  Temos notícias de última hora do...
  do aeroporto JFK, onde
  tem clima de suspense...
  Barry Benson, que acaba
  de ganhar o caso do mel...
  É Barry!
  está agora pretendendo aterrissar
  um avião com passageiros e flores...
  uma tripulação fora de controle.
  Quê?!
  Temos uma tempestade elétrica e
  dois indivíduos estão no comando...
  de um Jumbo, sem nenhuma
  experiência em pilotagem.
  Um momento, Sr. Ditchwater.
  Tem uma abelha abordo.
  Oh, eu sei bem os planos do
  Sr. Benson e seus companheiros...
  Não fizeram danos o suficiente?
  Qual é a nossa última
  esperança agora?
  Na teoria, as abelhas
  não deveriam voar.
  As asas muito pequenas,
  o corpo muito grande.
  Espere um momento, não ouvimos
  isso um milhão de vezes?
  As asas, o corpo,
  isso não faz sentido.
  -Ponha ao vivo.
  -Certo.
  Estamos ao vivo.
  Nossa forma de trabalhar pode
  ser um mistério para vocês
  porque fazer mel requer
  muitas abelhas...
  fazendo vários trabalhos pequenos.
  Vou te dizer uma coisa
  sobre pequenos trabalhos.
  Se for feito muito bem,
  irá fazer muita diferença.
  Mais do que imaginamos,
  para nós, e para todos.
  Por isso quero que as abelhas...
  voltem a fazer o que
  fazem de melhor.
  Trabalhar juntas.
  Esse é jeito das abelhas.
  Nós não reclamamos,
  nós trabalhamos.
  Preto e amarelo!
  Amarelo!!!
  Esquerda, direita, em baixo, cima.
  -Subir?
  -Sim, subir.
  Sabe? Isso não é tão difícil!
  Barry, o que aconteceu?
  Acho que estávamos em
  piloto automático o tempo todo.
  -Talvez tenha me ajudado.
  -Não, não ajudou.
  Então eu não posso
  pilotar o avião.
  Todos, mexam-se. Vamos lá!
  Nossa única chance é
  fazer o que eu faço...
  me copie com as asas do avião!
  Não precisa gritar.
  Não estou gritando, mas
  teremos muitos problemas aqui.
  É difícil me concentrar
  com esse "tom" de pânico!
  Não é um tom. Estou em pânico!
  Não posso fazer isso!
  Vanessa, controle-se,
  você tem de se concentrar.
  -Você saia da frente!
  -Você é que tem que sair da frente!
  -Você tem que sair da frente!
  -Você é que tem que sair da frente!
  -Você tem que sair da frente!
  -Você é que tem que sair da frente!
  -Espere!
  -Ah, vamos é minha vez.
  -Quem está pilotando o avião?
  -Não sei.
  Alô?
  Benson, tem flores o
  suficiente para celebrar?
  -São os coletores de pólen!
  -Eles apóiam a todos!
  Preto e amarelo.
  Alô. O que acham de
  aterrissarmos nesta pista?
  Qual pista? Onde?
  Não vejo nada. Você pode?
  Não, nada, está tudo nublado.
  Vamos, você tem que
  pensar como abelha.
  -Pensar como abelha!
  -Pensar como abelha!
  -Pensar como abelha!
  -Pensar como abelha!
  Um momento. Acho que sinto algo.
  -O quê?
  -Não sei mas é forte.
  Me atrai, como um instinto
  de 27 milhões de anos.
  Abaixe o nariz do avião.
  Pense como abelha!
  Pense como abelha!
  O que é aquilo na pista?
  Coloquem luz naquilo!
  Pense como abelha!
  Pense como abelha!
  -Vanessa, vá para a flor!
  -Certo.
  -Desligue os motores!
  -Desligue os motores?
  Aterrissaremos com
  o poder da abelha!
  -Pronto amigos?
  -Afirmativo.
  Bom, bom, calma
  agora...muito bem.
  Naquela flor!
  Pronto amigos? Voltem!
  Dando a volta!
  Não essa flor! A outra flor.
  -Qual flor?
  -Essa flor!
  Estou apontando para a flor!
  Esse é um gordo com
  uma camisa de flores!
  Me refiro aquela grande,
  preta e amarela...
  feita de milhões de abelhas!
  Na frente, calma. Suba.
  De uma volta!
  Isto é loucura, Barry!
  Esta é a única forma que sei voar!
  Estou louco? Ou esse avião
  está voando igual a um inseto?
  Mantenha o nariz para
  cima, não tenha medo!
  Para trás!
  Espaço, agora para baixo!
  Seja parte dele.
  Bem no centro!
  Agora desça! Desça mulher!
  Vamos lá!
  Barry, nós conseguimos,
  você me ensinou como voar.
  -Sim. Sem saudação!
  -Certo.
  Barry, deu certo.
  Viu a flor gigante?
  Qual flor gigante, onde?
  É claro que vi!
  Foi brilhante amigo. Brilhante!
  -Obrigado.
  -Mas ainda não terminamos.
  Escutem! Este avião está
  coberto com o último pólen...
  das últimas flores
  disponíveis na Terra.
  Isso faz dessa a nossa
  última oportunidade.
  Somos as únicas que fazem mel...
  polinizamos as flores e
  nos vestimos assim.
  Se sobrevivemos a espécie,
  esse é o nosso momento.
  Então, o que dizem?
  Seremos abelhas...
  ou viveremos em um museu
  de história natural?
  -Somos abelhas!
  -Peça de museu!
  Então me sigam!
  Exceto a "peça de museu"!
  Espere, Barry! Tome.
  Você merece.
  Sim!
  Sou um coletor de pólen!
  E está perfeito...
  só preciso dobrar as mangas.
  Oh, sim.
  É o nosso Barry!
  Lá vem o sol.
  Lá vem o sol e eu digo,
  está tudo bem,
  Queridinha, vai ser um
  inverno longo e frio
  Queridinha, parecem anos
  desde que você está aqui
  Lá vem o sol,
  Lá vem o sol e eu digo,
  Está tudo bem.
  Queridinha, os sorrisos
  voltam para os rostos
  Queridinha, parecem anos
  desde que voltou.
  Lá vem o sol,
  Lá vem o sol e eu digo,
  Está tudo certo,
  Mamãe, as abelhas voltaram!
  Sol, sol, sol, lá vem ele
  Se alguém precisa fazer
  uma ligação, agora é a hora!
  Algo me diz que vamos
  trabalhar até tarde.
  Queridinha, sinto que o gelo
  derrete lentamente
  Obrigada! Tenha uma boa tarde.
  Posso ajudar o próximo?
  Quem é o próximo?
  -Eu.
  -Quer levar um pouco de mel?
  É aprovado pelas abelhas...
  INSETOS ADVOCACIA
  Leite, creme, queijo,
  tudo vem de mim.
  E não vejo uma moeda!
  As vezes me sinto um
  pedaço de carne!
  Não tenho idéia.
  Barry! Desculpe, pode vir aqui?
  Pode me desculpar. Meu
  assistente mosquito vai ajudá-la.
  Desculpe a demora!
  É um advogado também?
  Senhora, sempre fui um
  parasita chupasangue,...
  ...só me faltava a maleta.
  Tenham todos uma boa tarde.
  Barry, fizeram um pedido para um
  casamento e não consigo as flores.
  Sem problemas Vanni. Deixe comigo.
  Você é um salva-vidas Barry.
  Posso ajudar em alguma coisa?
  Muito bem, coletores, é hora de voar.
  Obrigada, Barry.
  Ohhh. Oh, essa abelha está
  vivendo minha vida!
  -Deixe para lá, Kenny!
  -Quando terminará esse pesadelo?
  Lá vem o sol
  Lá vem o sol
  -Ótimo dia para voar.
  -Claro que é.
  Aqui entre nós.
  Eu não via a hora de sair do escritório.
  `).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)