import styled from "styled-components/native";

interface Props {
  color?: 'main' | 'contrast1' | 'contrast2',
  size?: string,
}

const Title = styled.Text<Props>`
  font-family: 'Epilogue';
  font-size: ${({ size='32px' }) => size};
  font-weight: bold;
  color: ${({ theme, color='contrast1' }) => theme.palette.primary[color]};
`

export default Title
