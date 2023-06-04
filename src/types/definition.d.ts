declare module '*.svg' {
  const component: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  export default component;
}

declare module 'typography-theme-fairy-gates' {
  export function overrideThemeStyles(
    VerticalRhythm: VerticalRhythm,
    options: TypographyOptions,
    styles: any
  ): object {}
}
