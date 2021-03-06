import styled, { css } from 'styled-components'
import * as polished from 'polished'
import { LiveProvider, LiveError, LivePreview } from 'react-live'

export const background = '#42374a'
export const foreground = '#f8f8f2'
export const red = '#ff5555'

export const blue = polished.lighten(0.1, '#d1b0dd')
export const lightGrey = polished.darken(0.06, '#42374a')

const codeSize = 16

export const H1 = styled.h1`
  font-size: 20px;
  font-weight: bolder;
  margin: 10px 0;
`

export const H2 = styled.h1`
  font-size: 18px;
  font-weight: bolder;
  margin: 5px 0;
`
export const H3 = styled.h1`
  font-size: 16px;
  font-weight: bolder;
  margin: 5px 0;
`
export const H4 = styled.h1`
  font-size: 14px;
  font-weight: bolder;
  margin: 5px 0;
`

export const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  border-radius: ${polished.rem(10)};
  padding: 0.5em;
  width: 50%;
  overflow: scroll;
  position: relative;
  &::-webkit-scrollbar {
    height: 0 !important;
    width: 0px !important;
  }
`

export const PreWrapper = styled.div`
  max-height: ${polished.rem(350)};
  overflow: auto;
  font-size: ${polished.rem(codeSize)};
  font-family: 'auto';
  &::-webkit-scrollbar {
    height: 0 !important;
    width: 0px !important;
  }
`

export const Copy = styled.div`
  position: absolute;
  right: 0;
  top: 10px;
  cursor: pointer;
  z-index: 10;
  font-size: 15px;
  color: #e5c07b;
`

export const P = styled.p`
  margin: 5px 0;
  line-height: inherit;
  /* width: 50%; */
`

export const Link = styled.a``

export const Em = styled.em`
  color: rgb(247, 140, 108);
  font-size: ${polished.rem(18)};
`

export const Li = styled.li`
  max-width: ${polished.rem(800)};
  margin: 7px 0;
  font-size: ${polished.rem(15)};
`

export const Td = styled.td`
  padding: ${polished.rem(20)};
  border: 1px solid #eee;
`

export const Line = styled.div`
  display: table-row;
`

export const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`

export const LineContent = styled.span`
  display: table-cell;
`

export const StyledProvider = styled(LiveProvider)`
  border-radius: ${polished.rem(3)};
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
  overflow: hidden;
  border-radius: ${polished.rem(10)};
  margin-bottom: ${polished.rem(100)};
`

export const LiveWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  @media (max-width: 600px) {
    flex-direction: column;
  }
  &::-webkit-scrollbar {
    height: 0 !important;
    width: 0px !important;
  }
`

export const column = css`
  flex-basis: 50%;
  width: 50%;
  max-width: 50%;
  @media (max-width: 600px) {
    flex-basis: auto;
    width: 100%;
    max-width: 100%;
  }
`

export const StyledEditor = styled.div`
  background: #fff;
  border-radius: ${polished.rem(10)};
  position: relative;
  font-family: 'Source Code Pro', monospace;
  font-size: ${polished.rem(codeSize)};
  /* height: ${polished.rem(350)}; */
  max-height: ${polished.rem(350)};
  margin: 10;
  overflow: auto;
  ${column};
  * > textarea:focus {
    outline: none;
  }
  &::-webkit-scrollbar {
    height: 0 !important;
    width: 0px !important;
  }
`

export const StyledPreview = styled(LivePreview)`
  position: relative;
  padding: 0.5rem;
  font-size: ${polished.rem(codeSize)};
  background: white;
  color: black;
  height: auto;
  overflow: hidden;
  ${column};
`

export const StyledError = styled(LiveError)`
  display: block;
  border-radius: 10px;
  padding: ${polished.rem(8)};
  background: ${red};
  color: ${foreground};
  white-space: pre-wrap;
  text-align: left;
  font-size: 0.9em;
  font-family: 'Source Code Pro', monospace;
`

export const Blockquote = styled.blockquote`
  border-left: 3px solid #ccc;
  color: #666;
  padding: 1px 23px;
  background-color: #f8f8f8;
  border-left: 4px solid #cbcbcb;
  margin: 10 0;
`
