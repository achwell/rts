import {ChangeEvent, DragEvent, FC} from "react";

const EventComponent: FC = () => {

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e)
    }

    function onDragStart(e: DragEvent<HTMLDivElement> ) {
        console.log(e)
    }

    return <div>
        <input onChange={onChange}/>
        <div draggable onDragStart={onDragStart}>Drag Me!</div>
    </div>
}
export default EventComponent;