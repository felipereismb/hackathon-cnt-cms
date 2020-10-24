import styled from 'styled-components'

export const Fade = styled.pattern`
  display: ${props => props.active ? 'flex' : 'none' };
  white-space: nowrap;
  flex-direction: column;
  align-items: center;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Container = styled.div`
  display: flex;
  width: 262px;
  height: 57px;
  justify-content: space-between;
  align-items: center;
`
