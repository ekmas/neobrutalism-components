import bento from "@public/template-previews/bento.webp"
import blog from "@public/template-previews/blog.webp"
import portfolio from "@public/template-previews/portfolio.webp"
import windowedPortfolio from "@public/template-previews/windowed-portfolio.webp"

const TEMPLATES = [
  {
    title: "Portfolio",
    previewImg: portfolio,
    liveUrl: "https://neobrutalism-portfolio.netlify.app/",
    repoUrl: "https://github.com/neobrutalism-templates/portfolio",
    color: "#ff7b07",
  },
  {
    title: "Blog",
    previewImg: blog,
    liveUrl: "https://neobrutalism-blog.netlify.app/",
    repoUrl: "https://github.com/neobrutalism-templates/blog",
    color: "#ffbe00",
  },
  {
    title: "Windowed portfolio",
    previewImg: windowedPortfolio,
    liveUrl: "https://neobrutalism-windowed-portfolio.netlify.app/",
    repoUrl: "https://github.com/neobrutalism-templates/windowed-portfolio",
    color: "#7983ff",
  },
  {
    title: "Bento",
    previewImg: bento,
    liveUrl: "https://neobrutalism-bento.netlify.app/",
    repoUrl: "https://github.com/neobrutalism-templates/bento",
    color: "#5093fe",
  },
]

export default TEMPLATES
