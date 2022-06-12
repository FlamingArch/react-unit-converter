import React, { useState } from 'react'
import Areas from '../../Model/Area';
import _ from "lodash"

const AreaPage = () => {
    const [text, setText] = useState(0.0);

    const controller = new Areas();

    return (
        <Page tite="Area">
            <ListItem>
                <Picker type="dropdown" items={controller.units} />
                <TextField alignment="left" setter={setText}>{text}</TextField>
            </ListItem>
            {controller.units.map(e, idx => {
                <ListItem id={idx}>
                    <Text type="primary">{_.replace(_.startCase(e), "-", " ")}</Text>
                    <Text type="secondary">{controller.getValue(e)}.</Text>
                </ListItem>
            })}
        </Page>
    )
}

export default AreaPage