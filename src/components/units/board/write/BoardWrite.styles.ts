// IProps 정의는 스타일 부분 바로 위에 적어두자. ex) submitButton 부분과 같이!!
import styled from "@emotion/styled";
import { IRegisterBtnProps } from "./BoardWrite.types";

export const Position = styled.div`
  display: flex;
  justify-content: center;
`;
export const Wrapper = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 1200px;
  border-radius: 10px;
  background-color: #e8f9fd;
  box-shadow: 0px 0px 10px gray;
`;
export const Title = styled.div`
  margin: 50px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #79dae8;
  font-size: 32px;
  font-weight: bold;
`;
export const WrapperProfile = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 50px;
`;
export const Label = styled.div`
  color: #79dae8;
  display: flex;
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 10px;
`;
export const WriterContent = styled.input`
  width: 400px;
  font-size: 18px;
  height: 50px;
  padding-left: 10px;
  border: none;
  outline-color: #79dae8;
`;
export const ErrorMassage = styled.div`
  color: red;
  font-size: 14px;
  padding-top: 5px;
  padding-left: 5px;
`;
export const PasswordContent = styled.input`
  font-size: 18px;
  width: 400px;
  height: 50px;
  padding-left: 10px;
  border: none;
  outline-color: #79dae8;
`;
export const WrapperName = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;
export const NameContent = styled.input`
  width: 930px;
  font-size: 18px;
  height: 50px;
  padding-left: 10px;
  border: none;
  outline-color: #79dae8;
`;
export const WrapperContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;
export const ContentInput = styled.textarea`
  display: flex;
  font-size: 18px;
  width: 930px;
  min-height: 300px;
  padding-top: 10px;
  padding-left: 10px;
  border: none;
`;
export const YoutubeUrl = styled.input`
  width: 930px;
  height: 50px;
  font-size: 18px;
  padding-left: 10px;
  border: none;
  margin-bottom: 50px;
`;
export const ImageInfoWrapper = styled.div`
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
`;
export const UploadBtn = styled.button`
  width: 100px;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  color: #79dae8;
  border-radius: 10px;
  background-color: #0aa1dd;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #2155cd;
  }
`;
export const WrapperPicture = styled.div`
  width: 930px;
  min-height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 50px 0px;
`;
export const PictureInput = styled.input`
  display: none;
`;
export const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: scale-down;
`;
export const RegisterBtn = styled.button`
  margin: 50px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #79dae8;
  width: 930px;
  height: 50px;
  border: none;
  font-size: 20px;
  border-radius: 0px 0px 10px 10px;
  cursor: pointer;
  background-color: ${(props: IRegisterBtnProps) =>
    props.isActive === true ? "#0AA1DD" : "#f2f2f2"};
`;
