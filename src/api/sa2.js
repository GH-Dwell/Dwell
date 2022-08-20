import axios from 'axios'; 

const dbUrl = "http://127.0.0.1:5000"; 

const Sa2API = {
    getStatsByLoc: (loc = 'Sydney') => {
        var formData = new FormData(); 
        formData.append('location', loc); 
        axios.post(dbUrl + '/', formData
        ).then((res) => {
            console.log("Response: ", res.data); 
        })
        .catch((err) => {
            console.error(err); 
        }); 
    }, 
    getGeoms: () => {}, 

}; 

export default Sa2API; 