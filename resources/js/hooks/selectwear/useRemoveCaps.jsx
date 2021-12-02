import axios from "axios";
import { useHistory } from "react-router";

export const useRemoveCaps = () => {
    const history = useHistory();

    const RemoveCaps = (props) => {

        const id = props.id;
        // const gender = props.gender;

        axios.get("/api/removecaps", {
            params: {
                id: id,
                // gender: gender,
              }
        }).then((res) => {
            history.go(0);
          }).catch(() => {
          }).finally(() => {
          });
    }

    return {RemoveCaps}
}