import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'

import {
  MyTasksBgContainer,
  FormContainer,
  MainHeading,
  LabelElement,
  EachInputContainer,
  InputElement,
  SelectElement,
  OptionEl,
  AddTaskButton,
  ShowTasksContainer,
  ButtonsListContainer,
  TasksListContainer,
  ParagraphText,
} from './styledComponents'

import TagItem from '../TagItem'
import TasksItem from '../TasksItem'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class MyTasks extends Component {
  state = {
    taskName: '',
    activeOptionId: '',
    tasksList: [],
    selectOptionId: tagsList[0].optionId,
    isButtonClicked: false,
  }

  onEnterNewTask = event => {
    this.setState({taskName: event.target.value})
  }

  onChangeSelectOption = event => {
    this.setState({selectOptionId: event.target.value})
  }

  onClickAddTask = event => {
    event.preventDefault()
    const {taskName, selectOptionId} = this.state
    const showItemText = tagsList.find(
      eachItem => eachItem.optionId === selectOptionId,
    )
    let newTask = {}
    if (showItemText !== undefined) {
      newTask = {
        id: uuidV4(),
        taskName,
        selectOptionId,
        displayText: showItemText.displayText,
      }
    }

    this.setState(prevState => ({
      tasksList: [...prevState.tasksList, newTask],
      taskName: '',
      selectOptionId: tagsList[0].optionId,
    }))
  }

  clickTagButton = id => {
    this.setState({activeOptionId: id, isButtonClicked: true})
  }

  render() {
    const {
      tasksList,
      activeOptionId,
      taskName,
      isButtonClicked,
      selectOptionId,
    } = this.state
    let List = []
    if (isButtonClicked) {
      List = tasksList.filter(
        eachTask => eachTask.selectOptionId === activeOptionId,
      )
    } else {
      List = tasksList
    }
    console.log(List)
    const checkLength = List.length > 0
    return (
      <MyTasksBgContainer>
        <FormContainer onSubmit={this.onClickAddTask}>
          <MainHeading>Create a task!</MainHeading>
          <EachInputContainer>
            <LabelElement htmlFor="taskInput">Task</LabelElement>
            <InputElement
              type="text"
              placeholder="Enter the task here"
              id="taskInput"
              onChange={this.onEnterNewTask}
              value={taskName}
            />
          </EachInputContainer>
          <EachInputContainer>
            <LabelElement htmlFor="tagsInput">Tags</LabelElement>
            <SelectElement
              id="tagsInput"
              onChange={this.onChangeSelectOption}
              value={selectOptionId}
            >
              {tagsList.map(eachItem => (
                <OptionEl key={eachItem.optionId} value={eachItem.optionId}>
                  {eachItem.displayText}
                </OptionEl>
              ))}
            </SelectElement>
          </EachInputContainer>
          <AddTaskButton type="submit">Add Task</AddTaskButton>
        </FormContainer>
        <ShowTasksContainer>
          <MainHeading tags>Tags</MainHeading>
          <ButtonsListContainer>
            {tagsList.map(eachItem => (
              <TagItem
                tagsList={eachItem}
                key={eachItem.optionId}
                clickTagButton={this.clickTagButton}
              />
            ))}
          </ButtonsListContainer>

          <MainHeading tasks>Tasks</MainHeading>
          {checkLength > 0 ? (
            <TasksListContainer>
              {List.map(eachItem => (
                <TasksItem tasksList={eachItem} key={eachItem.id} />
              ))}
            </TasksListContainer>
          ) : (
            <ParagraphText>No Tasks Added Yet</ParagraphText>
          )}
        </ShowTasksContainer>
      </MyTasksBgContainer>
    )
  }
}
export default MyTasks
