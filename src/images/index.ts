export interface IEdgeSharpItem {
  edges: INodeSharpItem[];
}

export interface INodeSharpItem {
  node: IImageSharpItem;
}

export interface IImageSharpItem {
  id: string;
  childImageSharp: ChildImageSharp;
}

export interface ChildImageSharp {
  id: string;
  fluid: Fluid;
}

export interface Fluid {
  tracedSVG: string;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

const images = {
  mock: {
    board: require("./__mocks__/board.png")
  },
  portfolio: {
    competition: require("./portfolio/competition"),
    house: require("./portfolio/house"),
    intersection: require("./portfolio/intersection"),
    main: require("./portfolio/main"),
    skhualarm: require("./portfolio/skhualarm"),
    skhucalc: require("./portfolio/skhucalc"),
    softhome: require("./portfolio/softhome")
  },
  githubIcon: require("./Github.svg"),
  googlePlayButton: require("./GooglePlay.png"),
  intro1: require("./intro-1.jpg"),
  octocatIcon: require("./Octocat.png"),
  quokka: require("./quokka.png"),
  closeIcon: require("./x-circle.svg"),
  facebook: require("./facebook.svg"),
  instagram: require("./instagram.svg"),
  linkedin: require("./linkedin.svg"),
  storybook: require("./storybook.png")
};

export default images;
