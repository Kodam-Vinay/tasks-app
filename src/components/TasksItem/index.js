import {TasksListItem, ParagraphText, TypeOfText} from './styledComponents'

const TasksItem = props => {
  const {tasksList} = props
  const {taskName, displayText} = tasksList
  return (
    <TasksListItem>
      <ParagraphText>{taskName}</ParagraphText>
      <TypeOfText>{displayText}</TypeOfText>
    </TasksListItem>
  )
}
export default TasksItem
