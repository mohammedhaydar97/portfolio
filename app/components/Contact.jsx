import React from 'react';

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "aa51542a-8cf1-4aac-9266-d9e438e61a09");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%,auto]'>
            <h4 className='text-center mb-2 text-lg font-0vo'>
                Connect with me
            </h4>
    
            <p className='text-center max-w-2x1 mx-auto mt-5 mb-12 font-0vo'>
                Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
            </p>
            <form onSubmit={onSubmit} className='max-w-2x1 mx-auto'> {/* Attach the onSubmit function here */}
                <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                    <input
                        type="text"
                        placeholder='Enter your name'
                        required
                        name="name"
                        className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
                    />
                    <input
                        type="email"
                        placeholder='Enter your email'
                        required
                        name="email"
                        className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
                    />
                </div>
                <textarea
                    rows='6'
                    placeholder='Enter your message'
                    required
                    name="message"
                    className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6'
                ></textarea>

                <button
                    type='submit'
                    className='py[3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'
                >
                    Submit now
                </button>
            </form>
            {result && <p className='text-center mt-4'>{result}</p>} {/* Display the result message */}
        </div>
    );
}

export default Contact;