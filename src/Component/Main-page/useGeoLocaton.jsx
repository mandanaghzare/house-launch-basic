import React, {useState, useEffect} from 'react'

const useGeoLocation = () => {
    const [location,setLocation] = useState({
        loaded: false,
        coordinates: { lat: "1", lng: "2" }
    });

    const onSuccess = (location) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            }
        })
        // {console.log(location.coords)}
    }
    const onError = (error) => {
        setLocation({
            loaded: true,
            error,
        })
    }

    useEffect(() => {
        if( !("geolocation" in navigator)){
            onError({
                code:0,
                message: "Geolocation not supported",
            });
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    },[])
    return location;
}

export default useGeoLocation