import { CodeScannerComponent } from "./codeScannerComponent"
import { ContactComponent } from "./contactComponent"
import { DataComponent } from "./dataComponent"
import { MapsComponent } from "./mapsComponent"

export function ContentController(props) {
    const itemChoice = {
        contact: <ContactComponent />,
        data: <DataComponent />,
        maps: <MapsComponent setOption = {props.setOption}/>,
        codeScanner: <CodeScannerComponent setOption = {props.setOption}/>
    }

    return itemChoice[props.option]
}
