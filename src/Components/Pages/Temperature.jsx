import React, { useState } from 'react'
import Temperatures from '../../Model/Temperature';
import _ from "lodash"

import Page from '../Views/Page'
import ListItem from '../Views/ListItem';
import Text from '../Views/Text';
import TextField from '../Views/TextField';
import Picker from '../Views/Picker';

const TemperaturePage = () => {
    const [value, setValue] = useState(0.0);
    const [unit, setUnit] = useState("celsius");

    const controller = new Temperatures();

    return (
        <Page title="Temperature">
            <ListItem input={true}>
                <Picker
                    type="dropdown"
                    items={controller.units.map(e => _.capitalize(e))}
                    selected={controller.units.indexOf(unit)}
                    onChange={(e) => {
                        setUnit("")
                        let unit = _.kebabCase(_.lowerCase(e));
                        console.log(`SELECT UNIT: ${unit}`)
                        setUnit(unit)
                    }}
                />
                <TextField type="number" alignment="left" text={`${value}`} onChange={(e) => {
                    setValue(_.toNumber(e));
                    console.log(value);
                }} />
            </ListItem>
            {controller.units.map((e, idx) => {
                return <ListItem key={idx}>
                    <Text type="primary">{_.replace(_.startCase(e), "-", " ")}</Text>
                    <Text type="secondary">{controller.convertValue(value, unit, e)}</Text>
                </ListItem>
            })}
        </Page>
    )
}

export default TemperaturePage