// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      semantic: {
        success: string
      }
      primary: {
        main: string,
        contrast1: string,
        contrast2: string
      }
      gray: {
        background: string,
        gray400: string,
        gray300: string
      }
   },
   typography?: {
     primary: {
       fontFamily: string
     },
     secondary: {
      fontFamily: string
     }
   }
  }
}
