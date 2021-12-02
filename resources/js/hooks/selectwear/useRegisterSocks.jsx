import axios from "axios";
import { useHistory } from "react-router";

export const useRegisterSocks = () => {
    const history = useHistory();


    const RegisterSocks = (props) => {
        const url = props.target.form[1].value;
        const id = props.target.form[2].value;

        axios.get("/api/registerinner", {
            params: {
                url: url,
                id: id,
              }
        }).then((res) => {
            history.push("/main/mycoord");
          }).catch(() => {
          }).finally(() => {
          });
    }

    return {RegisterSocks}
}