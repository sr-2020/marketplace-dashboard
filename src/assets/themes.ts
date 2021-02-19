export interface ColorTheme {
  [key: string]: string
}

export const THEME_DARK: ColorTheme = {
  '--bg': '#253F58',
  '--accent': '#449AE9',
  '--accent-sec': '#035AAC',
  '--alert-error': '#EE4141',
  '--alert-warn': '#FC9700',
  '--alert-success': '#3EE763',
  '--font-prim': '#FFFFFF',
  '--font-sec': '#B5C5D3',
  '--font-tet': '#515C6B',
  '--border': '#346CA0',
  '--shadow': '4px 4px 8px #7C91A5'
}

export const THEME_LIGHT: ColorTheme = {
  '--bg': '#FFFFFF',
  '--accent': '#92CAFF',
  '--accent-sec': '#49A7FF',
  '--alert-error': '#DE3D3D',
  '--alert-warn': '#FF9900',
  '--alert-success': '#21BE44',
  '--font-prim': '#081929',
  '--font-sec': '#7C91A5',
  '--font-tet': '#E0EAF3',
  '--border': '#DEEAF4',
  '--shadow': '4px 4px 8px #7C91A5'
}
