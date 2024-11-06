import { useState } from 'react';
import TablaCorredores from './TablaCorredores';

function Corredores() {
    const [corredores, setCorredores] = useState([]);

    return (
        <>
            <div className="row">
                <br></br>
                <br></br>
                <div className="col-12">
                    <TablaCorredores items={corredores}>
                    </TablaCorredores>
                </div>
            </div>
        </>
    )
}

export default Corredores;