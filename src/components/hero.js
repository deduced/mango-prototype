import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
  background-position: top 20% center;
  background-size: cover;
  height: 50vh;
  + * {
    margin-top: 0;
  }
`;

const TextBox = styled('div')`
  background-image: linear-gradient(to top, #6e686866 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;

  h1 {
    color: #dabebe;
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
  }

  p,
  a {
    color: #dabebe99;
    margin-top: 0;
  }

  a {
    margin-top: 0.5rem;
  }
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "scary.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid}>
      <TextBox>
        <h1>Mango React Themes &hearts;</h1>
        <p>Amazing, developer-first, premium themes for React </p>
      </TextBox>
    </ImageBackground>
  );
};

export default Hero;
