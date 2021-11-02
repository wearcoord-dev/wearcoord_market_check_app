import axios from "axios";
import { useHistory } from "react-router";

export const useRegisterBDInner = () => {

    const history = useHistory();

    const RegisterBDInner = async(props) => {
        const url = props.target.form[1].value;
        const id = props.target.form[2].value;

        const header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            }
        }

        const setData = {
            url: url,
            id: id,
        }

        const setUrl = '/api/bestdresser/registerBDInner';

        await axios.post(setUrl, setData, header).then((res) => {
            history.push("/main/bestdresser/main/create");
        }).catch(() => {
        }).finally(() => {
        });
    }

    return {RegisterBDInner}
}