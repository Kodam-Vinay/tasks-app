import styled from 'styled-components'

export const MyTasksBgContainer = styled.div`
  height: 100vh;
  font-family: 'Roboto';
  display: flex;
`
export const FormContainer = styled.form`
  width: 40%;
  height: 100%;
  background: #131213;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MainHeading = styled.h1`
  color: ${props => (props.tags || props.tasks ? '#ffffff' : '#f3aa4e')};
  text-align: ${props => (props.tags || props.tasks ? 'left' : 'center')};
  margin-top: ${props => (props.tags ? '70px' : '100px')};
  font-size: ${props => (props.tags || props.tasks ? '24px' : '32px')};
  margin-top: ${props => (props.tasks ? '30px' : '')};
`
export const EachInputContainer = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 90%;
`

export const LabelElement = styled.label`
  color: #ffffff;
  margin-bottom: 5px;
  align-self: flex-start;
`
export const InputElement = styled.input`
  border-radius: 3px;
  height: 40px;
  width: 100%;
  outline: none;
  color: #64748b;
  padding: 5px;
  font-weight: 600;
`
export const SelectElement = styled.select`
  border-radius: 3px;
  height: 40px;
  width: 100%;
  outline: none;
  color: #000000;
  padding: 5px;
`

export const OptionEl = styled.option`
  color: #323f4b;
  font-weight: 600;
`

export const AddTaskButton = styled.button`
  background: #f3aa4e;
  color: #f8f8f8;
  font-weight: 600;
  margin-top: 50px;
  height: 40px;
  width: 110px;
  border: 0;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
`

export const ShowTasksContainer = styled.div`
  height: 100%;
  width: 60%;
  background: #000000;
  padding: 10px;
`

export const ButtonsListContainer = styled.ul`
  list-style: none;
  padding: 1px;
  display: flex;
`
export const TasksListContainer = styled.ul`
  list-style: none;
  padding: 1px;
  display: flex;
  flex-direction: column;
`
export const ParagraphText = styled.p`
  color: #f1f5f9;
  font-size: 32px;
  font-weight: 600;
  margin-top: 50px;
  text-align: center;
`
