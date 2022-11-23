// Code Keypad Component Here

function Keypad () {
    function handleChange(event){
        console.log("Entering password...");
    }
    return (
        <div>
            <form onChange={handleChange}>
                <input type="password" />
            </form>
        </div>
    )
}

export default Keypad;