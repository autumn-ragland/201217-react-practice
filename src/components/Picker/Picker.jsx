import React, {useState , useEffect} from 'react';
import styles from './Picker.module.css'
import {NativeSelect, FormControl} from '@material-ui/core'
import {fetchStates} from '../../api'


const Picker = () => {
    const [stateChoices, setStateChoices] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setStateChoices(await fetchStates());
        }
        fetchAPI();
    }, [setStateChoices]);

    // console.log(stateChoices);

    return (
        <div className={styles.container}>
            <FormControl variant="outlined" className={styles.formControl}>
                <NativeSelect>
                    <option value = "global">Global</option>
                    {stateChoices.map((state, i) => <option key={i} value={state}>{state}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default Picker;