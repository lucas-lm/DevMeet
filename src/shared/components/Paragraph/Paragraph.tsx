import styled from "styled-components/native";

interface Props {
  color?: 'main' | 'contrast1' | 'contrast2',
  size?: string,
}

const Paragraph = styled.Text<Props>`
  font-family: 'Epilogue';
  font-size: ${({ size='20px' }) => size};
  font-weight: normal;
  color: ${({ theme, color='contrast2' }) => theme.palette.primary[color]};
`

export default Paragraph
