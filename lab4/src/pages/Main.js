import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Main = (props) => {
    const { setToDoList, toDosList } = props;

    const [newName, setNewName] = useState();
    const [newEmail, setNewEmail] = useState();
    const [newTags, setNewTags] = useState();
    const [newCourses, setNewCourses] = useState();
    const [newDescription, setNewDescription] = useState();

    const [data, setData] = useState();

    const handleNewName = (event) => {
        setNewName(event.target.value);
    };

    const handleNewEmail = (event) => {
        setNewEmail(event.target.value);
    };

    const handleNewTags = (event) => {
        setNewTags(event.target.value);
    };

    const handleNewCourses = (event) => {
        setNewCourses(event.target.value);
    };

    const handleNewDescription = (event) => {
        setNewDescription(event.target.value);
    };

    const getApiData = async () => {
        fetch('./data.json')
            .then(response => {
                return response.json();
            })
            .then(newdata => {
                appandData(newdata);
            })
            .catch(err => {
                console.log('error: ' + err);
            });
    }

    const appandData = (newdata) => {
        for (let i = 0; i < newdata.length; i++){
            setNewName(newdata[i][0]);
            setNewEmail(newdata[i][1]);
            setNewTags(newdata[i][2]);
            setNewCourses(newdata[i][3]);
            setNewDescription(newdata[i][4]);
            setToDoList(toDosList.concat([[newName, newEmail, newTags, newCourses, newDescription]]));
        }
    }

    const handleAddNewItem = () => {
        if(newName!==""&&newEmail!==""&&newTags!==""&&newCourses!==""&&newDescription!==""){
            setToDoList(toDosList.concat([[newName, newEmail, newTags, newCourses, newDescription]]));
        }
        console.log(toDosList)
        setNewName("");
        setNewEmail("");
        setNewDescription("");
        setNewTags("");
        setNewCourses("");
    };

    const toDosListHTML = toDosList.map((it, i) => {
        return (
            <div class="announcement">
                <a key={i}>{it[0]}</a>
                <br/>
                <a key={i}>Tags: {it[2]}; Courses: {it[3]};</a>
                <br/>
                <p key={i}>{it[4]}</p>
            </div>
        )
    });

    useEffect(() => {
        getApiData();
    }, []);

    return (
        <div class="main">
            <input id="dscr1" type="text" value={newName} onChange={handleNewName} placeholder="Name"/>
            <input id="dscr1" type="text" value={newEmail} onChange={handleNewEmail} placeholder="E-mail"/>
            <br/>
            <input id="dscr1" type="text" value={newTags} onChange={handleNewTags} placeholder="[Tags]"/>
            <input id="dscr1" type="text" value={newCourses} onChange={handleNewCourses} placeholder="Courses"/>
            <br/>
            <input id="dscr2" type="text" value={newDescription} onChange={handleNewDescription} placeholder="Description..." />
            <input id="btn1" type="button" value="Add announcement" onClick={handleAddNewItem} />
            {toDosListHTML}
        </div>
    );
};

export default Main;