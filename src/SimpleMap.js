import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ key }) => (
  <div
    className="gps-icon"
    onClick={(event) => {
      alert("WORKS");
    }}
    onKeyDown={(event) => {
      alert("WORKS");
    }}
    role="link"
    tabIndex={key}
  ></div>
);

const SimpleMap = ({ coordinates }) => {
  // const [coordinates, coordinatesState] = useState([59.95, 30.33]);

  // let miPrimeraPromise = new Promise((resolve, reject) => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       resolve(position.coords);
  //     });
  //     // setTimeout(() => {
  //     //   resolve([59.95, 30.33]);
  //     // }, 3000);
  //   } else {
  //     reject();
  //   }
  // });

  // miPrimeraPromise
  //   .then((position) => {
  //     coordinatesState([position.latitude, position.longitude]);
  //   })
  //   .catch(() => {
  //     const app = document.getElementById("body");
  //     const error = document.createElement("div");
  //     error.textContent = "Geolocation is not supported by this browser.";
  //     app.appendChild(error);
  //   });

  return (
    <div style={{ height: "600px", width: "800px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBslND3WWlgubTTMDosMgcTWCSp4KRmnJk" }}
        defaultCenter={[59.95, 30.33]}
        defaultZoom={14}
      >
        {coordinates.map((value, index) => {
          return (
            <AnyReactComponent key={index} lat={value.lat} lng={value.long} />
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
