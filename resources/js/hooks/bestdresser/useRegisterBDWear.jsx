import axios from "axios";
import { useHistory } from "react-router";

export const useRegisterBDWear = () => {
    const history = useHistory();

    const RegisterWear = async(props) => {
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
        console.log(props)

        const header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            }
        }

        const setData = {
            caps: caps,
            tops: tops,
            pants: pants,
            shoes: shoes,
            userid: props.userid,
        }
        const url = '/api/bestdresser/registerBDWear';

        await axios.post(url, setData, header).then((res) => {
            console.log(res);
            history.push("/main/bestdresser/main/create");
        }).catch(() => {
        }).finally(() => {
        });
    }


    // const RegisterWear = (props) => {
    //     // console.log('OKだよ');
    //     // console.log(props);
    //     // console.log(props.tops);
    //     let caps = '';
    //     let tops = '';
    //     let pants = '';
    //     let shoes = '';
    //     if(props.caps){
    //         caps = props.caps.id;
    //     }else{
    //         caps = null;
    //     }
    //     if(props.tops){
    //         tops = props.tops.id;
    //     }else{
    //         tops = null;
    //     }
    //     if(props.pants){
    //         pants = props.pants.id;
    //     }else{
    //         pants = null;
    //     }
    //     if(props.shoes){
    //         shoes = props.shoes.id;
    //     }else{
    //         shoes = null;
    //     }

    //     const userid = props.userid.id;

    //     axios.post("/api/registerBDWear", {
    //         params: {
    //             caps: caps,
    //             tops: tops,
    //             pants: pants,
    //             shoes: shoes,
    //             userid: userid,
    //           }
    //     }).then((res) => {
    //         console.log(res);
    //         history.push("/main/bestdresser/main/create");
    //       }).catch(() => {
    //       }).finally(() => {
    //       });
    // }

    return {RegisterWear}
}