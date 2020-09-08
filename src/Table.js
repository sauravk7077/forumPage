import React from "react";

class Table extends React.Component{
    constructor() {
        super();
        this.state = {
            data: {}
        }
    }

    async componentDidMount() {
        try{
            const res = await fetch('https://fcc-forum-proxy.freecodecamp.repl.co/latest');
            const data = await res.json();
            
            this.setState({data: data});
        }catch(error){

        }
    }

    render() {
        let data;
        if(Object.keys(this.state.data).length>0){
            data = this.state.data.topic_list.topics.map((e,i)=>(
                <tr key={i}>
                    <td>{i}</td>
                    <td>{e.title}</td>
                </tr>
            ));
        }
        
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Topic</th>
                            <th>Replies</th>
                            <th>Views</th>
                            <th>Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;