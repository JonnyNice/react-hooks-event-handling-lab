// Code EyesOnMe Component Here

function EyesOnMe () {
    function focusClick(event) {
        console.log('Good!');
    }
    function blurClick() {
        console.log('Hey! Eyes on me!');
    }
    return (
        <button onFocus={focusClick} onBlur={blurClick}>'Eyes on me'</button>
    );
}

export default EyesOnMe;