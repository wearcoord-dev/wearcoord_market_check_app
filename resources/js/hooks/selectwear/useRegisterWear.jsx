import axios from "axios";
import { useHistory } from "react-router";

export const useRegisterWear = () => {
    const history = useHistory();


    const RegisterWear = (props) => {
        // console.log('OKだよ');
        // console.log(props);
        // console.log(props.tops);
        let caps = '';
        let tops = '';
        let pants = '';
        let shoes = '';
        if(props.caps){
            caps = props.caps.id;
        }else{
            caps = null;
        }
        if(props.tops){
            tops = props.tops.id;
        }else{
            tops = null;
        }
        if(props.pants){
            pants = props.pants.id;
        }else{
            pants = null;
        }
        if(props.shoes){
            shoes = props.shoes.id;
        }else{
            shoes = null;
        }

        const userid = props.userid.id;

        axios.get("/api/registerwear", {
            params: {
                caps: caps,
                tops: tops,
                pants: pants,
                shoes: shoes,
                userid: userid,
              }
        }).then((res) => {
            console.log(res);
            history.push("/main/mycoord");
          }).catch(() => {
          }).finally(() => {
          });
    }

    return {RegisterWear}
}