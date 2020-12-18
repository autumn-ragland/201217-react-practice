import React, {useState , useEffect} from 'react';
import styles from './Picker.module.css'
import {NativeSelect, FormControl} from '@material-ui/core'
import {fetchStates} from '../../api'


const Picker = ( {handleStateChoice} ) => {
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
                <NativeSelect defaultValue = "" onChange = {(e) => handleStateChoice(e.target.value)}>
                    <option value = "tn">tn</option>
                    {stateChoices.map((state, i) => <option key={i} value={state}>{state}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default Picker;