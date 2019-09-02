import React from "react";
import { shallow } from "enzyme";
import GithubIcon from "react-icons/lib/go/mark-github";
import LinkIcon from "react-icons/lib/go/link";
import { PortfolioCard } from ".";

describe("Component: PortfolioCard", () => {
  const minProps = {
    name: "",
    period: "",
    skills: [],
    summary: "",
    images: [],
    githubUrl: "",
    linkUrl: "",
    onImagePopup: () => {}
  };

  it("renders PortfolioCard without exploding", () => {
    const wrapper = shallow(<PortfolioCard {...minProps} />);
    // console.log(wrapper.length);
    expect(wrapper).toHaveLength(1);
  });

  it("renders PortfolioCard without githubUrl", () => {
    const wrapper = shallow(<PortfolioCard {...minProps} githubUrl="" />);
    expect(wrapper.find(GithubIcon)).toHaveLength(0);
  });

  it("renders PortfolioCard without linkUrl", () => {
    const wrapper = shallow(<PortfolioCard {...minProps} linkUrl="" />);
    expect(wrapper.find(LinkIcon)).toHaveLength(0);
  });
});
