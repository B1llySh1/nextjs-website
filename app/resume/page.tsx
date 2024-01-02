
export default function Resume() {
    return (
        <div className="justify-center"
            style={{height: "100vh"}}>
            <h1>My Resume</h1>
            <iframe 
                className='m-3'
                src="resume_billy.pdf"
                width="100%"
                height="100%"
            />
        </div>
    );
};