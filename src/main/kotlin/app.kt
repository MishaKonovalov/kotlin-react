import kotlinx.css.*
import kotlinx.html.js.onClickFunction
import react.Props
import react.dom.*
import react.fc
import react.useState
import styled.css
import styled.styledHeader


data class UserItem(
    val patronymic: String,
    var name: String,
    val surname: String,
    val email: String,
    val login: String,
)

val app = fc<Props> {
    val (userList, setUserList) = useState(
        mutableListOf(
            UserItem(
                "Александр",
                "Иванов",
                "Иванович",
                "email",
                "loginnnn",
            ),
            UserItem(
                "Иван",
                "Иванов",
                "Иванович",
                "email",
                "login",
            ),
        )
    )
    val (isOpenModal, setIsOpenModal) = useState(false)


    val deleteUser = { user: UserItem ->
        setUserList(userList.filter { it.hashCode() != user.hashCode() } as MutableList)
    }

    val addUser = { user: UserItem ->
        val newArr = userList.toMutableList()
        newArr.add(user)
        setUserList(newArr)
    }

    div {
        styledHeader {
            css {
                display = Display.flex
                justifyContent = JustifyContent.spaceBetween
                alignItems = Align.center
            }
            h1 { +"Пользователи" }
            button {
                +"+ Добавить"
                attrs {
                    onClickFunction = {
                        setIsOpenModal(true)
                    }
                }
            }
        }
        child(UsersList) {
            attrs {
                userItems = userList
                delete = deleteUser
            }
        }
        if (isOpenModal)
            child(ModalWindow) {
                attrs {
                    add = addUser
                }
            }
        else null
    }
}