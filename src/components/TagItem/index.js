import {TagListItem, TagButton} from './styledComponents'

const TagItem = props => {
  const {tagsList, clickTagButton} = props
  const {optionId, displayText} = tagsList
  const onClickTagButton = () => {
    clickTagButton(optionId)
  }
  return (
    <TagListItem>
      <TagButton onClick={onClickTagButton}>{displayText}</TagButton>
    </TagListItem>
  )
}
export default TagItem
