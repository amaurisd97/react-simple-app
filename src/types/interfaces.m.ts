export interface Route {
  Component: React.LazyExoticComponent<() => JSX.Element> | (() => JSX.Element)
  name: string
  path: string
  to: string
}
