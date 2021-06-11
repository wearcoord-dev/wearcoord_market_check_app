import axios from "axios";
import { useHistory } from "react-router";

export const useRemoveCaps = () => {
    const history = useHistory();

    const RemoveCaps = (props) => {
        // console.log('OK');
        // console.log(props.id);
        // console.log(props.gender);

        const id = props.id;
        // const gender = props.gender;

        axios.get("/api/removecaps", {
            params: {
                id: id,
                // gender: gender,
              }
        }).then((res) => {
            console.log(res);
            history.go(0);
          }).catch(() => {
          }).finally(() => {
          });
    }

    return {RemoveCaps}
}