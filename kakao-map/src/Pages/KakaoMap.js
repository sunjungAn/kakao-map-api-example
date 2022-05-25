
import React, { useEffect } from 'react';
import KakaoMapScript from "./KakaoMapScript";
import test from './test';

export default function KakaoMap() {

    useEffect(() => {
        //KakaoMapScript();
        test();
    }, []);

    return (
        <div>
            <div id='map' style={{
            width: "100%", height: "100vh"
        }}></div>
        </div>
        
    );
}