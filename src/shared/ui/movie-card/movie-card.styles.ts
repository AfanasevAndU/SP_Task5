import styled from "styled-components";

export const CardContainer = styled.div`
  width: 800px;
  min-height: 180px;
  background-color: white;
  border-radius: 12px;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: black;
  margin-top: 10px;
  margin-bottom: 10px;
  flex-direction: row;
  display: flex;
  gap: 10px;
  color: black;
`;

export const MovieInformation = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const MovieTitle = styled.div`
  color: black;
  padding-top: 5px;
  font-weight: bold;
  font-size: 20px;
`;

export const MovieId = styled.div`
  padding-left: 10px;
  padding-top: 7px;
  font-weight: bold;
  min-width: 20px;
`;

export const MovieImage = styled.img`
  padding-top: 10px;
  padding-bottom: 10px;
  max-width: 100px;
  max-height: 100px;
`;

export const MovieDescription = styled.div`
  padding-top: 5px;
  font-size: 20px;
  width: 500px;
  max-height: 100%;
`;

export const MovieSeparator = styled.div`
  position: center;
  width: 1px;
  height: 180px;
  background-color: black;
`;
