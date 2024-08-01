
function Button(){
    const styles={
        
            backgroundColor:" rgb(70, 182, 220)",
            color:"white",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
            borderRadius: "8px"
       
    }
    const handleCLick =()=> console.log('Hello Prabesh ');
return(<button style={styles} onClick={handleCLick}>Click Me!</button>);
}
export default Button