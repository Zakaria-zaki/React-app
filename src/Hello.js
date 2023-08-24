export function Hello(props) {
    return  (
        <>
        <h1>Hello World {props.name} first components {props.age}</h1>
        { props.children }
        </>
    )
}