
import React, { useEffect } from 'react';
import KakaoMapScript from "./KakaoMapScript";

export default function KakaoMap() {

    useEffect(() => {
        KakaoMapScript();
    }, []);

    return (
        <div>
            <div id='map' style={{
            width: "100%", height: "100vh"
        }}></div>
        </div>
        
    );
}