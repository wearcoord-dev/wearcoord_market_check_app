import axios from "axios";
import { useHistory } from "react-router";

export const useRemoveInner = () => {
    const history = useHistory();

    const RemoveInner = (props) => {
        console.log('OK');
        console.log(props.id);

        const id = props.id;

        axios.get("/api/removeinner", {
            params: {
                id: id,
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