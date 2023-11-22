import React from 'react';
import {withAuth} from "../../hooks/withLogin";

const Mine = () => {
    return (
        <div>
           我的
        </div>
    );
};

export default withAuth(Mine);