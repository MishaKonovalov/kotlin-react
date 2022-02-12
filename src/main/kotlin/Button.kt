import kotlinx.css.*
import org.w3c.dom.HTMLButtonElement

import react.Props
import react.ReactNode

import react.fc
import styled.css
import styled.styledButton

class Type {
    val create: String = "create"
    val add: String = "add"
}

external interface ButtonProps : Props {
    var children: ReactNode
    var type: Type
}

val Button  = fc<ButtonProps> { props ->
    styledButton {
        css {
            display = Display.flex
            justifyContent = JustifyContent.center
            alignItems = Align.center
        }
        +props.children
    }
}