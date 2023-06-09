import { useState } from "react";

function Form() {
    const [name, setName] = useState("");

    const submitMessage = () => {
        const targetElement = document.querySelector(".targetElement");
        const submitResult = document.createElement('p');
        submitResult.innerHTML = '<span>Hooray!</span>';
        targetElement.appendChild(submitResult);
        //resolve the issue with repeated submit message after each submit;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setName(""); //to clear out the input after submission
        console.log("Form submitted");
        submitMessage();
    }

    return (
        <div className="Form">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="fieldset">
                    <label htmlFor="name">
                        Name:
                    </label>
                    <input 
                    id="name"
                    type="text"
                    placeholder="Enter your name here"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    </div>
                    <button disabled={!name} type="submit">
                        Submit
                    </button>
                    <div className="targetElement"></div>
                </fieldset>
            </form>
        </div>
    );
}

export default Form;