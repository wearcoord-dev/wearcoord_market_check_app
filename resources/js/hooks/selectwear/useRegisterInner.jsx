import axios from "axios";
import { useHistory } from "react-router";

export const useRegisterInner = () => {
    const history = useHistory();


    const RegisterInner = (props) => {
        console.log('OK');
        console.log(props);
        console.log(props.target.form[1].value);
        console.log(props.target.form[2].value);
        const url = props.target.form[1].value;
        const id = props.target.form[2].value;
        // console.log(userid.id);

        axios.get("/api/registerinner", {
            params: {
                url: url,
                id: id,
              }
        }).then((res) => {
            console.log(res);
            history.push("/main/mycoord");
          }).catch(() => {
          }).finally(() => {
          });
    }

    return {RegisterInner}
}