import React, { useState } from 'react'
import Volumes from '../../Model/Volume';
import _ from "lodash"

import Page from '../Views/Page'
import ListItem from '../Views/ListItem';
import Text from '../Views/Text';
import TextField from '../Views/TextField';
import Picker from '../Views/Picker';

const VolumePage = () => {
    const [value, setValue] = useState(0.0);
    const [unit, setUnit] = useState(0.0);

    const controller = new Volumes();

    return (
        <Page tite="Volume">
            <ListItem>
                <Picker type="dropdown" items={controller.units} />
                <TextField alignment="left" setter={setValue}>{value}</TextField>
            </ListItem>
            {controller.units.map((e, idx) => {
                <ListItem id={idx}>
                    <Text type="primary">{_.replace(_.startCase(e), "-", " ")}</Text>
                    <Text type="secondary">{controller.convertValue(value, unit, e)}.</Text>
                </ListItem>
            })}
        </Page>
    )
}

export default VolumePage