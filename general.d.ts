declare module '*.svg' {
  const svg: FunctionComponent<SVGAttributes<SVGElement>>;
  export default svg;
}

declare module '*.svg?url' {
  const svg: string;
  export default svg;
}

declare module '*.json' {
  const value: any;
  export default value;
}
