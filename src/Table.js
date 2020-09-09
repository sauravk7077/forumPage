import React from "react";
import moment from "moment";

const FCC = 'https://forum.freecodecamp.org/';

class Table extends React.Component{
    constructor() {
        super();
        this.state = {
            data: {}
        }
        moment.updateLocale('en', {
            relativeTime : {
                future: "%s",
                past:   "%s",
                s  : '%d s',
                ss : '%d s',
                m:  "%d min",
                mm: "%d min",
                h:  "%d hour",
                hh: "%d hours",
                d:  "%d day",
                dd: "%d days",
                w:  "%d week",
                ww: "%d weeks",
                M:  "%d month",
                MM: "%d months",
                y:  "%d year",
                yy: "%d years"
            }
        });
    }

    async componentDidMount() {
        try{
            const res = await fetch('https://fcc-forum-proxy.freecodecamp.repl.co/latest');
            const data = await res.json();
            
            this.setState({data: data});
        }catch(error){

        }
    }

    getIconUrl = id=> {
        const users = this.state.data.users;
        for(let x in users){
            if(users[x].id == id){
                let username = users[x]['username']
                let url = users[x]['avatar_template'];
                url = url.replace(/{size}/i, '135');
                if(!/^https?:\/\/|^\/\//i.test(url)){
                    url = FCC+url;
                }
                return {url, username};
            }
        }
    }

    render() {
        let data;
        if(Object.keys(this.state.data).length>0){
            data = this.state.data.topic_list.topics.map((e,i)=>{
                let imgs = [];
                for(let x in e.posters){
                    const {url, username} = this.getIconUrl(e.posters[x].user_id);
                    imgs.push(<a href={FCC+"u/"+username} key={Math.random()}><img src={url}/></a>);
                }
                return (
                <div className="row body" key={i}>
                    <div>{i+1}</div>
                    <div className="topic"><a href={FCC+"/t/" + e.slug} >{e.title}</a></div>
                    <div>
                        {imgs}
                    </div>
                    <div>{e.views}</div>
                    <div>{moment(e.bumped_at).fromNow()}</div>
                </div>
            )});
        }
        
        return(
            <div className="table">
                <div className="row top">
                    <div className="head">#</div>
                    <div className="head">Topic</div>
                    <div className="head">Replies</div>
                    <div className="head">Views</div>
                    <div className="head">Activity</div>
                </div>
                {data}
            </div>
        )
    }
}

export default Table;