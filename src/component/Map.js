const Map = (props) => {
    console.log(props.mapurl,"12345")
    return (
        <>
        {
            props.mapurl !==""? (

                <iframe width="600" height="500" id="gmap_canvas" src={'https://maps.google.com/maps?q='+props.mapurl+'&t=&z=12&ie=UTF8&iwloc=&output=embed'} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            ):""

        }
        </>
    )
}
export default Map;
