import React, { useMemo } from 'react'
import styled from 'styled-components'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { mdx } from '@mdx-js/react'
import { LiveEditor } from 'react-live'
// import provideTheme from 'prism-react-renderer/themes/palenight'
import Echarts from 'components/echarts/base-charts'
import Clipboard from 'clipboard'
import {
  Pre,
  Line,
  LineContent,
  LineNo,
  StyledEditor,
  StyledError,
  StyledPreview,
  StyledProvider,
  LiveWrapper,
  PreWrapper,
  Copy
} from 'components/highlight/styles'
import { reactLiveHome } from './theme'
import * as AntDesign from './ant-design'

interface IHighlightProps {
  children?: string
  className?: string
  live?: boolean
  render?: boolean
  noInline?: boolean
  width?: string
}
// class Demo extends React.Component {
//   render() {
//     return <div>333</div>
//   }
// }

const IHighlight: React.FC<IHighlightProps> = (props) => {
  const { className = '', live, children = '', render, noInline = true, width } = props

  const lang: any = className.replace(/language-/, '')

  const CopyButton = useMemo(
    () => (
      <Copy
        data-clipboard-text={children}
        onClick={() => {
          const clipboard = new Clipboard('.copy')
          clipboard.on('success', (e) => {
            AntDesign.message.success('复制成功')
            e.clearSelection()
            clipboard.destroy()
          })

          clipboard.on('error', () => {
            AntDesign.message.error('复制失败')
          })
        }}
      >
        {`${lang} 代码复制`}
      </Copy>
    ),
    [children]
  )

  if (live || render) {
    return (
      <StyledProvider
        theme={reactLiveHome}
        style={{ border: 'none' }}
        code={children.trim()}
        noInline={noInline}
        disabled={!!render}
        // transformCode={(code) => {
        //   try {
        //     const transformed = transform(code, {
        //       plugins: [
        //         require('@babel/plugin-syntax-jsx'),
        //         [
        //           require('@babel/plugin-proposal-class-properties'),
        //           { loose: true },
        //         ],
        //       ],
        //     })?.code;
        //     return transformed || '';
        //   } catch (error) {
        //     return '';
        //   }
        // }}
        scope={{
          mdx,
          styled,
          Echarts,
          ...AntDesign,
          ...React
        }}
      >
        <LiveWrapper>
          <StyledEditor>
            {CopyButton}
            <LiveEditor style={{ fontFamily: 'auto' }} />
          </StyledEditor>
          <StyledPreview />
        </LiveWrapper>
        <StyledError />
      </StyledProvider>
    )
  }

  return (
    <Highlight {...defaultProps} code={children} language={lang} theme={reactLiveHome}>
      {({ className: classs, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={classs} style={{ ...style, width }}>
          <PreWrapper>
            {tokens.slice(0, tokens.length - 1).map((line, i) => (
              <Line {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
                <LineContent>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </LineContent>
              </Line>
            ))}
          </PreWrapper>
          {CopyButton}
        </Pre>
      )}
    </Highlight>
  )
}
export default IHighlight
