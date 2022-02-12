import kotlinx.css.*
import kotlinx.html.js.onClickFunction

import react.Props
import react.dom.*
import react.fc
import styled.css
import styled.styledButton
import styled.styledDiv

external interface UsersListProps : Props {
    var userItems:  MutableList<UserItem>
    var delete: (UserItem) -> Unit
}

val UsersList = fc<UsersListProps> { props ->
    styledDiv {
        css {
            display = Display.flex
            flexDirection = FlexDirection.column
            gap = 5.px
        }
        props.userItems.mapIndexed { index, item ->
            styledDiv {
                css {
                    display = Display.grid
                    gridTemplateColumns = GridTemplateColumns(1.fr, 1.fr, 1.fr, 1.fr, 1.fr, 1.fr)
                    alignItems = Align.center
                    padding(0.px, 32.px)
                    minHeight = 48.px
                    backgroundColor = Color.gray
                }
                key = item.hashCode().toString()
                span { +item.name}
                span { +item.surname }
                span { +item.patronymic }
                span { +item.email }
                span { +item.login }
                styledButton {
                    css {
                        display = Display.flex
                        justifyContent = JustifyContent.center
                        alignItems = Align.center
                    }
                    attrs {
                        onClickFunction = { props.delete(item) }
                    }
                    +"Удалить"
                }
            }
        }
    }

}