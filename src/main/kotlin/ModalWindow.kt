import kotlinx.css.*
import kotlinx.html.js.onChangeFunction
import kotlinx.html.js.onClickFunction
import kotlinx.html.js.onSubmitFunction
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.events.Event
import org.w3c.dom.events.EventListener
import react.Props
import react.StateInstance
import react.dom.*
import react.fc
import react.useState
import styled.*

class FormControl(
    val label: String,
    val placeHolder: String,
    val name: String,
)

val formControlsCollection = listOf(
    FormControl("Фамилия", "Введите фамилию", "surname"),
    FormControl("Имя", "Введите имя", "name"),
    FormControl("Отчество", "Введите отчество", "patronymic")
)

external interface ModalWindowProps : Props {
    var add: (user: UserItem) -> Unit
}


val ModalWindow = fc<ModalWindowProps> { props ->
//  todo?  val (inputValues, setInputValues) = useState(
//        UserItem("", "", "", "", "")
//    )

    val (inputValues, setInputValues) = useState(
        mutableMapOf(
            "name" to "",
            "surname" to "",
            "patronymic" to "",
            "email" to "",
            "login" to ""
        ) 
    )

    val changeHandler: (Event) -> Unit = {
        val element = it.target as HTMLInputElement
        val newState = inputValues.toMutableMap()
        newState[element.name] = element.value
       setInputValues(newState)
    }

    val submitHandler: (Event) -> Unit = {
        it.preventDefault()
// ??        props.add(inputValues)

    }

    styledDiv {
        css {
            position = Position.fixed
            top = 0.px
            left = 0.px
            right = 0.px
            bottom = 0.px
            backgroundColor = rgba(53, 61, 75, 0.2)
            display = Display.flex
            justifyContent = JustifyContent.center
            alignItems = Align.center
        }
        styledForm {
            attrs.onSubmitFunction = submitHandler
            css {
                display = Display.flex
                flexDirection = FlexDirection.column
            }
            styledDiv {
                css {
                    backgroundColor = rgb(53, 61, 75)
                }
                +"Добавление пользователя"
            }
            div {
                formControlsCollection.forEach { it ->
                    styledLabel {
                        key = it.hashCode().toString()
                        css {
                            display = Display.flex
                            flexDirection = FlexDirection.column
                        }
                        it.label
                        input() {
                            attrs {
                                placeholder = it.placeHolder
                                value = inputValues[it.name].toString()
                                onChangeFunction = changeHandler
                                name = it.name
                            }
                        }
                    }
                }
            }
            button {
                +"Добавить"
            }
        }
    }

}


