import { redirect  } from "react-router";

export default async function authMiddleware({context}, next){

    console.log("context:", context);

    // const isAdminUser = false;
    const isAdminUser = true;

    if (!isAdminUser){
        throw redirect("/login");
    }

};







