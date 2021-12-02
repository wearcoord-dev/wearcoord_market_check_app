import axios from "axios";
import { useHistory } from "react-router";

export const useRemoveInner = () => {
    const history = useHistory();

    const RemoveInner = (props) => {

        const id = props.id;
        const gender = props.gender;

        axios.get("/api/removeinner", {
            params: {
                id: id,
                gender: gender,
              }
        }).then((res) => {
            history.go(0);
          }).catch(() => {
          }).finally(() => {
          });
    }

    return {RemoveInner}
}