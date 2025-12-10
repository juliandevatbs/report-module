function getCurrentDateTime() {

    const now = new Date();

    const month = String(now.getMonth() + 1).padStart(2, '0');  
    const day = String(now.getDate()).padStart(2, '0'); 
    const year = String(now.getFullYear() + 1).slice(-2);

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    return `${month}/${day}/${year} ${hours}:${minutes}`;

}


export default getCurrentDateTime;