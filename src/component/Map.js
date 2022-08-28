import { useParams } from "react-router-dom";

const Map = () => {
    const location = useParams();
  return (
    <>
    {
        location.location === undefined ? (
<iframe
              width="600"
              height="500"
              id="gmap_canvas"
              src={
                "https://maps.google.com/maps?q=" +
                "asia" +
                "&t=&z=12&ie=UTF8&iwloc=&output=embed"
              }
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
        ):(
            
            <iframe
              width="600"
              height="500"
              id="gmap_canvas"
              src={
                "https://maps.google.com/maps?q=" +
                location.location +
                "&t=&z=12&ie=UTF8&iwloc=&output=embed"
              }
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
        )
    }
    </>
  );
};
export default Map;
