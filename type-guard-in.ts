{
    //
    // in Guard
    type NormalUser = {
        name: string;
    }

    type AdminUser = {
        name: string;
        role: "admin";
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if('role' in user){
            console.log("Admin");
            
        }
    }

    //
}