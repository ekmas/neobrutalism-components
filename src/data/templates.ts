import bento from '../../public/template-previews/bento.png'
import portfolio from '../../public/template-previews/portfolio.png'
import saas from '../../public/template-previews/saas.png'
import windowedPortfolio from '../../public/template-previews/windowed-portfolio.png'

const TEMPLATES = [
  {
    title: 'Saas',
    previewImg: saas,
    liveUrl: 'https://neobrutalism-saas.netlify.app/',
    repoUrl: 'https://github.com/neobrutalism-templates/saas',
    color: '#A3E636',
  },
  {
    title: 'Windowed portfolio',
    previewImg: windowedPortfolio,
    liveUrl: 'https://neobrutalism-windowed-portfolio.netlify.app/',
    repoUrl: 'https://github.com/neobrutalism-templates/windowed-portfolio',
    color: '#a388ee',
  },
  {
    title: 'Bento',
    previewImg: bento,
    liveUrl: 'https://neobrutalism-bento.netlify.app/',
    repoUrl: 'https://github.com/neobrutalism-templates/bento',
    color: '#88aaee',
  },
  {
    title: 'Portfolio',
    previewImg: portfolio,
    liveUrl: 'https://neobrutalism-portfolio.netlify.app/',
    repoUrl: 'https://github.com/neobrutalism-templates/portfolio',
    color: '#FD9745',
  },
]

export default TEMPLATES
