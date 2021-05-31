import axios from "axios";
import { useHistory } from "react-router";

export const useRemoveInner = () => {
    const history = useHistory();

    const RemoveInner = (props) => {
        // console.log('OK');
        // console.log(props.id);
        // console.log(props.gender);

        const id = props.id;
        const gender = props.gender;

        axios.get("/api/removeinner", {
            params: {
                id: id,
                gender: gender,
              }
        }).then((res) => {
            console.log(res);
            history.go(0);
          }).catch(() => {
          }).finally(() => {
          });
    }

    return {RemoveInner}
}