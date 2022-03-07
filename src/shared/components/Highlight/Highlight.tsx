import styled from "styled-components/native";

interface Props {
  color?: 'main' | 'contrast1' | 'contrast2',
  weight?: 'normal' | 'bold';
  bg?: 'main' | 'contrast1' | 'contrast2'
}

const Highlight = styled.Text<Props>`
  font-weight: ${({ weight='bold' }) => weight};
  color: ${({ theme, color='main' }) => theme.palette.primary[color]};
  background-color: ${({ theme, bg }) => bg ? theme.palette.primary[bg] : 'transparent'};
`

export default Highlight
