import React from "react"
import { ReactDOM } from "react-dom"
import { JsonForms } from "@jsonforms/react"

function renderComponent(containerId, props = {}) {
    ReactDOM.render(
        <JsonForms {...props}/>,
        document.getElementById(containerId)
    )
}

window.APEXjsonforms = renderComponent;