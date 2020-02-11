import React from 'react';
import styles from './Form.module.css';
import useSelect from '../hooks/useSelect';

const Form = () => {
    //use custom hook useSelect
    const [category, SelectNews] = useSelect();


    return (
        <div className={`row ${styles.buscador}`}>
            <div className="col s12 m8 offset-m2">
                <form>
                    <h4 className={styles.heading}>Find News for category</h4>
                    <SelectNews/>
                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`btn-large amber darken-2 ${styles.btn_block}`}
                            value="Search"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;