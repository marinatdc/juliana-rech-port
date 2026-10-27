export interface ProcedureDetailItem {
  label?: string
  title: string
  body: string
  extraBody?: string
  note?: string
  noteTitle?: string
  noteBody?: string
  points?: string[]
  tags?: string[]
  features?: { title: string; body: string }[]
}

export interface ProcedureDetailSection {
  eyebrow: string
  title: string
  intro?: string
  introEmphasis?: string
  introSecondary?: string
  layout: 'cards' | 'alternating' | 'feature'
  columns?: 2 | 3 | 4
  items: ProcedureDetailItem[]
}

export interface ProcedureDetailContent {
  heroTitle?: string
  subtitle: string
  introduction: string[]
  sections: ProcedureDetailSection[]
  closingEyebrow?: string
  closingTitle: string
  closingBody: string
  quote: string
}

export const procedureDetails: Record<string, ProcedureDetailContent> = {
  'gestantes-e-puerperas': {
    heroTitle: 'Gestantes e Puérperas:',
    subtitle: 'Cuidar de ti também faz parte da maternidade.',
    introduction: [
      'A gestação e o pós-parto **são fases** de profundas transformações no corpo da mulher. Enquanto o corpo se adapta para gerar uma nova vida, __surgem mudanças__ que podem trazer desconfortos, __dores__, __inchaço__, __alterações posturais__ e __limitações na rotina__.',
      '**Depois do nascimento do bebê, começa uma nova etapa:** o corpo precisa se recuperar, reorganizar seus tecidos, retomar movimentos e funções, enquanto a mulher também se adapta à nova rotina da maternidade.',
      'Meu trabalho é acompanhar essas transformações com um cuidado individualizado, respeitando cada fase, cada corpo e cada necessidade.',
    ],
    sections: [
      {
        eyebrow: 'Fase gestacional · alívio e bem-estar',
        title: 'Durante a gestação',
        intro: 'A fisioterapia pode ajudar a tornar a gestação mais confortável e proporcionar mais bem-estar à mulher durante as diferentes fases da gravidez. O atendimento é individualizado e direcionado às necessidades que surgem ao longo da gestação, sempre considerando as particularidades de cada mulher e a liberação da equipe médica quando necessária.',
        layout: 'alternating',
        items: [
          { label: 'Manejo postural', title: 'Alívio de dores e desconfortos', body: 'As mudanças posturais e a sobrecarga que acompanham a gestação podem favorecer dores e tensões, especialmente na região lombar, quadril, pelve, coluna e musculatura. Por meio de técnicas fisioterapêuticas específicas, busco reduzir desconfortos, melhorar a mobilidade e proporcionar mais conforto para que a gestante possa viver essa fase com mais qualidade.' },
          { label: 'Controle de edema', title: 'Drenagem linfática gestacional', body: 'O inchaço é uma queixa bastante comum durante a gestação, especialmente em pernas e pés. A drenagem linfática gestacional é realizada com manobras manuais suaves, confortáveis e adaptadas a cada fase da gravidez. Além de favorecer o fluxo linfático e auxiliar no controle do edema, proporciona uma sensação de leveza e relaxamento muito agradável para a gestante. É um momento de pausa e cuidado que pode contribuir para o bem-estar da mãe e, consequentemente, para um ambiente mais tranquilo e confortável para o bebê.', note: 'Melhora comprovada no sono e descanso reparador' },
          { label: 'Aplicação criteriosa', title: 'Dry Needling na gestação', body: 'O Dry Needling pode ser utilizado como recurso fisioterapêutico para o manejo de determinados pontos de tensão e dores musculares, quando indicado após avaliação individual. A técnica é aplicada de forma criteriosa, considerando o período gestacional e as condições específicas de cada paciente.', note: 'Avaliação biomecânica prévia, minuciosa, assegurando pontos de agulhamento seguros e indicados para cada trimestre.' },
        ],
      },
      {
        eyebrow: 'Fase puerperal · atenção e recuperação',
        title: 'Depois do nascimento: o cuidado continua',
        intro: 'O nascimento do bebê marca o início de uma nova fase para a mulher. Além da recuperação dos tecidos após o parto, podem surgir edema, hematomas, desconfortos, alterações posturais, fraqueza muscular, sensação de distanciamento do próprio corpo e mudanças na alimentação e no sono. O acompanhamento respeita esse tempo e considera as necessidades de quem acabou de passar por essa experiência.',
        layout: 'alternating',
        items: [
          { label: 'Tecnologia & suporte', title: 'Taping pós-parto: bandagem terapêutica funcional', body: 'Depois do parto, o taping pode ser utilizado como recurso complementar no processo de recuperação abdominal, de acordo com a avaliação e as necessidades de cada mulher. Aplicado na região abdominal, pode proporcionar uma sensação de suporte e segurança, auxiliar no manejo do edema e favorecer a percepção e a organização da região abdominal durante esse período de adaptação do corpo.', extraBody: 'Também pode ser utilizado como parte da abordagem fisioterapêutica para mulheres que apresentam diástase abdominal, contribuindo para o cuidado da região e para a retomada gradual da funcionalidade. Quando há uma incisão cirúrgica, como na cesariana, o taping pode ser associado ao cuidado fisioterapêutico da região, contribuindo indiretamente para um ambiente favorável à recuperação dos tecidos e ao processo de reparo da cicatriz, sempre respeitando o estágio de cicatrização e a liberação adequada.', note: '“Mais do que uma aplicação estética, o taping pós-parto é um recurso que traz suporte, conforto e segurança para a mulher enquanto seu corpo passa por tantas transformações.”' },
          { label: 'Reabilitação ativa', title: 'Recuperação da funcionalidade', body: 'O pós-parto não envolve apenas a recuperação estética do corpo. É também um período de readaptação funcional: carregar o bebê, amamentar, levantar, sentar, dormir em posições diferentes e retomar gradualmente as atividades do dia a dia exigem muito do corpo da mulher.', extraBody: 'A fisioterapia pode contribuir para recuperar movimento, força, mobilidade e funcionalidade, respeitando o tempo de recuperação de cada paciente.', tags: ['Postura da amamentação', 'Tratamento da diástase'] },
          { label: 'Aplicação criteriosa', title: 'Cuidado com a pele e o corpo', body: 'Depois da gestação, muitas mulheres desejam voltar a se reconhecer no próprio corpo. Flacidez, alterações na textura da pele, estrias, celulite, edema e outras mudanças podem afetar a autoestima e a relação da mulher com sua própria imagem.', extraBody: 'Depois da avaliação, podem ser indicados recursos da fisioterapia dermatofuncional de acordo com cada necessidade. O objetivo não é buscar um padrão de corpo inatingível, mas ajudar a mulher a cuidar do próprio corpo, recuperar sua funcionalidade e sentir-se bem novamente.', noteTitle: 'Foco terapêutico', noteBody: 'Reorganização celular de colágeno, drenagem profunda e restauração da textura dérmica.' },
          { title: 'Tratamento de fissuras mamilares', body: 'As fissuras mamilares podem causar dor e desconforto importantes durante a amamentação, tornando um momento que deveria ser de vínculo e conexão bastante difícil para muitas mulheres.', extraBody: 'A fisioterapia pode atuar como parte desse cuidado por meio do laser terapêutico, utilizado como recurso auxiliar no processo de reparação dos tecidos, contribuindo para a recuperação da região e para o alívio do desconforto.\n\nO tratamento é realizado de forma individualizada, respeitando as condições da mama e o momento vivido pela puérpera.' },
          { label: 'Apoio à amamentação', title: 'Taping para apoio à amamentação', body: 'Algumas mulheres enfrentam dificuldades no início da amamentação, especialmente quando percebem uma baixa produção de leite ou sentem que o bebê não está mamando como gostariam.', extraBody: 'O taping pode ser utilizado como recurso complementar no estímulo à lactação, com uma aplicação específica e individualizada, buscando favorecer os estímulos necessários para esse momento.\n\nAlém do aspecto físico, esse cuidado também oferece acolhimento e segurança para a mãe, que muitas vezes está vivendo um período de insegurança e ansiedade diante das dificuldades para amamentar.\n\nO objetivo é contribuir para que a mulher se sinta mais confiante e amparada durante o processo, sempre respeitando as particularidades de cada mãe e bebê.' },
        ],
      },
    ],
    closingTitle: 'Um cuidado que olha para a mulher por inteiro',
    closingBody: 'Meu trabalho com gestantes e puérperas vai além de uma técnica isolada. Cada atendimento começa com uma avaliação para compreender o momento que aquela mulher está vivendo, suas queixas, necessidades e objetivos.\n\nDurante a gestação, o foco pode estar no conforto, no controle do edema e no manejo das dores e desconfortos. No pós-parto, o cuidado pode envolver recuperação dos tecidos, edema, funcionalidade, cicatrizes, alterações corporais e autoestima. Tudo é planejado de forma individualizada.',
    quote: 'Porque cuidar do bebê é importante. Mas cuidar de quem cuida também é.',
  },
  'tratamento-da-dor': {
    heroTitle: 'Pessoas que convivem com a dor:',
    subtitle: 'Quando a dor começa a fazer parte da rotina, o cuidado precisa olhar para a pessoa inteira.',
    introduction: [
      'Dor não é apenas uma sensação física. Quando permanece por muito tempo, pode interferir no sono, no trabalho, nos movimentos, na disposição e até na forma como a pessoa vive o dia a dia.',
      'Por isso, o tratamento começa entendendo **onde dói**, há quanto tempo, como essa dor se manifesta e quanto ela interfere na tua rotina.',
      '**A partir dessa avaliação, o tratamento é individualizado e pode combinar diferentes recursos da fisioterapia, de acordo com a necessidade de cada pessoa.**',
    ],
    sections: [
      {
        eyebrow: 'Metodologia clínica avançada',
        title: 'Recursos Fisioterapêuticos Precisos',
        intro: 'Tecnologia, ciência biomecânica e sensibilidade tátil aplicadas para desfazer padrões rígidos de dor crônica.',
        layout: 'cards',
        columns: 3,
        items: [
          { label: 'Recurso especializado', title: 'Dry Needling: Precisão no Alívio de Tensões Profundas', body: 'O Dry Needling é um dos recursos que utilizo no tratamento de dores e tensões musculares. A técnica utiliza agulhas muito finas em pontos específicos dos músculos, buscando atuar sobre áreas de tensão e pontos-gatilho que podem estar relacionados à dor e à limitação de movimento. Pode ser utilizado em diferentes regiões do corpo, sempre após avaliação e quando houver indicação.', tags: ['Liberação miofascial profunda', 'Sem medicamentos químicos', 'Aplicação indolor e segura'] },
          { title: 'Desativação de Trigger Points', body: 'Atua em áreas musculares profundas que massagens convencionais e compressas não conseguem alcançar.' },
          { title: 'Agulhas estéreis e descartáveis', body: 'Rigor absoluto de biossegurança hospitalar, filamentos ultrafinos e manipulação com máximo cuidado.' },
          { title: 'Alívio rápido e relaxamento tecidual', body: 'Restauração imediata da circulação local, redução do tônus contraturado e alívio sensível da dor.' },
        ],
      },
      {
        eyebrow: 'Áreas de atuação clínica',
        title: 'Frentes Específicas de Cuidado e Manifestações da Dor',
        intro: 'A dor não tem padrão fixo. Conheça as manifestações mais frequentes acolhidas no consultório.',
        layout: 'cards',
        columns: 2,
        items: [
          { label: '01 / Sobrecarga', title: 'Dor muscular e tensão', body: 'Tensão muscular, sobrecarga, alterações posturais e movimentos repetitivos podem contribuir para o surgimento ou manutenção de dores. O tratamento busca identificar os fatores envolvidos e trabalhar não apenas sobre o local onde a pessoa sente dor, mas também sobre as estruturas e movimentos relacionados àquela queixa. Podem ser utilizadas técnicas manuais, liberação tecidual, Dry Needling, exercícios terapêuticos e outros recursos, conforme a avaliação.' },
          { label: '02 / Coluna', title: 'Dor cervical e nas costas', body: 'Pescoço, ombros e coluna são regiões frequentemente afetadas pela rotina, pelo trabalho, pelo estresse e por posturas mantidas por longos períodos. Quando a dor interfere nos movimentos ou começa a fazer parte do cotidiano, uma avaliação individualizada pode ajudar a compreender suas possíveis causas e direcionar o tratamento.' },
          { label: '03 / Craniofacial', title: 'Dor na ATM e musculatura da face', body: 'Tensões na musculatura da face e da mandíbula podem estar associadas à dor, desconforto, dificuldade de movimentação e sensação de tensão na região. A fisioterapia pode atuar sobre a musculatura e os tecidos envolvidos, buscando melhorar a mobilidade e reduzir os desconfortos. Quando necessário, o tratamento pode ser realizado em conjunto com outros profissionais que acompanham o paciente.' },
          { label: '04 / Maternidade', title: 'Dor durante a gestação', body: 'A gestação provoca mudanças importantes no corpo e pode estar acompanhada de dores lombares, desconfortos no quadril, tensão muscular e alterações posturais. Nessas situações, o tratamento é adaptado à fase gestacional e às condições específicas de cada mulher, buscando proporcionar mais conforto e segurança.' },
        ],
      },
      {
        eyebrow: 'Dimensão biopsicossocial da dor',
        title: 'Quando a dor não é apenas física',
        intro: 'Existem situações em que a **dor física** vem acompanhada de **frustração, insegurança, medo ou impacto emocional**. Isso pode acontecer, por exemplo, quando uma pessoa passa por um procedimento estético ou cirúrgico e a recuperação não acontece como esperava.',
        introSecondary: 'Nesses casos, o acolhimento e a escuta também fazem parte do cuidado. Meu papel não é ignorar o que a pessoa está sentindo, mas compreender sua queixa, avaliar o corpo e buscar, dentro da fisioterapia, os caminhos possíveis para sua recuperação.',
        layout: 'cards',
        columns: 3,
        items: [
          { title: 'Acolhimento de Intercorrências Cirúrgicas', body: 'Tratamento atencioso e técnico de fibroses, seromas endurecidos, retrações e dores residuais decorrentes de intervenções pós-cirúrgicas ou estéticas complexas.', note: 'Sem julgamento de escolhas' },
          { title: 'Escuta Atenta sem Julgamentos', body: 'O tempo de consulta é integralmente seu. Aqui sua queixa nunca é minimizada como “apenas ansiedade” ou desconsiderada pela ausência de alterações em exames de imagem.', note: 'Tempo real para conversar' },
          { title: 'Alívio Integrado Corpo e Mente', body: 'Ao diminuir a hipersensibilidade do sistema nervoso central por meio de técnicas manuais e Dry Needling, o corpo volta a reconhecer a sensação de relaxamento e segurança.', note: 'Regulação do tônus visceral & muscular' },
        ],
      },
    ],
    closingTitle: 'O tratamento começa pela escuta',
    closingBody: 'Não existe uma técnica única para todas as dores. Cada pessoa tem uma história, uma rotina e uma forma própria de sentir. A avaliação individual pode orientar caminhos possíveis de cuidado.',
    quote: 'O objetivo é ir além de aliviar um sintoma: é ajudar a pessoa a recuperar movimento, autonomia e qualidade de vida.',
  },
  'intercorrencias-esteticas': {
    heroTitle: 'Intercorrências após procedimentos estéticos e cirúrgicos:',
    subtitle: 'Quando o resultado ou a recuperação não acontecem como esperado, existe um caminho de cuidado.',
    introduction: [
      'Quando o resultado ou a recuperação não acontecem como esperado, __**existe um caminho de cuidado**__.',
      'Nem sempre um procedimento estético ou cirúrgico evolui da maneira que a pessoa imaginava.',
      'Podem surgir fibroses, aderências, edema persistente, alterações de cicatriz, irregularidades, alterações de sensibilidade, dor, limitações de movimento ou outras alterações que geram __preocupação e, muitas vezes, frustração__.',
      'É nesse momento que uma __**avaliação fisioterapêutica individualizada**__ pode fazer a diferença.',
    ],
    sections: [
      {
        eyebrow: 'Investigação clínica aprofundada',
        title: 'Quando alguma coisa não parece estar bem',
        intro: 'Depois de um procedimento, é comum que o corpo passe por um período de adaptação e recuperação. Mas quando uma alteração persiste, causa desconforto ou interfere na funcionalidade e na autoestima, é importante investigar o que está acontecendo com rigor técnico.',
        introSecondary: 'O primeiro passo é avaliar os tecidos, a cicatriz, a mobilidade, o edema, a sensibilidade e a funcionalidade da região. A partir dessa avaliação, o tratamento é direcionado para as necessidades encontradas.',
        layout: 'cards',
        columns: 4,
        items: [
          { label: '01', title: 'Avaliação dos tecidos e tonicidade', body: 'Exame palpatório minucioso da espessura cutânea, firmeza, fibrosidades e densidade subdérmica.', note: 'Diagnóstico palpatório' },
          { label: '02', title: 'Exame minucioso da cicatriz', body: 'Análise de pigmentação, espessura, retração, aderência aos planos profundos e processo biológico cicatricial.', note: 'Inspeção e mobilidade' },
          { label: '03', title: 'Mobilidade e deslizamento fascial', body: 'Verificação do livre movimento fascial, identificando pontos de tensão e restrições mecânicas da região.', note: 'Fisiologia miofascial' },
          { label: '04', title: 'Mapeamento de sensibilidade e edema', body: 'Testagem sensorial térmica e tátil, identificação de parestesias e demarcação da estagnação hídrica persistente.', note: 'Avaliação neurolinfática' },
        ],
      },
      {
        eyebrow: 'Frentes terapêuticas especializadas',
        title: 'Manejo clínico das principais manifestações e alterações',
        intro: 'Cada tecido pede uma leitura cuidadosa. Os recursos são definidos conforme o tempo de recuperação, os achados clínicos e a resposta de cada pessoa.',
        layout: 'cards',
        columns: 2,
        items: [
          { label: 'Intercorrência Frequente', title: 'Fibroses e Aderências', body: 'As fibroses podem aparecer durante o processo de cicatrização e causar áreas endurecidas, irregularidades, sensação de repuxamento ou alteração na mobilidade dos tecidos. As aderências também podem comprometer o deslizamento natural dos planos profundos e interferir na movimentação livre da região operada.', extraBody: 'O tratamento pode envolver técnicas manuais, liberação tecidual funcional e outros recursos fisioterapêuticos, escolhidos de acordo com a fase do processo e as características de cada caso.', tags: ['Liberação Tecidual Manual', 'Restauração do Deslizamento', 'Remodelamento Seguro'] },
          { label: 'Resposta Inflamatória', title: 'Edema Persistente', body: 'O edema faz parte da resposta do organismo a muitos procedimentos, mas, em algumas situações, pode permanecer por mais tempo do que o esperado, causando sensação crônica de peso, dor latente e endurecimento tecidual.', extraBody: 'A fisioterapia pode atuar por meio de recursos como drenagem linfática especializada e técnicas manuais gentis, buscando favorecer as rotas de fluxo linfático colateral, auxiliar no controle do edema e melhorar sensivelmente o conforto e a mobilidade da região.', tags: ['Drenagem Linfática Reversa', 'Alívio de Pressão', 'Conforto Tecidual'] },
          { label: 'Qualidade Cicatricial', title: 'Cicatrizes e Alterações dos Tecidos', body: 'Uma cicatriz pode apresentar alterações de mobilidade, espessamento, hipertrofia, coloração desarmônica, aderências profundas ou hipersensibilidade ao menor contato com roupas.', extraBody: 'O cuidado fisioterapêutico pode incluir mobilização dos tecidos cicatriciais, técnicas manuais suaves, taping e laser terapêutico de baixa intensidade, além de ultrassom quando indicado clinicamente de acordo com a fase de cicatrização. O objetivo primordial é favorecer a mobilidade e a qualidade da cicatriz.', tags: ['Laser Terapêutico', 'Taping de Contenção', 'Mobilização Tecidual'] },
          { label: 'Neurofuncionalidade', title: 'Alterações de Sensibilidade e Movimento', body: 'Alguns procedimentos podem ser acompanhados por alterações de sensibilidade, como dormência, queimação, formigamento, dor reflexa ou dificuldade em executar movimentos básicos do cotidiano.', extraBody: 'Cada situação é avaliada individualmente para compreender as estruturas nervosas e musculares envolvidas. Quando necessário, o acompanhamento fisioterapêutico é estruturado em diálogo ético conjunto com o profissional médico cirurgião responsável.', tags: ['Estímulo Sensorial', 'Cinesioterapia Funcional', 'Diálogo Multidisciplinar'] },
        ],
      },
      {
        eyebrow: 'Protocolo de alta sensibilidade',
        title: 'Paralisia facial após procedimentos',
        intro: 'Alterações nos movimentos da face após procedimentos estéticos, preenchimentos, bioestimuladores ou intervenções cirúrgicas precisam de avaliação e acompanhamento imediatos e cuidadosos.',
        layout: 'feature',
        items: [{ label: 'Protocolo de alta sensibilidade', title: 'Avaliação individual e acompanhamento cuidadoso', body: 'Nesses casos delicados, o tratamento fisioterapêutico é direcionado de acordo com a avaliação funcional e a evolução neurológica apresentada, buscando favorecer a recuperação coordenada dos movimentos e a simetria facial com conforto.', note: 'Reeducação neuromuscular facial · estímulo motor específico · acompanhamento delicado' }],
      },
      {
        eyebrow: 'Dimensão humana e emocional do cuidado',
        title: 'Quando o corpo não responde como tu esperava',
        intro: 'É comum que uma pessoa procure ajuda depois de já ter passado por diferentes profissionais ou depois de ouvir repetidamente que “é normal” e que basta esperar.',
        introSecondary: 'Mas cada corpo tem uma evolução própria e tempos biológicos singulares. Quando existe uma alteração persistente ou algo que está gerando angústia e dúvida, uma avaliação detalhada permite compreender a real fisiologia do momento e definir com segurança a indicação terapêutica.',
        introEmphasis: 'Meu trabalho é olhar para aquilo que está acontecendo agora, acolher a história do procedimento e traçar uma estratégia individualizada para restabelecer a harmonia funcional.',
        layout: 'cards',
        columns: 3,
        items: [
          { title: 'Validação da tua queixa', body: 'A tua percepção do teu corpo nunca é desconsiderada ou minimizada. Cada sinal desconfortável merece respeito técnico e investigação sensível.' },
          { title: 'Olhar para o momento atual', body: 'Avaliação precisa do estágio biológico presente dos tecidos cicatriciais e linfáticos para aplicar apenas as intervenções benéficas neste momento.' },
          { title: 'Estratégia sob medida', body: 'Plano terapêutico exclusivo e progressivo, focado na tua segurança integral, no restabelecimento da função motora e na paz de espírito.' },
        ],
      },
    ],
    closingTitle: 'Cuidado também envolve acolhimento',
    closingBody: 'Muitas pessoas chegam ao consultório após uma intercorrência, com dúvidas e receios. A escuta, a avaliação cuidadosa e a explicação clara das possibilidades fazem parte do processo.',
    quote: 'Quando alguma coisa não sai como esperado, tu não precisa simplesmente aprender a conviver com isso.',
  },
  'fisioterapia-dermatofuncional': {
    subtitle: 'Cuidar da pele e do corpo também é cuidar de como você se sente.',
    introduction: [
      'A fisioterapia dermatofuncional atua nas alterações que envolvem a pele, o tecido subcutâneo e outras estruturas do corpo, utilizando recursos fisioterapêuticos de forma individualizada.',
      'Mais do que buscar uma mudança estética, o objetivo é compreender o que cada pele e cada corpo precisam e escolher os recursos mais adequados para cada pessoa.',
    ],
    sections: [
      {
        eyebrow: 'Avaliação dermatofuncional aprofundada',
        title: 'Um cuidado verdadeiramente personalizado',
        intro: 'Cada pessoa apresenta características, necessidades e objetivos diferentes. Por isso, antes de indicar qualquer tratamento, realizo uma avaliação individual para compreender a condição da pele e dos tecidos, identificar as alterações presentes e definir uma estratégia de cuidado. O tratamento pode envolver um ou mais recursos, sempre de acordo com a avaliação e a resposta de cada paciente.',
        layout: 'cards',
        columns: 4,
        items: [
          { label: 'Pilar 01', title: 'Análise Cutânea e Tecidual', body: 'Avaliação detalhada dos níveis de hidratação, oleosidade, integridade da barreira cutânea, elasticidade e microcirculação tecidual.' },
          { label: 'Pilar 02', title: 'Investigação da Queixa e Rotina', body: 'Compreensão do estilo de vida, fatores hormonais, histórico prévio e hábitos diários de cuidado e autocuidado.' },
          { label: 'Pilar 03', title: 'Planejamento Terapêutico Sob Medida', body: 'Seleção criteriosa de técnicas manuais, eletrotermofototerapia e tecnologias com rigor técnico.' },
          { label: 'Pilar 04', title: 'Acompanhamento & Resposta Biológica', body: 'Reavaliação constante de cada sessão para modular intensidade, parâmetros fisiológicos e garantir respostas seguras.' },
        ],
      },
      {
        eyebrow: 'Frentes dermatofuncionais & cuidado facial e corporal',
        title: 'Abordagens Especializadas para a Tua Pele e o Teu Corpo',
        intro: 'Protocolos pautados em indicações precisas, respeitando cada momento orgânico e priorizando conforto, naturalidade e saúde profunda.',
        layout: 'cards',
        columns: 3,
        items: [
          { title: 'Limpeza profunda da pele', body: 'A limpeza profunda pode ser indicada para pessoas que desejam cuidar da saúde e da aparência da pele, auxiliando na remoção de impurezas e no controle da oleosidade. Pode ser associada à hidratação e outros recursos, conforme as necessidades de cada pele. É uma opção de cuidado para diferentes momentos da vida e pode ser personalizada de acordo com o objetivo do tratamento.', tags: ['Remoção de impurezas', 'Controle de oleosidade', 'Hidratação tecidual'] },
          { title: 'Acne, oleosidade e alterações da pele', body: 'A pele pode apresentar diferentes alterações ao longo da vida, como acne, oleosidade excessiva, manchas e alterações de textura. A fisioterapia dermatofuncional pode utilizar recursos específicos para cada situação, sempre considerando o tipo de pele e as características individuais.', tags: ['Equilíbrio da barreira', 'Ação anti-inflamatória', 'Textura uniforme'] },
          { title: 'Manchas e melasma', body: 'Manchas e melasma podem ter diferentes fatores envolvidos e exigem uma abordagem cuidadosa. O tratamento é definido após avaliação da pele e pode envolver diferentes recursos dermatofuncionais, de acordo com a indicação e as características de cada caso. O objetivo é cuidar da pele de forma progressiva e individualizada.', tags: ['Cuidado progressivo', 'Controle de pigmentação', 'Preservação cutânea'] },
          { title: 'Flacidez, celulite e gordura localizada', body: 'Alterações no contorno corporal, flacidez, celulite e gordura localizada estão entre as queixas estéticas mais comuns. A fisioterapia dermatofuncional pode utilizar diferentes recursos para trabalhar essas alterações, sempre respeitando as características de cada corpo e estabelecendo objetivos realistas para o tratamento. Entre os recursos que podem ser indicados estão a criolipólise, ultrassom, plataforma vibratória, radiofrequência e outras técnicas específicas, conforme avaliação.', tags: ['Criolipólise', 'Ultrassom terapêutico', 'Radiofrequência & plataforma'] },
          { title: 'Estrias', body: 'As estrias representam uma alteração da pele que pode surgir em diferentes fases da vida, especialmente durante períodos de grandes mudanças corporais. O tratamento é definido de acordo com o estágio e as características da estria. Quanto mais recente a alteração, maiores podem ser as possibilidades de intervenção. Por isso, a avaliação precoce é importante para definir a melhor estratégia de cuidado.', tags: ['Avaliação precoce', 'Estímulo de colágeno', 'Remodelamento tecidual'] },
          { title: 'Cicatrizes e alterações dos tecidos', body: 'A fisioterapia dermatofuncional também pode atuar no cuidado de cicatrizes e alterações dos tecidos após traumas, procedimentos ou cirurgias. Dependendo da fase e das características da cicatriz, podem ser utilizados recursos como terapia manual, mobilização dos tecidos, taping, laser terapêutico, ultrassom e outras técnicas. O objetivo é favorecer a mobilidade, a funcionalidade e a qualidade dos tecidos.', tags: ['Terapia manual', 'Taping & laserterapia', 'Mobilidade tecidual'] },
        ],
      },
      {
        eyebrow: 'Recurso terapêutico avançado',
        title: 'Radiofrequência de Alta Precisão',
        intro: 'A radiofrequência é um dos recursos consagrados utilizados na fisioterapia dermatofuncional e pode ser indicada para diferentes objetivos, como o cuidado da flacidez e de alterações do tecido. A indicação, frequência e parâmetros são definidos individualmente, de acordo com a região tratada e o objetivo terapêutico.',
        layout: 'feature',
        items: [{ title: 'Tecnologia aliada à avaliação clínica', body: 'A seleção do recurso considera as características do tecido, as necessidades da pessoa e o acompanhamento da resposta.', note: 'Tônus tissular · Estímulo térmico controlado · Parâmetros individualizados' }],
      },
      {
        eyebrow: 'Dimensão humana e autoestima',
        title: 'Cuidar da aparência também pode ser uma forma de cuidar de si',
        intro: 'Muitas vezes, uma alteração aparentemente estética interfere na autoestima, na maneira como a pessoa se olha e até na forma como se relaciona com o próprio corpo. Por isso, meu trabalho não é buscar um padrão de beleza.',
        introEmphasis: '**É oferecer um cuidado individualizado para que cada pessoa possa se sentir melhor na própria pele, respeitando suas características e seus objetivos.**',
        layout: 'cards',
        columns: 3,
        items: [
          { title: 'Autoestima e Relação com o Corpo', body: 'Acolher a percepção individual e a história corporal de cada paciente, sem imposições de estereótipos ou exigências inalcançáveis.' },
          { title: 'Respeito à Fisiologia Única', body: 'Estimular os processos regenerativos naturais e a resposta biológica de cada organismo com segurança, rigor e respaldo médico.' },
          { title: 'Objetivos Reais e Sustentáveis', body: 'Clareza ética e transparência em cada etapa, estabelecendo metas plausíveis e duradouras para a tua saúde dérmica e bem-estar.' },
        ],
      },
    ],
    closingTitle: 'O cuidado começa pela escuta atenta',
    closingBody: 'Cada consulta é um espaço seguro para compreender a tua história, entender tuas expectativas e planejar um cuidado que respeite a pele e a fisiologia de cada pessoa.',
    quote: 'Saúde, funcionalidade, estética e autoestima podem caminhar juntas.',
  },
  'pre-e-pos-operatorio': {
    subtitle: 'Pré e pós-operatórios de cirurgias plásticas',
    introduction: [
      'A recuperação de uma cirurgia plástica não termina quando o procedimento acaba. O período **pré e pós-operatório exige atenção, acompanhamento e cuidados específicos** para que o corpo possa passar por esse processo de forma mais segura e confortável.',
      'Cada cirurgia apresenta características diferentes, assim como cada organismo responde de uma maneira. Por isso, **meu atendimento não segue um protocolo único.**',
      'A partir da **avaliação individual**, defino os recursos e as técnicas mais adequados para cada fase da recuperação.',
    ],
    sections: [
      {
        eyebrow: 'Fase pré-operatória · preparação e consciência corporal',
        title: 'Preparação para cirurgia',
        intro: 'O cuidado pode começar antes mesmo do procedimento. A fisioterapia pré-operatória permite conhecer o corpo da paciente, identificar necessidades específicas e orientar sobre os cuidados que fazem parte da recuperação.',
        introEmphasis: 'Esse primeiro contato também possibilita estabelecer um acompanhamento mais próximo para o período após a cirurgia.',
        layout: 'cards',
        columns: 3,
        items: [
          { title: 'Por que fazer um acompanhamento pré-operatório?', body: 'A preparação pode contribuir para que a paciente chegue ao procedimento mais informada e preparada para o período de recuperação, entendendo o que esperar e quais cuidados serão importantes após a cirurgia.', note: 'Orientação, segurança e preparo para a recuperação' },
          { label: 'Avaliação', title: 'Avaliação biomecânica prévia', body: 'Identificação das necessidades da paciente, padrão postural e aspectos funcionais que podem influenciar sua recuperação.' },
          { label: 'Orientação', title: 'Orientações posturais e mobilidade', body: 'Movimentos e posições que podem facilitar os cuidados e a rotina nos primeiros dias após a cirurgia.' },
          { label: 'Preparação', title: 'Preparo e trofismo tecidual', body: 'Recursos selecionados para preparar os tecidos, sempre considerando o procedimento e a avaliação individual.' },
        ],
      },
      {
        eyebrow: 'Recuperação tecidual & bem estar',
        title: 'Pós-operatório: cada corpo tem seu tempo',
        intro: 'Após uma cirurgia, é comum haver edema, hematomas, dor, alterações de sensibilidade e restrições de movimento.',
        introSecondary: 'O acompanhamento fisioterapêutico busca auxiliar o organismo nesse processo de recuperação, respeitando o tipo de cirurgia, o estágio de cicatrização e a resposta de cada paciente.',
        layout: 'cards',
        columns: 2,
        items: [
          { title: 'Drenagem linfática pós-operatória', body: 'A drenagem linfática é um dos recursos que podem fazer parte do pós-operatório, mas não é o único.', extraBody: 'Quando indicada, é realizada com técnicas manuais específicas e adaptadas ao momento da recuperação, buscando favorecer o fluxo linfático, auxiliar no controle do edema e proporcionar mais conforto.', noteTitle: 'Pressão milimétrica e toque suave', noteBody: 'Nunca invasivo ou doloroso. A drenagem verdadeira estimula os capilares linfáticos superficiais sem tracionar planos cirúrgicos em cicatrização.' },
          { label: 'Arsenal terapêutico integrado', title: 'Um pós-operatório não é apenas drenagem', body: 'O acompanhamento pode envolver diferentes recursos, escolhidos de acordo com a avaliação e a evolução da paciente.', points: ['Drenagem linfática manual especializada', 'Técnicas manuais e liberação tecidual', 'Taping compressivo ou não-compressivo, dependendo da necessidade', 'Laser terapêutico (fotobiomodulação)', 'Ultrassom terapêutico coadjuvante', 'Exercícios terapêuticos e cinesioterapia', 'Cuidados específicos com cicatrizes', 'Manejo criterioso de fibroses e aderências'], note: 'Critério Clínico em Tempo Real: A combinação dessas técnicas não é determinada apenas pelo tipo de cirurgia. Ela é definida de acordo com o que o corpo apresenta em cada momento.' },
        ],
      },
      {
        eyebrow: 'Restauração profunda dos tecidos',
        title: 'Manejo de Sintomas e Restauração dos Tecidos',
        intro: 'Abordagem clínica especializada voltada para a fisiopatologia do reparo tecidual e prevenção de intercorrências pós-cirúrgicas.',
        layout: 'cards',
        columns: 3,
        items: [
          { title: 'Edema, hematomas e desconforto', body: 'O edema e os hematomas fazem parte da resposta do organismo ao trauma cirúrgico, mas precisam ser acompanhados durante a recuperação. O tratamento fisioterapêutico busca favorecer a evolução desses sinais, proporcionando mais conforto e auxiliando na retomada gradual dos movimentos e das atividades.', note: 'Intensidade ajustada conforme a fase' },
          { title: 'Fibrose e aderências', body: 'Algumas pacientes apresentam áreas de endurecimento, irregularidades, fibroses ou aderências durante ou após o processo de recuperação. Quando essas alterações estão presentes, o tratamento é direcionado especificamente para elas. Por meio da avaliação dos tecidos e da utilização de técnicas manuais e outros recursos quando indicados, o objetivo é melhorar a mobilidade e a qualidade dos tecidos e favorecer a recuperação funcional da região.', note: 'Terapia manual tecidual profunda' },
          { title: 'Cuidado com a cicatriz', body: 'A cicatriz também faz parte do processo de recuperação. Dependendo da fase de cicatrização, podem ser utilizados recursos como terapia manual, mobilização dos tecidos, taping e laser terapêutico, quando indicado. O objetivo é favorecer a mobilidade da região, cuidar da qualidade do tecido cicatricial e evitar que alterações de mobilidade ou aderências comprometam a funcionalidade.', note: 'Laserterapia e taping de contenção' },
        ],
      },
      {
        eyebrow: 'Evolução clínica baseada em evidências',
        title: 'Recuperar o movimento também faz parte do tratamento',
        layout: 'cards',
        columns: 2,
        items: [
          { label: 'Cinesioterapia cirúrgica', title: 'Recuperar o movimento também faz parte do tratamento', body: 'Depois de uma cirurgia, é natural que alguns movimentos fiquem limitados temporariamente. A recuperação funcional acontece de forma progressiva e deve respeitar o momento de cada paciente e as orientações da equipe médica.', extraBody: 'Quando indicada, a cinesioterapia pode fazer parte do tratamento para favorecer a retomada dos movimentos, da autonomia e das atividades do dia a dia.', note: 'Retomada gradativa de amplitude sem tração articular forçada' },
          { label: 'Reabilitação tardia & complexa', title: 'Quando o pós-operatório não evolui como esperado', body: 'Nem sempre a recuperação acontece da maneira que a paciente imaginava. Persistência de edema, fibroses, aderências, alterações de sensibilidade, irregularidades, dor ou limitações funcionais podem exigir uma avaliação específica.', extraBody: 'Nessas situações, o tratamento é direcionado para a alteração encontrada, buscando compreender o que está acontecendo com os tecidos e quais recursos podem contribuir para a evolução daquele quadro.', note: 'Intervenção resolutiva mesmo após meses ou anos da cirurgia' },
        ],
      },
    ],
    closingEyebrow: 'Abordagem humanizada e científica',
    closingTitle: 'Um olhar individualizado em cada fase',
    closingBody: 'Meu objetivo é acompanhar o corpo durante todo o processo de recuperação, utilizando minhas mãos, meu olhar clínico e os recursos fisioterapêuticos necessários para cada situação.\n\nSão 25 anos de experiência profissional, entendendo que cada corpo responde de uma maneira e que cada cirurgia exige um cuidado diferente.',
    quote: 'Mais do que acompanhar uma cirurgia, é cuidar da pessoa durante todo o processo de recuperação.',
  },
  'linfedema-e-lipedema': {
    heroTitle: 'Linfedema e lipedema:',
    subtitle: '**Cuidar do sistema linfático é cuidar do movimento, do conforto e da qualidade de vida.**',
    introduction: [
      '**Linfedema e lipedema** são condições diferentes, mas ambas podem trazer alterações no corpo, __desconforto, sensação de peso__ e impacto importante na rotina e na autoestima. A fisioterapia tem um **papel importante** no acompanhamento dessas condições, com estratégias individualizadas que levam em consideração as características de cada pessoa, a fase da condição e suas necessidades.',
    ],
    sections: [
      {
        eyebrow: 'Diagnóstico diferencial e abordagem respeitosa',
        title: 'Compreendendo as diferenças com rigor e respeito',
        intro: 'Embora compartilhem sensações de peso e incômodo nos membros, o linfedema e o lipedema possuem origens, tecidos-alvo e manejos fisioterapêuticos distintos. O diagnóstico preciso orienta o cuidado adequado.',
        layout: 'cards',
        columns: 2,
        items: [
          { label: 'Sistema linfático', title: 'Linfedema', body: 'O linfedema acontece quando há acúmulo de líquido rico em proteínas no tecido, decorrente de alterações no sistema linfático. Pode surgir nos braços, pernas ou em outras regiões do corpo e estar relacionado a diferentes causas, incluindo alterações congênitas, cirurgias, tratamentos oncológicos, infecções ou outras condições que comprometem o sistema linfático. O tratamento fisioterapêutico busca auxiliar no controle do edema, preservar a mobilidade e a função do membro e contribuir para uma melhor qualidade de vida.', features: [{ title: 'Causas multifatoriais', body: 'Pós-cirúrgico, pós-oncológico (esvaziamento ganglionar) ou congênito primário.' }, { title: 'Acúmulo hídrico e proteico', body: 'Congestão intersticial com alteração na consistência e na maleabilidade tecidual.' }, { title: 'Preservação da mobilidade', body: 'Manutenção do arco de movimento articular, prevenção de fibroses e recuperação da função.' }] },
          { label: 'Tecido adiposo', title: 'Lipedema', body: 'O lipedema é uma condição caracterizada por uma alteração na distribuição do tecido adiposo, geralmente acompanhada de sensibilidade, dor ou facilidade para desenvolver hematomas. Pode provocar sensação de peso, desconforto e impacto importante na relação da mulher com o próprio corpo. O tratamento fisioterapêutico não tem como objetivo simplesmente “eliminar gordura”, mas contribuir para o manejo dos sintomas, do edema associado e das limitações funcionais, além de favorecer mais conforto e qualidade de vida.', features: [{ title: 'Distribuição desproporcional', body: 'Deposição bilateral em membros inferiores e superiores com preservação típica dos pés e mãos.' }, { title: 'Sensibilidade dolorosa e hematomas', body: 'Hipersensibilidade ao toque, inflamação crônica de baixo grau e fragilidade capilar frequente.' }, { title: 'Cuidado especializado, sem falsas promessas', body: 'Foco no alívio da dor e da sensação de peso, no manejo do edema quando presente e na melhora do conforto, da funcionalidade e da autoestima.' }] },
        ],
      },
      {
        eyebrow: 'Prática integrada e baseada em evidências',
        title: 'Recursos clínicos e abordagens terapêuticas',
        intro: 'Técnicas manuais e tecnologias aplicadas com prudência, respeito à fisiologia e integração entre movimento e saúde tecidual.',
        layout: 'cards',
        columns: 3,
        items: [
          { label: 'Linfedema e cuidados específicos', title: 'Drenagem Linfática Manual', body: 'Por meio de manobras específicas, busca favorecer o fluxo da linfa e auxiliar na condução do líquido acumulado para regiões com capacidade de drenagem preservada. A técnica é realizada de maneira individualizada e integrada aos demais cuidados necessários para cada paciente.' },
          { label: 'Linfedema e cuidados específicos', title: 'Terapia Descongestiva Complexa', body: 'Dependendo do caso, o tratamento pode envolver diferentes estratégias, como drenagem linfática manual, cuidados com a pele, compressão e exercícios terapêuticos. A escolha dos recursos depende da avaliação e da necessidade de cada pessoa. O acompanhamento também envolve orientações para que o paciente participe ativamente no dia a dia.' },
          { label: 'Linfedema e cuidados específicos', title: 'Cuidado com a Pele & Prevenção', body: 'No linfedema, o cuidado com a pele é especialmente importante, pois alterações no sistema linfático podem aumentar o risco de complicações cutâneas. Além das técnicas utilizadas durante as sessões, o paciente recebe orientações atentas para os cuidados com a barreira cutânea e a prevenção de lesões e infecções.' },
          { label: 'Lipedema e recursos avançados', title: 'Drenagem Linfática no Lipedema', body: 'Quando existe edema associado ao lipedema, a drenagem linfática pode fazer parte do tratamento. O objetivo é favorecer o fluxo linfático, auxiliar no controle do edema e proporcionar sensação de leveza e conforto. A frequência e as técnicas utilizadas são definidas rigorosamente conforme a avaliação e resposta da paciente.' },
          { label: 'Lipedema e recursos avançados', title: 'Movimento & Plataforma Vibratória', body: 'O movimento é um importante aliado no cuidado de pessoas com lipedema. Os exercícios podem ser adaptados às condições e ao nível de condicionamento de cada paciente. Quando indicada, a plataforma vibratória pode ser utilizada como recurso complementar durante o atendimento para estimular o fluxo e a ativação muscular sem impacto prejudicial.' },
          { label: 'Lipedema e recursos avançados', title: 'Cuidados Dermatofuncionais', body: 'Recursos da fisioterapia dermatofuncional podem ser utilizados de forma complementar e individualizada para textura da pele, flacidez, celulite e qualidade tecidual. Sempre com uma proposta realista e sem substituir o tratamento específico, zelando pela integridade da mulher e sua autoestima.' },
        ],
      },
      {
        eyebrow: 'Acolhimento integral',
        title: 'Um tratamento que olha para além do edema',
        intro: 'Linfedema e lipedema não devem ser tratados apenas como uma questão estética. Peso, dor, sensibilidade, edema, limitação de movimento e desconforto podem interferir profundamente na rotina e na qualidade de vida. Por isso, meu olhar é direcionado para a pessoa como um todo. A partir da avaliação, construo um plano de cuidado individualizado, que pode combinar drenagem linfática, exercícios, plataforma vibratória, cuidados dermatofuncionais e outras estratégias quando indicadas.',
        layout: 'cards',
        columns: 3,
        items: [
          { label: '01', title: 'Alívio da Sobrecarga Física & Sensação de Peso', body: 'Estimulação contínua e segura das vias linfáticas funcionais para diminuir a tensão tecidual e devolver leveza natural aos braços e pernas.', note: 'Conforto mecânico diário' },
          { label: '02', title: 'Acolhimento da Relação com o Próprio Corpo', body: 'Escuta atenta e livre de julgamentos estéticos. Reconhecimento da dor crônica, das frustrações e respeito absoluto ao tempo e aos limites de cada mulher.', note: 'Validação da dor e do histórico' },
          { label: '03', title: 'Autonomia & Prevenção no Dia a Dia', body: 'Educação em autocuidado: orientações claras de hidratação dérmica, identificação de sinais de alerta e adaptação ergonômica de tarefas.', note: 'Protagonismo no bem-estar' },
        ],
      },
    ],
    closingTitle: 'O cuidado começa pela escuta atenta',
    closingBody: 'Com mais de duas décadas dedicadas à reabilitação física e vascular, meu compromisso é acompanhar pacientes com informação, respeito e cuidado individualizado.',
    quote: 'O objetivo é que tu não apenas cuide do edema, mas consiga viver com mais leveza, movimento e qualidade de vida.',
  },
}
