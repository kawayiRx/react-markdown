/// <reference types="@mdx-js/react" />

declare module '@mdx-js/react' {
  import * as React from 'react'

  type ComponentType =
    | 'a'
    | 'blockquote'
    | 'code'
    | 'delete'
    | 'em'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'hr'
    | 'img'
    | 'inlineCode'
    | 'li'
    | 'ol'
    | 'p'
    | 'pre'
    | 'strong'
    | 'sup'
    | 'table'
    | 'td'
    | 'thematicBreak'
    | 'tr'
    | 'ul'
  export type Components = {
    // eslint-disable-next-line no-unused-vars
    [key in ComponentType]?: React.ComponentType<{ children: React.ReactNode }>
  }
  export interface MDXProviderProps {
    children: React.ReactNode
    components: Components
  }
  // eslint-disable-next-line react/prefer-stateless-function
  export class MDXProvider extends React.Component<MDXProviderProps> {}

  export const mdx: any
}
