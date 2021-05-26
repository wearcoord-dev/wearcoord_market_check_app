export const useRegisterWear = () => {

    const RegisterWear = (props) => {
        console.log('OK');
        console.log(props);

        axios.post("/api/registerwear", {
            params: {

              }
        }).then((res) => {

            setUserProfiles(data);
          }).catch(() => {
            setError(true);
          }).finally(() => {
            setLoading(false);
          });
    }

    return {RegisterWear}
}