function Random(){
    let number = Math.random() * 100;
    let fullName = ()=>{
        return "Jai Shree Ram";
    }
    return <h2 style={{'backgroundColor': "yellow"}}>Welcome to the world of Lord : {fullName()} , Random number is : {Math.round(number)}</h2>
}

export default Random;