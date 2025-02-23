import { getUserData } from "../../models/LogReg/Login";



export const handleLogin = async (email, password, dispatch, change, navigate) => {
    console.log(email,password);
    
    const user = await getUserData(email);

    if (!user) {
        alert("Please Do Sign Up!");
        return;
    }

    if (!localStorage.getItem("Store")) {
        localStorage.setItem("Store", '{}');
    }

    const storeData = JSON.parse(localStorage.getItem("Store"));

    alert('Login Successful');
    storeData['token'] = user.token;
    storeData['check'] = true;
    dispatch(change());
    localStorage.setItem("Store", JSON.stringify(storeData));

    navigate('../');
};

export const guestLogin = (loginFunction) => {
    loginFunction('test@gmail.com', 'Test@123');
};
