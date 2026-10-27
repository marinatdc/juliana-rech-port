import prePostImage from '../assets/pre-pos-operatio.jpeg'
import complicationsImage from '../assets/intercorrencia-cirur.jpeg'
import maternityImage from '../assets/gest-puerp.webp'
import painImage from '../assets/dor.jpg'
import dermatofunctionalImage from '../assets/dermatofuncional.webp'
import lymphedemaImage from '../assets/lip-lif.jpeg'

export interface Procedure {
  slug: string
  title: string
  description: string
  image: string
}

export const procedures: Procedure[] = [
  {
    slug: 'pre-e-pos-operatorio',
    title: 'Pré e pós-operatório',
    image: prePostImage,
    description: 'Cuidados individualizados no pré e pós-operatório de cirurgias plásticas, com técnicas adequadas a cada fase para uma recuperação segura e confortável.',
  },
  {
    slug: 'intercorrencias-esteticas',
    title: 'Intercorrências Estéticas e Cirúrgicas',
    image: complicationsImage,
    description: 'Nem sempre a recuperação após um procedimento estético ou cirúrgico evolui como esperado. Fibroses, edemas persistentes, dores e alterações cicatriciais podem exigir cuidados fisioterapêuticos especializados.',
  },
  {
    slug: 'gestantes-e-puerperas',
    title: 'Gestantes e Puérperas',
    image: maternityImage,
    description: 'Na gestação e no pós-parto, ofereço um cuidado fisioterapêutico individualizado para aliviar dores e desconfortos físicos, cuidar das alterações estéticas e auxiliar na recuperação do corpo.',
  },
  {
    slug: 'tratamento-da-dor',
    title: 'Tratamento da Dor',
    image: painImage,
    description: 'A dor não precisa fazer parte da tua rotina. Por meio de uma avaliação individualizada, identifico as características da dor, sua duração e seus impactos no dia a dia para definir um plano de tratamento personalizado.',
  },
  {
    slug: 'fisioterapia-dermatofuncional',
    title: 'Fisioterapia dermatofuncional',
    image: dermatofunctionalImage,
    description: 'Tratamentos especializados para cuidar da saúde e da qualidade dos tecidos, melhorar o aspecto das cicatrizes, favorecer a firmeza da pele e tratar alterações estéticas e funcionais.',
  },
  {
    slug: 'linfedema-e-lipedema',
    title: 'Linfedema e Lipedema',
    image: lymphedemaImage,
    description: 'Cuidado fisioterapêutico individualizado, com foco no controle do edema, na melhora da circulação linfática, na redução de desconfortos e no acompanhamento especializado.',
  },
]
