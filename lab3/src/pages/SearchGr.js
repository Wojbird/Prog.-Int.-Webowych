import React from 'react';

class SearchGr extends React.Component {

    constructor(props) {
        super(props);
        this.state = {query: ""};
    }

    handleSearch = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    handleChange = (event) => {
        this.setState({
            change: event.target.value
        })
    }

    render() {
        let groupListHTML;
        if(this.state.change==="2"){
            groupListHTML = this.props.groupList
                .filter((it)=> it[1].includes(this.state.query))
                .map((it, i) => {
                    return (
                        <div className="announcement">
                            <a key={i}>{it[0]}</a>
                            <br/>
                            <a key={i}>Tags: {it[1]}; Courses: {it[2]};</a>
                            <br/>
                            <a key={i}>Members: {it[3]} {it[5]} {it[7]} {it[9]} {it[11]};</a>
                            <br/>
                            <p key={i}>{it[13]}</p>
                        </div>
                    )
                });
        }
        else if(this.state.change==="3"){
            groupListHTML = this.props.groupList
                .filter((it)=> it[2].includes(this.state.query))
                .map((it, i) => {
                    return (
                        <div className="announcement">
                            <a key={i}>{it[0]}</a>
                            <br/>
                            <a key={i}>Tags: {it[1]}; Courses: {it[2]};</a>
                            <br/>
                            <a key={i}>Members: {it[3]} {it[5]} {it[7]} {it[9]} {it[11]};</a>
                            <br/>
                            <p key={i}>{it[13]}</p>
                        </div>
                    )
                });
        }
        else{
            groupListHTML = this.props.groupList
                .filter((it)=> it[13].includes(this.state.query))
                .map((it, i) => {
                    return (
                        <div className="announcement" >
                            <a key={i}>{it[0]}</a>
                            <br/>
                            <a key={i}>Tags: {it[1]}; Courses: {it[2]};</a>
                            <br/>
                            <a key={i}>Members: {it[3]} {it[5]} {it[7]} {it[9]} {it[11]};</a>
                            <br/>
                            <p key={i}>{it[13]}</p>
                        </div>
                    )
                });
        }
        return (
            <div class="main">
                <input id="dscr1" type="text" value={this.state.query} onChange={this.handleSearch} placeholder="Search"/>
                <select id="sel" onChange={this.handleChange.bind(this)}>
                    <option value="1">description</option>
                    <option value="2">tags</option>
                    <option value="3">courses</option>
                </select>
                {groupListHTML}
            </div>
        )
    }
}

export default SearchGr;