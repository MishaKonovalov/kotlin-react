import react.dom.*
import kotlinx.browser.document
import kotlinx.css.*
//import kotlinx.serialization.Serializable
import styled.*

fun main() {
    render(document.getElementById("root")) {
        child(app){}
    }
}