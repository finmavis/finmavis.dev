declare module '*.inline.svg' {
  const component: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  export default component;
}

declare module '*.svg' {
  const src: string;
  export default src;
}

declare module 'typography-theme-fairy-gates' {
  export function overrideThemeStyles(
    VerticalRhythm: VerticalRhythm,
    options: TypographyOptions,
    styles: any
  ): object {}
}
