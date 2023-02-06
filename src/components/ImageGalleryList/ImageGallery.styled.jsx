import styled from 'styled-components';

export const MainTitle = styled.h1`
  color: rgb(78, 171, 197);
  text-align: center;
  margin: 50px 20px;
`;

export const GalleryListStyled = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const GalleryItemStyled = styled.li`
  border-radius: 15px;
  overflow: hidden;
  display: block;
  border: solid 1px;
  border-color: rgb(231, 224, 228);

  &:hover,
  &:focus {
    border-color: rgb(194, 163, 223);
    box-shadow: 0px 3px 20px rgb(0 0 0 / 20%), 0px 3px 10px rgb(0 0 0 / 14%),
      0px 6px 15px rgb(0 0 0 / 20%);
  }
`;

export const ImageStyled = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const ImageLarge = styled.img`
  width: 700px;
  height: 500px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
