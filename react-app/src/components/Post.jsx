import Message from "./Message";


function generate(data, show){
    // const [setshowReplys, setSetshowReplys] = useState(false);
    let message = '<Message/>' + '<div>';

    for(let reply of data.replys){
        message += generate(reply);
    }

    message+= '</div>';

    return message;
}



function Post() {
    const data = {
        content: 'Temporary messaeg...',
        replys: [
            {
                content: 'replay 1',
                replys: [],
            },
            {
                content: 'replay 1',
                replys: [],
            },
            {
                content: 'replay 1',
                replys: [],
            },
        ]
    }


    // console.log(generate(data));

    return (
        <>
        <div className="max-w-[1000px] bg-gray-950 mb-10">
            <Message message={{content: data.content}} >
                <Message message={{content: 'replay 1'}} >
                    <Message message={{content: 'replay 1'}} ></Message>
                </Message>
                <Message message={{content: 'replay 2'}} />
                <Message message={{content: 'replay 2'}} >
                    <Message message={{content: 'replay 2'}} />
                </Message>
            </Message>

            <div className="ml-10">
            </div>
        </div>

        </>

    );
}

export default Post;