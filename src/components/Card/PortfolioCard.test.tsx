import { shallow } from "enzyme";
import _ from "lodash";
import React from "react";
import LinkIcon from "react-icons/lib/go/link";
import GithubIcon from "react-icons/lib/go/mark-github";
import { PortfolioCard } from ".";

describe("Component: PortfolioCard", () => {
  const minProps = {
    githubUrl: "",
    images: [],
    linkUrl: "",
    name: "",
    onImagePopup: _.identity,
    period: "",
    skills: [],
    summary: ""
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
