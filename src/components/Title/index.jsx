export default function Title(props){
    return(
        <>
            <h2 className="text-center mb-4">
                { props.children }
            </h2>
        </>
    );
}