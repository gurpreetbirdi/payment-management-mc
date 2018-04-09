import React from 'react';
import PaymentManger from './PaymentManager'
import { Test } from 'global-store-mc'


class PM extends React.Component {
    render() {
        return (
            <div>
                <Test><PaymentManger /></Test>
            </div>
        );
    }
}
export default PM;