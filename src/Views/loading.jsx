import LoadingProjectAnim from "../Components/Loading/LoadingProjectAnim"
import LoadingAnim from "../Components/Loading/LoadingAnim"
import { Button} from 'antd';
import React, { useState } from 'react';

export default function Loading() {
    const [loading, setLoading] = useState(false);

    function showLoading() {
        return(
            <LoadingProjectAnim/>
        );
    };

    return(
        //<LoadingAnim/>
        <Button type="primary" size="Large" onClick={() => {showLoading()}} > Start </Button>
    );
} 