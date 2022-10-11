exports.greeter = (name) => {
    let specialCharater = '~!@#$%^&*()_+`-={}|[]\\:";\'<>?,./';
    if (name.includes(" ") || name.includes(specialCharater)) {
        return `Please remove all spaces and special characters from your name`;
    }
    if(name === "Bolu" || name==="Odun") return `Welcome back, ${name}`;
    return `It is nice to meet you, ${name}`;
}


