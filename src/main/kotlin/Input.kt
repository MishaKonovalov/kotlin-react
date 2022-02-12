import kotlinx.css.Display
import kotlinx.css.FlexDirection
import kotlinx.css.display
import kotlinx.css.flexDirection
import react.Props
import react.dom.attrs
import react.dom.input
import react.fc
import styled.css
import styled.styledLabel

external interface InputProps: Props {
    var control: FormControl
    var value: String

}

val Input = fc<InputProps> { props ->
    styledLabel {
        css {
            display = Display.flex
            flexDirection = FlexDirection.column
        }
        props.control.label
        input {
            attrs {
                placeholder = props.control.placeHolder
                value = props.value
            }
        }
    }
}